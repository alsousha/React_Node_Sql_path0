import React, { useState } from 'react';
import './FormModal.css';

function FormModal({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nText: ${formData.text}`);
    setFormData({ email: '', text: '' });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="text">Text:</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
