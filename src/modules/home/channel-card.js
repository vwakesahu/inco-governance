import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

export const ChannelCard = ({
  name,
  color,
  isSelected,
  avatarUrl,
  onClick,
}) => {
  const randomAvatarUrl = useMemo(() => {
    // Generate a random seed based on the channel name
    const seed = name.toLowerCase().replace(/\s+/g, "-");
    return (
      avatarUrl || `https://api.dicebear.com/6.x/avataaars/svg?seed=${seed}`
    );
  }, [name, avatarUrl]);

  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`p-4 rounded-lg border hover:bg-muted-foreground/10 w-full h-24 flex items-center justify-start space-x-4 bg-white transition-all duration-300 cursor-pointer ${
        isSelected ? `border-l-4 border-l-blue-500` : "border"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-full overflow- border overflow-hidden ${
          isSelected ? "" : ""
        }`}
      >
        <img
          src={randomAvatarUrl}
          alt={`${name} avatar`}
          className="w-10 h-10 object-cover"
        />
      </div>
      <div className="flex flex-col">
        <p
          className={`font-medium ${
            isSelected ? "text-blue-500 font-bold" : ""
          }`}
        >
          {name}
        </p>
      </div>
    </motion.div>
  );
};
