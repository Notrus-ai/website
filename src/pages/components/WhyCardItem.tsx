import { StaticImageData } from 'next/image';

type WhyCardItemProps = {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function WhyCardItem({ title, description, image }: WhyCardItemProps) {
  return (
    <div 
      className="flex flex-col relative p-8 rounded-2xl w-[calc(100vw-2rem)] h-[calc(100vw-2rem)] md:w-[450px] md:h-[448px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="w-[80%]">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}