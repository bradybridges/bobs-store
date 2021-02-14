import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"
import SearchResults from "../components/searchResults"

import { searchProducts } from "../api/products"

export default function IndexPage() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState({})
  const [page, setPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState(false)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const handleSearchProducts = async search => {
      try {
        const updatedProducts = await searchProducts(search)
        setProducts(updatedProducts)
        setError(false)

        if (updatedProducts && updatedProducts.pagination) {
          setTotalPages(updatedProducts.pagination.totalPages)
        }
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

  useEffect(() => {
    const handleGetPage = async (search, page) => {
      try {
        const updatedProducts = await searchProducts(search, page)
        setProducts(updatedProducts)
        setError(false)

        if (updatedProducts && updatedProducts.pagination) {
          setCurrentPage(updatedProducts.pagination.currentPage)
        }
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

    if (Object.keys(products).length > 0) {
      if (page !== currentPage) handleGetPage(search, page)
    }
  }, [page, currentPage, search, products])

  const handleRenderResults = () => {
    const { results } = products

    if (!error && results && results.length > 0) {
      return (
        <SearchResults
          products={products}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )
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
