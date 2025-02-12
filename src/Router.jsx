import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login/Login";
import Reset from "./pages/auth/Reset/Reset";
import Navbar from "./themes/components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import LoadingPage from "./themes/components/LoadingPage/LoadingPage";
import Layout from "./Layout";
import RegisterUser from "./pages/auth/RegisterUser/RegisterUser";

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Layout>
            <Suspense fallback={<LoadingPage />} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/register-user" element={<RegisterUser />} />
            </Routes>
          </Layout>
        </>
      )}
    </Router>
  );
};

export default AppRouter;
