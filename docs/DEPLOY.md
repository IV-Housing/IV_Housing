# Instructions for Deployment (to deploy you will need a github account)
* video walkthrough of instructions: https://www.youtube.com/watch?v=jtsq72x04v0
## 1. Fork repo onto your own github account
  * Goto https://github.com/ucsb-cs48-s20/project-s0-t3-iv-housing and click on the fork button in the top right. 
  ![Top of our Github page highlighting fork button](./images/Step1Img1.png)
  * A popup will appear asking you to choose where to fork the repo to. Select your Github account. 
  ![Fork button popup page, highlighting the users account](./images/Step1Img2.png)
  * This will clone the repository to your accounts repositories so you have your own copy of the code. 
## 2. Setup Heroku account and applictaion
  * If you don’t have a Heroku Account yet, please create a Heroku account by logging in at https://heroku.com
    * Click the “Sign up for Free” link. You’ll be asked for:
    * First Name, Last Name
    * Email (we suggest using your @ucsb.edu email, but that’s up to you)
    * Company (you may leave this blank).
    * Preferred Development Language: choose JavaScript
  * NOTE for folks with existing Heroku Accounts: You might need to delete old apps to make space for new ones. There is a limit of five apps on the free tier of Heroku (unless/until you enter a credit card.)
  * login to the Heroku Dashboard https://dashboard.heroku.com
  ![Top of Heroku Dahsboard highlighting new application button](./images/Step2Img1.png)
  * create a new Heroku app called, for example: iv-housing-prod-clone 
  * This application will now be add to your Heroku Dashboad and when you click on it, it will take you to your Heroku application home page. 
  ![Top of Heroku Dahsboard highlighting new applications](./images/Step2Img2.png)
## 3. Setup MongoDB account and add MONGODB_URI to Heroku 
  * Follow the directions here https://ucsb-cs48.github.io/topics/mongodb_cloud_atlas_setup/ to create a mongoDB account and get your MongoDB URI. 
  * After you create the URI make sure to copy it. Go to your Heroku application home page at `https://dashboard.heroku.com/apps/<your heroku applicatin name here>` and click on the "Settings" menu on the top navbar. The second section on this page should be Config Vars. In this section click on the white/purple "Reveal Config Vars" button. Add a new Config Var with KEY set to "MONGODB_URI" (without quotation marks) and paste the URI into Value.
  ![Heroku App settings highlighting Config Vars section and Reveal config vars button](./images/Step3Img5.png)
  * Now go back to the MongoDB page https://cloud.mongodb.com/. From here click on the collections button under your cluster. 
  ![MongoDB webiste highlighting collections button on cluster](./images/Step3Img1.png)
  * Now click on the "Create Database" button. Name the Database "HousingDataBase" and name the collection "Houses". 
  ![MongoDB website highlighting create database button](./images/Step3Img2.png)
  * Click on the Database and then the collection.
  ![MongoDB website highlighting newly created database and collection](./images/Step3Img3.png)
    * You will repeat this step 4 times with the following house information below. Click on "Insert Document" on the right. Change the View on the top of the popup to {} instead of table. Then paste in the house info for one house after the closing bracket on line 4.
    ![MongoDB document editing popup, highlighting view option and showing where to input data](./images/Step3Img4.png)
    * House 1 Info: `,"company":"Playa Life IV","address":"6561 Del Playa Dr. #4","size":{"$numberInt":"7"},"totalPrice":{"$numberInt":"6000"},"pricePerPerson":{"$numberInt":"0"},"website":"https://www.playalifeiv.com/listings/detail/7dda3077-fbb0-4464-870c-bbdac7147243","phone":"(805)603-4777","lat":{"$numberDouble":"34.409286"},"lng":{"$numberDouble":"-119.85692"}`
    * House 2 Info: `,"company":"Wolfe and Associates","address":"6545 Picasso Rd. #2","size":{"$numberInt":"4"},"totalPrice":{"$numberInt":"2800"},"pricePerPerson":"0","website":"https://www.rlwa.com/listings/detail/461184c0-bb41-4c31-ac33-9d5ec142f4f0","phone":"(805)964-6770","lat":{"$numberDouble":"34.414924"},"lng":{"$numberDouble":"-119.85623"}`
    * House 3 Info: `,"company":"KAMAP","address":"6521 Cordoba Rd. #33","size":{"$numberInt":"2"},"totalPrice":{"$numberInt":"1940"},"pricePerPerson":{"$numberInt":"0"},"website":"http://www.kamap.net/boardwalk.html","phone":"(805)685-2627","lat":{"$numberDouble":"34.413804"},"lng":{"$numberDouble":"-119.854406"}`
    * House 4 Info: `,"company":"Meridian Group","address":"820 Camino Corto #4","size":{"$numberInt":"4"},"totalPrice":{"$numberInt":"3050"},"pricePerPerson":"0","website":"https://meridiangrouprem.com/details/?ID=4618","phone":"(805)692-2500","lat":{"$numberDouble":"34.414747"},"lng":{"$numberDouble":"-119.866288"}`
 * Now your database contains 4 IV House listings. 
