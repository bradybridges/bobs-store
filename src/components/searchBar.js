import React, { useState } from "react"
import PropTypes from "prop-types"
import "./searchBar.scss"

export default function SearchBar({ setSearch }) {
  // Stores the value of the search input
  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = e => {
    e.preventDefault()
    setSearchValue(e.target.value)
  }

  const handleSearch = e => {
    e.preventDefault()

    if (isSearchValid()) {
      setSearch(searchValue)
      setSearchValue("")
    }
  }

  const isSearchValid = () => {
    if (searchValue !== "") return true

    return false
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar__input"
        type="text"
        maxLength="20"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="search-bar__button" type="submit">
        Search Icon
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
}
