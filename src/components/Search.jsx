import { useRef } from "react"
import { FaSearch } from "react-icons/fa"

const Search = ({ handleSearch, type }) => {

    const searchRef = useRef(null)

    return (
        <div>
            <input ref={searchRef} className="searchinp" type="search" placeholder={`Search ${type}`} />
            <button className="searchbtn" onClick={(e) => handleSearch(searchRef.current.value.toLowerCase())}><FaSearch /></button>
        </div>
    )
}

export default Search