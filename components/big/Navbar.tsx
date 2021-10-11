import { Fragment } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import ApplicationMark from "../small/ApplicationMark"
import ApplicationLogo from "../small/ApplicationLogo"

import { NavbarLinkType, LinksType } from "@/types/navbar.type"

const Navbar: React.FC = () => {

    const links: LinksType[] = [
        {
            text: "Home",
            url: "/",
        }, {
            text: "Form Verifikasi",
            url: "/verification",
        }
    ]

    return (
        <nav className="bg-white/95 border-b border-gray-100">
            <div className="container">
                <div className="relative flex items-center justify-center sm:justify-between h-16">

                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/*  */}
                    </div>

                    {/* Left Menu Navigation */}
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo Paperless */}
                        <Link href="/">
                            <a className="flex-shrink-0 flex items-center">
                                <ApplicationMark className="h-8 w-auto" color="black" />
                            </a>
                        </Link>
                    </div>

                    {/* Right Menu Navigation */}
                    <div className="hidden sm:flex items-center justify-end">
                        {/* Main Menu Navigration */}
                        <div className="hidden sm:block">
                            <div className="flex space-x-1">
                                {links.map((link, index) => (
                                    <NavbarLink key={index} href={link.url}>
                                        {link.text}
                                    </NavbarLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center space-x-1 sm:hidden">
                        {/*  */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

const NavbarLink: React.FC<NavbarLinkType> = ({ href, children, ...props }) => {

    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a className={`relative inline-flex justify-center items-center text-gray-700 ${asPath === href && "text-green"} hover:text-green mx-4 h-16 rounded-lg text-xs font-semibold duration-100 ease-in-out`} {...props}>
                <span>{children}</span>
                {asPath === href && (
                    <span className="absolute bottom-0 h-1 bg-green w-full rounded-t-md"></span>
                )}
            </a>
        </Link>
    )
}

export default Navbar
