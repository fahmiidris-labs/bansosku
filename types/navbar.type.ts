import React from "react"

export type NavbarType = { className?: string }

export type NavbarLinkType = {
    href: string,
}

export type LinksType = {
    text: string,
    url: string,
    icon: React.ReactElement
}

export type LogoAndMarkType = {
    className: string,
    color?: string,
}