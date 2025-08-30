import { TourOption } from '@/components/hero/tour-option'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

const filters: { label: string; icon: string; options: string[] }[] = [
    {
        label: 'Destination',
        icon: 'hero/filters/destination.svg',
        options: ['Da Nang', 'Ha Noi', 'Ho Chi Minh City', 'Hue', 'Nha Trang'],
    },
    {
        label: 'Activity',
        icon: 'hero/filters/activity.svg',
        options: ['Beach', 'Mountain', 'City Tour', 'Adventure', 'Relax'],
    },
    {
        label: 'Days',
        icon: 'hero/filters/clock.svg',
        options: ['0–3 Days', '4–6 Days', '7–10 Days', '10+ Days'],
    },
    {
        label: 'Price',
        icon: 'hero/filters/price.svg',
        options: ['$100 – $200', '$200 – $400', '$400 – $600', '$600 – $1000', '$1000+'],
    },
]

export default function TourFilter() {
    return (
        <div className="relative bottom-13 bg-background flex flex-row justify-center items-center px-8 py-6 gap-6 border-2 border-primary rounded-2xl w-fit mx-auto">
            {filters.map((item) => (
                <TourOption key={item.label} className="w-62 after:" dropdownOptions={item.options}>
                    <Image
                        src={item.icon}
                        alt={`${item.label} filter`}
                        width={20}
                        height={20}
                        className="fill-background w-5 h-5 mr-2"
                    />
                    <span className="text-secondary flex-1 text-left">{item.label}</span>
                </TourOption>
            ))}
            <Button
                variant="default"
                size="default"
                className="rounded-full w-40 h-14 text-background"
            >
                Search
            </Button>
        </div>
    )
}
