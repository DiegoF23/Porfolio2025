import React from "react";
import "../styles/AboutContact.css";

export default function Footer(){
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} Diego Flores
    </footer>
  );
}
