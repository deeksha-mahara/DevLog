# 📝 DevLog - A Community Blogging Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v20+-green.svg)
![Express](https://img.shields.io/badge/Express-v4.18-lightgrey.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-forestgreen.svg)

**DevLog** is a full-stack Server-Side Rendered (SSR) blogging application where developers can share ideas, read articles, and interact through comments. Built from scratch to understand the core principles of Authentication, MVC Architecture, and Relational Data modeling in NoSQL.

---

## 🚀 Features

-   **🔐 Secure Authentication:**
    -   Custom JWT-based authentication (Stateless).
    -   Password Hashing using Node.js crypto (SHA-256).
    -   Route protection via Middleware.
-   **📝 Blog Management:**
    -   Create rich text articles.
    -   **Image Uploads** supported via Multer.
    -   Dynamic routing for individual blog posts.
-   **💬 Interaction:**
    -   Real-time-like commenting system.
    -   User-specific profile rendering.
-   **🎨 UI/UX:**
    -   Server-side rendering using **EJS**.
    -   Responsive styling with **Tailwind CSS**.

---

## 🛠️ Tech Stack

**Backend:**
-   **Node.js & Express.js:** Server framework.
-   **MongoDB & Mongoose:** Database and ODM.
-   **JWT (JSON Web Tokens):** Authentication.
-   **Multer:** File handling/Image uploading.
-   **Crypto:** Secure password hashing.

**Frontend:**
-   **EJS (Embedded JavaScript):** View Engine.
-   **Tailwind CSS:** Styling.


| Home Page | Blog View |
|:---:|:---:|
| ![Home](https://via.placeholder.com/400x200?text=Home+Page+Preview) | ![Blog](https://via.placeholder.com/400x200?text=Blog+Detail+Preview) |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone [https://github.com/deeksha-mahara/DevLog.git](https://github.com/deeksha-mahara/DevLog.git)
cd DevLog

### 4. Run the Server
Bash
# Production mode
node index.js

# Development mode (with Nodemon)
npm start 
# OR
npx nodemon index.js
