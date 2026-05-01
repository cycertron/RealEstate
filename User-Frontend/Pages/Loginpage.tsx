import React, { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FaArrowLeft, FaGoogle } from "react-icons/fa";

import { useAuth } from "../Contexts/Authcontext";

const Loginpage = () => {
  const navigateto = useNavigate();

  const auth = useAuth();
  if (!auth) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  const { login } = auth;

  const [form, setForm] = useState({
    Username: "",
    password: "",
  });

  const [error, setError] = useState("")

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (form.Username === "" || form.password === "") {
        setError("all fields are required");
        return;
      }


      await login(form);

      navigateto("/dashboard");
    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string }>;
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/users/auth/google`;
  };

  return (
    <div className="auth-page">
      <button className="auth-back" onClick={() => navigateto("/initialhome/herosection")}>
        <FaArrowLeft /> Back to home
      </button>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="auth-card"
      >
        <div className="auth-brand">
          <span>Estatly</span>
          <small>Welcome back</small>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="auth-title"
        >
          Sign in to continue your property search.
        </motion.h2>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="auth-error"
          >
            {error}
          </motion.p>
        )}

        <form className="auth-form" onSubmit={loginUser}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label>Username</label>
            <input
              type="text"
              name="Username"
              value={form.Username}
              placeholder="Enter username"
              onChange={handlechange}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter password"
              onChange={handlechange}
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="auth-submit"
          >
            Sign in
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="auth-social"
        >
          <p>Continue with</p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleGoogleLogin}
          >
            <FaGoogle />
            Google
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="auth-switch"
        >
          Don't have an account?{" "}
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateto("/register")}
          >
            Register
          </motion.span>
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Loginpage;
