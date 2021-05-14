# 21 For Future  

## Description

An app to be aware of environmental issues and take 21 day challenges to make an impact. 

## User Stories

-  **404:** As a user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **500** As a user I can see a 500 error page if the developers have done something wrong
-  **Signup:** As an user I can sign up in the platform so that I can participate in the challenges
-  **Login:** As a user I can login to the app so that I can start doing my challenges
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
-  **Challenges** As a user I can participate in the 21 day challenges
-  **Donation** As a user I can make a donation to help the environment 
-  **Check/Edit/Delete profile** As a user I can check my profile, challenges and edit or delete my profile

## Backlog

- Information about environmental issues (open for all) with an API. 
- Map with Pop up on different countries with cool environmental information (open for all)
- Map showing people using the app (could maybe be the same map??)
- Sign up with Google, Facebook
- Users can share information about their challenges on social media 

<br>


# Client / Frontend

## React Router Routes (React App) That we call in the App.js

Distinguish Between Public and Private (protected) Routes
 - PublicRoute 
 - PrivateRoute


<Route path="/" /> To the Homepage
<Route path="/profile" /> To the profile
<Route path="/profile/edit"/> To edit the profile
<Route path="/signup" /> To the signup page
<Route path="/login" /> To the login page
<Route path="/donations" > To the donations page
<Route path="/challenges-categories"/> Shows all categories for challenges 
<Route path="/challenges-categories/:categories" > all challenges for one category
<Route path="/challenge/:categories/:id" >
<Route path="/user-challenge/:id"/> To show the user the UserChallenge 
<Route component="{NotFound}" > To the 404 error page



## Components

- HomePage.js

- NavBar.js
    ## LINKS THAT WE NEED 
    1. Logout link that links to HomePage
    <Link to="/logout" >
    2. Login link that links to the LoginPage
    <Link to="/login" >
    3. Home link that links to the HomePage
    <Link to="/" >  
    4. Challenges link that links to the HomePage
    <Link to="/challenges" >   
    5. Donation link that links to the HomePage
    <Link to="/donation" > 
     
- LogIn.js 
    - With a Form 

- SignUp.js
    - With a Form 


- Profile.js // *Cloudinary Picture* 
    - Profile picture 
    - Show the user challenges in process
    - Show the user challenges completed
    - Button to Edit Profile <Link to="/profile/edit" >
    - Button to Browse challenges  <Link to="/challenges" >

- EditProfile.js
    - With a Form
    - Button to Submit Changes
    - Button to change the profile picture 

- Challenges.js 

- ChallengeDetails.js Not sure. Ask Jorge

- ChooseChallenge.js Not sure. Ask Jorge

- DonationPage.js // *Stripe Donation*

- FooterBar.js

- NotFound.js 
    - Shows are awesome 404 page

- ServerError.js
    - Shows are awesome 500 page











  

 



<br>


# Server / Backend


## Models

### User.model.js

```javascript
{
  username: String,
  email: String
  password: String
  profilePic: String,
},
```



### Challenge.model.js

```javascript
 {
    challengeName: String, 
    category: {
        type: String,
        enum: ["Food", "Lifestyle", "Mobility", "Period"],
    }

    day1: {
        description: String
        list: [String],
        url: String,
    }

    day2: {
        description: String
        list: [String],
        url: String,
    }

    day3: {
        description: String
        list: [String],
        url: String,
    }

    day4: {
        description: String
        list: [String],
        url: String,
    }

    day5: {
        description: String
        list: [String],
        url: String,
    }

    day6: {
        description: String
        list: [String],
        url: String,
    }

    day7: {
        description: String
        list: [String],
        url: String,
    }

    day8: {
        description: String
        list: [String],
        url: String,
    }

    day9: {
        description: String
        list: [String],
        url: String,
    }

    day10: {
        description: String
        list: [String],
        url: String,
    }

    day11: {
        description: String
        list: [String],
        url: String,
    }

    day12: {
        description: String
        list: [String],
        url: String,
    }

    day13: {
        description: String
        list: [String],
        url: String,
    }

    day14: {
        description: String
        list: [String],
        url: String,
    }

    day15: {
        description: String
        list: [String],
        url: String,
    }

    day16: {
        description: String
        list: [String],
        url: String,
    }

    day17: {
        description: String
        list: [String],
        url: String,
    }

    day18: {
        description: String
        list: [String],
        url: String,
    }

    day19: {
        description: String
        list: [String],
        url: String,
    }

    day20: {
        description: String
        list: [String],
        url: String,
    }

    day21: {
        description: String
        list: [String],
        url: String,
    }

 },
```


### UserChallenge.model.js

```javascript
{
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }

    challengeId:{
        type: Schema.Types.ObjectId,
        ref: "Challenge",
    }

    dayTracker: [Number]
        
}
```


### Donation.model.js (OPTIONAL IF WE WANT TO KEEP TRACK OF THE DONATIONS BY THE USERS)



<br>

## Seeding the Challenges 

We need to manually seed the challenges 

Seeds folder 
- food.seeds.js
- lifestyle.seeds.js
- mobility.seeds.js
- period.seeds.js


## API Endpoints (backend routes)

- config folder (already created)
    - cloudinary.config.js //For using cloudinary

- index.js (already created)
 - `/`

- auth.routes.js **ALL ROUTES WORKING**

    -   POST `/signup` "Creates a new user"  --> if conditions for "Validation" 
           
    -   POST `/login`   --> if conditions for "Validation" 

    -   POST `/logout`  

    WE NEED A MIDDLEWARE TO CHECK IF THE USER IS LOG IN (SESSIONS) 

    -   GET `/profile` here we call the middleware --> Protected Route 

    -   PATCH `/profile/:id/edit`

    -   DELETE `/profile/:id/delete`
      
    

- donation.routes.js //For using Stripe
    -   POST `/donations`
    

- cloudinary.routes.js //For using cloudinary


- challenges.routes.js **WORKS**  *One of the this routes needs to be protected*
     
    -  GET  `/challenges/:category` "Displays all the challenges for one category"

    -  GET `/challenges/:category/:id` "Displays a challenge with the 21 days things"


- userChallenge.routes.js **WORKS** 
    - GET `/user-challenge/:id` If user is logged in, the info gets fetched from the UserChallenge.model.js // .populate()

      
<br>


## Links

### Trello

[Link to your trello board](https://trello.com/b/ryP9qld0/21-for-future) 


### Git

[Client repository Link]()

[Server repository Link]()

[Deployed App Link]()

### Slides

[Slides Link]()
