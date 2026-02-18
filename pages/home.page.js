export class HomePage {

  constructor(page) {
    this.page = page;

    this.heading = page.getByRole('heading', {
      name: /Master Automation Testing/i
    });

    this.getStartedButton = page.getByRole('button', {
      name: /Get Started/i
    });

    this.blogLink = page.getByRole('Button', { name: 'Blog' });
    this.contactLink = page.getByRole('Button', { name: 'Contact' });
    this.bankLink = page.getByRole('Button', { name: 'Bank' });
    this.practiceLink = page
    .locator('nav')
    .getByRole('link', { name: 'Practice' });

    this.themeToggle = page.getByRole('button', { name: 'Toggle theme' });
  }

  async open() {
    await this.page.goto('https://www.qaplayground.com/', {
      waitUntil: 'domcontentloaded'
    });
  }

  async goToBlog() {
    await this.blogLink.click();
  }

  async goToContact() {
    await this.contactLink.click();
  }

  async goToBank() {
    await this.bankLink.click();
  }

  async goToPractice() {
    await this.practiceLink.click();
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

}
