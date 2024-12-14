import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyNow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    district: '',
    state: '',
    pinCode: '',
    aadharNumber: '',
    aadharCard: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, aadharCard: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      const form = e.target;
      if (form.checkValidity()) {
        setStep(2);
      }
    } else if (step === 2) {
      const { aadharNumber } = formData;
      
      if (aadharNumber.length !== 12 || !/^\d{12}$/.test(aadharNumber)) {
        alert('Please enter a valid 12-digit Aadhar number.');
        return;
      }
      alert('Your form has been submitted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="bg-gray-200 md:px-8 px-2 pb-8 md:pt-[6rem] pt-[5rem] border-gray-800 border-4">
      <h1 className="text-3xl font-bold text-gray-600 mb-8 text-center underline">Apply Now</h1>
      <div className="md:mx-40 mx-0 bg-white dark:bg-dark-background my-2 py-4 px-12 rounded shadow-md border border-gray-600">
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-lg font-medium dark:text-dark-text text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 border-2 dark:text-light-text border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-lg font-medium dark:text-dark-text text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2  border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium dark:text-dark-text text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-lg font-medium dark:text-dark-text text-gray-700">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    name="mobile" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-lg font-medium dark:text-dark-text text-gray-700">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-lg font-medium dark:text-dark-text text-gray-700">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="district" className="block text-lg font-medium dark:text-dark-text text-gray-700">District</label>
                  <input 
                    type="text" 
                    id="district" 
                    name="district" 
                    value={formData.district} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-lg font-medium dark:text-dark-text text-gray-700">State</label>
                  <input 
                    type="text" 
                    id="state" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="pinCode" className="block text-lg font-medium dark:text-dark-text text-gray-700">Pin Code</label>
                  <input 
                    type="text" 
                    id="pinCode" 
                    name="pinCode" 
                    value={formData.pinCode} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white font-semibold px-8 py-1 rounded hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Document Details</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="aadharNumber" className="block text-lg font-medium dark:text-dark-text text-gray-700">Aadhar Number</label>
                  <input 
                    type="text" 
                    id="aadharNumber" 
                    name="aadharNumber" 
                    value={formData.aadharNumber} 
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 dark:text-light-text border-2 border-gray-400 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="aadharCard" className="block text-lg font-medium dark:text-dark-text text-gray-700">Upload Aadhar Card</label>
                  <input 
                    type="file" 
                    id="aadharCard" 
                    name="aadharCard" 
                    onChange={handleFileChange} 
                    className="mt-1 block w-full px-3 dark:text-light-text py-2 border-2 border-gray-400 dark:border-gray-500 dark:bg-light-background rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="text-center mt-6">
              <button 
                  type="submit" 
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
