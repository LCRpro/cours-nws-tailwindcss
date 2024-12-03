import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 w-full z-50 shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link href="/" className="">
            <img src="/assets/logo.webp" alt="Logo" className="object-cover h-16 w-16" />
          </Link>
        </div>
        <div className="flex-grow flex justify-center space-x-6">
          <Link href="/" className="text-black hover:text-indigo-600">
            Accueil
          </Link>
          <Link href="/about" className="text-black hover:text-indigo-600">
            À propos
          </Link>
          <Link href="/projets" className="text-black hover:text-indigo-600">
            Projets
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/contact">
            <button className="bg-indigo-600 text-white px-4 py-3 text-xs font-semibold rounded hover:bg-indigo-800">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;