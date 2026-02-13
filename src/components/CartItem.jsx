import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex-1 flex items-center justify-between">
        <div>
          <h4 className="text-md font-medium text-gray-800">{item.name}</h4>
          <p className="text-gray-600 text-sm">${item.price}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            aria-label="Decrease quantity"
            disabled={item.quantity <= 1}
          >
            <FaMinus className="text-xs" />
          </button>
          <span className="w-8 text-center font-medium text-gray-800">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            aria-label="Increase quantity"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
        aria-label="Remove item"
      >
        <FaTrash className="text-sm" />
      </button>
    </div>
  );
};

export default CartItem;
