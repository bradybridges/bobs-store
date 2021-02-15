import React from "react"
import PropTypes from "prop-types"
import "./heroImage.scss"

export default function HeroImage({ src, children }) {
  return (
    <div className="hero-image" style={{ backgroundImage: `url("${src}")` }}>
      {children}
    </div>
  )
}

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
}
