const AboutUs = () => {
  return (
    <div className="md:px-8 md:pb-8 px-2 pb-8 bg-gray-200 md:pt-[7rem] pt-[6rem] border-gray-800 border-4">
      <h1 className="text-3xl font-bold dark:text-light-text text-gray-600 mb-8 text-center underline">About Us</h1>
      <div className="md:mx-10 mx-1 dark:bg-dark-background bg-white my-2 p-4 rounded shadow-md border border-gray-600">
      {/* History */}
      <section className="mb-8">
        <h2 className="md:text-3xl text-[1.7rem] font-semibold text-blue-500 underline mb-4">Our History</h2>
        <p className="text-lg dark:text-dark-text text-gray-700">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. From a modest beginning, we have grown into a leading educational institution known for our commitment to excellence and innovation in teaching.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="mb-8">
        <h2 className="md:text-3xl text-[1.7rem] font-semibold text-blue-500 underline mb-4">Vision & Mission</h2>
        <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
          <strong className="text-gray-800">Vision:</strong> To create a learning environment that fosters academic excellence, critical thinking, and ethical values. We aim to develop well-rounded individuals who are prepared to contribute positively to society.
        </p>
        <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
          <strong className="text-gray-800">Mission:</strong> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. Our mission is to deliver a comprehensive education that supports intellectual, emotional, and social growth.
        </p>
      </section>

      {/* Principal's Message */}
      <section className="mb-8">
        <h2 className="md:text-3xl text-[1.7rem] font-semibold text-blue-500 underline mb-4">Principal`s Message</h2>
        <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
          Dear Students, Parents, and Staff,
        </p>
        <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
          At Springdale Public School, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated team of educators works relentlessly to provide a supportive and stimulating learning environment where each student can excel.
        </p>
        <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
          We are committed to fostering an atmosphere of respect, inclusivity, and collaboration. Our goal is to prepare students not just for academic success but also for life beyond the classroom. We encourage you to explore our programs, engage with our community, and be a part of our journey towards educational excellence.
        </p>
        <p className="text-lg dark:text-dark-text text-gray-700">
          Sincerely,<br />
          <strong>Dr. John Doe</strong><br />
          Principal
        </p>
      </section>

      {/* Infrastructure and Facilities */}
      <section className="mb-4">
        <h2 className="md:text-3xl text-[1.7rem] font-semibold text-blue-500 underline mb-4">Infrastructure and Facilities</h2>
        <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
          At Springdale Public School, we offer state-of-the-art infrastructure and facilities to support an enriching educational experience:
        </p>
        <ul className="list-disc ml-5 text-lg dark:text-dark-text text-gray-700">
          <li className="pb-2"><strong>State-of-the-art Science and Computer Labs:</strong> Equipped with the latest technology for hands-on learning and experimentation.</li>
          <li className="pb-2"><strong>Spacious and Well-Equipped Classrooms:</strong> Designed to create a conducive learning environment with modern amenities.</li>
          <li className="pb-2"><strong>Spacious and Well-Equipped Classrooms:</strong> Designed to create a conducive learning environment with modern amenities.</li>
          <li className="pb-2"><strong>Library:</strong> A vast collection of books and digital resources to support academic and personal growth.</li>
          <li className="pb-2"><strong>Sports Facilities:</strong> Including a playground, gymnasium, and swimming pool to promote physical fitness and sportsmanship.</li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
