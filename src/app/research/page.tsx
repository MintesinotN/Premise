import InputField from "@/components/InputField"
import Image from "next/image"
import SpaceFill from "@/components/SpaceFill"

const Research = () => {
  return (
    <div className=''>
        <p>Financial data from the SEC and economic data from FRED + support from our AI investment analyst, prem.</p>
        <InputField />
        <hr className="border-gray-500 w-3/4 my-12 mx-auto" />
        <div className="relative top-7 h-8 hidden xl:block">
          <SpaceFill />
        </div>
        <h3 className="text-base font-semibold py-4">Sticky Price Consumer Price Index less Food and Energy</h3>
        <p className="xl:mr-[450px] my-8 border border-bordercolor shadow-md shadow-black bg-secondary px-12 py-6 rounded-md">The &quot;Sticky Price CPI less Food and Energy&quot; tracks inflation for goods and services with infrequent price changes, making it a reliable gauge of core inflation trends. As of August 2024, the index is at 4.1% year-over-year, indicating persistent underlying inflation pressures. While overall inflation has cooled, the elevated sticky price index suggests that inflation in slowly adjusting sectors, like services, remains high. This can signal that core inflation expectations are still elevated, potentially influencing the Federal Reserve to maintain tighter policy until inflation approaches the target range.</p>
        <div className="xl:mr-[450px]">
        <Image src='/fredgraph.png' alt="" width={1500} height={450} />
        </div>
    </div>
  )
}

export default Research