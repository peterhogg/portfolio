
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-white text-lg font-bold">
          <Image
            src="/peter.jpg"
            alt="Peter Hoggarth"
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          Peter Hoggarth
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="/experience" className="text-gray-300 hover:text-white">
            Work Experience
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-white">
            Skills
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
