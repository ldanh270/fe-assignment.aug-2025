'use client'

import { useMemo, useRef, useState } from 'react'

type Destination = { name: string; listing: number; image: string }

const destinations: Destination[] = [
    { name: 'Island', listing: 18, image: '/destinations/des1.jpg' },
    { name: 'Nepal', listing: 22, image: '/destinations/des2.jpg' },
    { name: 'Thailand', listing: 22, image: '/destinations/des3.jpg' },
    { name: 'Maldives', listing: 16, image: '/destinations/des4.jpg' },
    { name: 'Vietnam', listing: 25, image: '/destinations/des5.jpg' },
]

export default function Destination() {
    const [active, setActive] = useState(2)
    const trackRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<number | null>(null)

    const clamp = (i: number) => (i + destinations.length) % destinations.length
    const next = () => setActive((i) => clamp(i + 1))
    const prev = () => setActive((i) => clamp(i - 1))

    // đưa card có index target vào giữa bằng số bước tối thiểu
    const goTo = (target: number) => {
        if (target === active) return
        // delta trong modulo N, chọn chiều ngắn nhất
        const N = destinations.length
        const raw = (target - active + N) % N
        const steps = raw <= N / 2 ? raw : raw - N // âm = quay trái, dương = quay phải

        // clear timer cũ nếu đang chạy
        if (timerRef.current) {
            window.clearTimeout(timerRef.current)
            timerRef.current = null
        }

        const stepOnce = (remain: number) => {
            if (remain === 0) return
            if (remain > 0) next()
            else prev()
            timerRef.current = window.setTimeout(
                () => stepOnce(remain > 0 ? remain - 1 : remain + 1),
                120,
            )
        }

        stepOnce(steps)
    }

    const ordered = useMemo(() => {
        const res: number[] = []
        for (let k = -2; k <= 2; k++) res.push(clamp(active + k))
        return res
    }, [active])

    // swipe
    let startX = 0
    const onTouchStart = (e: React.TouchEvent) => (startX = e.touches[0].clientX)
    const onTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - startX
        if (Math.abs(dx) < 30) return
        if (dx < 0) next()
        else prev()
    }

    return (
        <section className="w-full py-12">
            <div className="mb-10 text-center">
                <p className="text-sm text-emerald-600">Top Destination</p>
                <h2 className="text-2xl font-bold">Popular Destination</h2>
            </div>

            <div className="relative mx-auto max-w-5xl">
                <div
                    ref={trackRef}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    className="relative h-[380px] select-none sm:h-[420px]"
                >
                    {ordered.map((idx, visualPos) => {
                        const delta = visualPos - 2
                        const translateX = delta * 170
                        const scale = 1 - Math.abs(delta) * 0.07
                        const z = 100 - Math.abs(delta)
                        const blur = Math.abs(delta) >= 1 ? 'blur-[1px]' : 'blur-0'
                        const opacity = 1 - Math.abs(delta) * 0.12

                        const clickable = idx !== active

                        return (
                            <article
                                key={idx}
                                onClick={() => clickable && goTo(idx)}
                                className={`absolute top-1/2 left-1/2 origin-center overflow-hidden rounded-3xl shadow-xl transition-[transform,opacity,filter] duration-500 ease-out ${blur} ${
                                    clickable ? 'cursor-pointer' : ''
                                }`}
                                style={{
                                    width: 260,
                                    height: 380,
                                    transform: `translate(-50%,-50%) translateX(${translateX}px) scale(${scale})`,
                                    zIndex: z,
                                    opacity,
                                }}
                            >
                                <img
                                    src={destinations[idx].image}
                                    alt={destinations[idx].name}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                    <div className="text-base font-semibold">
                                        {destinations[idx].name}
                                    </div>
                                    <div className="text-xs opacity-90">
                                        {destinations[idx].listing} Listing
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
