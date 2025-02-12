import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Higher-Order Component (HOC) to protect routes and redirect unauthenticated users.
 *
 * @param {React.ComponentType} WrappedComponent - The component to be wrapped with authentication logic.
 * @returns {React.ComponentType} The enhanced component with authentication checks.
 */
const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const authToken = localStorage.getItem("authToken");

      // Redirect to login if authToken is not found
      if (!authToken) {
        navigate("/login");
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
