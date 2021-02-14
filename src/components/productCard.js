import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./productCard.scss"

export default function ProductCard({ thumbnail, name, price, msrp = 0 }) {
  const isMsrpPrimaryPrice = (price, msrp) => {
    if (msrp === 0 || price > msrp) {
      return false
    } else return true
  }

  const showMsrpAsPrimary = isMsrpPrimaryPrice(price, msrp)

  return (
    <div className="product-card">
      <Link to="/page-2" className="product-card__image-link">
        <div
          className="product-card__image"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
      </Link>
      <Link to="/page-2" className="product-card__product-link">
        <span className="product-card__product-name">{name}</span>
      </Link>
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
