'use client'

import { useMemo, useRef, useState } from 'react'

type Destination = { name: string; listing: number; image: string }

const DESTINATIONS: Destination[] = [
    { name: 'Island', listing: 18, image: '/destinations/des1.jpg' },
    { name: 'Nepal', listing: 22, image: '/destinations/des2.jpg' },
    { name: 'Thailand', listing: 22, image: '/destinations/des3.jpg' },
    { name: 'Maldives', listing: 16, image: '/destinations/des4.jpg' },
    { name: 'Vietnam', listing: 25, image: '/destinations/des5.jpg' },
]

export default function DestinationSlider() {
    // Index of the card currently in the center
    const [activeIndex, setActiveIndex] = useState(2)

    const trackRef = useRef<HTMLDivElement>(null)
    const autoStepTimer = useRef<number | null>(null)

    // Keep index inside the array range
    const clampIndex = (i: number) => (i + DESTINATIONS.length) % DESTINATIONS.length

    const goNext = () => setActiveIndex((i) => clampIndex(i + 1))
    const goPrev = () => setActiveIndex((i) => clampIndex(i - 1))

    // Smoothly move any card into the center
    const goToIndex = (targetIndex: number) => {
        if (targetIndex === activeIndex) return

        const N = DESTINATIONS.length
        // Shortest path in a circular list
        const raw = (targetIndex - activeIndex + N) % N
        const steps = raw <= N / 2 ? raw : raw - N // negative = left, positive = right

        // Clear previous timer if still running
        if (autoStepTimer.current) {
            window.clearTimeout(autoStepTimer.current)
            autoStepTimer.current = null
        }

        // Step through multiple moves to animate
        const stepOnce = (remain: number) => {
            if (remain === 0) return
            if (remain > 0) goNext()
            else goPrev()
            autoStepTimer.current = window.setTimeout(
                () => stepOnce(remain > 0 ? remain - 1 : remain + 1),
                120,
            )
        }

        stepOnce(steps)
    }

    // Compute the 5 visible indexes (left2, left1, center, right1, right2)
    const orderedIndexes = useMemo(() => {
        const res: number[] = []
        for (let offset = -2; offset <= 2; offset++) res.push(clampIndex(activeIndex + offset))
        return res
    }, [activeIndex])

    // Swipe handling (mobile)
    let touchStartX = 0
    const handleTouchStart = (e: React.TouchEvent) => (touchStartX = e.touches[0].clientX)
    const handleTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchStartX
        if (Math.abs(dx) < 30) return
        if (dx < 0) goNext()
        else goPrev()
    }

    return (
        <section className="w-full py-12">
            {/* Section title */}
            <div className="mb-10 text-center">
                <p className="text-sm text-emerald-600">Top Destination</p>
                <h2 className="text-2xl font-bold">Popular Destination</h2>
            </div>

            <div className="relative mx-auto max-w-5xl">
                <div
                    ref={trackRef}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="relative h-[380px] select-none sm:h-[420px]"
                >
                    {orderedIndexes.map((itemIndex, positionIndex) => {
                        // PositionIndex = 0..4, where 2 = center
                        const offsetFromCenter = positionIndex - 2
                        const translateX = offsetFromCenter * 170
                        const scale = 1 - Math.abs(offsetFromCenter) * 0.07
                        const zIndex = 100 - Math.abs(offsetFromCenter)

                        const isCenter = positionIndex === 2
                        const isClickable = !isCenter

                        return (
                            <article
                                key={itemIndex}
                                onClick={() => isClickable && goToIndex(itemIndex)}
                                className={`absolute top-1/2 left-1/2 origin-center overflow-hidden rounded-3xl shadow-md transition-[transform,filter] duration-500 ease-out ${
                                    isClickable ? 'cursor-pointer' : ''
                                }`}
                                style={{
                                    width: 260,
                                    height: 380,
                                    transform: `translate(-50%,-50%) translateX(${translateX}px) scale(${scale})`,
                                    zIndex,
                                    // apply only if not center
                                    filter: !isCenter ? 'blur(2px) brightness(0.7)' : 'none',
                                }}
                            >
                                {/* Image */}
                                <img
                                    src={DESTINATIONS[itemIndex].image}
                                    alt={DESTINATIONS[itemIndex].name}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />

                                {/* Text overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                    <div className="text-base font-semibold">
                                        {DESTINATIONS[itemIndex].name}
                                    </div>
                                    <div className="text-xs opacity-90">
                                        {DESTINATIONS[itemIndex].listing} Listing
                                    </div>
                                    <button className="mt-2 rounded-full border border-white/60 bg-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur hover:bg-white/40">
                                        View All →
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
