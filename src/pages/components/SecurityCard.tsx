export default function SecurityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="w-[223px] h-[175px] flex-1 p-4 rounded-lg bg-linear-to-r from-tropical-rain-forest to-blue-400 md:bg-none md:p-0">
      <figure>
        {/* <Image src={securityImage} alt="Security Image" width={800} /> */}
      </figure>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
