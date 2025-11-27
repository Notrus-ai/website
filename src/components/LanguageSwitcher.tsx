import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const locales = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-1 ml-2">
      {locales.map((loc, index) => (
        <span key={loc.code} className="flex items-center">
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={loc.code}
            className={`px-2 py-1 rounded transition-opacity hover:opacity-100 ${
              locale === loc.code ? 'opacity-100 font-bold' : 'opacity-60'
            }`}
          >
            {loc.label}
          </Link>
          {index < locales.length - 1 && (
            <span className="opacity-40">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
