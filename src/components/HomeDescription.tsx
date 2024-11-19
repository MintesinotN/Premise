import menu from "./Menu"
import Description from "./Description";

const HomeDescription = () => {

    const desc = menu.find((menuItem) => menuItem.title === "11.1.24");

  return (
    <div className=''>
        {desc ? <Description desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default HomeDescription