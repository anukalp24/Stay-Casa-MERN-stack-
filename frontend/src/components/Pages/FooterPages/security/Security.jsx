import React from "react";
import "./Security.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

const SecurityPrivacy = () => {
  return (
    <>
    <Navbar/>
    <div className="privacy-container">

      <div className="privacy-hero">
        <h1>Security & Privacy</h1>
        <p>
          Your trust matters to us. We are committed to protecting your
          personal information and providing a safe experience while using
          UrbanStay.
        </p>
      </div>

      <div className="privacy-content">

        <section className="privacy-card">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide during registration, property
            bookings, hosting activities, and customer support interactions.
            This may include your name, email address, phone number, and
            booking details.
          </p>
        </section>

        <section className="privacy-card">
          <h2>How We Use Your Information</h2>
          <p>
            Your information is used to manage your account, process bookings,
            improve our services, communicate important updates, and enhance
            your overall experience on our platform.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Account Security</h2>
          <p>
            We use secure authentication methods, encrypted passwords, and
            protected session management to help keep your account safe.
            Never share your login credentials with anyone.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Payments</h2>
          <p>
            Payments are processed securely through trusted third-party payment
            providers. UrbanStay does not store your complete card details on
            our servers.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Cookies</h2>
          <p>
            We use cookies to maintain your session, remember preferences, and
            improve website performance. You may disable cookies through your
            browser settings, although some features may not function properly.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Your Privacy</h2>
          <p>
            We never sell your personal information. Your data is only shared
            when necessary to provide our services or comply with applicable
            legal requirements.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Contact Us</h2>
          <p>
            If you have questions regarding security or privacy, please contact
            our support team at support@urbanstay.com.
          </p>
        </section>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default SecurityPrivacy;