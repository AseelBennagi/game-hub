# Game-Hub

Game-Hub is a dynamic and user-friendly web application designed to provide comprehensive information about video games. Leveraging the powerful RAWG.io API, Game-Hub fetches and displays detailed data on a wide range of games, including descriptions, genres, release dates, ratings, and more. This ensures users have access to the latest and most accurate gaming information.

## Key Features

- **Search Functionality:** Easily search for games by title, genre, or platform.
- **Game Details:** View in-depth information about each game, including screenshots, trailers, and user reviews.
- **Responsive Design:** Enjoy a seamless user experience across various devices.

## Technologies Used

- **React.js:** A robust JavaScript library for building the user interface.
- **TypeScript:** A statically typed superset of JavaScript that ensures type safety and enhanced code quality.
- **Chakra UI:** A modern, accessible, and customizable component library for React, used to create a visually appealing and responsive interface.

## Installation

To get started with Game-Hub, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AseelBennagi/game-hub.git
    cd game-hub
    ```
 2. **Install dependencies:**
    ```bash
    npm install
    ```
 3. **Navigate to api-clients.ts in the services file and add your RAWG.io API key:**
    ```env
     baseURL: "https://api.rawg.io/api",
    params: {
        key: "Add your key here"
    }
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```
