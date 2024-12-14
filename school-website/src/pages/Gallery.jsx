import { useState } from 'react';
import galleryImage1 from '../assets/gallery1.jpg';
import galleryImage2 from '../assets/gallery2.jpg';
import galleryImage3 from '../assets/gallery3.jpg';
import galleryImage4 from '../assets/gallery4.jpg';
import galleryImage5 from '../assets/gallery5.jpg';
import galleryImage6 from '../assets/gallery6.jpg';
import galleryImage7 from '../assets/gallery7.jpg';
import galleryImage8 from '../assets/gallery8.jpg';
import sportsImage from '../assets/sports.jpg';
import scienceImage from '../assets/science.jpg';
import culturalImage from '../assets/cultural.jpg';
import campusImage1 from '../assets/campus1.jpg';
import labImage1 from '../assets/lab1.jpg';
import computer2 from '../assets/computer2.jpg';
import labImage7 from '../assets/lab7.jpg'; 
import campusImage4 from '../assets/campus4.jpg'; 
import library from '../assets/library2.jpg'; 

const images = [
  { src: galleryImage1, name: 'Yoga Day', category: 'Event' },
  { src: galleryImage2, name: 'PT', category: 'Event' },
  { src: galleryImage3, name: 'Art & Craft Competition', category: 'Competition' },
  { src: galleryImage8, name: 'Kids Library', category: 'Infrastructure' },
  { src: galleryImage4, name: 'Common Office', category: 'Infrastructure' },
  { src: galleryImage5, name: 'Achievements', category: 'Event' },
  { src: galleryImage6, name: 'Kids PlayRoom', category: 'Infrastructure' },
  { src: galleryImage7, name: 'Health Day', category: 'Event' },
  { src: sportsImage, name: 'Annual Sports Day', category: 'Event' },
  { src: scienceImage, name: 'Science Exhibition', category: 'Event' },
  { src: culturalImage, name: 'Cultural Fest', category: 'Event' },
  { src: campusImage1, name: 'School Campus', category: 'Infrastructure' },
  { src: labImage1, name: 'Science Lab', category: 'Infrastructure' },
  { src: computer2, name: 'Computer Lab', category: 'Infrastructure' },
  { src: campusImage4, name: 'Prayer', category: 'Infrastructure' },
  { src: labImage7, name: 'ATAL Tinkering Lab', category: 'Infrastructure' },
  { src: library, name: 'Library', category: 'Infrastructure' }
];

const GalleryPage = () => {
  const [visibleImages, setVisibleImages] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleShowMore = () => {
    setVisibleImages((prevVisible) => prevVisible + 5);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setVisibleImages(10);
  };

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="py-8 px-8 pb-8 pt-[7rem] bg-gray-200 dark:bg-dark-background border-gray-800 border-4 relative">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-12">
        <h2 className="text-3xl font-bold md:ml-[20rem] text-gray-600 dark:text-dark-text underline text-center md:mb-0 md:flex-grow">
          Our School Gallery
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:ml-8 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto md:ml-4">
            <label className="text-[1.1rem] font-semibold -ml-[10rem] md:ml-0 md:m-0 mt-[2rem] md:mb-0 md:mr-2">
              Filter by category:
            </label>
            <select 
              value={selectedCategory} 
              onChange={handleCategoryChange}
              className="border-gray-600 dark:text-light-text  dark:border-gray-500 -mb-[2rem] md:-mb-[0.5rem] border-2 px-2 ml-[8rem]  md:ml-0 md:mt-0 -mt-[1.5rem] md:mr-2 py-[0.1rem] rounded-md w-50 md:w-auto"
            >
              <option value="All">All</option>
              <option value="Event">Events</option>
              <option value="Competition">Competitions</option>
              <option value="Infrastructure">Infrastructure</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="clear-both">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {filteredImages.slice(0, visibleImages).map((image, index) => (
            <div key={index} className="flex flex-col items-center rounded-md dark:border-white border-gray-600 border-2">
              <img 
                src={image.src} 
                alt={image.name} 
                className="w-full h-[12rem] object-cover rounded-md"
              />
              <p className="text-lg font-semibold">{image.name}</p>
            </div>
          ))}
        </div>
        {visibleImages < filteredImages.length && (
          <div className="text-center mt-8">
            <button 
              onClick={handleShowMore} 
              className="px-8 py-2 bg-blue-500 text-white rounded-lg shadow-md dark:border-white border-gray-600 border-2 hover:bg-blue-600 transition duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
