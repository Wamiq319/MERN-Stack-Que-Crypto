# **Que Referral and Earn System**

## **Project Overview**

This project is a **Referral and Earn** system that allows users to add a wallet address and generate a referral link. Users can share their referral links with others, and for every successful referral, the user earns points. The system also displays the user's balance, which increases as their referral link is used.

## **Problem Statement**

The goal of this project is to create a simple webpage where users can:

1. **Add a wallet address**.
2. **Generate a unique referral link** for that wallet address.
3. **View balance details** associated with their referral link.
4. **Earn points** when someone uses their referral link to visit the page.

The system will not be linked with any third-party apps like Telegram. It is a stand-alone web app focused solely on the referral and earning mechanism.

## **Inspiration**

The following websites were used as inspiration for this project suugested by client:

- [NFT Sea](https://web.archive.org/web/20211006140559/http://nftsea.net/)
- [Solfi](https://solfi.pro/?1A094)

These sites provided the basic concept and flow for generating referral links associated with wallet addresses and displaying balance information.

## **Tech Stack**

### **Frontend**:

- **React**: Used for building the user interface as a single-page application (SPA), offering a fast and dynamic user experience. React allows us to break the page into reusable components for easy maintenance and scalability.
- **Tailwind CSS**: A utility-first CSS framework used to style the web app. It provides a highly customizable, minimalistic, and responsive design, which fits the project's need for a clean interface.

### **Backend**:

- **Node.js with Express**: The backend is built using Node.js and the Express framework. Express provides a simple and robust API to handle user requests such as adding a wallet ID, generating a referral link, and fetching user balance.
- **MongoDB (Cloud - MongoDB Atlas)**: MongoDB is used to store user data such as wallet IDs, referral links, points, and balance details. MongoDB Atlas is a managed cloud database, which makes it easy to use and scale without requiring technical expertise. This ensures that the client, even with a non-technical background, can efficiently manage and maintain the app.

### **Authentication**:

- **JWT (JSON Web Tokens)**: Used for authenticating and securely managing user sessions. JWT tokens help in keeping the app stateless and providing secure access to the referral system.

### **Hosting**:

- **Frontend Hosting**: Vercel or Netlify will be used to host the React frontend. Both services allow easy integration with GitHub and provide free hosting with automatic deployments.
- **Backend Hosting**: Heroku or DigitalOcean will be used to deploy the Node.js backend. Both offer easy-to-use deployment solutions with good scalability options.

---

## **Reason for the Chosen Tech Stack**

1. **React**:

   - **Why React?** React's component-based structure makes it easy to develop and maintain the user interface. It’s a powerful library for building dynamic and high-performance UIs, ideal for single-page applications like this one.

2. **Tailwind CSS**:

   - **Why Tailwind?** Tailwind CSS allows for a streamlined and responsive design with minimal effort. It’s highly customizable, making it ideal for the minimalistic design required for this project. By using utility classes, we can quickly style the components and make the interface flexible across devices.

3. **Node.js with Express**:

   - **Why Node.js?** Node.js is a fast, non-blocking, event-driven environment perfect for handling multiple users interacting with the referral system simultaneously. Express simplifies the routing and handling of API requests, making it the go-to choice for backend development.

4. **MongoDB (Atlas)**:

   - **Why MongoDB?** MongoDB's document-oriented approach is flexible and ideal for storing user data without worrying about a rigid schema. It scales well, and with MongoDB Atlas, we get a fully managed cloud database with automatic backups and security features.

5. **JWT Authentication**:

   - **Why JWT?** JWT allows for stateless, scalable, and secure user authentication. It helps us maintain user sessions without relying on a traditional server-side session management system.

6. **Hosting**:
   - **Vercel/Netlify**: These platforms make it easy to deploy and manage static front-end applications with seamless integration with GitHub. They provide a great environment for hosting React apps with fast loading times.
   - **Heroku/DigitalOcean**: Both platforms allow easy deployment of backend services. Heroku is simple and fast to deploy with its Git integration, while DigitalOcean offers more control for scalable infrastructure.

---

## **Installation Instructions**

To get the project up and running locally:

### **Clone the Repository**:

```bash
git clone https://github.com/your-username/referral-and-earn-system.git
cd referral-and-earn-system
```
