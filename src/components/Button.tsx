import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  onClick
}: ButtonProps) {
  const className = "px-4 py-2 bg-white rounded-3xl text-blue-500 font-medium hover:cursor-pointer hover:bg-white";
  
  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
