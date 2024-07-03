import { motion } from "framer-motion";

const FadeDown = ({
  children,
  index = 0,
}: {
  children: JSX.Element;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 + index * 0.2 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
