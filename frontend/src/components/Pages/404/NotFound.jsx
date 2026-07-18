import { Link } from "react-router-dom";
import "./NotFound.css"
const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;