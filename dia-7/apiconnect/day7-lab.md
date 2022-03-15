# Lab: Creating an API with API Connect on IBM Cloud

## Prerequisites

- Access to our provided IBM Cloud account plus the shared API Connect instance.
- You have created your own API Catalog named student-**studentId**
- The endpoint you use in your API Connect is accessible.

## Supporting Information

For this lab you will follow more detailed instructions that can be found here:
https://cloudnative101.dev/electives/api-connect/activities/creatingAPIs

Please note the following **changes** though:

- As you are working in draft mode, you will see all APIs and Products within the instance. Thats why you have to use your initials also for the draft Product and APIs in the lab. But please only for **Product title (Development-< studentId > )**, **Product name (Test-< studentId >)**, **API title (nodejs-test-< studentId >)** and **API name (nodejs-test-< studentId >)** .

- Please use the following URLs as endpoints for your services, do not forget the **http://** .
  - get /students -> http://169.57.188.19:30878/students
  - get /testers -> http://169.57.188.19:30878/testers
