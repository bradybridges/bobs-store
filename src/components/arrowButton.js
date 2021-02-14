import React from "react"
import PropTypes from "prop-types"
import "./arrowButton.scss"

export default function ArrowButton({ type, clickHandler, disabled }) {
  const renderButtonIcon = () => {
    switch (type) {
      case "prev":
        return "<<"
      case "next":
        return ">>"
      default:
        return "<<"
    }
  }

  const handleClick = () => {
    if (type === "prev") {
      clickHandler("prev")
    } else if (type === "next") {
      clickHandler("next")
    }
  }

  if (disabled) {
    return (
      <button className="arrow-button" disabled>
        {renderButtonIcon()}
      </button>
    )
  } else {
    return (
      <button className="arrow-button" onClick={handleClick}>
        {renderButtonIcon()}
      </button>
    )
  }
}

ArrowButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
}
