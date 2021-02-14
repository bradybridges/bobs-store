import React from "react"
import PropTypes from "prop-types"
import "./paginationBar.scss"

import ArrowButton from "./arrowButton"

export default function PaginationBar({ page, totalPages, setPage }) {
  // Accepts "prev", "next" or a page number
  const handleSetPage = action => {
    if (action === "prev") {
      setPage(page - 1)
    } else if (action === "next") {
      setPage(page + 1)
    } else if (typeof action === "number") {
      setPage(action)
    }
  }

  const returnPageItem = pageNumber => {
    const classes = ["pagination-bar__page-button"]

    if (pageNumber === page) {
      classes.push("pagination-bar__page-button--active")
    }

    return (
      <button
        className={classes.join(" ")}
        onClick={() => handleSetPage(pageNumber)}
      >
        {pageNumber}
      </button>
    )
  }

  const renderPages = () => {
    const pageButtons = []

    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(returnPageItem(i))
    }

    return pageButtons.map((page, i) => (
      <React.Fragment key={i}>{page}</React.Fragment>
    ))
  }

  const prevDisabled = page && page === 1 ? true : false
  const nextDisabled = page && page === totalPages ? true : false

  return (
    <div className="pagination-bar">
      <ArrowButton
        type="prev"
        clickHandler={handleSetPage}
        disabled={prevDisabled}
      />
      <div className="pagination-bar__pages-container">{renderPages()}</div>
      <ArrowButton
        type="next"
        clickHandler={handleSetPage}
        disabled={nextDisabled}
      />
    </div>
  )
}

PaginationBar.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
}
