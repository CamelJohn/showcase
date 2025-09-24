import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import { MainLayout } from './layouts/main.layout';

import { HomePage } from './pages/home/page';

import { ProductsPage } from './pages/products/page';
import { productsLoader } from './pages/products/loader';

import { ProductPage } from './pages/products/product/page';
import { productLoader } from './pages/products/product/loader';

import { CartPage } from './pages/cart/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage />, loader: productsLoader },
      { path: 'products/:productId', element: <ProductPage />, loader: productLoader },
        { path: "cart", element: <CartPage /> },
      //   { path: "checkout", element: <Checkout /> },
    ],
  },
];

const browserRouter = createBrowserRouter(routes);

export const RoutesProvider = () => <RouterProvider router={browserRouter} />;
