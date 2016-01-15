# Buffed Up Gym Jedi

Buffed Up Gym Jedi (BUGJ) is mobile app that helps track gym progress. 

The app is the result of me wanting to try out Ionic framework http://ionicframework.com/. 
The other thing I want to test is backend as SAAS. So I would have to do as little backend coding as possible. 
I have chosen backend service called Back& https://www.backand.com/ . Because it targets AngularJS and Ionic. 
Also it popped up when I Googled backend SAAS solutions. (includes free trial). 

![alt tag](https://cloud.githubusercontent.com/assets/4674408/12341954/5e6d66cc-bb04-11e5-9cba-aed68d8aaf00.png)
![alt tag](https://cloud.githubusercontent.com/assets/4674408/12341955/5e8785c0-bb04-11e5-8b59-312e2958230e.png)
![alt tag](https://cloud.githubusercontent.com/assets/4674408/12341956/5e8bf2ae-bb04-11e5-86b0-655673e3b88d.png)

## Installation

Currently .apk is not included in GitHUB or Google Play. So you need to run the project your own, if you want to test it. Unfortunately I was only able to test it on Android.

1. Clone the project (or fork the code)
2. Create a Backand user and app (for free) https://www.backand.com/
3. Insert your Backand app information (app name and anonymous token to /www/js/app.js file

        BackandProvider.setAppName('YOUR_APP_NAME'); 
        BackandProvider.setAnonymousToken('YOUR_ANONYMOUS_TOKEN');       
4. You can find Backand database table code in /database/tables.json and sample exercises in /database/exercises.json
5. In Backand interface, create new query. Copy paste the query from /database/queries.sql . Label the query "exercises". 
6. Run the app ( learn how to do it in here http://ionicframework.com/docs/guide/testing.html )

I'm not going to get too much into how to install it. If anyone is interested then you can contact me at marko.sulamagi@gmail.com .

## Contributing

Well, go ahead and contribute!

## History

### Some thoughts

* v0.3 took me around ~20 hours of time (analysis, design, learning Ionic and coding). Tracked with https://toggl.com/
* I created 11 tasks to my Trello board
* Before this project, I had experience with AngularJS and different API's. Some experience with PhoneCap and Cordova. New thing for me was Ionic.
* The stupidest mistake I made when developing it, was that somehow I didn't foresee that I don't have internet when I go to gym.
* Funniest bit is that my phone is so slow and expired, that I can't actually use this app when going to gym. 

### v0.3

Primary functionality is ready. The exercises are shown in side menu, you can save the data to database and user flow is fluent.
Biggest flaws that stop actually using this is that there is no offline mode, there's just one user and you can't view, edit or delete the 
series you have trained. 

Functionality is as follows: 

- Sample exercises
- Quite OK design 
- Pull exercises list from server each time user opens app (gifs are hard saved to app).
- Switch exercises functionality (from sidemenu).
- Save exercise info.
- Set default exercise info to forms, if exercise has already been done before. 
- Code should be quite OK

## Thanks

Thankses go to awesome people in Ionic, AngularJS and Backand teams for writing great software!

* http://ionicframework.com/
* https://angularjs.org/
* https://www.backand.com/

## Contact

https://github.com/MarkoSulamagi

## License

Everyone can use the code in any way they want. Go sell it for profit, if you want to.