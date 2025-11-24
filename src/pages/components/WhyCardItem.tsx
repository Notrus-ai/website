import { StaticImageData } from 'next/image';

type WhyCardItemProps = {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function WhyCardItem({ title, description, image }: WhyCardItemProps) {
  return (
    <div 
      className="flex flex-col relative p-8 rounded-2xl snap-center shrink-0 w-[450px] h-[448px] ml-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="relative z-10 w-[55%]">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}