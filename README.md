# Contact Management API

## Overview

This project implements a RESTful API for managing contacts. It allows users to register, login, and perform CRUD operations on their contacts.

## Features

- User Registration: Users can create an account by providing a username, email, and password.
- User Login: Registered users can authenticate themselves by logging in with their credentials.
- Current User Profile: Authenticated users can retrieve their profile information.
- Contact Management:
  - Retrieve all contacts.
  - Retrieve a specific contact by ID.
  - Create a new contact.
  - Update an existing contact.
  - Delete a contact.

## Technologies Used

- Node.js: Server-side JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user and contact data.
- Mongoose: MongoDB object modeling tool for Node.js.
- JWT (JSON Web Tokens): For user authentication and authorization.
- bcrypt: Library for hashing passwords.

## Getting Started

### Clone the repository:
```bash
git clone https://github.com/AakashSuresh2003/Contact_Management_CRUD_Application.git
```
### Install dependencies:
```bash
cd contact-management-api
npm i express nodemon bcrypt jsonwebtoken express-async-handler mongoose
```

### Set up environment variables:
- Create a .env file in the root directory.
- Define the following environment variables:

```bash
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```
### Run the server:
```
npm start
```

## API Endpoints

### User Routes
- **POST /register:** Register a new user.
- **POST /login:** Authenticate user and generate JWT token.
- **GET /current:** Retrieve current user profile.
### Contact Routes
- **GET /contacts:** Retrieve all contacts.
- **GET /contacts/:id :** Retrieve a specific contact by ID.
- **POST /contacts:** Create a new contact.
- **PUT /contacts/:id :** Update an existing contact.
- **DELETE /contacts/:id :** Delete a contact.

## License

This project is licensed under the MIT License.
```
Feel free to customize the content according to your project's specifics. Let me know if you need further assistance!
```
