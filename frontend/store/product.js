import { create } from 'zustand';

export const useProductStore = create((set) => ({
	products: [],
	setProducts: (products) => set({ products }),
	createProduct: async (newProduct) => {
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: 'Please fill in all fields.' };
		}
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
	},
	// fetch product
	fetchProducts: async () => {
		let res = await fetch('/api/products');
		let data = await res.json();
		set({ products: data.data });
	},
	// delete product
	deleteProduct: async (pid) => {
		let res = await fetch(`/api/products/${pid}`, {
			method: 'DELETE',
		});
		let data = await res.json();
		if (!data.success) return { success: false, message: data.message };
		// update the ui state, without need to refresh
		set((state) => ({
			products: state.products.filter((product) => product._id !== pid),
		}));
		return { success: true, message: 'Product deleted successfully' };
	},
	// update product
	updateProduct: async (pid, updatedProduct) => {
		let res = await fetch(`/api/products/${pid}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedProduct),
		});
		let data = await res.json();
		if (!data.success) return { success: false, message: data.message };
		// update the ui state, without need to refresh
		set((state) => ({
			products: state.products.map((product) =>
				product._id === pid ? data.data : product,
			),
		}));
		return { success: true, message: 'Product updated successfully' };
	},
}));
