import { Locator, expect } from "@playwright/test";
import { Page } from "playwright";

export default class EmployeePage {
  page: Page;
  addEmployeeLink: Locator;
  addButton: Locator;
  firstNameInput: Locator;
  middleNameInput: Locator;
  lastNameInput: Locator;
  employeeIdInput: Locator;
  usernameInput: Locator;
  passwordInputs: Locator;
  enabledCheckbox: Locator;
  saveButton: Locator;
  pimButton: Locator;
  confirmPassword: Locator;
  toastTitle: Locator;
  toastMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimButton = this.page.locator('//span[text()="PIM"]');
    this.addEmployeeLink = this.page.getByText("Add Employee");
    this.addButton = this.page.locator('button[role="button"][name=""]');
    this.firstNameInput = this.page.locator('input[placeholder="First Name"]');
    this.middleNameInput = this.page.locator(
      'input[placeholder="Middle Name"]'
    );
    this.lastNameInput = this.page.locator('input[placeholder="Last Name"]');
    this.employeeIdInput = this.page.locator(
      "//*[text()='Employee Id']//parent::div//following-sibling::div/input"
    );
    this.usernameInput = this.page.locator(
      "//*[text()='Username']//parent::div//following-sibling::div/input"
    );
    this.passwordInputs = this.page.locator(
      "//*[text()='Password']//parent::div//following-sibling::div/input"
    );
    this.confirmPassword = this.page.locator(
      "//*[text()='Confirm Password']//parent::div//following-sibling::div/input"
    );
    this.enabledCheckbox = this.page.locator(
      ".oxd-switch-input--active.--label-right"
    );
    this.saveButton = this.page.locator('[type="submit"]');
    this.toastTitle = this.page.getByText("Success");
    this.toastMessage = this.page.getByText("Successfully Saved");
  }

  async clickOnPIMBtn() {
    expect(this.pimButton).toBeVisible();
    await this.pimButton.click();
  }

  async navigateToAddEmployee() {
    expect(this.addEmployeeLink).toBeAttached();
    await this.addEmployeeLink.click();
  }

  async fillEmployeeDetails(
    firstName: string,
    middleName: string,
    lastName: string,
    employeeId: string,
    username: string,
    password: string
  ) {
    await this.firstNameInput.click();
    await this.firstNameInput.fill(firstName);
    expect(this.firstNameInput).toHaveValue(firstName);

    await this.middleNameInput.click();
    await this.middleNameInput.fill(middleName);
    expect(this.middleNameInput).toHaveValue(middleName);

    await this.lastNameInput.click();
    await this.lastNameInput.fill(lastName);
    expect(this.lastNameInput).toHaveValue(lastName);

    await this.employeeIdInput.click();
    await this.employeeIdInput.clear();
    await this.employeeIdInput.fill(employeeId);
    expect(this.employeeIdInput).toHaveValue(employeeId);

    await this.enabledCheckbox.click();
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    expect(this.usernameInput).toHaveValue(username);

    await this.passwordInputs.click();
    await this.passwordInputs.fill(password);
    expect(this.passwordInputs).toHaveValue(password);

    await this.confirmPassword.click();
    await this.confirmPassword.fill(password);
    expect(this.confirmPassword).toHaveValue(password);
  }

  async saveEmployee() {
    await this.saveButton.click();
  }

  async verifySuccessText() {
    expect(this.toastTitle).toBeAttached;
    expect(this.toastMessage).toBeAttached;
  }
}
