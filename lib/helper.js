const BASE_URL = 'http://localhost:3000'

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/api/products`)
  const json = await response.json()

  return json;
}