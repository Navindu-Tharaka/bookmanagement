#  Hexalyte Book Management API

This project was built during an internship using **Node.js**, **Express.js**, and **MySQL**. It provides a REST API for managing book records with secure authentication using **JWT** and author name hashing via **bcrypt**.

---

##  Getting Started

In the project directory, you can run:

### `npm start`

Runs the server in development mode.\
By default, the API will be accessible at [http://localhost:3000](http://localhost:3000).


---

##  Project Structure

bookmanagement/
├── auth/ 
│ └── tokenValidation.js
├── config/ 
│ └── db.js
├── controllers/ 
│ └── bookController.js
├── models/ 
│ └── Book.js
├── routes/ 
│ └── bookRoutes.js
├── server.js 
├── .env 
├── .gitignore
└── README.md

##  Available Scripts

### `npm start`

Starts the Express server using `server.js`.\
Listens on the port specified in `.env` (default: `3000`).

---

##  Environment Variables

To run this project, create a `.env` file in the root directory and add:

```env
APP_PORT=3000
DB_PORT=3306
DB_HOST=localhost
DB_USER=root
DB_PASS=
MYSQL_DB=book_management


##   Authentication & Security

Authors can log in using their name.
After logging in at /books/login, a JWT token is issued.
All book routes are protected and require the token.


##   Headers (for protected routes):

Authorization: Bearer <your-token>
code values in books are hashed using bcrypt for security.


##     API Endpoints

All endpoints are prefixed with /books.

Method	    Route	Description	               Protected
POST	   /login	Log in and receive token	No
GET	       /	    Get all books	            Yes
GET	       /:id	    Get book by ID	            Yes
POST	   /	    Add a new book	            Yes
PATCH	   /	    Update a book	            Yes
DELETE	   /	    Delete a book	            Yes


## Approach & Challenges
### Approach

Developed using modular architecture (routes, controllers, models)
Used mysql2 with connection pooling
Implemented author name hashing with bcrypt
Integrated JWT for route protection

## Challenges

Figuring out how to hash and store code securely
Learning how JWT authentication works with middleware
Getting familiar with GitHub pushing workflow
learning how to work with postman
