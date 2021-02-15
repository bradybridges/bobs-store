import React from "react"
import "./footer.scss"

export default function Footer() {
  return (
    <footer className="bobs-footer">
      <div className="bob-footer__wrapper">
        <span className="bobs-footer__message">Project By Brady Bridges</span>
        <div className="bobs-footer__link-wrapper">
          <a
            href="https://github.com/bradybridges/bobs-store"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
          <a
            href="https://github.com/bradybridges"
            target="_blank"
            rel="noreferrer noopener"
          >
            My GitHub
          </a>
          <a
            href="https://linkedin.com/in/brady-bridges"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
