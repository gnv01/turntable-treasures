
# Turntable Treasures

Turntable Treasures is an online store dedicated to the sale of musical items such as vinyl records, turntables, speakers, and accessories. This project aims to provide a seamless and enjoyable shopping experience for music enthusiasts.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

Turntable Treasures was initiated in mid-November 2023 by Gustavo Nieto, a student of web application development. The project adopts a simple and almost brutalist theme, focusing on usability and aesthetics. Although development slowed down due to internships starting in April 2024, significant progress has been made.

## Technologies Used

- **Frontend:** React (TypeScript), CSS
- **Backend:** Spring Boot, MySQL
- **API Calls:** Axios

## Features

- **Product Management:** Add, edit, and delete products.
- **User Interaction:** Browse and view detailed information about products.
- **Admin Interface:** Basic interface for managing products and related data.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/gnv01/turntable-treasures.git
    cd turntable-treasures
    ```

2. **Backend Setup:**

    - Ensure you have Java and Maven installed.
    - Set up MySQL and create a database named `turntable_treasures`.
    - Update the `application.properties` file with your database credentials.
    - Navigate to the backend directory and run:
        ```sh
        cd backend
        mvn spring-boot:run
        ```

3. **Frontend Setup:**

    - Ensure you have Node.js and npm installed.
    - Navigate to the frontend directory and run:
        ```sh
        cd frontend
        npm install
        npm start
        ```

## Usage

- Access the frontend at `http://localhost:3000` or `http://localhost:5173` depending on your configuration.
- Use the backend endpoints to manage products, albums, and songs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact Gustavo Nieto at [gnieto.liceo@gmail.com].

---

Thank you for visiting Turntable Treasures! Enjoy your shopping experience.
