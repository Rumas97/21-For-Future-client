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

## React Router Routes (React App)

Distinguish Between Public and Private (protected) Routes
 - PublicRoute 
 - PrivateRoute

| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage                       | public `<PublicRoute>`      | Home page                                        |
| `/signup`                 | SignupPage                     | public `<PublicRoute>`      | Signup form, login, 

| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login  |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session             |
| `/backlog/series`         | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all tv series on backlog                                |
| `/backlog/films`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all films on backlog                                    |
| `/backlog/games`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all games on backlog                                    |
| `/search/series`          | SearchForm, SearchResults      | user only  `<PrivateRoute>` | Search a tv series to be added                                |
| `/search/films`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a film to be added                                     |
| `/search/games`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a game to be added                                     |
| `/add/:id`                | ElementInfo                    | user only `<PrivateRoute>`  | Add an element to the backlog                                 |
| `/profile`                | Profile, Stats                 | user only  `<PrivateRoute>` | Check profile with stat information                           |
| `/done/series`            | Done list for Series           | user only  `<PrivateRoute>` | Shows all tv series finished                                  |
| `/done/films`             | Done list for films            | user only `<PrivateRoute>`  | Shows all films finished                                      |
| `/done/games`             | Done list for games            | user only `<PrivateRoute>`  | Shows all videogames finished                                 |
          

## Components

- HomePage.js

- NavBar.js

- LogIn.js

- SignUp.js

- Profile.js

- EditProfile.js

- Challenges.js 

- ChallengeDetails.js 

- ChooseChallenge.js

- DonationPage.js

- FooterBar.js

- NotFound.js 

- ServerError.js








  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()

- Backlog Service
  - backlog.filter(type, status) // for different types of media and if they are done or not
  - backlog.detail(id)
  - backlog.add(id)
  - backlog.delete(id)
  - backlog.update(id)
  
- External API
  - API for games
  - API for series
  - API for films


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


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session    |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| POST        | `/search/add`                 | {platform, title, type, id}  |                | 400          | Add new backlog element and add to user                                               |
| GET         | `/backlog/series`             |                              |                | 400          | Show series elements                                           |
| GET         | `/backlog/films`              |                              |                |              | Show film elements                                           |
| GET         | `/backlog/games`              |                              |                |              | Show games elements                                          |
| GET         | `/media/:id`                        |                              | 201            | 400          | Show specific element                                        |
| PUT         | `/media/:id`                 |                              | 200            | 400          | edit element                                                 |
| DELETE      | `/media/:id`                 |                              | 201            | 400          | delete element                                               |
| GET         | `/done/series`                |                              |                | 400          | Show series elements                                         |
| GET         | `/done/films`                 |                              |                |              | Show film elements                                           |
| GET         | `/done/games`                 |                              |                |              | Show games elements                                          |



<br>


## Links

### Trello

[Link to your trello board](https://trello.com/b/ryP9qld0/21-for-future) 


### Git

The url to your repository and to your deployed project

[Client repository Link]()

[Server repository Link]()

[Deployed App Link]()

### Slides

The url to your presentation slides

[Slides Link]()