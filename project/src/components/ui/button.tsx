type Props = {
    label: string,
    filled?: boolean,
    onClick: () => void
}

export const Button = ({ label, filled, onClick }: Props) => {
    return(
        <div 
            className={`px-3 py-2 text-white text-xs font-bold cursor-pointer hover:opacity-90 ${filled ? 'bg-gray-600' : 'transparent'} md:text-sm`}
            onClick={onClick}
        >
            {label}
        </div>
    )
}