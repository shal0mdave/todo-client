import { CartProvider } from './contexts/CartContext'
import { ProductsProvider } from './contexts/ProductsContext';
import { Layout, FeaturedProduct, Sort, Filter, ProductsGrid, Pagination } from './components'

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Layout>
          <FeaturedProduct />
          <Sort />
          <section className="products" id="top">
            <div className="container-fluid container-pad">
              <div className="row">
                <div className="col-md-3">
                  <Filter />
                </div>
                <div className="col-md-9">
                  <ProductsGrid />
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
