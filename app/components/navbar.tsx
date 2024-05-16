"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/Logo.svg'
import { usePathname } from "next/navigation";
import { Search2Icon } from "@chakra-ui/icons";
import { Avatar, Stack } from "@chakra-ui/react";

interface linkProps {
    name: string;
    href: string;
}

const links: linkProps[] = [
    { name: 'Home', href: '/home' },
    { name: 'Movies', href: '/home/movies' },
    { name: 'TV Show', href: '/home/show' },
    { name: 'Video', href: '/home/video' },
    { name: 'FAQ', href: '/home/faq' },
    { name: 'Pricing', href: '/home/pricing' },
    { name: 'Contact Us', href: '/home/contact' },
]


export default function Navbar() {
    const pathName = usePathname();
    return (
        <div className="w-full max-w-10xl bg-black mx-auto items-center justify-between px-5 sm:px-6 py-4 lg:px-8 flex ">
            <div className="flex items-center px-6">
                <Link href="/home" className="w-32 ">
                    <Image src={Logo} alt="PcariMovie logo" priority />
                </Link>
                <ul className="lg:flex gap-x-8 ml-14 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link
                                        href={link.href}
                                        className="text-white font-semibold text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link
                                        className="text-gray-300 font-normal text-sm"
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-x-8">
                <Search2Icon />
                <Stack direction='row'>
                    <Avatar name="haikal" />
                </Stack>
                <h1 className="text-white font-normal px-4">John Glich</h1>

            </div>

        </div>
    )
}
