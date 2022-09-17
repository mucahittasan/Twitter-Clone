import {BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    <div className="search-input">
      <label>
        <BiSearch />
        <input type="text" placeholder="Twitter'da Ara"/>
      </label>
  </div>
  )
}

export default Search