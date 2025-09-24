import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import { MainLayout } from '@showcase/ui';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout title='Admin Panel' links={[
      { to: '/products', label: 'Products' },
      { to: '/categories', label: 'Categories' },
      { to: '/users', label: 'Users' },
      { to: '/settings', label: 'Settings' }
    ]} />,
    children: [
      {
        index: true,
        element: <div>Admin Home</div>,
      },
      {
        path: 'products',
        element: <div>Products List</div>,
        children: [
          {
            path: 'new',
            element: <div>New Product</div>,
          },
          {
            path: ':id',
            element: <div>Product Details</div>,
          },
          {
            path: ':id/edit',
            element: <div>Edit Product</div>,
          },
        ],
      },
      {
        path: 'categories',
        element: <div>Categories List</div>
      },
      {
        path: 'users',
        element: <div>Users List</div>
      },
      {
        path: 'settings',
        element: <div>Settings</div>
      }
    ],
  },
];

const browserRouter = createBrowserRouter(routes);

export const RoutesProvider = () => <RouterProvider router={browserRouter} />;
