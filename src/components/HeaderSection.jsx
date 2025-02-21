import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div style={heroContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={textContainer}
      >
        <h1 style={headingStyle}>Hello, I'm John Doe</h1>
        <p style={subheadingStyle}>I'm a Fullstack Developer</p>
        <p style={descriptionStyle}>
          I build web applications using React, Node.js, and more.
        </p>
      </motion.div>
    </div>
  );
};

const heroContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  backgroundImage: "url('https://via.placeholder.com/1500x1000')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  textAlign: "center",
};

const textContainer = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "20px",
  borderRadius: "8px",
};

const headingStyle = {
  fontSize: "50px",
  fontWeight: "bold",
};

const subheadingStyle = {
  fontSize: "24px",
  marginBottom: "10px",
};

const descriptionStyle = {
  fontSize: "18px",
  maxWidth: "600px",
  margin: "0 auto",
};

export default HeroSection;
