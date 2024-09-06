const { useState } = require("react");
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsPatchCheckFill } from "react-icons/bs";

const getRandomGradient = () => {
  const hue = Math.floor(Math.random() * 360);
  return `linear-gradient(135deg, hsl(${hue}, 100%, 90%) 0%, hsl(${hue}, 100%, 98%) 100%)`;
};

const Avatar = ({ name, icon }) => {
  return <img src={"/nft.jpg"} alt={name} className="  " />;
};

export const ProjectCard = ({
  name,
  icon,
  description,
  proposals,
  votes,
  verified,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradientBg = getRandomGradient();
  const router = useRouter();

  return (
    <Link href={`/spaces/${id}/overview`} passHref>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden h-64 flex flex-col border cursor-pointer relative"
        onClick={() => console.log("Clicked")}
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
        <div className="absolute top-10 left-6 mt-12 ml-2 w-full h-full aspect-square">
          <div className="w-20 rounded-lg overflow-hidden">
            <Avatar name={name} icon={icon} />
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4 pt-12">
          <h3 className="text-lg font-semibold mt-2 flex items-center">
            {name}{" "}
            {verified && (
              <span className="flex text-yellow-500 ml-1">
                <BsPatchCheckFill />
              </span>
            )}
          </h3>
          <div className="h-16">
            {description && (
              <p className="text-sm text-gray-600 mb-2 overflow-hidden w-full">
                {description.length > 100
                  ? `${description.slice(0, 100)}...`
                  : description}
              </p>
            )}
          </div>

          <div className="mt-auto">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">{proposals}</span> proposals ·{" "}
              <span className="font-semibold">{votes}</span> votes
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
