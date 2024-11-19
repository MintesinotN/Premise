import menu from "./Menu"
import NavLink from "./NavLink";
import Image from "next/image";

const Navbar = () => {

  const navbarMenu = menu.find((menuItem) => menuItem.title === "Navbar");

  return (
    <div className='mt-2 bg-primary flex md:justify-around'>
      <div className="px-20 h-12 md:flex hidden items-center w-full">
        <div className="w-full lg:px-24 flex justify-between">
          {
            navbarMenu?.items.map((item)=>(
              <NavLink href={item.path as string} key={item.name} >{item.name}</NavLink>
            ))
          }
        </div>
      </div>
      <div className="w-full md:hidden flex justify-between">
        <Image src='/menubar.png' alt="" width={60} height={60} className="cursor-pointer" />
        <Image src='/vertical.png' alt="" width={60} height={60} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;