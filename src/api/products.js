// API calls to get product data

export const searchProducts = async (search, page = 1) => {
  const endpoint = `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${search}&resultsFormat=native&page=${page}`

  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(response.status)
  }

  const products = await response.json()
  return products
}
