import type { Metadata } from 'next';
import { Oswald, Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const oswald = Oswald({
	weight: ['200', '300', '400', '500', '600', '700'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-oswald',
});

const montserrat = Montserrat({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-montserrat',
});

const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-roboto',
});

export const metadata: Metadata = {
	title: 'cineboxd',
	description: 'Um site para comprar tudo que quiser do mundo cinematografico',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${oswald.variable} ${montserrat.variable} ${roboto.variable} font-roboto`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
