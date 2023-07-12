# Reebelo Full Stack Engineer Case Study

~~[https://master--starlit-yeot-236588.netlify.app/](https://master--starlit-yeot-236588.netlify.app/)~~ (**Deleted due to limited budget**)

<br />

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://shields.io/)
[![typescript](https://img.shields.io/badge/typescript-4.9.5-blue.svg)](https://shields.io/)
[![webpack](https://img.shields.io/badge/webpack-5.74.0-green.svg)](https://shields.io/)

A React application implemented with TypeScript using Webpack. It provides a seamless user experience by dynamically loading additional data when the scroll reaches the bottom of the page. This allows for efficient handling of large datasets without overwhelming the user.

-   Server: [https://github.com/PureDevPer/reebelo-server](https://github.com/PureDevPer/reebelo-server)

## Features

-   **Scroll-based API Calls:** To enhance performance and avoid loading a large number of products at once, the application implements a dynamic loading mechanism. As the user scrolls to the bottom of the page, an API call is triggered to fetch additional products. This approach ensures a smoother browsing experience, especially when dealing with a substantial amount of data.

    -   **Lazy Loading Alternative:** In cases where a significant amount of data needs to be displayed initially, lazy loading can be implemented to load data as the user interacts with the page. However, in this implementation, due to limited test data, the decision was made to load more data when the scroll reaches the bottom of the broswer.

-   **Custom Dropdown Menu:** The project includes a custom dropdown menu that is activated when the user clicks on one of the popular phone items. This allows for seamless naviation to a new page, where the dropdown menu can be utilized for further interaction. If no stock is available, the dropdown menu won't be displayed

## Limitation

-   **Geolocation-based Caching:** Although caching functionality has not been implemented in the current version, there is an idea to leverage customer geolocation. By integrating gelocation data with the application, the estimated delivery time calculation can be optimized, leading to quicker loading and improved user experience.

## Getting Started

TO run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/PureDevPer/reebelo-client.git`
2. Install dependencies: `npm install`, `yarn`, etc.
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:8082`
