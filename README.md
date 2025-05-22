# Maison Sports E-commerce

## Project Overview

A modern e-commerce website for sports equipment and apparel.

## Getting Started

### Available Scripts

In the project directory, you can run:

#### `npm install`

Installs the required dependencies for the project.

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.

#### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run preview`

Builds the app and then serves the production build locally for preview.

## Deployment

To deploy this project, you can use any static site hosting service like Vercel, Netlify, or GitHub Pages.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

# Maison Sports E-commerce

A modern, responsive e-commerce platform for high-end sports equipment and apparel, built with React and TypeScript.

![Maison Sports Screenshot](/public/screenshot.png)

## Features

- **Modern UI/UX** with smooth animations and transitions
- **Responsive Design** that works on all devices
- **Product Catalog** with filtering and search functionality
- **Shopping Cart** with persistent storage
- **Wishlist** to save favorite items
- **Product Details** with image gallery
- **Checkout Process** with form validation
- **Responsive Navigation** with mobile menu

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **State Management**: React Context API
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/maison-sports.git
   cd maison-sports
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```
   This will create a `dist` folder with the production build.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── data/           # Static data and mock database
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and helpers
├── pages/          # Page components
└── styles/         # Global styles and Tailwind config
```

## Deployment

Deploy the `dist` folder to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### Vercel Deployment

1. Push your code to a GitHub repository
2. Import the repository on Vercel
3. Vercel will automatically detect the Vite project and set up the build settings

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for the build tool
- [Framer Motion](https://www.framer.com/motion/) for animations
