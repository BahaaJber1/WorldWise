# WorldWise

WorldWise is a React application for tracking cities and countries you have visited. It features authentication, protected routes, dynamic data management, and a modern UI. This project demonstrates advanced React patterns including context providers, code splitting, and custom hooks.

---

## Features

- **Authentication:** Login system with protected routes.
- **City & Country Tracking:** Add, view, and manage cities and countries you’ve visited.
- **Interactive Map:** Visualize locations on a map (Leaflet integration).
- **Form for Adding Cities:** Add new cities with details and location.
- **Responsive UI:** Mobile-friendly, clean design.
- **Code Splitting:** Uses React.lazy and Suspense for optimized loading.
- **Error Handling:** Custom error pages and loading spinners.

---

## Technologies Used

- React (functional components, hooks)
- React Router v7
- Context API for global state management
- Leaflet & React-Leaflet for maps
- Styled Components
- Vite for fast development
- json-server for mock backend

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server) for mock data

### Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory:

   ```bash
   cd 11 worldwise
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the mock backend server (in a separate terminal):

   ```bash
   npm run server
   ```

   > This will serve `data/cities.json` at [http://localhost:9000](http://localhost:9000).

5. Start the React development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) in your browser.

---

## Project Structure

- `src/App.jsx` – Main application and routing logic.
- `src/Contexts/CitiesContext.js` – Context provider for city data.
- `src/Contexts/FakeAuthContext.js` – Context provider for authentication.
- `src/pages/` – Page components (Homepage, Product, Pricing, Login, AppLayout, PageNotFound, ProtectedRoute).
- `src/components/` – UI components (CityList, CountryList, City, Form, SpinnerFullPage, Map, etc.).
- `src/data/cities.json` – Mock data for cities (used by json-server).

---

## Customization

- **Add/Edit Cities:** Modify `src/data/cities.json` for initial data.
- **Map Settings:** Update map logic in `src/components/Map.jsx`.
- **Styling:** Change styles in styled components or CSS files.
- **Authentication:** Customize logic in `src/Contexts/FakeAuthContext.js`.

---

## How It Works

- The app uses React Router for navigation and route protection.
- Authentication context manages login state and restricts access to certain routes.
- Cities and countries are managed via context and can be added/edited through forms.
- The map displays visited cities using Leaflet.
- Code splitting ensures fast initial load and lazy loading of pages.

---

## License

This project is for educational purposes only.

---