import menu from "./Menu"
import Organizations from "./Organizations";

const Bloomberg = () => {

    const desc = menu.find((menuItem) => menuItem.title === "Berkshire Hathaway’s cash pile reaches record $325.2 Billion");

  return (
    <div className=''>
        {desc ? <Organizations desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default Bloomberg