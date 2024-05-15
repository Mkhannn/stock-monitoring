

## Stock Monitoring Backend

## [Mustafa Khan](https://github.com/Mkhannn/Mkhannn) Backend completed by me .

This backend project serves as the core of the Stock Monitoring platform. It provides APIs for user authentication, managing watchlists, and fetching stock data.

### Step-by-Step Guide

1. **Clone the Repository**: Clone the repository to your local machine.

    ```bash
    git clone <https://github.com/Mkhannn/stock-monitoring.git>
    ```

2. **Navigate to the Backend Directory**: Change directory to the backend folder.

    ```bash
    cd backend
    ```

3. **Install Dependencies**: Install the necessary dependencies.

    ```bash
    npm install
    ```

4. **Set Environment Variables**: Create a `.env` file in the backend directory and set the following environment variables:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/stockmonitor
    JWT_SECRET=your_jwt_secret
    ALPHAVANTAGE_API_KEY=your_alphavantage_api_key
    PORT=5000
    ```

    Replace `your_jwt_secret` and `your_alphavantage_api_key` with your own values.

5. **Start the Server**: Run the following command to start the server.

    ```bash
    npm start
    ```

6. **API Endpoints**:

    - Authentication:
        - `POST /api/auth/register`: Register a new user.
        - `POST /api/auth/login`: Login with existing credentials.
    - Watchlist Management:
        - `POST /api/watchlist`: Create a new watchlist.
        - `GET /api/watchlist`: Get user's watchlist.

7. **Testing the API**: You can use tools like Postman or curl to test the API endpoints.

### Project Structure

The project structure is organized as follows:

- **src/**: Source code directory.
  - **config/**: Configuration files.
  - **controllers/**: Request/response logic.
  - **middlewares/**: Middleware functions.
  - **models/**: Database models.
  - **routes/**: API routes.
  - **utils/**: Utility functions.
  - **app.ts**: Express application setup.
  - **server.ts**: Server setup.

### Description

The backend is implemented using TypeScript and relies on Express for routing and middleware handling. Mongoose is used for MongoDB database interaction. User authentication is managed using JSON Web Tokens (JWT). The backend provides endpoints for user registration, login, and watchlist management. Stock data is fetched from the Alpha Vantage API.

### Dependencies

The backend project relies on the following npm packages:

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: Elegant MongoDB object modeling for Node.js.
- `bcryptjs`: Library to help hash passwords.
- `jsonwebtoken`: JSON Web Token implementation.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `dotenv`: Loads environment variables from a `.env` file.

### Development Dependencies

- `ts-node-dev`: TypeScript execution and hot-reloading for development.

### TypeScript Configuration

The project is written in TypeScript with the following configuration:

- Target: ES6
- Module: CommonJS
- Strict mode enabled
- ES Module Interop enabled

### Backend Scripts

- **start**: Starts the server using `ts-node-dev`.

---

With this guide, you should be able to set up and run the backend project locally for development or testing purposes.
