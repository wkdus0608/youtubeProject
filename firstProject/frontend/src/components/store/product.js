import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    try {
      if (!newProduct.name || !newProduct.image || !newProduct.price) {
        return { success: false, message: 'Please fill in all fields.' };
      }

      // const res = await fetch('http://localhost:5000/api/products', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newProduct),
      // });
      // product.js
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: 'Product created successfully' };
    } catch (error) {
      console.error('Error creating product:', error);
      return {
        success: false,
        message: error.message || 'Failed to create product',
      };
    }
  },
}));
