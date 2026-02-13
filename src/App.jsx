import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import { products } from './data/index';
import { useCart } from './hooks/useCart';

const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <section className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </section>

          {/* Cart Section */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <Cart
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                total={total}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default App;
