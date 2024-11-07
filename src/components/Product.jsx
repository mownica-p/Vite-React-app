function Product({ name, price, brand, soldOut }) {
  return (
    <>
      <li>
        {brand} {name} {price} {soldOut ? "soldOut" : ""}
      </li>
    </>
  );
}

export default Product;
