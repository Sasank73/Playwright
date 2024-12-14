import { test as baseTest } from "@playwright/test";
import LoginPage from "../pageObjects/admin";
import AddemployPage from "../pageObjects/addEmployee";

const test = baseTest.extend<{
  loginPage: LoginPage;
  addemployPage: AddemployPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  addemployPage: async ({ page }, use) => {
    await use(new AddemployPage(page));
  },
});

export default test;
