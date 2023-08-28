let arrData = [];

await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    arrData = data;
    console.log(arrData);
  });

export const PRODUCTS = arrData;
