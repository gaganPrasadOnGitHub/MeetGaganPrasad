import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="relative App flex flex-col w-full max-w-[1200px] mx-auto min-h-[100dvh] overflow-x-hidden md:overflow-visible ">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
