# Instructions for Deployment
1. make copy of repo on a new github repo
2. Setup Heroku account and applictaion(can we link profs?)    ???Session Cookie Secret???
3. Setup MongoDB account(can we link profs?) and set up database/cluster/documents to be houses(give a screenshot of example doc)
  config-vars on Heroku for MONGODB_URI
4. Setup Mapbox account and add Map Token to Heroku (map styles?)
  * Go to https://account.mapbox.com/auth/signup/ and signup for a free mapbox account
  * Verify your account through email 
  * On your mapbox account page https://account.mapbox.com/ click on "create a token"
      * You can give the token any name, a good one may be something like "IV Housing Map Token"
      * All of the other settings should be left alone
      * This is not neccesary but for extra security of your token, so people do not steal it use up your free map requests, you can restrict the urls that can request a map with this token. This is at the very bottom of the create token page and you should input the URL that your application will be deployed on (aka the Heroku URL, to find it go to the Home Heroku page for your application and click on the purple "open app" button, this should open a new page with your application and you just need to copy the URL)
  * After you create the token it should take you back to the mapbox account page. Scroll to the bottom of this page and you should see your new token underneath a default token. Copy this token by clicking the blue clipboard button next to the token. Go to your Heroku application home page and click on the "Settings" menu on the top navbar. The second section on this page should be Config Vars. In this section click on the whit/purple "Reveal Config Vars" button. Add a new Config Var with KEY set to "MAP_TOKEN_PROD" (without quotation marks) and paste the token into Value. 
5. Deploy app on Heroku
  * Go to your Heroku application home page and click on the "Deploy" menu on the top navbar.
  * Select Github as the Deploy Method and sign into your Github. Then select the the repository that you cloned the source code to. 
  * Scroll down to the "Manual Deployment" section at the bottom of the page. In the "Choose a branch to deploy" selector pick "master" and then click the grey "Deploy Branch" button to the right of the selector. A window should popup. Wait until the popup is replaced by 4 sections each checked off and the last one should say "Deploy to Heroku" in green font and have a green check mark to the right.
  * Now the application is deployed on the Heroku URL. To get to the application, go to your Heroku applcation home page and click on the purple "open app" button. This should open a new page with your application. 
