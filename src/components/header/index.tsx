'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';


const links = [
	{ href: '/', label: 'Home' },
	{ href: '/admin', label: 'Gerenciar' },
	{ href: '/produtos', label: 'Produtos' },
	{ href: '/contato', label: 'Contato' },
];

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	return(
        <header className="bg-header sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 ">
            <div className='flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto'>
                <Link href='/' className="flex gap-4 items-center" >
                    <Image 
                    src='/logo.png'
                    alt="Logo da loja"
                    width={904}
                    height={904}
                    className='h-20 w-20 rounded-xl'
                    />
                </Link>
                <nav className='flex justify-end'>
                    <div className='hidden w-full md:flex justify-end items-center gap-16'>
                        {links.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className='text-2xl font-oswald hover:bg-black/20 p-2 rounded-xl' >{link.label}</span>
                            </Link>
                        )}
                        <Link href='/carrinho'>
                            <ShoppingCart className=' w-12 h-12 text-2xl font-oswald hover:bg-black/20 p-2 rounded-xl' />
                        </Link>
                        <Link href='/login' className='bg-bgcard font-oswald text-black  hover:bg-sky-500/20 p-4 rounded-2xl'>
                                <span className='text-2xl p-2 rounded-xl' >Login</span>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        {isNavOpen ?
                        
                            <X
                                
                                onClick={toggleNav}
                                className="w-12 h-12 text-white cursor-pointer hover:bg-black/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            :
                            <div className='flex gap-8'>
                                
                                <Link href='/carrinho'>
                                    <ShoppingCart  className='w-11 h-11 text-white cursor-pointer'/>
                                </Link>

                                <Menu
                                onClick={toggleNav}
                                className='w-12 h-12 text-white cursor-pointer'
                                />
                            </div>
                        }

                    </div>
                </nav>
                {isNavOpen && (
                    <div className='md:hidden flex basis-full flex-col items-center gap-6 mt-10 divide-y divide-white'>
                    {links.map((link, index) => (
                        <Link href={link.href} key={index} className='w-full text-center border-solid border-t border-white'>
                            <span className='text-2xl text-white font-oswald p-2 rounded-xl'>
                                {link.label}
                            </span>
                        </Link>
                    ))}
                    <Link href='/login' className='w-full text-center'>
                        <span className='text-2xl text-white font-oswald p-2 rounded-xl'>
                            Login
                        </span>
                    </Link>
                </div>
                )}

            </div>
        </header>
    ) 
}
