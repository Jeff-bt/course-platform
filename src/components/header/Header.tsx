"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
    const currentPath = usePathname();
    const [title, setTitle] = useState('CodarSe');
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath]);

    return (
            <nav className="flex gap-6 items-center justify-start md:justify-center  bg-primary py-4 sm:py-6 px-6">
                <ul 
                    tabIndex={drawer ? -1 : undefined}
                    className="flex gap-4">
                        <button className="sm:hidden" onClick={() => setDrawer(true)}>
                            <MdMenu size={24}/>
                        </button>
                        <li>
                            <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold">
                                CODARSE
                            </Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link href='/' data-active={currentPath === '/'} className='data-[active=true]:underline'>
                                Página inicial
                            </Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link href='/cursos' data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>
                                Cursos
                            </Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link 
                                href='https://blog.codarse.com' target="_blank"
                                className="flex items-center gap-1"
                            >
                                Blog
                                <MdOutlineOpenInNew />
                            </Link>
                        </li>
                </ul>
                <div 
                    data-open={drawer}
                    onClick={() => setDrawer(false)}
                    tabIndex={drawer ? undefined : -1}
                    className="
                        data-[open=false]:-translate-x-full transiciton-transform
                        fixed top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-background">
                    <ul 
                        onClick={e => e.stopPropagation()}
                        className="flex flex-col p-4 w-60 h-full gap-2 bg-background">
                            <li>
                                <Link href='/' data-active={currentPath === '/'} className='data-[active=true]:underline'>
                                    Página inicial
                                </Link>
                            </li>
                            <li>
                                <Link href='/cursos' data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href='https://blog.codarse.com' target="_blank"
                                    className="flex items-center gap-1"
                                >
                                    Blog
                                    <MdOutlineOpenInNew />
                                </Link>
                            </li>
                    </ul>
                </div>
                <h1 className="sm:hidden">
                     {title}
                </h1>
            </nav>
    );
};