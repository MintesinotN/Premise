import InputField from "@/components/InputField"
import DigitalGoldBT from "@/components/DigitalGoldBT"
import Infrastructure from "@/components/Infrastructure"
import Decentralization from "@/components/Decentralization"
import SpaceFill from "@/components/SpaceFill"

const Thesis = () => {
  return (
    <div className='relative'>
        <p>leverage premise for due diligence and thesis development. Ask about a company, technology, industry or region.</p>
        <InputField />
        <hr className="border-gray-500 w-3/4 my-12 mx-auto" />
        <div className="relative top-56">
          <SpaceFill />
        </div>
        <h3 className="text-base font-semibold py-4">Investment Thesis for Bitcoin (BTC)</h3>
        <DigitalGoldBT />
        <Infrastructure />
        <Decentralization />
    </div>
  )
}

export default Thesis