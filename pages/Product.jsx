const Product=(props)=> {
  return (
    <div >
      <h2>{props.name}</h2>
      <h2 style={{ color: "green", fontWeight: "bold" }}>{price}</h2>
      <h2>{props.description}</h2>
    </div>
  );
}

export default Product;