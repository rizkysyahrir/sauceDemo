@Login
  Feature: Login
    As a user i want to login website sauce demo
  
#  Scenario: Normal Login
#    Given User open website sauce demo
#    When User input "standard_user" as userName and input "secret_sauce" as password

    Scenario Outline: Invalid login
      Given User open website sauce demo
      When User input "<username>" as userName and input "<password>" as password
      Then User can see error "<errorMessage>." on login page

      Examples:
        | username | password | errorMessage                                                              |
        | febrian  | 112233   | Epic sadface: Username and password do not match any user in this service |
        | Febrian  |          | Epic sadface: Password is required                                        |
        |          | 234      | Epic sadface: Password is required                                        |

