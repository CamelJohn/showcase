import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

export const CreateProductPage: React.FC = () => {
  const actionData = useActionData() as { error?: string } | undefined;
  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>Create Product</h2>
      <Form method="post">
        <div>
          <label>Title</label>
          <input name="title" required />
        </div>

        <div>
          <label>Description</label>
          <textarea name="description" required />
        </div>

        <div>
          <label>Price</label>
          <input type="number" name="price" required />
        </div>
        
        <div>
          <label>Stock</label>
          <input type="number" name="stock" required />
        </div>
        
        <div>
          <label>Category</label>
          <input type="text" name="category" required />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Creating...' : 'Create Product'}
        </button>
      </Form>

      {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
    </div>
  );
};
