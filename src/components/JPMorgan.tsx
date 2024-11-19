import menu from "./Menu"
import Organizations from "./Organizations";

const JPMorgan = () => {

    const desc = menu.find((menuItem) => menuItem.title === "2024 economic outlook: 10 considerations for th US economy");

  return (
    <div className=''>
        {desc ? <Organizations desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default JPMorgan