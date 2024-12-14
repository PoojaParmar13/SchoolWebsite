import facultyImage1 from '../assets/team1.jpg';
import facultyImage2 from '../assets/team1.jpg'; 
import facultyImage3 from '../assets/team1.jpg'; 
import facultyImage4 from '../assets/team1.jpg'; 
import facultyImage5 from '../assets/team1.jpg'; 
import facultyImage6 from '../assets/team1.jpg';
import facultyImage7 from '../assets/team1.jpg';
import facultyImage8 from '../assets/team1.jpg'; 
import facultyImage9 from '../assets/team1.jpg';
import facultyImage10 from '../assets/team1.jpg';
import facultyImage11 from '../assets/team1.jpg'; 
import facultyImage12 from '../assets/team1.jpg';

const facultyMembers = [
  {
    post: 'Principal',
    name: 'John Doe',
    degree: 'M.Ed',
    experience: '20 years of experience in educational administration',
    image: facultyImage1,
  },
  {
    post: 'Vice Principal',
    name: 'Jane Smith',
    degree: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    image: facultyImage2,
  },
  {
    post: 'HOD - English',
    name: 'Emily Johnson',
    degree: 'M.A. in English',
    experience: '10 years of teaching experience',
    image: facultyImage3,
  },
  {
    post: 'Mathematics Teacher',
    name: 'Michael Brown',
    degree: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    image: facultyImage4,
  },
  {
    post: 'Science Teacher',
    name: 'Sophia Davis',
    degree: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    image: facultyImage5,
  },
  {
    post: 'Computer Science Teacher',
    name: 'David Wilson',
    degree: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
    image: facultyImage6,
  },
  {
    post: 'Physics Teacher',
    name: 'Alice Taylor',
    degree: 'M.Sc. in Physics',
    experience: '7 years of teaching experience',
    image: facultyImage7,
  },
  {
    post: 'Chemistry Teacher',
    name: 'Bob Martin',
    degree: 'M.Sc. in Chemistry',
    experience: '6 years of teaching experience',
    image: facultyImage8,
  },
  {
    post: 'Biology Teacher',
    name: 'Carol White',
    degree: 'M.Sc. in Biology',
    experience: '8 years of teaching experience',
    image: facultyImage9,
  },
  {
    post: 'Hindi Teacher',
    name: 'Dev Patel',
    degree: 'M.A. in Hindi',
    experience: '9 years of teaching experience',
    image: facultyImage10,
  },
  {
    post: 'Librarian',
    name: 'Eva Green',
    degree: 'M.Lib.Sc.',
    experience: '11 years of experience in library management',
    image: facultyImage11,
  },
  {
    post: 'Sports Teacher',
    name: 'Frank Blue',
    degree: 'B.P.Ed',
    experience: '10 years of experience in sports education',
    image: facultyImage12,
  },
];

const Faculty = () => {
  return (
    <div className="md:px-8 md:pb-8 p-1 bg-gray-200 md:pt-[7rem] pt-[6rem] border-gray-800 border-4">
      <h1 className="text-3xl font-bold text-gray-600 dark:text-light-text mb-8 text-center underline">Faculty & Staff</h1>
      {facultyMembers.map((member, index) => (
        <div key={index} className="md:mx-40 mx-2  bg-white dark:bg-dark-background my-2 p-4 rounded shadow-md border border-gray-600">
          <div className="md:flex items-start mx-8">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-24 h-24 mt-5 mr-6 md:ml-0  object-cover rounded-full border border-gray-600"
            />
            <div className="md:flex-1 md:ml-10 md:mt-0 mt-5">
              <h2 className="text-xl text-black dark:text-dark-text underline font-semibold mb-2">{member.post}</h2>
              <p className="text-lg text-gray-800 dark:text-dark-text font-medium mb-1">{member.name}</p>
              <p className="text-md text-gray-700 dark:text-dark-text mb-1">Degree: {member.degree}</p>
              <p className="text-md text-gray-700 dark:text-dark-text">Experience: {member.experience}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
