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
  const className = "px-5 py-3 bg-white rounded-4xl text-blue-500 font-medium cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] active:bg-blue-100 active:shadow-none";
  
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