## 4. Setup Mapbox account and add Map Token to Heroku
  * Go to https://account.mapbox.com/auth/signup/ and signup for a free mapbox account
  * Verify your account through email 
  * On your mapbox account page https://account.mapbox.com/ click on "create a token"
  ![MapBox Home page, highlighting create a token button](./images/Step4Img1.png)
      * You can give the token any name, a good one may be something like "IV Housing Map Token"
      * All of the other settings should be left alone
      * This is not neccesary but for extra security of your token, so people do not steal it use up your free map requests, you can restrict the urls that can request a map with this token. This is at the very bottom of the create token page and you should input the URL that your application will be deployed on (aka the Heroku URL, to find it go to the Home Heroku page for your application and click on the purple "open app" button, this should open a new page with your application and you just need to copy the URL)
     ![MapBox create token page, highlighting URL section](./images/Step4Img2.png)
  * After you create the token it should take you to a page with all your access tokens. You should see your new token underneath a default token. Copy this token by clicking the blue clipboard button next to the token. 
  ![MapBox access tokens page, highlighting clipboard button](./images/Step4Img3.png)
  * Go to your Heroku application home page  at `https://dashboard.heroku.com/apps/<your heroku applicatin name here>` and click on the "Settings" menu on the top navbar. The second section on this page should be Config Vars. In this section click on the white/purple "Reveal Config Vars" button. Add a new Config Var with KEY set to "MAP_TOKEN_PROD" (without quotation marks) and paste the token into Value. 
  ![Heroku App settings highlighting Config Vars section and Reveal config vars button](./images/Step3Img5.png)
  * Now your application will have a grey/default map that looks bland. If you want to change this to the themed map used on our appliation just click this link below and then in the bottom right of the window click copy this style to your account. 
  https://api.mapbox.com/styles/v1/sethvanb/cka744x8c16b31ilhulkr0d26.html?fresh=true&title=copy&access_token=pk.eyJ1Ijoic2V0aHZhbmIiLCJhIjoiY2thNjhpaWowMDVseDJybmx2dGVqc3UxeiJ9.MLbmm_S5HaD7ZleO_qGA2A
  ![MapBox Style Sharing page, highlighting copy style button](./images/Step4Img4.png)
  ## 5. Setup Auth0 account and add AUTH0_DOMAIN, AUTH0_CLIENT_ID, and AUTH0_CLIENT_SECRET to Heroku
  * First, [sign up for an account with Auth0](https://auth0.com/signup).

You will be asked to create a tenant. It doesn't matter what your tenant name is, and it's totally fine to take the default. However, we suggest that you name it: `cs48-s20-githubid` where `githubid` is your githubid, as shown here (using `pconrad` as an example):

![create tenant](./images/Step6Img1.png)

For "Account Type", click "Personal", then "Create Account":

![create personal account](./images/Step6Img2.png)

* Next, register a new application. You do this by navigating to the "Applications" page in the sidebar and clicking the
"Create Application" button.

Give it a name:

- We suggest the name of your repo, prefixed by `cs48-s20`
- Example: `cs48-s20-cgaucho-lab00`

Click to select "Single Page Application" as shown below:

![single page application](./images/Step6Img3.png)

* In the configuration for the application you just created, click on the "Settings" tab. The settings tab is the second from right in the center of the page
as shown here:

![click-settings-tab.png](./images/Step6Img4.png)

Once on the settings tab, you'll need to do two things:

1. At the top of the page, you'll see `Basic Information`
   - Under `Basic Information`, you'll see `Name`, `Domain`, `Client Id` and `Client Secret`.
   - In a moment, you'll copy the three secrets that you see here into your `.env` file. But not yet; first, scroll down until you find `Application URIs`
2. Once you've found `Application URIs`, you are ready to enter the following values:

   | Field                 | Value                                                     |
   | --------------------- | ------------------------------------                      |
   | Application Login URI | (leave this blank)                                        |
   | Allowed Callback URLs | `http://localhost:3000/api/callback,`                     |
   |                       | `<URL that your application will be deployed on>/api/callback,`   |
   | Allowed Logout URLs   | `http://localhost:3000,`                                  |
   |                       | `<URL that your application will be deployed on>,`                |
   

   Make sure to scroll down to the bottom of the page and click
   "Save Changes" at the bottom of the page to save
   your changes.
   
   * Now, after clicking "Save Changes", scroll back to the top
   where you see the `Basic Information`.

   You should see these fields:

   ![secret-values.png](./images/Step6Img5.png)

   At the right hand side of the fields
   `Domain`, `Client Id` and `Client Secret`, there is a box where you can
   click to copy the value. Copy each of these values, and place it
   in the file `.env`, after the three assignment statements, similar
   to the example below:

   ```
   AUTH0_DOMAIN=cs48-s20-pconrad.auth0.com
   AUTH0_CLIENT_ID=7sdg8FSDg7s6dlkjsdHGl35345gfkBCQs8s
   AUTH0_CLIENT_SECRET=6_BAi57vhRr3gETMV1ZYDSMQ-Tupp6uSW38XJj1lJ2d157MQXUpgaQ81d5e7bR6k
   ```

   NOTE: Do NOT put spaces before or after the = in the `.env` file.

   - ok: `AUTH0_CLIENT_ID=7sdg8FSDg7s6dlkjsdHGl35345gfkBCQs8s`
   - NOT ok: `AUTH0_CLIENT_ID = 7sdg8FSDg7s6dlkjsdHGl35345gfkBCQs8s`
   * Now find the `Connections` tab of **your app** (not the `Connections`
   item on the sidebar) and click it:

   ![connections-tab.png](./images/Step6Img6.png)

   Adjust and/or check these settings:

   - Uncheck Username-Password-Authentication.
   - Ensure google-oauth2 is checked (it should be by default).

   ![connections-settings.png](./images/Step6Img7.png)
   
  * Go to your Heroku application home page  at `https://dashboard.heroku.com/apps/<your heroku applicatin name here>` and click on the "Settings" menu on the top navbar. The second section on this page should be Config Vars. In this section click on the white/purple "Reveal Config Vars" button. Add a new Config Var with KEY set to "AUTH0_DOMAIN", "AUTH0_CLIENT_ID", and AUTH0_CLIENT_SECRET (without quotation marks) and paste for each the coresponding value from the .env into Value. 
  ![Heroku App settings highlighting Config Vars section and Reveal config vars button](./images/Step3Img5.png)
## 6. Deploy app on Heroku
  * Go to your Heroku application home page at `https://dashboard.heroku.com/apps/<your heroku applicatin name here>` and click on the "Deploy" menu on the top navbar.
  ![Heroku website highlighting deploy button](./images/Step5Img1.png)
  * Select Github as the Deploy Method and sign into your Github. Then select your account as the organization and search "iv" in the search bar to the right. When the results popup click the "Connect" button next to the repository that you cloned the source code to. 
  ![Heroku website highlighting search bar and connect button](./images/Step5Img2.png)
  * Scroll down to the "Manual Deployment" section at the bottom of the page. In the "Choose a branch to deploy" selector pick "master" and then click the grey "Deploy Branch" button to the right of the selector. 
  ![Heroku website highlighting Choose a branch to deploy selector](./images/Step5Img3.png) 
  * A samll display should popup at the bottom of the window. Wait until the popup is replaced by 4 sections each checked off and the last one should say "Deploy to Heroku" in green font and have a green check mark to the right.
  ![Heroku website showing app deploying](./images/Step5Img4.png) ![Heroku website showing app deployed](./images/Step5Img5.png)
  * Now the application is deployed on the Heroku URL. To get to the application just click the white/purple "View" button at the bottom of the page. This should open a new page with your application. 
