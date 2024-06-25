MERN Blog

A blogging platform built using the MERN stack (MongoDB, Express, React, Node.js).

About the Project

MERN Blog is a full-stack blogging platform that allows users to create, read, update, and delete blog posts. The backend is built with Node.js and Express, and it uses MongoDB for the database. The frontend is built with React, Redux, and Vite.

Getting Started

Follow these instructions to set up the project locally.

Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

Installation

1. Install backend dependencies:

    ```sh
    npm install
    ```

2. Install frontend dependencies:

    ```sh
    cd client
    npm install
    cd ..
    ```

3. Create a `.env` file in the root of the project and add your environment variables:

    ```sh
    touch .env
    ```

    Add the following variables to the `.env` file:

    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

Usage

Running the Development Server

1. Start the backend server:

    ```sh
    npm run dev
    ```

2. Start the frontend development server:

    ```sh
    cd client
    npm run dev
    ```

Building for Production

1. Build the project:

    ```sh
    npm run build
    ```

    This command will install dependencies and build the client.

2. Start the production server:

    ```sh
    npm start
    ```

Tech Stack

Backend

- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- MongoDB: NoSQL database for storing blog data.
- Mongoose: ODM for MongoDB.
- jsonwebtoken: For handling JWT authentication.
- bcryptjs: For hashing passwords.
- dotenv: For managing environment variables.
- cookie-parser: For parsing cookies.
- nodemon: For automatically restarting the node application when file changes are detected.

Frontend

- React: A JavaScript library for building user interfaces.
- Redux: State management library for React applications.
- Vite: A fast frontend build tool and development server.
- Tailwind CSS: Utility-first CSS framework.
- Firebase: Used for authentication.
- Flowbite-React: Library for building responsive UI components.
- React Router: For handling routing in React applications.
- Redux Persist: For persisting and rehydrating Redux state.
- React Icons: For including popular icons in the project.
- React Modal: For creating accessible modal dialogs.
- React Quill: For rich text editing.
