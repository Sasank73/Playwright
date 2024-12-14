import { Locator, expect } from "@playwright/test";
import { Page } from "playwright";

export default class LoginPage {
  page: Page;
  usernameInputSelector: Locator;
  passwordInputSelector: Locator;
  loginButtonSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputSelector = this.page.locator('input[name="username"]');
    this.passwordInputSelector = this.page.locator('input[name="password"]');
    this.loginButtonSelector = this.page.locator('button[type="submit"]');
  }

  async navigateToLoginPage(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.usernameInputSelector.fill(username);
    await this.passwordInputSelector.fill(password);
    expect(this.loginButtonSelector).toBeVisible();
    await this.loginButtonSelector.click();
  }
}
