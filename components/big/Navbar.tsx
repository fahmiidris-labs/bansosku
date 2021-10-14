import { Fragment } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { HomeIcon, ClipboardListIcon } from "@heroicons/react/outline"

import ApplicationMark from "../small/ApplicationMark"

import { NavbarLinkType, LinksType, NavbarType } from "@/types/navbar.type"

const links: LinksType[] = [
    {
        text: "Home",
        url: "/",
        icon: <HomeIcon className="w-5 h-5" />
    }, {
        text: "Form Verifikasi",
        url: "/verification",
        icon: <ClipboardListIcon className="w-5 h-5 animate-wiggle" />
    }
]

const Navbar: React.FC = () => {


    return (
        <Fragment>
            <DesktopNavbar />
            <MobileNavbar className="block sm:hidden" />
        </Fragment>
    )
}

const DesktopNavbar: React.FC<NavbarType> = ({ className }) => {
    return (
        <nav className={`${className} bg-white/95 border-b border-gray-100 fixed top-0 inset-x-0 z-10`}>
            <div className="container">
                <div className="relative flex items-center justify-between h-16">
                    {/* Left Menu Navigation */}
                    <div className="flex items-stretch justify-start">
                        {/* Logo Paperless */}
                        <Link href="/">
                            <a className="flex-shrink-0 flex items-center">
                                <ApplicationMark className="h-8 w-auto" color="black" />
                            </a>
                        </Link>
                    </div>

                    {/* Right Menu Navigation */}
                    <div className="hidden md:flex items-center justify-end">
                        {/* Main Menu Navigration */}
                        <div className="block">
                            <div className="flex space-x-1">
                                {links.map((link, index) => (
                                    <NavbarLink key={index} href={link.url}>
                                        {link.text}
                                    </NavbarLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const MobileNavbar: React.FC<NavbarType> = ({ className }) => {
    return (
        <nav className={`${className} fixed bottom-0 inset-x-0 z-10 bg-white/95 border-t-2 border-gray-100`}>
            <div className="container">
                <div className="relative flex items-center justify-center h-16">
                    <div className="grid grid-cols-2 gap-4">
                        {links.map((link, index) => (
                            <MobileNavbarLink key={index} href={link.url} icon={link.icon}>
                                {link.text}
                            </MobileNavbarLink>
                        ))}
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

const MobileNavbarLink: React.FC<NavbarLinkType & { icon?: React.ReactElement }> = ({ href, icon, children, ...props }) => {

    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a className={`relative inline-flex justify-center font-lato items-center ${asPath === href ? "bg-green text-white" : "text-gray-700"} px-3 py-2 rounded-lg text-sm duration-100 ease-in-out`} {...props}>
                <div className="flex items-center space-x-2">
                    <div>{icon}</div>
                    <div>{children}</div>
                </div>
            </a>
        </Link>
    )
}

export default Navbar
