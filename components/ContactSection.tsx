"use client";

import { useState } from "react";
import React from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Get in Touch</h2>
        <p>Have a project or question? Let's talk.</p>

        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Your Message</label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Sending..."
            : submitStatus === "success"
            ? "Message Sent!"
            : "Send Message"}
        </button>

        {submitStatus === "success" && (
          <p className="status-message success">
            ✓ Thank you! I'll get back to you soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="status-message error">
            ✗ Something went wrong. Please try again.
          </p>
        )}
      </form>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          padding: 40px 20px;
        }

        .contact-form {
          width: 100%;
          max-width: 600px;
          background: #ffffff;
          border-radius: 12px;
          padding: 60px 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .contact-form h2 {
          font-size: 36px;
          font-weight: 700;
          color: #000;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .contact-form p {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          line-height: 1.5;
        }

        .input-group {
          position: relative;
          margin-bottom: 28px;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 12px 0;
          background: transparent;
          border: none;
          border-bottom: 2px solid #e0e0e0;
          color: #000;
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: transparent;
        }

        .input-group label {
          position: absolute;
          top: 12px;
          left: 0;
          color: #999;
          font-size: 14px;
          pointer-events: none;
          transform: translateY(0);
          transition: all 0.3s ease;
          background: transparent;
        }

        .input-group textarea {
          resize: none;
          padding: 12px 0;
          border-bottom: 2px solid #e0e0e0;
        }

        .input-group textarea + label {
          top: 12px;
          transform: none;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-bottom-color: #000;
        }

        .input-group input:focus + label,
        .input-group input:valid + label,
        .input-group textarea:focus + label,
        .input-group textarea:valid + label {
          top: -24px;
          font-size: 12px;
          color: #000;
          font-weight: 500;
        }

        button {
          width: 100%;
          padding: 14px 0;
          background: #000;
          border: none;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        button:hover:not(:disabled) {
          background: #333;
          transform: translateY(-1px);
        }

        button:active:not(:disabled) {
          transform: translateY(0);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .status-message {
          margin-top: 20px;
          padding: 14px;
          border-radius: 6px;
          font-size: 13px;
          text-align: center;
          font-weight: 500;
        }

        .status-message.success {
          background: #f0f0f0;
          color: #000;
          border-left: 3px solid #000;
        }

        .status-message.error {
          background: #fafafa;
          color: #000;
          border-left: 3px solid #000;
        }

        @media (max-width: 640px) {
          .contact-form {
            padding: 40px 30px;
          }

          .contact-form h2 {
            font-size: 28px;
          }

          .contact-form p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

import { AnimatePresence } from "framer-motion";
