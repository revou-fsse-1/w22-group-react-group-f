import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <header className="h-[100px] bg-[#E5E7EB] flex justify-center">
      <div className="container flex flex-row items-center justify-between h-full">
        <Link href="/">
          <Image
            src="/assets/logo/bookie-logo.svg"
            width={140}
            height={32}
            alt="bookie logo"
            className=""
          />
        </Link>
        <SearchBar />
        <button className="font-semibold text-[#f1f1f1] rounded-lg bg-[#10b891] py-3 px-6">
          Sign out
        </button>
      </div>
    </header>
  );
};
export default NavBar;