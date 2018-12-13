import re
import unittest
from selenium import webdriver

class Login(unittest.TestCase):
    token = ""
    def setUp(self):
        self.driver = webdriver.Chrome("/usr/local/bin/chromedriver")  # my system couldn't figure out driver place
        # if your is working correct just delete the path in chrome

    def test_login(self):
        browser=self.driver
        browser.get('')

    def get_page_as_string(self, page):


    def tearDown(self):
        print("THE LIST SIZE= : " + str(actualList.__len__()))
        self.driver.close()


if __name__ == "__main__":
unittest.main()