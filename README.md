# About This Project

This project is a React application built with TypeScript and Vite. It interacts with the ReqRes API to perform CRUD operations on user data, including fetching, creating, updating, and deleting users.

## Prerequisites

Before running the application, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```sh
git clone https://github.com/JianGdt/integratedos-exam.git
cd integratedos-exam
```

### 2. Install Dependencies
```sh
npm install
# or
yarn install
```

### 3. Start the Development Server
```sh
npm run dev
# or
yarn dev
```

This will start the Vite development server. By default, the application will be available at:
```
http://localhost:5173
```

### 4. Build for Production
To create an optimized production build, run:
```sh
npm run build
# or
yarn build
```

### 5. Preview the Production Build
```sh
npm run preview
# or
yarn preview
```

This will start a local server to preview the built application.

## Features

### 1. Users List (GET Request)
- Fetches and displays users from [ReqRes API](https://reqres.in/api/users?page=1)
- Displays each user's name and email
- Shows a loading message while fetching data

### 2. User Detail (GET Request)
- Fetches and displays a user's details using their ID ([ReqRes API](https://reqres.in/api/users/{id}))
- Displays user’s name, email, and avatar

### 3. Create a User (POST Request)
- Allows adding a new user with a form submission
- Sends user data (name and job) to [ReqRes API](https://reqres.in/api/users)
- Displays a confirmation message upon success

### 4. Update a User (PUT Request)
- Allows updating an existing user by ID
- Sends updated data to [ReqRes API](https://reqres.in/api/users/{id})
- Displays a success message after the update

### 5. Delete a User (DELETE Request)
- Deletes a user by ID
- Sends a request to [ReqRes API](https://reqres.in/api/users/{id})
- Displays a success message upon successful deletion

## Additional Configuration

### ESLint Setup
The project includes ESLint for code quality. You can run:
```sh
npm run lint
# or
yarn lint
```

### Environment Variables
To configure the application, create a `.env` file in the root directory and define environment variables as needed.

## License
This project is licensed under [MIT License](LICENSE).

## Contributions
Feel free to contribute to this project by submitting issues or pull requests!

---

Now you're all set to run the application locally! 🚀

