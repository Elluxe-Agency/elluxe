"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from '../icons/common';

interface FadeInButtonProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  length?: number;
  delay?: number;
  textSpeed?: number;
  iconSpeed?: number;
}

const FadeInButton: React.FC<FadeInButtonProps> = ({
  direction = 'left',
  length = 90,
  delay = 0,
  textSpeed = 0.5,
  iconSpeed = 1.0,
}) => {
  const variants = (speed: number) => ({
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -length : direction === 'right' ? length : 0,
      y: direction === 'up' ? -length : direction === 'down' ? length : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: speed, delay },
    },
  });

  return (
    <Button className="max-w-48 w-full flex items-center bg-special-gradient rounded-[25px] pl-[26px] pr-2 py-1 justify-end gap-[6px]">
      <motion.p
        className="text-primary-black text-[17px] font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: textSpeed, delay: delay + iconSpeed }}
      >
        See if you qualify
      </motion.p>
      <motion.div initial="hidden" animate="visible" variants={variants(iconSpeed)}>
        <ArrowRightCircle className="w-[40px] h-[40px]" />
      </motion.div>
    </Button>
  );
};

export default FadeInButton;