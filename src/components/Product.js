import "../styles/Product.css";

function Product({ product }) {
  return (
    <div className="Product">
      <div className="product-info">
        <span className="name">{product.name}</span>
        <span className="info">Count: {product.count}</span>
        <span className="info">
          Size: {product.size.width}x{product.size.height}
        </span>
        <span className="info">Weight: {product.weight}</span>
        <div className="comments">
          <span className="comments-label">Comments:</span>
          <ul>
            {product.comments.map((comment, i) => (
              <li>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
      <img className="product-img" src={product.imageUrl} />
    </div>
  );
}

export default Product;
