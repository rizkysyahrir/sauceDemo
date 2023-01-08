$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Payment.feature");
formatter.feature({
  "line": 2,
  "name": "Payment to finish",
  "description": "As a user i want to finish Payment in Check Out Page",
  "id": "payment-to-finish",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Payment"
    }
  ]
});
formatter.before({
  "duration": 6986591600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Checkout product",
  "description": "",
  "id": "payment-to-finish;checkout-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User select \"Price (low to high)\" to Sorting Product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User checkout \"Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)\" as products to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User already on checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify that \"Sauce Labs Onesie,Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove \"Test.allTheThings() T-Shirt (Red)\" as products in a list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User already on check out overview page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User input \"febrian\" as firstname, input \"syahrir\" as lastname, and input \"1234\" as postcode",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User already on checkout summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User verify item total, tax, total on checkout summary page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User want to finish CheckOut and verify as products in cart",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User has already on Complete the checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDislpay()"
});
formatter.result({
  "duration": 5320571700,
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
  "duration": 653261500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 82000300,
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
  "duration": 201306500,
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
  "duration": 10288511100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutPage()"
});
formatter.result({
  "duration": 48156900,
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
  "duration": 108423300,
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
  "duration": 5101112600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clikcBtnCheckOut()"
});
formatter.result({
  "duration": 97500100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutInfoPage()"
});
formatter.result({
  "duration": 46643600,
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
  "duration": 14567045200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutSummaryPage()"
});
formatter.result({
  "duration": 44837900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyDetailTotalCheckOutSummaryPage()"
});
formatter.result({
  "duration": 92769800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.finishCheckout()"
});
formatter.result({
  "duration": 5088676500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCoCompletePage()"
});
formatter.result({
  "duration": 41999700,
  "status": "passed"
});
formatter.after({
  "duration": 5019377100,
  "status": "passed"
});
});