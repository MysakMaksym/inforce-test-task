export async function fetchProducts() {
  const response = await fetch("http://localhost:3000/products/", {
    method: "GET",
  });
  if (response.status === 200) {
    return response.json();
  } else {
    return { error: "Unable to fetch products." };
  }
}
