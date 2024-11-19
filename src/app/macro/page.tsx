import MacroDescription from "@/components/MacroDescription"
import InputField from "@/components/InputField"
import IMF from "@/components/IMF"
import JPMorgan from "@/components/JPMorgan"
import SpaceFill from "@/components/SpaceFill"

const Macro = () => {
  return (
    <div className='relative'>
        <MacroDescription />
        <p className="pt-4">prem</p>
        <InputField />
        <hr className="border-gray-500 w-3/4 my-12 mx-auto" />
        <IMF />
        <JPMorgan />
        <SpaceFill />
    </div>
  )
}

export default Macro