import menu from "./Menu"
import Organizations from "./Organizations";

const IMF = () => {

    const desc = menu.find((menuItem) => menuItem.title === "Global growth expected to remain stable yet underwhelming");

  return (
    <div className=''>
        {desc ? <Organizations desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default IMF