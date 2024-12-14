# School Website

## Overview

This project is a React-based school website created using Vite and styled with Tailwind CSS. The website includes various features such as admissions information, faculty listings, a gallery, and more.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later)
- **npm** (v9 or later)

### Installation

1. **Clone the Repository**
    Clone the repository to your local machine using:

   ```bash
   git clone https://github.com/PoojaParmar13/school-website.git

2. **Navigate to the Project Directory**
    Change into the project directory:

        cd school-website

3. **Install Dependencies**
    Install the project dependencies with:

        npm install

4. **Add Tailwind CSS**
    Initialize Tailwind CSS:

        npx tailwindcss init

5. **Update tailwind.config.js**
    Update your tailwind.config.js to include:

        /** @type {import('tailwindcss').Config} */
        export default {
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
        }

6. **Add Tailwind Directives to src/index.css**
    Ensure your src/index.css includes:

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

**Running the Project**
    To start the development server, use:

        npm run dev

    Open your browser and visit http://localhost:3000 to view the project.

**Building for Production**
    To create a production build of the project, use:

        npm run build

    This will generate a dist directory containing the production-ready files.

**Deployment**
    Deploy the website using a platform of your choice. Popular options include:

    Vercel: Great for deploying React applications with minimal configuration.
    Netlify: Offers easy deployment with continuous integration.
    GitHub Pages: Can be used for hosting static sites.

After setting up GitHub Pages in your repository settings, your site will be deployed to:

        https://PoojaParmar13.github.io/school-website

