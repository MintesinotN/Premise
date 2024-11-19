import Image from "next/image"

const InputField = () => {
  return (
    <div className='relative'>
        <textarea name="" id="" className="my-4 pl-1 w-full bg-gray-400 h-24 resize-none border rounded-2xl border-gray-400 placeholder:text-gray-600 focus:outline-none" placeholder="message prem"></textarea>
        <Image src='/send.png' alt="" width={70} height={70} className="absolute right-1 bottom-8 cursor-pointer" />
    </div>
  )
}

export default InputField