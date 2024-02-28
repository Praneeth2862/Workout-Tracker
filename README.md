# MERN Workout Tracker

MERN Workout Tracker is a web application that allows users to create accounts and track their daily workout details. This project utilizes the MERN stack, consisting of MongoDB, Express.js, React, and Node.js, to provide a robust and modern solution for managing user accounts and workout data.

## Features

- **User Authentication**: Users can sign up for an account using their email address and password. Authentication is implemented using JSON Web Tokens (JWT) for secure access to the application.

- **Workout Logging**: Users can log their daily workouts, including exercise type, duration, intensity, and any additional notes.

- **Workout History**: Users can view their workout history to track their progress over time.

- **CRUD Operations**: Users can add, edit, and delete workout entries as needed.

## Screenshots

![Login and Signup Page](https://github.com/Praneeth2862/Workout-Tracker/assets/95529324/16aa0e75-50a2-43f8-9671-68d031c3e4ed)
![Workout Dashboard](https://github.com/Praneeth2862/Workout-Tracker/assets/95529324/85ed5ee1-f95b-47a5-8937-bce423d1850c)
![Workout add Modal](https://github.com/Praneeth2862/Workout-Tracker/assets/95529324/558a75b3-3e90-4d70-b414-ff10fd63dc48)


## Technologies Used

- **MongoDB**: NoSQL database used for storing user account information and workout data.

- **Express.js**: Web application framework for Node.js used to handle server-side logic and API requests.

- **React**: JavaScript library for building user interfaces. Used to create the client-side application for interacting with the workout tracker.

- **Node.js**: JavaScript runtime environment used for server-side development.

- **JWT**: JSON Web Tokens used for user authentication.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your_username/mern-workout-tracker.git
    ```

2. Navigate to the project directory:

    ```
    cd mern-workout-tracker
    ```

3. Install dependencies for both the server and client:

    ```
    npm install
    cd client
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add environment variables such as database connection URI, JWT secret, etc.

5. Start the development server:

    ```
    npm run dev
    ```

6. Access the application at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
