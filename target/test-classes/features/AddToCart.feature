@AddToCart
Feature: Feature Add to Cart with Sort item
  As a user i want to add some items to cart with sort

#  Scenario: Add Product to cart
#    Given User open website sauce demo
#    When User input "standard_user" as userName and input "secret_sauce" as password
#    When User checkout "Sauce Labs Backpack" as products to cart
#    Then User already on checkout page

  Scenario: Filter Sort Product and Add Product To Cart
    Given User open website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    And User select "Price (low to high)" to Sorting Product
    And User checkout "Sauce Labs Backpack" as products to cart
    Then User already on checkout page