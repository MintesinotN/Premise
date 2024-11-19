import { Menus } from "./Menu"

type DescriptionProps = {
    desc: Menus;
  };

const Description: React.FC<DescriptionProps> = ({desc}) => {
  return (
    <div className=''>
        <p>{desc.title}</p>
        {
            desc.items.map((item)=> <div key={item.name} className="xl:mr-[450px] lg:mr-[400px] mt-8 border border-bordercolor shadow-md shadow-black bg-secondary px-12 py-6 rounded-md"><span className="font-bold">{item.name}</span> {item.description}</div> )
        }
    </div>
  )
}

export default Description