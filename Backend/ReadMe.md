# **Que Referral and Earn System - Backend**

## **Project Overview**

This is the backend part of the **Referral and Earn System**, built with **Node.js** and **Express.js**. The backend handles user requests such as adding wallet addresses, generating referral links, and managing balances. It connects to a **MongoDB** database to store user data and manage referrals.

---

## **Tech Stack**

- **Node.js**: A JavaScript runtime used to build the backend, enabling fast and scalable server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework, used to handle routing and middleware for HTTP requests.
- **MongoDB (Atlas)**: A document-oriented NoSQL database to store user data such as wallet addresses, referral links, and balance information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to interact with the database in an easy and structured way.

---

## **Installation Instructions**

### 1. Clone the Repository

To get started with the backend project, first clone the repository:

```bash
git clone https://github.com/your-username/Refer-Earn-System-Que.git
cd Backend
```
#Once inside the project directory, install all necessary dependencies:
```bash
# If using npm
npm install
# Or, if using yarn
yarn install
```
### Set Up Environment 

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
```
- PORT: The port on which your server will run (default is 5000).
- MONGO_URI: The connection string for your MongoDB Atlas database.
### Start the Server
 ```bash
 # Using npm
npm run dev
# Or, using yarn
yarn dev
```


