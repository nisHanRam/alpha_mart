import { motion } from "framer-motion";

const FadeIn = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      whileHover={{
        scale: 1.1,
        opacity: 1,
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
