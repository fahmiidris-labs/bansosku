import ApplicationMark from "../small/ApplicationMark"

const Footer: React.FC = () => {

    const year: number = new Date().getFullYear()

    return (
        <footer className="mb-20 sm:mb-0 h-24 flex flex-col justify-center items-center space-y-2 m-3 border-t border-gray-100">
            <ApplicationMark className="h-6 w-auto" color="black" />
            <p className="text-gray-400 text-sm">
                &copy; { year }. Kel. Cipadung Kulon, Kec. Panyileukan.
            </p>
        </footer>
    )
}

export default Footer
