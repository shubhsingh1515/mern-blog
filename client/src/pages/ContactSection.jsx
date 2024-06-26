import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice'; 

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); 
  
    emailjs
      .send(
        'service_2i8420e', 
        'template_hdvtuwg', 
        formData,
        'D-na0r_EM4v_ennvI' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('Thank you for your message. We will get back to you soon!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };
  

  const toggleThemeMode = () => {
    dispatch(toggleTheme()); 
  };

  return (
    <div className={`bg-${theme === 'light' ? 'white' : 'gray-900'} py-8`}>
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Contact Us</h2>
        {successMessage && <p className={`text-green-500 text-center mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{successMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={`text-sm font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'} block mb-2`}>Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`bg-${theme === 'light' ? 'white' : 'gray-800'} border border-gray-300 text-${theme === 'light' ? 'gray-900' : 'white'} sm:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5`}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={`text-sm font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'} block mb-2`}>Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-${theme === 'light' ? 'white' : 'gray-800'} border border-gray-300 text-${theme === 'light' ? 'gray-900' : 'white'} sm:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5`}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className={`text-sm font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'} block mb-2`}>Your Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`bg-${theme === 'light' ? 'white' : 'gray-800'} border border-gray-300 text-${theme === 'light' ? 'gray-900' : 'white'} sm:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75`}
          >
            Send Message
          </button>
        </form>
 
      </div>
    </div>
  );
};

export default ContactSection;
