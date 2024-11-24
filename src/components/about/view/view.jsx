// src/components/aboutus/View.jsx

import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person'; // Replacing FaUserTie
import PeopleIcon from '@mui/icons-material/People'; // Replacing FaUsers
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Replacing FaVideo
import SchoolIcon from '@mui/icons-material/School'; // Replacing FaUserGraduate

const ViewAbout = () => {
  const stats = [
    { icon: <PersonIcon className="text-white" />, number: '100%', label: 'Job-oriented Cources', bgColor: 'bg-green-500' },
    { icon: <PeopleIcon className="text-white" />, number: '10+', label: 'In-Demand Certifications', bgColor: 'bg-purple-500' },
    { icon: <VideoLibraryIcon className="text-white" />, number: '120+', label: 'Offline Sessions', bgColor: 'bg-red-500' },
    { icon: <SchoolIcon className="text-white" />, number: 'Free 1-1', label: 'Mentoring Sessions', bgColor: 'bg-blue-500' },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md w-full max-w-xs md:max-w-sm hover:bg-blue-200 transition-colors duration-300" // Added hover effect
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on mount
            transition={{ duration: 0.5, delay: index * 0.2 }} // Animation timing
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bgColor}`}>
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ViewAbout;
