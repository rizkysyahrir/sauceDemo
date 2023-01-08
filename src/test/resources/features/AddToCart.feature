@CheckOut
Feature: Feature Check Out

  Scenario: Add Product to cart
    Given User open website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    When User checkout "Sauce Labs Backpack" as products to cart
    Then User already on checkout page

  Scenario: Filter Sort Product and Add Product To Cart
    Given User open website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    And User select "Price (low to high)" to Sorting Product
    And User checkout "Sauce Labs Backpack" as products to cart
    Then User already on checkout page