import React from "react"
import PropTypes from "prop-types"

export default function ProductCard({ thumbnail, name, price, msrp = 0 }) {
  const isMsrpPrimaryPrice = (price, msrp) => {
    if (msrp === 0 || price > msrp) {
      return false
    } else return true
  }

  const showMsrpAsPrimary = isMsrpPrimaryPrice(price, msrp)

  return (
    <div className="product-card">
      <div
        className="product-card__image"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <span className="product-card__product-name">{name}</span>
      <div className="product-card__price-container">
        {showMsrpAsPrimary && (
          <span className="product-card__price">${msrp}</span>
        )}
        {showMsrpAsPrimary ? (
          <span className="product-card__price product-card__price--strike">
            ${price}
          </span>
        ) : (
          <span className="product-card__price">${price}</span>
        )}
      </div>
    </div>
  )
}

ProductCard.protoTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  msrp: PropTypes.number,
}
