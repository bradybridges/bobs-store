import React, { useState } from "react"
import PropTypes from "prop-types"
import "./searchBar.scss"

import SearchIcon from "../images/loupe.png"
export default function SearchBar({ setSearch }) {
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
      <div className="search-bar__wrapper">
        <input
          className="search-bar__input"
          type="text"
          maxLength="20"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="search-bar__button" type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
}
