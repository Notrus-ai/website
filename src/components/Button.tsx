type ButtonProps = {
  children: React.ReactNode;
}

export default function Button({
  children
}: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-white rounded-3xl text-blue-500 font-medium hover:cursor-pointer">{children}</button>
  )
}
