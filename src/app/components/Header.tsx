import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Meu Site
          </Link>

          <div className="flex space-x-6">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <Link
              href="https://github.com/JRamonAlves"
              className="hover:underline"
            >
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
