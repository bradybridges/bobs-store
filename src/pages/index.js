import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"

import { searchProducts } from "../api/products"

export default function IndexPage() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleSearchProducts = async search => {
      try {
        const products = await searchProducts(search)
        setProducts(products)
      } catch (e) {
        const { message } = e
        
        if( message.includes("Failed to fetch") ) {
          setError("There was a problem loading products. Please try again later!")
        } else {
          setError("Something went wrong :/ Try again later.")
        }
      }
    }

    if(search !== "") handleSearchProducts(search)
  }, [search])

  return (
    <Layout>
      <SEO title="Home" />
      <SearchBar search={search} setSearch={setSearch} />
    </Layout>
  )
}
