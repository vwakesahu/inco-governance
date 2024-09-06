const { useState } = require("react");
import { motion } from "framer-motion";
import { BsPatchCheckFill } from "react-icons/bs";

const getRandomGradient = () => {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(135deg, hsl(${hue}, 100%, 90%) 0%, hsl(${hue}, 100%, 98%) 100%)`;
};

const Avatar = ({ name, icon }) => {
  if (icon) {
    return <img src={"/nft.jpg"} alt={name} className="w-12 h-12 rounded-lg" />;
  }

  const initial = name.charAt(0).toUpperCase();
  const bgColor = getRandomGradient();

  return (
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
      style={{ background: bgColor }}
    >
      {initial}
    </div>
  );
};

export const ProjectCard = ({
  name,
  icon,
  description,
  proposals,
  votes,
  verified,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradientBg = getRandomGradient();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden h-64 flex flex-col border"
    >
      <div className="h-24 relative" style={{ background: gradientBg }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm border border-blue-100"
        >
          Follow
        </motion.button>
      </div>
      <div className="p-4 pt-0 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <div className="absolute">
              <Avatar name={name} icon={icon} />
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 flex items-center">
          {name}{" "}
          {verified && (
            <span className="flex text-yellow-500 ml-1">
              <BsPatchCheckFill />
            </span>
          )}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mb-2 h-16 overflow-hidden w-full">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
        )}
        <div className="mt-auto">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">{proposals}</span> proposals ·{" "}
            <span className="font-semibold">{votes}</span> votes
          </p>
        </div>
      </div>
    </motion.div>
  );
};
