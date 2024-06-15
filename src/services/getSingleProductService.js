const getSingleProductService = async (url) => {
  const resp = await fetch(url);
  const json = await resp.json();

  if (!resp.ok) throw new Error(json.message);

  return json;
};

export default getSingleProductService;
