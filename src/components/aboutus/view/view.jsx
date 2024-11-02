// src/components/aboutus/View.jsx

import { FaUserGraduate, FaUsers, FaVideo, FaUserTie } from 'react-icons/fa';

const View = () => {
  const stats = [
    { icon: <FaUserTie className="text-white" />, number: '300', label: 'Instructors', bgColor: 'bg-green-500' },
    { icon: <FaUsers className="text-white" />, number: '20,000+', label: 'Students', bgColor: 'bg-purple-500' },
    { icon: <FaVideo className="text-white" />, number: '10,000+', label: 'Videos', bgColor: 'bg-red-500' },
    { icon: <FaUserGraduate className="text-white" />, number: '100,000+', label: "Users", bgColor: 'bg-blue-500' },
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

export default View;
