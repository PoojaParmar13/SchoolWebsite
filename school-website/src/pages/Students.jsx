import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import campusImage1 from '../assets/campus1.jpg'; 
import campusImage2 from '../assets/campus2.jpg'; 
import campusImage3 from '../assets/campus3.jpg'; 
import campusImage4 from '../assets/campus4.jpg'; 
import labImage1 from '../assets/lab1.jpg'; 
import labImage2 from '../assets/lab2.jpg'; 
import labImage3 from '../assets/lab3.jpg'; 
import labImage4 from '../assets/lab4.jpg'; 
import labImage5 from '../assets/lab5.jpg'; 
import labImage6 from '../assets/lab6.jpg'; 
import labImage7 from '../assets/lab7.jpg'; 
import labImage8 from '../assets/lab8.jpg'; 
import computerImage1 from '../assets/computer1.jpg';
import computerImage2 from '../assets/computer2.jpg';
import computerImage3 from '../assets/computer3.jpg';
import studentImage from '../assets/students.png'; 
import transportImage from '../assets/transport.png';
import libraryImage1 from '../assets/library1.jpg'; 
import libraryImage2 from '../assets/library2.jpg'; 
import council1 from '../assets/Council1.jpg';
import council2 from '../assets/Council2.jpg';
import extracarriculam1 from '../assets/Extracurricular1.jpg';
import extracarriculam2 from '../assets/Extracurricular2.jpg';
import extracarriculam3 from '../assets/Extracurricular3.jpg';
import achievments1 from '../assets/Achievements1.jpg';
import achievments2 from '../assets/Achievements2.jpg';
import achievments3 from '../assets/Achievements3.jpg';

