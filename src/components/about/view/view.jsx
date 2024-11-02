// src/components/aboutus/View.jsx

import PersonIcon from '@mui/icons-material/Person'; // Replacing FaUserTie
import PeopleIcon from '@mui/icons-material/People'; // Replacing FaUsers
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Replacing FaVideo
import SchoolIcon from '@mui/icons-material/School'; // Replacing FaUserGraduate

const ViewAbout = () => {
  const stats = [
    { icon: <PersonIcon className="text-white" />, number: '300', label: 'Instructors', bgColor: 'bg-green-500' },
    { icon: <PeopleIcon className="text-white" />, number: '20,000+', label: 'Students', bgColor: 'bg-purple-500' },
    { icon: <VideoLibraryIcon className="text-white" />, number: '10,000+', label: 'Videos', bgColor: 'bg-red-500' },
    { icon: <SchoolIcon className="text-white" />, number: '100,000+', label: 'Users', bgColor: 'bg-blue-500' },
  ];

  return (
    <div className="flex justify-around items-center bg-gray-100 py-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bgColor}`}>
            {stat.icon}
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-bold">{stat.number}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAbout;
