import menu from "./Menu"
import Organizations from "./Organizations";

const TheVerge = () => {

    const desc = menu.find((menuItem) => menuItem.title === "Amazon's plan to rearchitect Alexa around LLMs could finally...");

  return (
    <div className=''>
        {desc ? <Organizations desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default TheVerge