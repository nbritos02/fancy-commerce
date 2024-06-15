const getAllProductsService = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const json = await resp.json();
  return json;
};

export default getAllProductsService;
