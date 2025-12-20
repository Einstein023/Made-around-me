import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './components/layout/heroSection.js';
import LoginForm from './components/features/auth/loginForm.js';
import SignupForm from './components/features/auth/signupForm.js';
import { UserContext } from './components/features/auth/UserContext.js';
import Home from './components/layout/home.js';
import { USER_DATA } from './components/features/auth/signupForm.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <HeroSection />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/signup",
    element: <SignupForm />
  },
  {
    path: "/dashboard",
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={USER_DATA}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
