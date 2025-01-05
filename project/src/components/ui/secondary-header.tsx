type Props = {
    label: string
}

export const SecondaryHeader = ({ label }: Props) => {
    return(
        <div className="flex items-center h-[60px] bg-gray-700">
            <div className="flex-1 max-w-3xl mx-auto">
                <div className="flex-1 text-2xl text-white font-semibold">{label}</div>
            </div>
        </div>
    )
}