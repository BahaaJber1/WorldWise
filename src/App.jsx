import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CititesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-CdKcWpjt.css   26.47 kB │ gzip:   4.34 kB
// dist/assets/index-DDeLZsX1.js   401.31 kB │ gzip: 118.76 kB



function App() {
	return (
		<AuthProvider>
			<CititesProvider>
				<BrowserRouter>
					<Suspense fallback={<SpinnerFullPage />}> {/* */}
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="pricing" element={<Pricing />} />
							<Route path="product" element={<Product />} />
							<Route path="login" element={<Login />} />
							<Route path="app" element={<AppLayout />}>
								<Route index element={<Navigate replace to="cities" />} />
								<Route
									path="cities"
									element={
										<ProtectedRoute>
											<CityList />
										</ProtectedRoute>
									}
								/>
								<Route path="cities/:id" element={<City />} />
								<Route path="countries" element={<CountryList />} />
								<Route path="form" element={<Form />} />
							</Route>
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</CititesProvider>
		</AuthProvider>
	);
}

export default App;
