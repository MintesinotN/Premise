import menu from "./Menu"
import BitcoinThesis from "./BitcoinThesis"

const Infrastructure = () => {

    const desc = menu.find((menuItem) => menuItem.title === "Digital Gold and Inflation Hedge");

  return (
    <div className=''>
        {desc ? <BitcoinThesis desc={desc} /> : <p>No description found.</p>}
    </div>
  )
}

export default Infrastructure