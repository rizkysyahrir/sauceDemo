package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.nio.file.WatchEvent;

public class CheckOutPage {

    public static WebDriver driver;

    public CheckOutPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[.='Your Cart']")
    private WebElement displayCheckOutPage;

    @FindBy(xpath = "//span[.='Checkout: Your Information']")
    private WebElement displayCoOverviewPage;

    @FindBy(xpath = "//span[.='Checkout: Overview']")
    private WebElement displayCoSumPage;

    @FindBy(xpath = "//span[.='Checkout: Complete!']")
    private WebElement displayCheckOutCompletePage;

    @FindBy(id = "cart_contents_container")
    private  WebElement cartContentsContainer;

    @FindBy(id = "checkout")
    private WebElement btnCheckOut;

    @FindBy(id = "first-name")
    private WebElement firstName;

    @FindBy(id = "last-name")
    private WebElement lastName;

    @FindBy(id = "postal-code")
    private WebElement postalCode;

    @FindBy(xpath = "//div[contains(text(),'Item total:')]")
    private WebElement  displayItemTotal;

    @FindBy(xpath = "//div[contains(text(),'Tax:')]")
    private WebElement  displayTax;

    @FindBy(xpath = "//div[contains(text(),'Total:')]")
    private WebElement  displayTotal;

//    @FindBy (xpath = "//div[@class='summary_total_label']")
//    private WebElement displayPrice;

    @FindBy(xpath = "//h2[@class='complete-header']")
    private WebElement displayThanks;

    @FindBy(id = "continue")
    private WebElement btnContinue;

    @FindBy(id = "finish")
    private WebElement btnFinish;

    public boolean isDisplayCheckOutPage(){
        return displayCheckOutPage.isDisplayed();
    }

    public boolean isDisplayCoOverviewPage(){
        return displayCoOverviewPage.isDisplayed();
    }

    public boolean isDisplayCoSumPage(){
        return displayCoSumPage.isDisplayed();
    }

    public boolean isDisplayTotalCoSumPage(){
        return displayItemTotal.isDisplayed() && displayTax.isDisplayed() && displayTotal.isDisplayed();
    }

    public boolean isDisplayThanks(){
       return displayThanks.isDisplayed();
    }

    public boolean isDisplayProduct(String products) {
        boolean dataReturn = false;
        String[] listOfProduct = products.split(",");
        WebElement product;
        for (String productName:
                listOfProduct) {
            product = cartContentsContainer.findElement(By.xpath("//div[text()='"+ productName +"']"));
            dataReturn = product.isDisplayed();
            if (!dataReturn){
                return false;
            }
        }
        return dataReturn;
    }

    public void removeToCartContainer(String products) {
        String[] listOfProduct = products.split(",");
        WebElement selectedProduct;
        for (String productName:
                listOfProduct) {
            String xPathSelectedProduct = "//button[@id='remove-"+productName.toLowerCase().replace(" ", "-")+"']";
            selectedProduct = cartContentsContainer.findElement(By.xpath(xPathSelectedProduct));
            selectedProduct.click();
        }
    }

    public void clickCheckOut(){
        btnCheckOut.click();
    }

    public void setFirstName(String fname){
        firstName.sendKeys(fname);
    }

    public void setLastName(String lname){
        lastName.sendKeys(lname);
    }

    public void setPostalCode(String pcode){
        postalCode.sendKeys(pcode);
    }

    public void clickContinue(){
        btnContinue.click();
    }

    public void clickFinish(){
        btnFinish.click();
    }
}
