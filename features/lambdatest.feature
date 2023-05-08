Feature: LambdaTest Homepage Title Check

  Scenario: Check the title of LambdaTest homepage
    Given I visit the LambdaTest homepage
    Then The page title should be "Next-Generation Mobile Apps and Cross Browser Testing Cloud | LambdaTest"
    Then Capture the screenshot for Visual Regression testing with "your-screenshot-name"
