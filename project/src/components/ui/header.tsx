"use client"

import { Button } from '@/components/ui/button'

export const Header = () => {
    const handleLoginButton = () => { }

    const handleSingUpButton = () => { }

    return(
        <header className="flex items-center h-[70px] bg-blue-500">
            <div className="flex-1 flex items-center max-w-4xl mx-auto px-5 lg:px-0">
                <div className="flex-1 text-white text-xl font-bold md:text-3xl">DEMO Streaming</div>

                <div className="flex items-center gap-4">
                    <Button label='Login' onClick={handleLoginButton} />
                    <Button label='Start Your Free Trial' filled onClick={handleSingUpButton}/>
                </div>
            </div>
        </header>
    )
}