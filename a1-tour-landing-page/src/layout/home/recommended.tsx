'use client'

import { useState } from 'react'

import Image from 'next/image'

type Destination = {
    title: string
    location: string
    price: string
    days: string
    image: string
}

const DESTINATIONS: Destination[] = [
    {
        title: 'Ghorepani Poon Hill Trek',
        location: '@Bhutan, Pokhara',
        price: '$569.00/Person',
        days: '5 Days',
        image: '/recommended/section1.svg',
    },
    {
        title: 'Langtang Valley Trekking',
        location: '@Bhutan, India, Pokhara',
        price: '$600.00/Person',
        days: '6 Days',
        image: '/recommended/section2.svg',
    },
    {
        title: 'Short Trek around Pokhara',
        location: '@Bhutan, Nepal, Tibet',
        price: '$250.00/Person',
        days: '6 Days',
        image: '/recommended/section3.svg',
    },
    {
        title: 'Island Peak Climbing',
        location: '@Nepal, Pokhara, Tibet',
        price: '$569.00/Person',
        days: '3 Days',
        image: '/recommended/section4.svg',
    },
]

export default function Recommended() {
    const [active, setActive] = useState(0)

    return (
        <section className="w-full bg-[url('/patterns/bg-light.svg')] bg-cover bg-center py-16">
            <div className="mx-auto max-w-6xl px-4 text-center">
                {/* Heading */}
                <p className="font-accent text-secondary text-lg">Best Recommended Places</p>
                <h2 className="font-title mt-2 text-3xl font-bold">
                    Popular Destination we offer for all
                </h2>
                <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {DESTINATIONS.map((d, idx) => (
                        <div
                            key={idx}
                            className="border-border bg-card flex flex-col overflow-hidden rounded-xl border shadow-sm"
                        >
                            <div className="relative h-48 w-full">
                                <Image src={d.image} alt={d.title} fill className="object-cover" />
                            </div>
                            <div className="flex flex-grow flex-col p-4">
                                <h3 className="text-base font-semibold">{d.title}</h3>
                                <p className="text-secondary mt-1 text-sm">{d.location}</p>
                                <p className="text-primary mt-2 text-lg font-bold">{d.price}</p>

                                <div className="mt-auto flex items-center justify-between pt-4">
                                    <span className="text-muted-foreground flex items-center gap-1 text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 
                                                2 0 00-2 2v7a2 2 0 002 2z"
                                            />
                                        </svg>
                                        {d.days}
                                    </span>
                                    <button className="border-border text-primary hover:bg-element rounded-full border px-3 py-1 text-sm font-medium">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination dots */}
                <div className="mt-8 flex justify-center gap-2">
                    {DESTINATIONS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActive(idx)}
                            className={`h-2 w-2 rounded-full ${
                                active === idx ? 'bg-primary' : 'bg-border'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
