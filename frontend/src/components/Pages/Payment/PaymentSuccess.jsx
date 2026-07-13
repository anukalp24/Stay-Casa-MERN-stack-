import { Link } from "react-router-dom";
import "./PaymentSuccess.css";

function PaymentSuccess() {
  return (
    <div className="payment-success">
      <div className="ps-confetti">
        <span className="confetti-dot dot-1"></span>
        <span className="confetti-dot dot-2"></span>
        <span className="confetti-dot dot-3"></span>
        <span className="confetti-dot dot-4"></span>
        <span className="confetti-dot dot-5"></span>
        <span className="confetti-dot dot-6"></span>
        <span className="confetti-dot dot-7"></span>
        <span className="confetti-dot dot-8"></span>
      </div>

      <div className="ps-container">
        <div className="ps-icon">
          <span className="ps-check">&#10003;</span>
        </div>

        <h1 className="ps-heading">Payment Successful!</h1>
        <p className="ps-message">
          Your booking payment has been completed successfully.
        </p>

        <div className="ps-card">
          <div className="ps-card-row">
            <span className="ps-card-label">Payment Status</span>
            <span className="ps-card-value ps-status-success">Successful</span>
          </div>
          <div className="ps-card-divider"></div>
          <div className="ps-card-row">
            <span className="ps-card-label">Booking Status</span>
            <span className="ps-card-value ps-status-confirmed">Confirmed</span>
          </div>
        </div>

        <Link to="/" className="ps-btn ps-btn-home">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
