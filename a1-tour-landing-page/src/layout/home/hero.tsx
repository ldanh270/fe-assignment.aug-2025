import ForwardArrow from '@/components/common/forward-arrow'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <div className="w-full h-screen bg-[url('/hero/background.svg')] bg-cover bg-center">
            <div
                id="banner"
                className="flex flex-col h-full justify-center items-start **:text-background w-[700px] ml-[300px]"
            >
                <span className="font-accent text-accent text-[40px]">
                    Get unforgetable pleasure with us
                </span>
                <span className="font-bold font-title text-[80px]">
                    Explore beauty of the whole world
                </span>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="rounded-full w-52 h-16">
                        <span className="text-[1rem]">Explore Tours</span>
                        <ForwardArrow />
                    </Button>
                    <Button variant="outline" className="bg-transparent rounded-full w-52 h-16">
                        <span className="text-[1rem]">Our Services</span>
                        <ForwardArrow />
                    </Button>
                </div>
            </div>
            <div id="control"></div>
            <div id="search"></div>
        </div>
    )
}
