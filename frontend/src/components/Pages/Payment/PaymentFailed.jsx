import { Link } from "react-router-dom";
import "./PaymentFailed.css";

function PaymentFailed() {
  return (
    <div className="payment-failed">
      <div className="pf-container">
        <div className="pf-icon">
          <span className="pf-cross">&times;</span>
        </div>

        <h1 className="pf-heading">Payment Cancelled</h1>
        <p className="pf-message">
          Your payment was not completed. No amount has been charged.
        </p>

        <div className="pf-card">
          <div className="pf-card-row">
            <span className="pf-card-label">Payment Status</span>
            <span className="pf-card-value pf-status-cancelled">Cancelled</span>
          </div>
          <div className="pf-card-divider"></div>
          <div className="pf-card-row">
            <span className="pf-card-label">Booking Status</span>
            <span className="pf-card-value pf-status-unconfirmed">
              Not Confirmed
            </span>
          </div>
        </div>

        <div className="pf-actions">
          <Link to="/" className="pf-btn pf-btn-home">
            Back to Home
          </Link>
          <Link to="/stays" className="pf-btn pf-btn-retry">
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailed;
