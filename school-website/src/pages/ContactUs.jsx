import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
        setTimeout(() => {
          setStatus('');
        }, 1000);
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.142688743024!2d-77.03687048464924!3d38.90719057957019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b75d2f4a3c75%3A0x8c1a2de2ff926f11!2s1600%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020050%2C%20USA!5e0!3m2!1sen!2sin!4v1659472275942!5m2!1sen!2sin";

  return (
    <div className="bg-gray-200 px-8  pb-8 md:pt-[8rem] pt-[6rem] border-gray-800 border-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-4 bg-white dark:bg-dark-background rounded-lg dark:border-gray-500 border-gray-300 border-2">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center underline">Contact Us</h1>
          {status && <p className="text-center text-lg text-green-500">{status}</p>} {/* Display status message */}
          <form className="space-y-4 px-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="first-name" className="block font-semibold dark:text-dark-text text-gray-700">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block dark:text-light-text w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 sm:text-sm"
                  required
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label htmlFor="last-name" className="block font-semibold dark:text-dark-text text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block dark:text-light-text w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold dark:text-dark-text text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block dark:text-light-text w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="block font-semibold dark:text-dark-text text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block dark:text-light-text w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold dark:text-dark-text text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="block dark:text-light-text w-full px-3 py-2 border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 sm:text-sm"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 font-bold rounded-md hover:bg-blue-800">Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg dark:bg-dark-background dark:border-gray-500 border-gray-300 border-2">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center underline">Contact Information</h1>
          <div className="px-4">
            <div className="mb-2 flex items-center">
              <p className="text-lg font-medium dark:text-dark-text text-black pr-4">Mobile Number:</p>
              <p className="text-lg dark:text-dark-text text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div className="mb-2 flex items-center">
              <p className="text-lg font-medium dark:text-dark-text text-black pr-4">Email:</p>
              <p className="text-lg dark:text-dark-text text-gray-600">info@springdale.edu</p>
            </div>
            <div className="mb-2 flex items-center">
              <p className="text-lg font-medium dark:text-dark-text text-black pr-4">Location:</p>
              <p className="text-[0.8rem] dark:text-dark-text text-gray-600">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            </div>
            <div className="mb-2 flex items-center">
              <p className="text-lg font-medium dark:text-dark-text text-black pr-4">Follow Us:</p>
              <div className="flex space-x-5 pt-1">
                <a href="https://instagram.com" className="text-lg text-gray-800 dark:text-dark-text dark:hover:text-blue-600 hover:text-blue-600" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" className="text-lg text-gray-800 dark:text-dark-text dark:hover:text-blue-600 hover:text-blue-600" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com" className="text-lg text-gray-800 dark:text-dark-text dark:hover:text-blue-600 hover:text-blue-600" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com" className="text-lg text-gray-800 dark:text-dark-text dark:hover:text-blue-600 hover:text-blue-600" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
            {/* Google Map */}
            <div className="mt-4 mb-4 border-2 border-gray-400 dark:border-gray-500 overflow-hidden">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="285"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
