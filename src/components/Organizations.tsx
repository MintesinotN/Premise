import { Menus } from "./Menu"
import Image from "next/image";

type DescriptionProps = {
    desc: Menus;
  };

const Organizations: React.FC<DescriptionProps> = ({desc}) => {
  return (
    <div className='flex flex-col items-center lg:flex-row gap-8 gap-y-8 mt-12 justify-center'>
        <div className="max-w-[550px] w-[400px] border border-gray-500 p-4 rounded-sm text-black bg-gray-300">
            <h2 className="text-2xl font-medium">{desc.title}</h2>
            <p>{desc.items[0].name}</p>
            <p className="pt-4">{desc.items[0].day}</p>
            <p>{desc.items[0].description}</p>
            <p className="text-sky-500">prem&apos;s summary</p>
        </div>
        <Image src={desc.items[0].image as string} width={400} height={200} alt="" className="rounded-md" />
        <hr className="lg:hidden border-gray-500 w-3/4 my-8 mx-auto" />
    </div>
  )
}

export default Organizations