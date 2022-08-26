# Tu Noticia 

## Descripción

## Estructura creo que esto fuera


# User Stories
    - Signup:
    - Login:
    - Profile:
    - Profile Driver:
    - Add Travel:
    - Travel Details
    - Travel Edit:
    - Home:
    - 404: 
    - NotFound:

# Backlog ??

## Client / Frontend ##

## React Router (React App): 

   # Home 
    - Path: /
    - Component: TravelList
    - Permissions: public <Route>
    - Behavior: Home page.

   # Signup 
    - Path: /signup
    - Component: 
    - Permissions: public <Route>
    - Behavior: Signup form, link to login, navigate to homepage after login.

   # Login 
    - Path: /login
    - Component: 
    - Permissions: public <Route>
    - Behavior: Login form, link to signup, navigate to homepage after login.

   # Profile 
    - Path: /profile
    - Component: MyTravels
    - Permissions: 	user only <PrivateRoute>
    - Behavior: Check profile with stat information.

   # Profile Driver 
    - Path: /profile/:idDriver
    - Component: Review, GetReview
    - Permissions: 	user only <PrivateRoute>
    - Behavior: Check profile driver with see drivers Reviews.

   # Add Travel  
    - Path: /travels/create
    - Component: 
    - Permissions: 	user only <PrivateRoute>
    - Behavior: Add a travel to u profile.

   # Travel Details 
    - Path: /travels/:idTravel
    - Component: 
    - Permissions: 	user only <PrivateRoute>
    - Behavior: Show travel details.

   # Travel Edit 
    - Path: /travels/:idTravel
    - Component: 
    - Permissions: 	user only <PrivateRoute>
    - Behavior: Edit u travels.

   # Error 
    - Path: /error
    - Component: 
    - Permissions: public <Route>
    - Behavior: Error

   # NotFound 
    - Path: /*
    - Component: 
    - Permissions: public <Route>
    - Behavior: Not Found

# Components

    - Get Review
    - My Travels
    - Navbar
    - Review
    - Travel List

# Services

 - Auth Services: 
  - signupService(newUser)
  - loginService(user)
  - verifyService 

 - Profile Services: 
  - profileService
  - profileServiceDriver(idDriver)

 - Review Services: 
  - getReviewService(idDriver)
  - newReviewService(idDriver,newReview)

 - Travel Services: 
  - travelListService
  - travelDetailsService(idTravel)
  - travelDetailsNavigatorService(idTravel)   
  - addTravelService(newTravel)
  - myTravelService()
  - travelUpdateService(idTravel,updateTravel)
  - travelDeleteService(idTravel)





## Server / Backend ##

## Modelos

# User Model

- username: 
  - type: String
  - unique: true
  - required: true

- password: 
  - type: String
  - required: true

 
- email: 
  - type: String
  - unique: true
  - required: true

- role:
  - type: String
  - enum: ["driver", "navigator"]
  - default: "navigator"


# Travel Model 
-  date: 
  - type: String

- from: 
  - type: String
  - required: true

- to: 
  - type: String
  - required: true
    
- car:
    - type: String
    - required: true
  
- bags: 
    - image: Number 
	- required: true 

- seatsCar: 
    - type: Number
    - required: true

- price: 
    - type: Number
    - required: true

- owner: 
    - type: Schema.Types.ObjectId
    - ref:'User'

- navigator: 
    - type: Schema.Types.ObjectId
    - ref:'User'    

    



# Review Model   

- owner: 
    - type: Schema.Types.ObjectId
    -  ref: "User"
  
- text: 
    - type: String
    - required: true

- user: 
    - type: Schema.Types.ObjectId
    -  ref: "User"


## API Endpoints (backend routes): 

    # Signup

        - HTTP Method: POST
        - URL: /auth/signup
        - Request Body: {name, email, password}
        - Success status: 201
        - Error Status: 400
        - Description: Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session.

    # Login

        - HTTP Method: POST
        - URL: /auth/login
        - Request Body: {username, password}
        - Success status:
        - Error Status: 400
        - Description: Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session.

    # Verify

        - HTTP Method: GET
        - URL: /auth/verify
        - Request Body:
        - Success status:
        - Error Status:
        - Description: 

    # Profile 

        - HTTP Method: GET
        - URL: /profile
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Check if user is logged in and return profile page.

    # Profile Driver 

        - HTTP Method: GET
        - URL: /profile/:idDriver
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Check and add Reviews user.


    # Review

        - HTTP Method: POST
        - URL: /review/:idDriver
        - Request Body:{text}
        - Success status:
        - Error Status:
        - Description: Show reviews.

    # Create Review

        - HTTP Method: GET
        - URL: /review/:idDriver/get
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Add new Review element and add to user.

    # Travel List

        - HTTP Method: GET
        - URL: /travels
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Show travel list.

    # My Travels

        - HTTP Method: GET
        - URL: /travels/mytravels
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Show our travels list.

    # Create Travel 

        - HTTP Method: POST 
        - URL: /travels/create
        - Request Body: {date,from,to,car,bags,seatsCar,price}
        - Success status:
        - Error Status:
        - Description: Add new Travel element and add to user.

    # Travel Details

        - HTTP Method: GET
        - URL: /travels/:idTravel
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Show travel details.

    # Travel IdNavigator

        - HTTP Method: PATCH
        - URL: /travels/:idTravel/navigator
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Add new Navigator to Travel.

    # Travel Edit

        - HTTP Method: PATCH
        - URL: /travels/:idTravel
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Edit element.

    # Travel Delete

        - HTTP Method: DELETE
        - URL: /travels/:idTravel
        - Request Body:
        - Success status:
        - Error Status:
        - Description: Delete element.


## Enlaces

### Git
[Repository Link Client](https://github.com/JoseDonaire/barbarcar-app-client)
[Repository Link Server](https://github.com/JoseDonaire/barbarcar-app-server)
[Deploy Link](https://barbarcar.netlify.app/travels/6307b279d5cbb1860fb8be40/details)

### Diapositivas


