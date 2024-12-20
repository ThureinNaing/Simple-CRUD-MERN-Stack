import {
	Box,
	Button,
	Container,
	Heading,
	Input,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useColorModeValue } from '../ui/color-mode';
import { useProductStore } from '../../../store/product.js';
import { useNavigate } from 'react-router-dom';

export default function Create() {
	let navigate = useNavigate();
	const [newProduct, setNewProduct] = useState({
		name: '',
		price: '',
		image: '',
	});
	const { createProduct } = useProductStore();
	// let handleAddProduct = async () => {
	// 	const { success, message } = await createProduct(newProduct);
	// 	if (!success) {
	// 		console.log("Error");
	// 		console.log("message", message);
	// 	} else {
	// 		console.log("success", success);
	// 		console.log("message", message);
	// 	}
	// };
	const toast = useToast();
	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: 'Error',
				description: message,
				status: 'error',
				isClosable: true,
			});
		} else {
			toast({
				title: 'Success',
				description: message,
				status: 'success',
				isClosable: true,
			});
		}
		setNewProduct({ name: '', price: '', image: '' });
		navigate('/');
	};
	return (
		<Container maxW={'lg'}>
			<VStack spacing={'8'}>
				<Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={'8'}>
					Create New Product
				</Heading>
				<Box
					w={'full'}
					bg={useColorModeValue('white', 'gray.800')}
					p={'6'}
					rounded={'lg'}
					shadow={'md'}>
					<VStack spacing={'8'}>
						{/* input for product name */}
						<Input
							placeholder="Product name"
							name="name"
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									name: e.target.value,
								})
							}
						/>
						{/* input for price */}
						<Input
							placeholder="Product price"
							type="number"
							name="price"
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									price: e.target.value,
								})
							}
						/>
						{/* input for image */}
						<Input
							placeholder="Image URL"
							name="image"
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									image: e.target.value,
								})
							}
						/>
						<Button onClick={handleAddProduct} w={'full'} colorScheme={'blue'}>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
}
