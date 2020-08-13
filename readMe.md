# apitesting-cypress

## Technology

- Javascript used for coding language
- Cypress used for testing framework
- Chai used for assertions
- Allure used for test results reporter
- Circle CI used for CI integration


### Github URL
- `https://github.com/muhammednalci/apitesting-cypress`
### CircleCI URL
- `https://app.circleci.com/pipelines/github/muhammednalci/apitesting-cypress`



## Notes

- For collected emails all emails at once and every email tested separately with creating a dynamically generated test cases
- Invalid scenarios handled in separate files 
- 2 screenshots added to repo in order to show integrations are working successfully
- After having allure report in html format, you need to run the browser with disabled security to see graphs

## To run project

1. Clone the repo from `https://github.com/muhammednalci/apitesting-cypress`
2. Run `yarn` or `npm install` to download dependencies
3. Run `yarn cy:run` to run tests (report will be created after run at path `cypress/testResults` as jsons)
4. Run `yarn cy:open` to check and run tests with cypress UI
5. Run `yarn allure:report` to generate the allure report in html format at path `cypress/testReports`

