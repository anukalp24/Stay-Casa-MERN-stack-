# Stay-Casa - Airbnb Personal Clone

A full-stack property rental platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse properties, list their own spaces, manage wishlists, and handle authentication.

## Tech Stack

**Frontend:** React 19, React Router 7, Vite 8, CSS  
**Backend:** Node.js, Express 5, Mongoose, MongoDB  
**Auth:** JWT, bcryptjs  
**Other:** Multer (file uploads), Nodemailer (password reset)

## Features

- **Authentication** — Sign up, login, JWT-based protected routes
- **Property CRUD** — Add, edit, delete your own property listings with image uploads
- **Browse & Search** — Browse all properties, search by city name
- **Property Details** — View single property with booking card
- **Wishlist** — Add/remove properties to your wishlist
- **Dashboard** — Manage your own listings
- **Password Reset** — Forgot password flow via email (Nodemailer + Gmail SMTP)

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, property grid, categories |
| `/auth` | Login / Sign Up |
| `/Host` | Add / Edit property |
| `/dashboard` | User dashboard — manage listings |
| `/home/:id` | Property details |
| `/search` | Search results by city |
| `/wishlist` | User wishlist |
| `/About` | About page |
| `/Contact` | Contact form |
| `/forgot-password` | Request password reset |
| `/reset-password/:token` | Set new password |

## API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/signin` | No | Register |
| POST | `/login` | No | Login |
| POST | `/forget-Password` | No | Send reset email |
| POST | `/reset-password/:token` | No | Reset password |
| GET | `/` | No | All properties |
| GET | `/home/:id` | No | Single property |
| POST | `/search` | No | Search by city |
| POST | `/addhome` | Yes | Create listing |
| GET | `/dashboard` | Yes | My listings |
| PUT | `/edithome/:id` | Yes | Update listing |
| DELETE | `/deletehome/:id` | Yes | Delete listing |
| PUT | `/wishlist/:id` | Yes | Add to wishlist |
| GET | `/wishlist` | Yes | Get wishlist |
| DELETE | `/Removewishlist/:id` | Yes | Remove from wishlist |

## Installation

```bash
# Clone the repo
git clone https://github.com/your-username/stay-casa.git
cd stay-casa

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Set up environment variables in Backend/.env
# JWT_SECRET, EMAIL_USER, EMAIL_PASS

# Make sure MongoDB is running locally on port 27017

# Start backend (port 4090)
npm start

# Start frontend (port 5173) in a new terminal
cd frontend && npm run dev
```
