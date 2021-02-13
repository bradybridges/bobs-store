import React from "react"
import PropTypes from "prop-types"
import ProductCard from "../components/productCard"

export default function SearchResults({ products }) {
  const renderProducts = () => {
    return products.results.map(product => {
      const { name, price, msrp, thumbnailImageUrl } = product

      return (
        <ProductCard
          thumbnail={thumbnailImageUrl}
          name={name}
          price={price}
          msrp={msrp}
        />
      )
    })
  }

  return (
    <div className="search-results">
      <div className="search-results__wrapper">
        {renderProducts()}
      </div>
    </div>
  )
}

SearchResults.propTypes = {
  products: PropTypes.object.isRequired,
}
