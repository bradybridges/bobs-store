import React from "react"
import PropTypes from "prop-types"
import "./searchResults.scss"

import ProductCard from "../components/productCard"
import PaginationBar from "../components/paginationBar"

export default function SearchResults({ products, page, setPage, totalPages }) {
  const renderProducts = () => {
    return products.results.map((product, i) => {
      const { name, price, msrp, thumbnailImageUrl } = product

      return (
        <ProductCard
          key={`${name}${i}`}
          thumbnail={thumbnailImageUrl}
          name={name}
          price={price}
          msrp={msrp}
        />
      )
    })
  }

  const paginationRequirementsMet = () => {
    if (page && setPage && totalPages) return true

    return false
  }

  return (
    <div className="search-results">
      {paginationRequirementsMet() && (
        <div className="search-results__pagination-container">
          <PaginationBar
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      )}
      <div className="search-results__wrapper">{renderProducts()}</div>
      {paginationRequirementsMet() && (
        <div className="search-results__pagination-container">
          <PaginationBar
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  )
}

SearchResults.propTypes = {
  products: PropTypes.object.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  setPage: PropTypes.func,
}
