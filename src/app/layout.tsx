import type {Metadata} from "next";
import {Inter} from "next/font/google";
import background from '../../public/Background.png'
import purpleBlur from '../../public/Blur Purple.png'
import blueBlur from '../../public/Blur Blue.png'
import Link from 'next/link'
import Provider from '@/utils/Provider'
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "DarkSide Platform",
    description: "Мы зарабатываем деньги вместе с вами"
};


export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (

        <html
            lang="en"
            style={{
                scrollBehavior: 'smooth'
            }}>
            <body
                className={inter.className}
                style={{
                    backgroundImage: `url(${background.src})`
                }}>
                <div className='container m-auto max-sm:px-5 max-sm:text-[12px]'>
                    <header className='flex justify-between items-center sticky top-5 my-4 z-50'>
                        <div>
                            <h1 className='text-3xl font-bold uppercase max-sm:text-x'>DarkSide</h1>
                            <span className='text-sm text-neutral-400 max-sm:text-[12px]'>УНИКАЛЬНАЯ ПЛАТФОРМА ДЛЯ ТЕМЩИКОВ</span>
                        </div>
                        <Link href='#articles'>
                            <button
                                className='font-bold px-4 py-2 rounded-full bg-white text-black transition-all duration-500 hover:text-white hover:bg-transparent hover: drop-shadow-2xl hover:scale-125'>
                                Делать деньги</button>
                        </Link>
                    </header>
                    <Provider>{children}</Provider>
                </div>
            </body>
        </html>
    );
}
