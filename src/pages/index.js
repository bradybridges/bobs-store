import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"
import SearchResults from "../components/searchResults"

import { searchProducts } from "../api/products"

export default function IndexPage() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const handleSearchProducts = async search => {
      try {
        const products = await searchProducts(search)
        setProducts(products)
        setError(false)
      } catch (e) {
        const { message } = e
        setProducts({})
        
        if (message.includes("Failed to fetch")) {
          setError(
            "There was a problem loading products. Please try again later!"
          )
        } else {
          setError("Something went wrong :/ Try again later.")
        }
      }
    }

    if (search !== "") handleSearchProducts(search)
  }, [search])

  const handleRenderResults = () => {
    const { results } = products

    if (!error && results && results.length > 0) {
      return <SearchResults products={products} />
    } else if (!error && results && results.length === 0) {
      return (
        <span className="message__warning">
          We didn't find any products matching your search.
        </span>
      )
    } else if (error) {
      return <span className="message__error">{error}</span>
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <SearchBar setSearch={setSearch} />
      {handleRenderResults()}
    </Layout>
  )
}
