import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage1 from '../assets/carousel-1.jpg';
import bannerImage2 from '../assets/carousel-2.jpg';
import logo from '../assets/logos.png'; 
import reviewer from '../assets/reviewer.png'
import sportsImage from '../assets/sports.jpg';
import scienceImage from '../assets/science.jpg';
import culturalImage from '../assets/cultural.jpg';
import teamImage1 from '../assets/team1.jpg';
import galleryImage1 from '../assets/gallery1.jpg';
import galleryImage2 from '../assets/gallery2.jpg';
import galleryImage3 from '../assets/gallery3.jpg';
import galleryImage4 from '../assets/gallery4.jpg';
import galleryImage5 from '../assets/gallery5.jpg';
import galleryImage6 from '../assets/gallery6.jpg';
import galleryImage7 from '../assets/gallery7.jpg';
import galleryImage8 from '../assets/gallery8.jpg';
import ContactUs from './ContactUs';

const reviews = [
  { image: reviewer, name: 'John Doe', feedback: 'Great school with excellent teachers!', rating: 5 },
  { image: reviewer, name: 'Jane Smith', feedback: 'My child loves the extracurricular activities.', rating: 4 },
  { image: reviewer, name: 'Michael Johnson', feedback: 'The facilities are top-notch and the staff is very supportive.', rating: 5 },
  { image: reviewer, name: 'Emily Davis', feedback: 'A fantastic environment for learning and growth.', rating: 4 },
  { image: reviewer, name: 'Sarah Wilson', feedback: 'Great academic and extracurricular programs.', rating: 5 },
  { image: reviewer, name: 'Armando Jha', feedback: 'School faculty is very familiar.', rating: 5 },
  { image: reviewer, name: 'Risabh Sah', feedback: 'My child`s progress is amazing, she really enjoys coming to school', rating: 5 },
  { image: reviewer, name: 'Swati Dhamande', feedback: 'Good efforts by all teachers', rating: 4 },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const getStarRating = (rating) => {
  const fullStars = '★'.repeat(rating);
  const emptyStars = '★'.repeat(5 - rating);
  return (
    <>
      <span className="text-yellow-500">{fullStars}</span>
      <span className="text-gray-400">{emptyStars}</span>
    </>
  );
};

const HomePage = () => {

  const reviewChunks = chunkArray(reviews, 4);

  return (
    <div className="relative">
      {/* Carousel Section */}
      <div className="relative md:h-screen h:full md:mt-[4.5rem] mt-[3.5rem]">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          showIndicators={false}
          interval={5000}
        >
          <div>
            <img src={bannerImage1} alt="School Banner 1" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={bannerImage2} alt="School Banner 2" className="w-full h-full object-cover" />
          </div>
        </Carousel>
        <div className="absolute top-0 left-0 right-0 -bottom-20 bg-black opacity-70 "></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <img src={logo} alt="School Logo" className="md:h-32 h-16 md:mt-[-5rem]" />
          <h2 className="md:text-6xl text-3xl font-semibold md:mt-8 mt-1">Welcome</h2>
          <h2 className="md:text-2xl text-1xl font-emibold md:mt-4 mt-0">to</h2>
          <h2 className="md:text-5xl text-2xl font-semibold md:mt-4 mt-0 text-white">Springdale Public School</h2>
          <p className="mt-1 md:text-2xl text-1xl text-blue-500">Where we nurture young minds for a brighter future.</p>
        </div>
      </div>

      {/* School Introduction Section */}
      <div className="pt-4 pb-8 px-8 dark:bg-dark-background bg-white relative z-10">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 underline">About Our School</h2>
        <p className="text-lg">
          Springdale Public School, founded in 1985, has been dedicated to providing quality education and holistic development to students.
          Our vision is to create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
        <div className="mt-4 text-lg">
          <p>Join us at Springdale Public School, where quality education meets holistic development. Prepare for a dynamic future with us.</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>CBSE Affiliation</li>
            <li>Holistic Development Approach</li>
            <li>Passionate Educators</li>
            <li>Inclusive Environment</li>
          </ul>
          <p className="mt-2">Experience excellence, grow holistically, with devoted educators. Springdale Public School awaits your kid`s dynamic future.</p>
        </div>
      </div>

      {/* Event Section */}
      <div className="pt-4 px-8 pb-12 h-full dark:bg-dark-background bg-gray-100">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 underline">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-2 rounded-lg shadow-md flex flex-col items-center">
            <img src={sportsImage} alt="Annual Sports Day" className="md:h-60 w-full h-40 object-cover mb-4 rounded-lg"/>
            <h3 className="md:text-3xl text-2xl font-bold md:mt-0 mt-[-0.8rem]">Annual Sports Day</h3>
            <p className="md:mt-[0.1px] mt-0">Celebrating Excellence in Sports</p>
            <p className="md:mt-2 mt-1 text-black">Our Annual Sports Day is a vibrant event that promotes physical fitness and teamwork among students. Featuring various sports and activities, it is a day of healthy competition and fun.</p>
          </div>
          <div className="bg-green-500 text-white p-2 rounded-lg shadow-md flex flex-col items-center">
          <img src={culturalImage} alt="Cultural Fest" className="md:h-60 w-full h-40 object-cover mb-4 rounded-lg"/>
            <h3 className="md:text-3xl text-2xl font-bold md:mt-0 mt-[-0.8rem]">Cultural Fest</h3>
            <p className="md:mt-[0.1px] mt-0">Embracing Diversity and Creativity</p>
            <p className="md:mt-2 mt-1 text-black">Our Cultural Fest celebrates the diverse cultural heritage of our students through music, dance, and art. It fosters creativity and appreciation for various cultures.</p>
          </div>
          <div className="bg-red-500 text-white p-2 rounded-lg shadow-md flex flex-col items-center">
          <img src={scienceImage} alt="Science Exhibition" className="md:h-60 w-full h-40 object-cover mb-4 rounded-lg"/>
            <h3 className="md:text-3xl text-2xl font-bold md:mt-0 mt-[-0.8rem]">Science Exhibition</h3>
            <p className="md:mt-[0.1px] mt-0">Showcasing Student Innovations</p>
            <p className="md:mt-2 mt-1 text-black">The Science Exhibition highlights the innovative projects and experiments conducted by our students. It`s an opportunity for them to demonstrate their scientific knowledge and creativity.</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-4 px-8 mb-8 bg-white dark:bg-dark-background">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 underline">Gallery</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          <img src={galleryImage1} alt="Gallery Image 1" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage2} alt="Gallery Image 2" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage3} alt="Gallery Image 3" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage4} alt="Gallery Image 4" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage5} alt="Gallery Image 5" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage6} alt="Gallery Image 6" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage7} alt="Gallery Image 7" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          <img src={galleryImage8} alt="Gallery Image 8" className="w-full h-64 object-cover rounded-lg shadow-lg shadow-black transition-transform duration-500 ease-in-out transform hover:scale-105"/>
        </div>
      </div>

      {/* Useful Information Section */}
      <div className="py-4 px-8 bg-gray-200 dark:bg-dark-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className=" bg-white py-2 rounded-lg shadow-md flex flex-col">
            <h3 className="w-full bg-blue-500 text-white py-1 px-4 text-[1.2rem] font-bold">Latest News</h3>
            <ul className="mt-2 px-4 text-black list-disc list-inside">
              <li>31 July 2024 - 11 Merit List</li>
              <li>5 Aug 2024 - Terminal Exam Time Table</li>
              <li>12 Aug 2024 - School Annual Report</li>
              <li>20 Aug 2024 - Teacher Training Workshop</li>
              <li>25 Aug 2024 - Science Fair Participation</li>
              <li>1 Sept 2024 - Parent Orientation Meeting</li>
              <li>10 Sept 2024 - Student Council Elections</li>
              <li>15 Sept 2024 - Art Exhibition</li>
              <li>1 Oct 2024 - Sports Day Announcement</li>
              <li>10 Oct 2024 - Mid-Term Exam Schedule</li>
              <li>20 Oct 2024 - School Health Fair</li>
              <li>30 Oct 2024 - Halloween Festivities</li>
            </ul>
          </div>
          <div className=" bg-white py-2 shadow-md flex flex-col ">
            <h3 className="w-full bg-blue-500 text-white py-1 px-4 text-[1.2rem] font-bold">Awards & Certificates</h3>
            <ul className="mt-2 px-4 text-black list-disc list-inside">
              <li>Best School Award - 2023</li>
              <li>Excellence in Education - 2022</li>
              <li>Inter-School Sports Championship </li>
              <li>State Level Science Fair Champions</li>
              <li>Best Cultural Performance Awards</li>
              <li>Excellence in Arts</li>
              <li>Best Principal Award</li>
            </ul>
          </div>
          <div className=" bg-white py-2  shadow-md flex flex-col">
            <h3 className="w-full bg-blue-500 text-white py-1 px-4 text-[1.2rem] font-bold">Upcoming Events</h3>
            <ul className="mt-2 px-4 text-black list-disc list-inside">
              <li>15 Aug 2024 - IndependenceDay Celebration</li>
              <li>25 Aug 2024 - Annual Science Fair</li>
              <li>1 Sept 2024 - Teacher`s Day Celebration</li>
              <li>10 Sept 2024 - Debate Competition</li>
              <li>20 Sept 2024 - Sports Day</li>
              <li>1 Oct 2024 - Cultural Fest</li>
              <li>15 Oct 2024 - Parent-Teacher Meeting</li>
              <li>5 Nov 2024 - School Picnic</li>
              <li>20 Nov 2024 - Art Exhibition</li>
              <li>10 Dec 2024 - Annual Day</li>
            </ul>   
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="pt-4 pb-12 px-8 dark:bg-dark-background bg-white">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 underline">Our Team</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 text-black dark:text-light-text">
          <div className="flex flex-col items-cente bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 1" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">John Doe</h3>
            <p>Principal</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 2" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Jane Smith</h3>
            <p>Vice Principal</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 3" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Emily Johnson</h3>
            <p>Head of Science Department</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 4" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Michael Brown</h3>
            <p>Sports Coordinator</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 5" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Sarah Davis</h3>
            <p>Arts Teacher</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 6" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Arju Jhala</h3>
            <p>Science Teacher</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 7" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Devil sah</h3>
            <p>Maths Teacher</p>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg shadow-black hover:bg-gray-300">
            <img src={teamImage1} alt="Team Member 8" className="h-32 w-32 rounded-full mb-2"/>
            <h3 className="text-[1.3rem] font-bold">Aruna Shahu</h3>
            <p>Commerce Teacher</p>
          </div>
        </div>
      </div>

      {/* Review Carousel Section */}
      <div className="pt-4 pb-8 mb-8 px-8 dark:bg-dark-background bg-gray-200">
        <h2 className="text-3xl font-bold mb-4 underline">What Our Parents Say</h2>
        <div className="w-full">
          <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false} 
            showIndicators={false}
            interval={5000}
          >
           {reviewChunks.map((chunk, index) => (
            <div key={index} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
              {chunk.map((review, idx) => (
                <div key={idx} className="flex flex-col items-center md:p-4 p-2 bg-white rounded-lg shadow-md shadow-black">
                  <div className="md:w-20 md:h-20 w-14 h-14 rounded-full overflow-hidden md:mb-4 mb-2 shadow-md shadow-black">
                    <img src={review.image} alt={`Reviewer ${idx}`} className="w-full h-full object-cover"/>
                </div>
                    <h3 className="md:text-xl text-lg font-bold">{review.name}</h3>
                  <p className="md:mt-2 mt-0 md:text-lg text-md text-gray-600">{review.feedback}</p>
                  <p className="mt-0 md:mt-2 text-lg">{getStarRating(review.rating)}</p>
                </div>
              ))}
            </div>
          ))}
          </Carousel>
        </div>
      </div>
      {/* Contact Us Section */}
      <ContactUs/>
      </div>
  );
}

export default HomePage;
    