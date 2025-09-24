import { redirect } from 'react-router-dom';

export const createProductAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const product = {
    title: formData.get('title') || '',
    description: formData.get('description') || '',
    price: Number(formData.get('price')) || 0,
    stock: Number(formData.get('stock')) || 0,
    category: formData.get('category') || '',
  };

  try {
    await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return redirect('/products'); // go to a products list page after creation
  } catch (err: any) {
    console.error('Error creating product:', err);
    return { error: err.message || 'Failed to create product' };
  }
};
