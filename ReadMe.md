# 🏥 Healthcare Management System - Backend

Welcome to the **Healthcare Management System** backend repository! This project handles the server-side operations, APIs, and database management for a comprehensive healthcare platform, including patient management, doctor registration, and admin functionalities.

## 📚 Table of Contents
- [🚀 Features](#-features)
- [🔧 Installation](#-installation)
- [⚙️ Environment Variables](#️-environment-variables)
- [🛠️ Usage](#️-usage)
- [🔍 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [📜 License](#-license)

## 🚀 Features
- 🔒 **JWT Authentication**: Secure login system with role-based access control.
- 🧑‍⚕️ **User Roles**: Manage different user roles including Admin, Patient, and Doctor.
- 📦 **Cloudinary Integration**: Upload and manage images securely using Cloudinary.
- 🏥 **Admin Dashboard**: Powerful backend for managing users and system operations.
- 📊 **Real-time Data**: Fetch real-time data for analytics and reporting.

## 🔧 Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/healthcare-backend.git
    cd healthcare-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_URL=your_database_url
    JWT_SECRET_KEY=your_jwt_secret_key
    CLOUDINARY_CLOUD_URL=your_cloudinary_url
    COOKIE_EXPIRE=7
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

## ⚙️ Environment Variables

Make sure to configure the following environment variables in your `.env` file:

- `DATABASE_URL` - Your MongoDB connection string.
- `JWT_SECRET_KEY` - Secret key for signing JWT tokens.
- `CLOUDINARY_CLOUD_URL` - Cloudinary URL for managing media uploads.
- `COOKIE_EXPIRE` - Duration for cookie expiration (in days).

## 🛠️ Usage

- **Run the server**: 
    ```bash
    npm start
    ```
    The backend server will start at `http://localhost:4000`.

- **Development mode**: 
    ```bash
    npm run dev
    ```
    This will run the server with hot reloading enabled.

## 🔍 API Endpoints

### Auth
- **POST** `/api/v1/user/register` - Register a new patient.
- **POST** `/api/v1/user/login` - Login as a patient or admin.

### Admin
- **POST** `/api/v1/user/admin/addnew` - Add a new admin (Admin only).
- **POST** `/api/v1/user/admin/addDoctor` - Add a new doctor (Admin only).

### Doctor
- **GET** `/api/v1/user/doctors` - Get all doctors.

### Patient
- **GET** `/api/v1/user/profile` - Get profile details (Authenticated user only).

## 🧪 Testing

- **Run tests**:
    ```bash
    npm test
    ```
    This will run all the unit and integration tests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made with 💻 and ☕ by [Your Name](https://github.com/yourusername)
