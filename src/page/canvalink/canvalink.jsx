import React from "react";
import './canvalink.css'
import { useLocation } from "react-router-dom";

const Canvalink = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const downloadLink = params.get("link");
  return (
    <div className="canvalinkall">
      <h1>
        Don’t wait! Start your Canva design journey today and create designs that
        wow your audience.
      </h1>

      <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="download-btn">
        📥 Click to Download Course
      </a>

      <p className="email-info">
        ✅ Check your <strong>email inbox</strong> for the course access link.<br />
        📩 If you don’t receive the mail within a few minutes, please check your{" "}
        <strong>Spam / Promotions folder</strong>.
      </p>
    </div>
  );
};

export default Canvalink;
