ShopNest – Online Shopping Platform
ShopNest is a full-featured front-end application built with React + Vite that offers users a clean, responsive and performant shopping experience. It serves as the UI portion of a shopping web-app (with assumed backend/API integration).
Features
Responsive shopping UI built with React and bundled with Vite for fast dev/HMR experience.
Product listing, product detail pages (assumed).
Shopping cart/tracking (if implemented).
Clean modern UI with likely CSS styling (you may be using Tailwind or custom CSS) — From the repo I see JavaScript & CSS.
Optimised build configuration and linting (there’s eslint.config.js in the root)
Deployed demo: https://shop-nest-shopping.vercel.app/
Demo
Live demo: https://shop-nest-shopping.vercel.app
Tech Stack
Frontend: React (via Vite) 
Linting / Code-Quality: ESLint (eslint.config.js is present) 
Styling: (Adjust based on your actual stack — CSS, SCSS, Tailwind, etc.)
Deployment: (If using Vercel as indicated)
Installation
# clone the repo
git clone https://github.com/MukeshKumarVishwakarma/ShopNest-Shopping.git
cd ShopNest-Shopping

# install dependencies
npm install
Running Locally
npm run dev
Building for Production
npm run build
Previewing Production Build
npm run serve
Folder Structure
/
├── public/
│   └── index.html
├── src/
│   ├── components/       # React components (buttons, cards, etc.)
│   ├── pages/            # Page components (Home, ProductDetail, Cart)
│   ├── assets/           # Images, icons, logos
│   ├── styles/           # CSS / SCSS / Tailwind config
│   ├── utils/            # Utilities, API clients, helpers
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md



