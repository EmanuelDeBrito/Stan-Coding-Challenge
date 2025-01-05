type Props = {
    label: string
}

export const SecondaryHeader = ({ label }: Props) => {
    return(
        <div className="flex items-center h-[60px] bg-gray-700">
            <div className="flex-1 max-w-4xl mx-auto px-5 lg:px-0">
                <div className="flex-1 text-2xl text-white font-semibold">{label}</div>
            </div>
        </div>
    )
}