type ButtonProps = {
  children: React.ReactNode;
}

export default function Button({
  children
}: ButtonProps) {
  return (
    <button className="px-4 py-2">{children}</button>
  )
}
