import Head from "next/head"

type MainType = {
    title: string,
    className?: string
}

const Main: React.FC<MainType> = ({ title, className, children }) => {
    return (
        <>
            <Head>
                <title>{`${title} - ${process.env.APP_NAME}`}</title>
            </Head>
            <div className={className}>
                {children}
            </div>
        </>
    )
}

export default Main