
type FooterType = {
    className?: string
}

const Footer: React.FC<FooterType> = ({ className }) => {

    const year: number = new Date().getFullYear()

    return (
        <footer className={` ${className}`}>
            
        </footer>
    )
}

export default Footer
