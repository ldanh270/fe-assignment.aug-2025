'use client'

import Card from '@/components/category/card'

import { useEffect, useMemo, useRef, useState } from 'react'

type CategoryItem = {
    id: string
    name: string
    image: string
    link?: string
    rotate?: string
    className?: string
}

const CATEGORIES: CategoryItem[] = [
    {
        id: 'wildlife',
        name: 'Wildlife',
        image: '/category/wildlife.webp',
    },
    {
        id: 'walking',
        name: 'Walking',
        image: '/category/walking.jpg',
    },
    {
        id: 'cruises',
        name: 'Cruises',
        image: '/category/cruises.jpg',
    },
    {
        id: 'hiking',
        name: 'Hiking',
        image: '/category/hiking.jpg',
    },
    {
        id: 'airbirds',
        name: 'Airbirds',
        image: '/category/airbirds.jpg',
    },
]

export default function Category() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div id="title">
                <div className="font-accent text-4xl text-center">Wornderful Place For You</div>
                <div className="font-title font-bold text-5xl text-center">Tour Categories</div>
            </div>
            <div
                id="slider"
                className="w-full self-center mt-25 flex flex-col justify-center items-center"
            >
                <div
                    id="track"
                    className="w-full flex flex-row mx-auto justify-between overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 lg:overflow-visible lg:px-0"
                >
                    <div className="flex mx-auto gap-6 lg:justify-between ">
                        {CATEGORIES.map((item, index) => (
                            <Card
                                key={item.id}
                                place={index}
                                item={item}
                                className={item.className}
                            />
                        ))}
                    </div>
                </div>

                <div id="dots" className="m-5 flex w-full items-center justify-center gap-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <button
                            key={i}
                            className={[
                                'h-4 w-4 rounded-full transition border-primary border',
                                1 === i ? 'bg-primary' : 'bg-muted',
                            ].join(' ')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
