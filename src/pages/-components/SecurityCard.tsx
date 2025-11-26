export default function SecurityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="w-[223px] h-[175px] md:h-auto flex-1 p-4 rounded-lg bg-[radial-gradient(circle_at_top_left,#007266,#003d36)] md:bg-none md:p-0">
      <figure>
        {/* <Image src={securityImage} alt="Security Image" width={800} /> */}
      </figure>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
