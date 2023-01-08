@Payment
  Feature: Payment to finish
    As a user i want to finish Payment in Check Out Page

    Scenario: Checkout product
      Given User open website sauce demo
      When User input "standard_user" as userName and input "secret_sauce" as password
      Then User already on landing page
      And User select "Price (low to high)" to Sorting Product
      And User checkout "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)" as products to cart
      Then User already on checkout page
      And User verify that "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)" as products in a list
      And User remove "Test.allTheThings() T-Shirt (Red)" as products in a list
      And User click checkout
      Then User already on check out overview page
      And User input "febrian" as firstname, input "syahrir" as lastname, and input "1234" as postcode
      Then User already on checkout summary page
      And User verify item total, tax, total on checkout summary page
      Then User want to finish CheckOut and verify as products in cart
      Then User has already on Complete the checkout