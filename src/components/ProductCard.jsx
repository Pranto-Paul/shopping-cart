import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-200"
      >
        <FaShoppingCart className="text-sm" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
