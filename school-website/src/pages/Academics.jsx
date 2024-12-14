import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClassroomImage1 from '../assets/class1.jpg';
import ClassroomImage2 from '../assets/class2.jpg';
import ClassroomImage3 from '../assets/class3.jpg';
import library from '../assets/library1.jpg';

const Academics = () => {
  return (
    <div className=" md:px-8 md:pb-8 p-2 bg-gray-200 md:pt-[7rem] pt-[6rem] border-gray-800 border-4 w-">
        <h1 className="text-3xl font-bold text-gray-600 dark:text-light-text mb-8 text-center underline">Academics at Springdale Public School</h1>
        <div className="md:mx-0 mx-1 md:px-10 px-4 dark:bg-dark-background bg-white my-2 p-4 rounded shadow-md border border-gray-600">

        {/* Curriculum */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-dark-text text-gray-700 underline pb-4 ">Curriculum</h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Primary (Grades 1-5)</h3>
            <p className="text-lg dark:text-dark-text text-gray-700">
              Our primary curriculum focuses on fundamental skills and knowledge across various subjects to build a strong academic foundation. Subjects include:
              <ul className="list-disc pl-5 mt-2 dark:text-dark-text text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Secondary (Grades 6-10)</h3>
            <p className="text-lg dark:text-dark-text  text-gray-700">
              The secondary curriculum aims to deepen student’s understanding and prepare them for higher education. Subjects include:
              <ul className="list-disc pl-5 mt-2 dark:text-dark-text text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Senior Secondary (Grades 11-12)</h3>
            <p className="text-lg dark:text-dark-text text-gray-700">
              Students can choose between different streams based on their interests and career goals:
              <ul className="list-disc pl-5 mt-2 dark:text-dark-text text-gray-700">
                <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                <li><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
              </ul>
            </p>
          </div>
        </section>

        {/* Teaching Methodologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-dark-text text-gray-700 underline pb-4">Teaching Methodologies</h2>
          <p className="text-lg  dark:text-dark-text text-gray-700">
            We employ a blend of traditional and modern teaching techniques to cater to various learning styles. Our methodologies include interactive lessons, project-based learning, and technology integration to enhance student engagement and comprehension.
          </p>
        </section>

        {/* Educational Resources */}
        <section className="mb-4 flex flex-col sm:flex-row items-start">
          <div className="flex-1 mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold dark:text-dark-text text-gray-700 underline pb-4">Educational Resources</h2>
            <p className="text-lg dark:text-dark-text text-gray-700 mb-4">
              Our educational resources include:
              <ul className="list-disc pl-5 mt-2 dark:text-dark-text text-gray-700 pb-4">
                <li>Digital classrooms</li>
                <li>Interactive learning modules</li>
                <li>Access to online educational platforms</li>
                <li>Extensive library resources</li>
                <li>Hands-on laboratory experiences</li>
              </ul>
              These resources support a rich and diverse learning environment, preparing students for academic and personal success.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <div className=" md:mt-20 mt-0 mr-10 md:w-full w-[20rem] md:ml-0 ml-[1.5rem] sm:w-4/5 lg:w-3/4 xl:w-2/3">
              <Carousel 
                showArrows={true} 
                showThumbs={false} 
                infiniteLoop={true} 
                autoPlay={true} 
                interval={3000}
                className="w-50 h-50 rounded-lg md:mr-[0rem] mr-[8rem]"
              >
                <div className="bg-gray-200 rounded">
                  <img src={ClassroomImage1} alt="Classroom 1" className="w-50 h-50 object-cover rounded-lg" />
                </div>
                <div className="bg-gray-200 rounded">
                  <img src={ClassroomImage2} alt="Classroom 2" className="w-50 h-50 object-cover rounded-lg" />
                </div>
                <div className="bg-gray-200 rounded">
                  <img src={ClassroomImage3} alt="Classroom 3" className="w-50 h-50 object-cover rounded-lg" />
                </div>
                <div className="bg-gray-200 rounded">
                  <img src={library} alt="Library" className="w-50 h-50 object-cover rounded-lg" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
