@CheckOut
Feature: Feature Check Out with Filter

#  Scenario: Filter Product and Add Product To Cart
#    Given User open website sauce demo
#    When User input "standard_user" as userName and input "secret_sauce" as password
#    And User select "Price (low to high)" to Sorting Product
#    And User pick item Sauce Labs Backpack

  Scenario: Checkout product
    Given User open website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    Then User already on landing page
    And User select "Price (low to high)" to Sorting Product
    And User checkout "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)" as products to cart
    And User verify that "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)" as products in a list
    And User remove "Test.allTheThings() T-Shirt (Red)" as products in a list
    And User click checkout
    And User input "febrian" as firstname, input "syahrir" as lastname, and input "1234" as postcode
    Then User want to finish CheckOut as products in cart