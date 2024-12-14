import test from "utilities/baseTest";
import * as dataUtility from "../utilities/dataUtils";

test.describe("test script", () => {
  const url = process.env.URL as string;
  const username = process.env.USERNAME as string;
  const password = process.env.PASSWORD as string;
  const employeeDetails = dataUtility.employDetails();

  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => {
      window.moveTo(0, 0);
      window.resizeTo(screen.availWidth, screen.availHeight);
    });
  });

  test("Login Test", async ({ loginPage, addemployPage }) => {
    await loginPage.navigateToLoginPage(url);
    await loginPage.login(username, password);
    await addemployPage.clickOnPIMBtn();
    await addemployPage.navigateToAddEmployee();
    await addemployPage.fillEmployeeDetails(
      employeeDetails.firstName,
      employeeDetails.middleName,
      employeeDetails.lastName,
      employeeDetails.employeeId,
      employeeDetails.userName,
      employeeDetails.password
    );
    await addemployPage.saveEmployee();
    await addemployPage.verifySuccessText();
  });
});
