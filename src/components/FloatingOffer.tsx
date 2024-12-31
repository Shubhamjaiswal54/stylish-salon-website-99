import { motion } from "framer-motion";

const FloatingOffer = () => {
  return (
    <div className="floating-offer overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap font-libre text-xl md:text-2xl"
      >
        🎉 Special Offer: Get 20% off on all services this week! Book your appointment now on WhatsApp
      </motion.div>
    </div>
  );
};

export default FloatingOffer;