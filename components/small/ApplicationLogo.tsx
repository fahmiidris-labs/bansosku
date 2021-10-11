import { LogoAndMarkType } from "@/types/navbar.type"

const ApplicationLogo: React.FC<LogoAndMarkType> = ({ className }) => {
    return (
        <svg className={className} width={326} height={630} viewBox="0 0 326 630" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152 630C248.098 630 326 559.485 326 472.5C326 385.515 248.098 315 152 315V630Z" fill="#16A75C" />
            <path d="M152 315C248.098 315 326 244.485 326 157.5C326 70.5152 248.098 0 152 0V315Z" fill="#FFD026" />
            <path d="M0 34C0 15.2223 15.2223 0 34 0H124V630H34C15.2223 630 0 614.778 0 596V34Z" fill="#1E88E5" />
        </svg>
    )
}

export default ApplicationLogo
