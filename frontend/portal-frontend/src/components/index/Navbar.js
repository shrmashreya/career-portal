import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Button from "@/components/ui/Button";
// import { PlusIcon } from "@heroicons/react/24/solid";



const Navbar = () => {
    const router = useRouter();
    const isActive = (path) => router.pathname === path;
    const handleClick = () => {
      alert("Button clicked!");
    };
    return(
        <nav className="bg-gray-800 text-white absolute top-0 left-0 w-screen h-[141px] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src = "pp-logo.svg" alt="Logo" width={36} height={36} className="mr-2"/>
            <span className="text-2xl font-semibold">Placement Portal</span>
          </Link>
  
          {/* Navigation Links */}
          <div className="flex text-lg space-x-6 ml-8">
            {['Home', 'Students', 'Admin', 'Companies'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} legacyBehavior>
                <a className={cn(
                  'hover:text-purple-400 transition-colors',
                  isActive(`/${item.toLowerCase()}`) ? 'border-b-2 border-purple-400' : ''
                )}>
                  {item}
                </a>
              </Link>
            ))}
          </div>
        </div>
  
        {/* Auth buttons */}
        <div className="inline-flex space-x-4">
          <Button label="Sign In" onClick = {handleClick} variant ="primary"/>
          <Button label="Sign Up" onClick = {handleClick} variant ="primary"/>
        </div>
      </nav>
    );
};

export default Navbar;