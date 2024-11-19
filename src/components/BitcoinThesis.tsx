import { Menus } from "./Menu"

type DescriptionProps = {
    desc: Menus;
  };

const BitcoinThesis: React.FC<DescriptionProps> = ({desc}) => {
  return (
    <div className='xl:mr-[450px] lg:mr-[400px] my-8 border border-bordercolor shadow-md shadow-black bg-secondary px-12 py-6 rounded-md'>
        <p>{desc.title}</p>
        <ul className="list-disc">
        {
            desc.items.map((item)=> <li key={item.name} className="py-3"><span className="font-bold">{item.name}</span> {item.description}</li> )
        }
        </ul>
    </div>
  )
}

export default BitcoinThesis