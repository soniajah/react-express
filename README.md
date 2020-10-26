# Title
A Node.js app implements connects React library with Express framework.

# Description
A simple app that shows user's performance at work based on the hours of sleep, hours spent on TV.
The backend is written in Express with API that implements CRUD for user and work-performance.
The frontend is written in React with 3 endpoints that is described in the following: 
- The homepage includes a list of clickable users and a delete user button. When clicking the name, it takes to the selected user's page.
  It also includes a user create form.
- The user records page has a table of all the data relevant to the user. 
  Further down the records are visualised by a multiline chart that is implemented by D3 library.
  The page contains a Edit link that takes to a user edit page.
- The user edit page has form that can update the user name.

# Backend APIs
- GET : '/' sends a introduction text response
- GET : '/users' sends all the users
- GET : '/user/get/:id' gets a specific user based on the user id
- POST : '/user/create' creates a user with a specific id
- POST : '/user/update' updates a user with a specific id
- POST : '/user/delete' deletes a user with a specific id

- GET : '/work-performance' gets all the work performances of all users
- GET : '/work-performance/get/:id' gets a work performance with a specific work performance id
- GET : '/work-performance/user/:userid' gets all the work performances of a specific user
- POST : '/work-performance/create' creates a work performance record
- POST : '/work-performance/update' updates a work performance record with a specific id
- POST : '/work-performance/delete' deletes a work performance with a specific id

# Frontend Routes
  - path="/"  renders the component Home 
  - path="/user/records" renders the component UserRecords  
  - path="/user/edit" renders the component UserForm  


# Database
MongoDB, Mongoose

The database has two shcemas, user and workperformance that references user.
- The user shcema is described as:
  username: {
      type: String
    },
    created: {
      type: Date
    } 

- The work performance schema is described as:
    userId: {
      type: ObjectId 
    },
    date: {
      type: Date
    },
    hoursSlept: {
      type: Number // Float
    },
    hoursOnTV: {
      type: Number // Float
    },
    workPerformance: {
      type: Number // integer [0,5]
    }

    # Style
    For the style react-bootstrap framework is used mostly and some additional css.    




