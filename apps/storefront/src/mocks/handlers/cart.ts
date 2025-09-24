// import { http, HttpResponse } from 'msw';
// import { mockCart } from '../data/cart';

// const getCart = http.get('/api/cart', () => {
//   return HttpResponse.json(mockCart(), { status: 200 });
// });

// const addToCart = http.post('/api/cart', () => {
//   return HttpResponse.json({ item: { id: '1', name: 'Product 1', price: 100 } }, { status: 201 });
// });

// const updateQuantity = http.put('/api/cart/:productId', ({ params, body }) => {
//   return HttpResponse.json(
//     { item: { id: params.productId, quantity: body.quantity } },
//     { status: 200 }
//   );
// });

// const removeFromCart = http.delete('/api/cart/:productId', ({ params }) => {
//   return HttpResponse.json(
//     { message: `Product ${params.productId} removed from cart` },
//     { status: 200 }
//   );
// });

// export const cartHandlers = [getCart, addToCart, updateQuantity, removeFromCart];
