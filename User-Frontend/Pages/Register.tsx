import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { FaArrowLeft, FaGoogle } from "react-icons/fa";

const Register = () => {

  const navigateto = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    Username: "",
    Name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { confirmPassword, ...rest } = form;

      if (
        confirmPassword == "" ||
        rest.Username == "" ||
        rest.Name == "" ||
        rest.email == "" ||
        rest.password == ""
      ) {
        setError("all fields are required");
        return;
      }

      if (confirmPassword != rest.password) {
        setError("passwords should be same");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/register`,
        rest
      );

      navigateto("/login")

    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string }>
      setError(err.response?.data?.message || "registration failed");
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
        className="auth-card">
        <div className="auth-brand">
          <span>Estatly</span>
          <small>Create your buyer account</small>
        </div>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="auth-title">Save properties and book tours faster.</motion.h2>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="auth-error">
            {error}
          </motion.p>
        )}

        <form className="auth-form" onSubmit={registerUser}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
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
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}>
            <label>Name</label>
            <input
              name="Name"
              type="text"
              value={form.Name}
              placeholder="Enter full name"
              onChange={handlechange}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter email"
              onChange={handlechange}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter password"
              onChange={handlechange}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}>
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
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
            Create account
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="auth-social">
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
          Already have an account?{" "}
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateto("/login")}
          >
            Login
          </motion.span>
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Register;
