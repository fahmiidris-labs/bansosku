import Image from "next/image"
import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"
import Link from "@/components/small/Link"

const Home: NextPageWithLayout = () => {
    return (
        <Main title="Home" className="container">
            <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center mb-10 sm:mb-0">
                <div className="md:flex-1">
                    <div className="flex flex-col items-start">
                        <h1 className="order-1 py-2 text-3xl md:text-5xl md:leading-none font-pop tracking-wider text-gray-800">
                            Sistem Online Pendataan <span className="text-blue">Bansos</span>
                        </h1>

                        <p className="text-base tracking-wide mb-">
                            Selamat Datang di Website
                        </p>

                        <p className="order-2 leading-relaxed text-base mr-6">
                            Website Sistem Online Pendataan bansos komplek panghegar, Kel. Cipadung Kulon, Kec. Panyileukan. Guna memastikan bantuan tersalurkan kepada orang yang tepat, proses verifikasi dilakukan melalui website <b>Bansos Ku</b> oleh RW setempat.
                        </p>

                        <div className="order-2 w-full py-5 text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
                            <Link href="/verification" className="text-sm bg-green text-white py-3 px-4 rounded-lg hover:ring-2 dark:hover:ring-offset-gray-700 hover:ring-offset-2 hover:ring-yellow ease-in-out duration-150">
                                Isi Form Verifikasi Disini
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 flex justify-center items-center">
                    <div className="py-12 lg:py-0">
                        <div className="relative noselect">
                            <Image src="/hero.png" alt="Hero" width="420" height="260" quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

Home.getLayout = getAppLayout

export default Home
