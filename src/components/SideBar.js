import Explore from './Explore'
import Search from './Search'
import Suggest from './Suggest'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-inner">
        <Search />
        <Explore />
        <Suggest />
      </div>
    </div>
  )
}

export default Sidebar