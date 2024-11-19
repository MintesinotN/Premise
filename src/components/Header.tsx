import Image from "next/image"
import Navbar from "@/components/Navbar"

const Header = () => {
  return (
    <div className=''>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h2 className="text-2xl font-medium ml-12">
            Premise.
          </h2>
          <div className="ml-6 mt-2">
            <Image src="/avatar_logo.png" alt="" width={55} height={55} />
          </div>
        </div>
        <div className="flex mr-20 items-center">
          <Image src="/message.png" alt="" width={50} height={50} className="cursor-pointer" />
          <Image src="/twitter.png" alt="" width={60} height={60} className="cursor-pointer" />
          <Image src="/search.png" alt="" width={40} height={40} className="cursor-pointer" />
        </div>
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  )
}

export default Header
