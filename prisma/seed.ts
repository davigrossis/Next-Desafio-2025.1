import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const products = [
		{
			title: 'Wireless Mouse',
			description: 'A smooth and responsive wireless mouse.',
			price: 29.99,
			createdAt: new Date(),
            image: 'https://cdn.awsli.com.br/600x700/84/84034/produto/252472238/funko-pop--roronoa-zoro-1496-a-1--800-qhsh5j6lsv.jpg',
		},
		{
			title: 'Mechanical Keyboard',
			description: 'A durable mechanical keyboard with RGB lighting.',
			price: 89.99,
			createdAt: new Date(),
            image: 'https://www.atacadocollections.com/produtos_img/g/funko-pop-one-piece-crocodile-925-img_126076_1.jpg',
		},
		{
			title: 'Noise Cancelling Headphones',
			description: 'Comfortable headphones with active noise cancelling.',
			price: 199.99,
			createdAt: new Date(),
            image: 'https://m.media-amazon.com/images/I/71A-Xpn8P0L._AC_UF894,1000_QL80_.jpg',
		},
		{
			title: '4K Monitor',
			description: 'A high-resolution 4K monitor for professional use.',
			price: 399.99,
			createdAt: new Date(),
            image: 'https://acdn-us.mitiendanube.com/stores/002/851/742/products/anyconv-com__funko_pop_a_nightmare_on_elm_street_freddy_krueger_58141985_1_184ddf4335f3c619132962a11b006314-5672a9429e72cad1d516967245273965-1024-1024.jpeg',
		},
		{
			title: 'USB-C Hub',
			description: 'A versatile USB-C hub with multiple ports.',
			price: 49.99,
			createdAt: new Date(),
            image: 'https://www.oderco.com.br/media/catalog/product/cache/a09cb7e3a42dd2f134ff88c47e22ea43/2/1/215000_3-17207182423981468.jpeg',
		},
		{
			title: 'Portable SSD',
			description: 'A fast and portable SSD with 1TB capacity.',
			price: 129.99,
			createdAt: new Date(),
            image: 'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/51842/products/zfc6ab356-89d7-425a-a9dd-c4d4b38ec9a0.jpeg',
		},
		{
			title: 'Bluetooth Speaker',
			description: 'A compact Bluetooth speaker with excellent sound quality.',
			price: 59.99,
			createdAt: new Date(),
            image: 'https://imusic.b-cdn.net/images/item/original/216/0889698793216.jpg?pop-anime-one-piece-2024-pop-anime-one-piece-luffy-gear-5-styles-may-vary-funko-pop-&class=scaled&v=1710243923',
		},
		{
			title: 'Smartwatch',
			description: 'A stylish smartwatch with fitness tracking features.',
			price: 149.99,
			createdAt: new Date(),
            image: 'https://acdn-us.mitiendanube.com/stores/001/003/911/products/boneco-funko-pop-naruto-shippuden-might-guy-11952-49ebbd45575077c68816787273077341-1024-1024.jpg',
		},
		{
			title: 'Gaming Chair',
			description: 'An ergonomic gaming chair with lumbar support.',
			price: 249.99,
			createdAt: new Date(),
            image: 'https://storage.geralgeek.com.br/images/venda/-Funko-Pop--TV--Disney---Percy-Jackson-and-The-Olympians--Percy-Jackson-660493a383488.jpg',
		},
		{
			title: 'Webcam',
			description: 'A high-definition webcam for video conferencing.',
			price: 79.99,
			createdAt: new Date(),
            image: 'https://cdn.awsli.com.br/600x700/84/84034/produto/304303577/agatha-harkness-b-1--800-u95tmnxhwm.jpg',
		},
	];

	for (const product of products) {
		await prisma.product.create({
			data: product,
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
