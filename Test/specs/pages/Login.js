module.exports["default"] = class Base {
  constructor(selector) {
    this.selector = selector;
  }

  getHtml() {
    return browser.getHTML("html");
  }

  open(path) {
    browser.url(path);
  }

  click(selector, index = 0) {
    browser.waitForExist(selector);
    browser.waitForEnabled(selector);
    let element;
    if (index !== 0) {
      element = browser.elements(selector).value[index];
    } else {
      element = browser.element(selector);
    }
    element.waitForExist();
    element.waitForEnabled();
    element.click();
  }

  setValue(selector, value, index = 0) {
    browser.waitForExist(selector, 100000);
    browser.waitForEnabled(selector, 100000);
    const element = browser.elements(selector).value[index];
    element.waitForExist();
    element.waitForEnabled();
    element.setValue(value);
    return this;
  }

  getValue(selector, index = 0) {
    browser.waitForExist(selector, 100000);
    return browser.elements(selector).value[index].getText();
  }
};
