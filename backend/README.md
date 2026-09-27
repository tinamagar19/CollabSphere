# CollabSphere Backend

Node.js backend API for CollabSphere. This repository contains the server-side logic, database interactions, and API endpoints required for the CollabSphere application.

## Technologies Used

*   **Node.js**: JavaScript runtime environment
*   **Express**: Fast, unopinionated, minimalist web framework for Node.js
*   **MySQL2**: MySQL client for Node.js with focus on performance
*   **JWT (JSON Web Tokens)**: For secure authentication and authorization
*   **bcryptjs**: For hashing passwords securely
*   **XAMPP**: Local development environment used for hosting the MySQL database

## Prerequisites

Before you begin, ensure you have met the following requirements:
*   You have installed the latest version of [Node.js](https://nodejs.org/)
*   You have installed [XAMPP](https://www.apachefriends.org/index.html) and it is running

## Environment Variables Setup

Create a `.env` file in the root directory of the backend project and add the following environment variables. Update the values according to your local setup if necessary.

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=collabsphere
DB_PORT=3307

# JWT Secret for Authentication
JWT_SECRET=your_super_secret_jwt_key_here
```

## Installation & Setup Instructions

1.  **Clone the repository and navigate to the backend directory** (if you haven't already).
2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  **Database Setup via XAMPP:**
    *   Open the XAMPP Control Panel.
    *   Start the **MySQL** module (ensure it is running on port `3307` as configured).
    *   Open the XAMPP Shell or your preferred MySQL client.
    *   Log in to MySQL (e.g., `mysql -u root -P 3307`).
    *   Create the database:
        ```sql
        CREATE DATABASE collabsphere;
        ```
    *   (Optional) If you have any migration or seed scripts, run them now.
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The server should now be running, typically on `http://localhost:3000` (or whichever port is specified in your app).

## API Endpoints Overview

Here is a brief overview of the main API endpoints available in this backend:

### Authentication Routes
*   `POST /api/auth/register` - Register a new user
*   `POST /api/auth/login` - Authenticate a user and receive a JWT

### Project Routes (Protected)
*   `GET /api/projects` - Retrieve all projects for the authenticated user
*   `POST /api/projects` - Create a new project
*   `GET /api/projects/:id` - Retrieve a specific project by ID
*   `PUT /api/projects/:id` - Update a specific project
*   `DELETE /api/projects/:id` - Delete a project

> Note: Protected routes require a valid JWT to be sent in the `Authorization` header as a Bearer token (`Authorization: Bearer <token>`).
