import HomeDescription from "@/components/HomeDescription"
import InputField from "@/components/InputField"
import Bloomberg from "@/components/Bloomberg"
import TheVerge from "@/components/TheVerge"
import SpaceFill from "@/components/SpaceFill"

const Home = () => {
  return (
    <div className='relative'>
        <HomeDescription />
        <p className="pt-4">prem</p>
        <InputField />
        <hr className="border-gray-500 w-3/4 my-12 mx-auto" />
        <Bloomberg />
        <TheVerge />
        <SpaceFill />
    </div>
  )
}

export default Home