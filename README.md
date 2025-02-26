# **Que BlockChain System**

## **Project Overview**

The **Que** is a simple web application designed to allow users to:

- **Add a Solana wallet address**
- **Generate a unique referral link** associated with that wallet address
- **Track their balance**, which increases when others use their referral link
- **Earn points** and claim **airdrops** for successful referrals

This stand-alone system focuses on referral tracking, point accumulation, and airdrop distribution, with no integration with third-party apps like Solana blockCHain. Built with Web3.js, it ensures a seamless and secure referral process.

## **Problem Statement**

The goal of this project is to provide a straightforward solution where users can:

1. Add a wallet address to their profile
2. Generate and share a unique referral link
3. View their balance and track earnings from successful referrals
4. Earn points for each successful referral

---

## **Inspiration**

The system’s concept and flow were inspired by the following platforms:

- [NFT Sea](https://web.archive.org/web/20211006140559/http://nftsea.net/)
- [Solfi](https://solfi.pro/?1A094)

These sites provided ideas for generating referral links tied to wallet addresses and displaying balance information.

---

## **Tech Stack**

### **Frontend**:

- **React**: For building a dynamic, single-page user interface. React allows the creation of reusable components, making the app easy to maintain and scale.
- **Tailwind CSS**: A utility-first CSS framework used to create a responsive, minimalist, and customizable design.

### **Backend**:

- **Node.js with Express**: The backend uses Node.js and Express to handle user requests like adding wallet addresses, generating referral links, and fetching user balances.
- **MongoDB (Atlas)**: A document-oriented NoSQL database. MongoDB’s flexibility and scalability make it ideal for this project. MongoDB Atlas offers a managed cloud service with automatic backups and enhanced security features.

---

## **Security Features**

### **Frontend**:

- Frontend validation ensures proper format for wallet addresses and data to minimize unnecessary backend requests.

### **Backend**:

- A robust security layer validates incoming data on every route to ensure it meets application standards before interacting with the database.

---

## **Special Notes for Developers**

- The system includes a daily claim feature and a route for updating reward claims. If additional claim options are needed (e.g., monthly or one-time claims), you can extend the functionality by adding a few fields to the database. No extra logic is necessary, as the system is designed for scalability.

---

## **Installation Instructions**

To get the project up and running locally, follow these steps:

### **Clone the Repository**:

```bash
git clone https://github.com/your-username/Refer-Earn-System-Que.git
cd Frontend
```
Check Frontend and Backend folder and there Readme files for further details
