package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.CheckOutPage;
import org.example.pageObject.InventoryPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

//    @And("User pick item Sauce Labs Backpack")
//    public void clickItemBasket1() throws InterruptedException {
//        InventoryPage inventoryPage = new InventoryPage(webDriver);
//        inventoryPage.clickBasket1();
//        Thread.sleep(5000);
//    }

    @And("User select \"(.*)\" to Sorting Product")
    public void filterProduct(String filter){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.filterProductBy(filter);
    }

    @And("User checkout \"(.*)\" as products to cart")
    public void addProductToCart(String products) throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.addToCart(products);
        inventoryPage.clickCart();
        Thread.sleep(5000);
    }

    @Then("User already on landing page")
    public void verifyLandingPage(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isDisplayLandingPage());
    }
    @And("User already on checkout page")
    public void verifyCheckOutPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCheckOutPage());
    }

    @And("User verify that \"(.*)\" as products in a list")
    public void verifyListOfProduct(String products) {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayProduct(products));
    }

    @And("User remove \"(.*)\" as products in a list")
    public void removeListOfProduct(String products) throws InterruptedException {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.removeToCartContainer(products);
        Thread.sleep(5000);
    }

    @And("User click checkout")
    public void clikcBtnCheckOut(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.clickCheckOut();
    }

    @Then("User already on check out overview page")
    public void verifyCheckOutInfoPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCoOverviewPage());
    }


    @And("User input \"(.*)\" as firstname, input \"(.*)\" as lastname, and input \"(.*)\" as postcode")
    public void inputInformation(String fn, String ln, String pc) throws InterruptedException {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.setFirstName(fn);
        Thread.sleep(2000);
        checkOutPage.setLastName(ln);
        Thread.sleep(2000);
        checkOutPage.setPostalCode(pc);
        Thread.sleep(5000);
        checkOutPage.clickContinue();
        Thread.sleep(5000);
    }

    @Then("User already on checkout summary page")
    public void verifyCheckOutSummaryPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayCoSumPage());
    }

    @And("User verify item total, tax, total on checkout summary page")
    public void verifyDetailTotalCheckOutSummaryPage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayTotalCoSumPage());
    }

    @Then("User want to finish CheckOut and verify as products in cart")
    public void finishCheckout() throws InterruptedException {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.clickFinish();
        Thread.sleep(5000);
    }

    @Then("User has already on Complete the checkout")
    public void verifyCoCompletePage(){
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        Assert.assertTrue(checkOutPage.isDisplayThanks());
    }
}
