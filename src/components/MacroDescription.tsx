import menu from "./Menu"
import Description from "./Description";

const MacroDescription = () => {

    const desc = menu.find((menuItem) => menuItem.title === "macro summary");

  return (
    <div className=''>
        {desc ? <Description desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default MacroDescription