import CartItem from './CartItem';

const Cart = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length <= 0) {
    return (
      <div className="text-center py-8 text-gray-500 text-lg">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      <div className="space-y-4 divide-y divide-gray-200">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 mt-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">
          Total:{' '}
          <span className="text-gray-900">
            ${typeof total === 'number' ? total.toFixed(2) : total}
          </span>
        </h3>
        <button
          disabled
          className="bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