const Students = () => {
  return (
    <div className="md:mr-0 mr-[-6rem]  bg-gray-200 md:px-8  dark:bg-dark-background px-4  pb-8 pt-[7rem] border-gray-800 border-4">
      <h1 className="md:text-4xl text-3xl font-bold text-blue-600 mb-8 mt-2 text-center">Students Life in Our School</h1>
      <div className="max-w-7xl mx-auto">
        <section className="mb-12 md:flex">
          <div className="md:w-2/5 pr-4 w-[18rem] md:pl-0 pl-[1rem]">
            <img src={studentImage} alt="Students Life in our school" className="w-80 h-auto md:ml-12 ml-0 mt-2" />
          </div>
          <div className="md:w-3/5 w-full">
            <p className="text-lg  mr-[-2rem] text-gray-950 dark:text-dark-text font-semibold mt-8 pr-10">
              Springdale Public School is an environment that is bustling with activity, 
              full of excitement, and overflowing with life. Students build friendships, 
              learn responsibility and work hard in a safe, secure environment.  
              Whether we are singing, acting, competing, or learning, we are doing 
              so in a unique way to create an education that defines a lifetime.  
              At Greenfield, our students experience many fun and exciting events that involve the entire school.  
              From pep rallies, to participation in many events within the community,
              we believe in the importance of the entire student body being involved together.          
            </p>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Campus Overview */}
        <section className="mb-4">
          <h1 className="text-3xl font-bold dark:text-dark-text text-gray-700 mb-8 text-center">Campus Facilities</h1>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our campus spans over two acres of lush green, pollution-free environment, offering both outdoor and indoor games, uninterrupted power supply, and centrally air-conditioned facilities for pre-primary classes with excellent interiors.
                Each day presents new challenges, and every small victory is savored. The rigorous schedule at Spring Dale School teaches effective time management and the ability to handle multiple tasks simultaneously. Besides academics, students engage in co-curricular activities, clubs, societies, sports, and games, ensuring there is never a dull moment.
                We also offer a range of facilities, including a well-maintained sports ground, a swimming pool, and state-of-the-art classrooms that support interactive learning.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={campusImage1} alt="Campus View 1" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={campusImage2} alt="Campus View 2" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={campusImage3} alt="Campus View 3" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={campusImage4} alt="Campus View 4" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Science Labs */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">Science Labs</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our science labs are equipped with modern equipment and meet prescribed norms and standards. The separate labs for physics, chemistry, biology, and mathematics are spacious and designed to facilitate comfortable student work.
                Each lab is equipped with the latest technology and resources to support hands-on learning and experimentation. The labs are maintained to the highest standards, ensuring a safe and productive environment for students.
              </p>
              <p className="text-lg text-gray-800  dark:text-dark-text my-4 mx-4">
                In addition to core subjects, the labs offer opportunities for interdisciplinary projects and research, allowing students to explore their interests and develop practical skills.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={labImage1} alt="Lab View 1" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={labImage2} alt="Lab View 2" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={labImage3} alt="Lab View 3" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={labImage4} alt="Lab View 4" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={labImage5} alt="Lab View 5" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={labImage6} alt="Lab View 6" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* ATAL Tinkering Lab */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">ATAL Tinkering Lab</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our ATAL Tinkering Lab is designed to encourage innovation and creativity among students with various hands-on activities and projects. The lab features a wide range of tools and materials to support inventive learning and problem-solving skills.
                Students have the opportunity to work on real-world projects and develop practical skills that complement their academic studies.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={labImage7} alt="Lab View 7" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={labImage8} alt="Lab View 8" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Computer Lab */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold dark:text-dark-text text-gray-700 mb-8 text-center">Computer Lab</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our computer lab is equipped with the latest technology and high-speed internet to ensure students have access to the best resources for learning. The lab provides a conducive environment for both individual and group projects.
                Students can develop their technical skills through various software programs and applications used in the industry.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={computerImage1} alt="Computer Lab View 1" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={computerImage2} alt="Computer Lab View 2" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={computerImage3} alt="Computer Lab View 3" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Library */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">Library</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our library is a haven for book lovers and researchers alike. It houses a vast collection of books, journals, and digital resources that cater to diverse interests and academic needs.
                The library is designed to offer a quiet and comfortable space for reading, studying, and accessing resources. It also hosts various events and workshops to foster a love for literature and learning among students.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={libraryImage1} alt="Library View 1" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={libraryImage2} alt="Library View 2" className="rounded-lg shadow-black dark:shadow-white shadow-lg w-full h-auto object-cover" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Transport Facilities */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">Transport Facilities</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our school provides safe and reliable transport facilities for students, ensuring they have a convenient way to commute to and from school. The fleet of buses is well-maintained and equipped with safety features to ensure a comfortable journey.
                The transport services are designed to meet the needs of all students, providing a reliable and efficient solution for daily commutes.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[2.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <img src={transportImage} alt="Transport Facilities" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Extracurricular Activities, Clubs, and Societies */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">Extracurricular Activities, Clubs, and Societies</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                At Springdale Public School, students are encouraged to participate in a diverse range of extracurricular activities, clubs, and societies. These opportunities help in holistic development, allowing students to explore their interests and passions beyond the classroom. 
                From academic clubs like the Science Club and Debate Society to creative outlets such as Drama Club and Art Society, there is something for everyone. Participation in these activities fosters teamwork, leadership skills, and a sense of community.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={extracarriculam1} alt="Extracurricular Activities 1" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={extracarriculam2} alt="Extracurricular Activities 2" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={extracarriculam3} alt="Extracurricular Activities 3" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>              
                </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black mb-12 dark:border-white" />

        {/* Achievements and Accolades */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">Achievements and Accolades</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                Our students have consistently excelled in various fields, bringing pride to our school with their remarkable achievements. Whether it``s winning inter-school competitions, excelling in national examinations, or receiving prestigious awards, our students continually demonstrate their dedication and talent.
                Here are some highlights of recent accolades:
                - National Science Olympiad Gold Medalists
                - Winners of the Regional Debate Championship
                - Top Performers in the Annual Art Exhibition
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={achievments1} alt="Achievements 1" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={achievments2} alt="Achievements 2" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={achievments3} alt="Achievements 3" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>             
                </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-black dark:border-white mb-12" />

        {/* Student Council and Leadership Opportunities */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-dark-text mb-8 text-center">Student Council and Leadership Opportunities</h2>
          <div className="md:flex">
            <div className="md:w-3/5 w-full pr-4">
              <p className="text-lg text-gray-800 dark:text-dark-text my-4 mx-4">
                The Student Council at Springdale Public School provides a platform for students to take on leadership roles and make a positive impact on the school community. Members of the council are involved in organizing events, representing student interests, and fostering a spirit of collaboration and responsibility.
                Leadership opportunities also extend to various clubs and societies, where students can develop and practice their leadership skills. Through these roles, students learn valuable lessons in teamwork, problem-solving, and effective communication.
              </p>
            </div>
            <div className="md:ml-[8rem] md:mt-[2rem] mt-0 ml-[3.5rem] md:w-2/5 md:pr-4 w-[12rem] md:pl-0 ">
              <Carousel 
                infiniteLoop 
                autoPlay 
                showThumbs={false} 
                showIndicators={true} 
                showStatus={false} 
                className="mb-8 md:ml-[0rem] ml-[-2rem]"
              >
                <div>
                  <img src={council1} alt="Student Council 1" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>
                <div>
                  <img src={council2} alt="Student Council 2" className="rounded-lg dark:shadow-white shadow-black shadow-lg w-full h-auto object-cover" />
                </div>              
                </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;

