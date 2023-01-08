package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.masterthought.cucumber.json.Hook;
import org.example.pageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class LoginSteps {//menampung final method
    private WebDriver webDriver;

    public LoginSteps(){
        super();
        this.webDriver = Hooks.webDriver;

    }

    @Given("User open website sauce demo")
    public void verifyDislpay() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.isDisplayed();
        Thread.sleep(5000);
    }

    @When("User input \"(.*)\" as userName and input \"(.*)\" as password")
    public void inputCredential(String userName, String password){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();
    }

    @Then("User can see error \"(.*)\" on login page")
    public void errorText(String errorText) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertEquals(errorText, loginPage.getErrorText());
        Thread.sleep(5000);
    }

}
