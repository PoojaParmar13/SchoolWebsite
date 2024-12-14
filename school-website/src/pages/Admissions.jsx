const Admissions = () => {
  return (
    <div className="md:px-8 md:pb-8 p-2 bg-gray-200 md:pt-[7rem] pt-[6rem] border-gray-800 border-4">
        <h1 className="text-3xl font-bold  dark:text-light-text text-gray-600 mb-8 text-center underline">Admissions at Springdale Public School</h1>
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-background md:p-8 p-4 rounded border  border-gray-600">
        {/* Admission Overview */}
        <section className="mb-8">
          <h2 className="md:text-3xl text-[1.5rem] font-semibold dark:text-dark-text text-black mb-4">Admission Overview</h2>
          <p className="text-lg text-gray-700 dark:text-dark-text mb-4">
            Welcome to Springdale Public School! We are excited to have new students join our community. Our admission process is designed to ensure a smooth transition for students and parents. Below you will find detailed information about the admission process, criteria, important dates, and required documents.
          </p>
        </section>

        {/* Admission Process and Criteria */}
        <section className="mb-8">
          <h2 className="md:text-3xl text-[1.5rem] font-semibold dark:text-dark-text text-black mb-4">Admission Process and Criteria</h2>
          <p className="text-lg text-gray-700 dark:text-dark-text mb-4">
            Admission forms are available for download from our website or can be picked up from the school office. The completed form, along with the required documents, should be submitted at the school office. You can download the admission form here: <a href="/path-to-form.pdf" className="text-blue-600 underline">Download Admission Form</a>.
          </p>
          <p className="text-lg text-gray-700 dark:text-dark-text mb-4">
            The admission process is based on merit and the availability of seats. For certain grades, entrance tests may be conducted. Our admissions team will review all applications and notify parents of the results.
          </p>
          <p className="text-lg text-gray-700 dark:text-dark-text mb-4">
            We encourage parents to visit the school for a tour and meet with our faculty. Please contact us to schedule a visit.
          </p>
        </section>

        {/* Important Dates */}
        <section className="mb-8">
          <h2 className="md:text-3xl text-[1.5rem] font-semibold dark:text-dark-text text-black mb-4">Important Dates</h2>
          <ul className="list-disc pl-5 text-lg dark:text-dark-text text-gray-700">
            <li className="mb-2">Admission Form Availability: March 1st</li>
            <li className="mb-2">Last Date for Submission: March 31st</li>
            <li className="mb-2">Entrance Test: April 15th</li>
            <li className="mb-2">Announcement of Results: April 30th</li>
          </ul>
        </section>

        {/* Required Documents */}
        <section className="mb-8">
          <h2 className="md:text-3xl text-[1.5rem] font-semibold text-black dark:text-dark-text mb-4">Required Documents</h2>
          <ul className="list-disc pl-5 text-lgdark:text-dark-text dark:text-dark-text text-gray-700">
            <li className="mb-2">Admission Form</li>
            <li className="mb-2">Birth Certificate</li>
            <li className="mb-2">Previous 2year`s Results</li>
            <li className="mb-2">Adhar Card</li>
            <li className="mb-2">Samagra Id</li>
            <li className="mb-2">Caste Certificate</li>
            <li className="mb-2">Domicial Certificate</li>
            <li className="mb-2">Income Certificate</li>
            <li className="mb-2">Domicial Certificate</li>
            <li className="mb-2">2 Passport-sized Photo</li>
          </ul>
          <p className="text-lg dark:text-dark-text text-gray-700 mt-4">
            Please submit the required documents along with the completed admission form to the school office.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="md:text-3xl text-[1.5rem] font-semibold dark:text-dark-text text-black mb-4">Contact Information</h2>
          <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
            For any questions or further information regarding admissions, please contact our admissions office:
          </p>
          <p className="text-lg dark:text-dark-text text-gray-700 mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-lg dark:text-dark-text text-gray-700 mb-2"><strong>Email:</strong> admissions@springdale.edu</p>
          <p className="text-lg dark:text-dark-text text-gray-700"><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
