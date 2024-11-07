import Product from "./Product";

function Products() {
  // const productList = ["mobile", "laptop", "T.V"];
  const productList = [
    { id: 1, name: "mobile", price: 200, brand: "samsung", soldOut: false },
    { id: 2, name: "Laptop", price: 300, brand: "Dell", soldOut: false },
    { id: 3, name: "T.v", price: 500, brand: "LG", soldOut: true },
  ];
  return (
    <div>
      <ul>
        {productList.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            brand={product.brand}
            soldOut={product.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default Products;
