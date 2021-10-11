import "../styles/globals.css"
import "nprogress/nprogress.css"

import NProgress from "nprogress"
import Router from "next/router"

import { AppPropsWithLayout } from "@/types/app.type"
import AppLayout from "@/components/AppLayout"

// Loading Progress using NProgress
NProgress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {

    const getLayout = Component.getLayout || ((page) => {
        return (
            <AppLayout>{page}</AppLayout>
        )
    })

    return getLayout(
        <Component {...pageProps} />
    )
}

export default MyApp
