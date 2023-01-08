$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "Feature Check Out with Filter",
  "description": "",
  "id": "feature-check-out-with-filter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "duration": 9080002301,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#  Scenario: Filter Product and Add Product To Cart"
    },
    {
      "line": 5,
      "value": "#    Given User open website sauce demo"
    },
    {
      "line": 6,
      "value": "#    When User input \"standard_user\" as userName and input \"secret_sauce\" as password"
    },
    {
      "line": 7,
      "value": "#    And User select \"Price (low to high)\" to Sorting Product"
    },
    {
      "line": 8,
      "value": "#    And User pick item Sauce Labs Backpack"
    }
  ],
  "line": 10,
  "name": "Checkout product",
  "description": "",
  "id": "feature-check-out-with-filter;checkout-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User open website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User select \"Price (low to high)\" to Sorting Product",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checkout \"Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)\" as products to cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify that \"Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User remove \"Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click checkout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User input \"febrian\" as firstname, input \"syahrir\" as lastname, and input \"1234\" as postcode",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User want to finish CheckOut as products in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDislpay()"
});
formatter.result({
  "duration": 5512095900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 699974999,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 87983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 13
    }
  ],
  "location": "PurchaseSteps.filterProduct(String)"
});
formatter.result({
  "duration": 236495300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.addProductToCart(String)"
});
formatter.result({
  "duration": 10430966500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)",
      "offset": 18
    }
  ],
  "location": "PurchaseSteps.verifyListOfProduct(String)"
});
formatter.result({
  "duration": 147832500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 13
    }
  ],
  "location": "PurchaseSteps.removeListOfProduct(String)"
});
formatter.result({
  "duration": 5116991800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clikcBtnCheckOut()"
});
formatter.result({
  "duration": 114468301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "febrian",
      "offset": 12
    },
    {
      "val": "syahrir",
      "offset": 42
    },
    {
      "val": "1234",
      "offset": 75
    }
  ],
  "location": "PurchaseSteps.inputInformation(String,String,String)"
});
formatter.result({
  "duration": 14706326600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.finishCheckout()"
});
formatter.result({
  "duration": 5181002700,
  "status": "passed"
});
formatter.after({
  "duration": 5521053300,
  "status": "passed"
});
});