import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import sec1 from '@/assets/icons/sec-1.svg';
import sec2 from '@/assets/icons/sec-2.svg';
import sec3 from '@/assets/icons/sec-3.svg';
import sec4 from '@/assets/icons/sec-4.svg';

export default function SecurityCard({ title, description, icon }: { title: string; description: string, icon: string }) {
  const iconsMap: { [key: string]: StaticImageData } = {
    'sec-1': sec1,
    'sec-2': sec2,
    'sec-3': sec3,
    'sec-4': sec4,
  };

  function getSecurityImage(iconKey: string) {
    return iconsMap[iconKey] || sec1;
  }

  return (
    <motion.div
      className="w-[300px] h-[230px] lg:w-auto lg:h-auto p-4 rounded-lg bg-[radial-gradient(circle_at_top_left,#007266,#003d36)] md:bg-none md:p-0"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <figure className="flex justify-center items-center w-12 h-12 p-2 bg-[rgba(255,255,255,0.1)] rounded-md mb-4">
        <Image src={getSecurityImage(icon)} alt="Security Image" width={32} height={32} />
      </figure>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}
