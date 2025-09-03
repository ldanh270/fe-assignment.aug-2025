'use client'

import Balloon from '@/components/common/balloon'

import Image from 'next/image'

type Feature = { title: string; desc: string }

const FEATURES: Feature[] = [
    {
        title: 'Exclusive Trip',
        desc: 'There are many variations of passages of available but the majority.',
    },
    {
        title: 'Professional Guide',
        desc: 'There are many variations of passages of available but the majority.',
    },
]

export default function PlanYourTrip() {
    return (
        <section className="relative w-full">
            {/* Balloons decors */}
            <div aria-hidden="true">
                <div className="pointer-events-none absolute top-40 left-15 hidden h-8 w-8 md:block">
                    <Balloon />
                </div>
                <div className="pointer-events-none absolute top-52 left-1 hidden h-12 w-12 md:block">
                    <Balloon />
                </div>
            </div>

            {/* Contents */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
                {/* Left gallery */}
                <div className="md:col-span-5">
                    <div className="grid grid-cols-2 grid-rows-1 gap-5">
                        <img
                            src="/plan/section1.svg"
                            alt="Hiker on mountain"
                            className="col-span-1 h-full w-full rounded-t-full rounded-l-full object-cover"
                        />
                        <div className="gap- col-span-1 flex flex-col gap-5">
                            <img
                                src="/plan/section2.svg"
                                alt="Kayak on lake"
                                className="aspect-[1] w-full rounded-t-full rounded-r-full object-cover"
                            />
                            <img
                                src="/plan/section3.svg"
                                alt="Tourists at landmark"
                                className="row-span-1 aspect-[1] w-full rounded-l-full rounded-b-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Center content */}
                <div className="md:col-span-5">
                    <p className="font-accent text-primary-foreground text-4xl font-normal">
                        Let’s Go Together
                    </p>
                    <h2 className="text-primary-foreground mt-1 text-5xl leading-tight font-bold">
                        Plan Your Trip
                        <br />
                        With us
                    </h2>

                    <p className="text-secondary text-base">
                        There are many variations of passages of available but the majority have
                        suffered alteration in some form, by injected hum randomised words which
                        don’t look even slightly.
                    </p>

                    <ul className="mt-6 space-y-4">
                        {FEATURES.map((f, i) => (
                            <li key={i} className="flex gap-4">
                                {/* circular icon */}
                                <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 ring-1 ring-teal-100">
                                    {/* simple inline icon */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6 text-teal-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    </svg>
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800">
                                        {f.title}
                                    </h3>
                                    <p className="text-slate-600">{f.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                        type="button"
                    >
                        Learn More
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Right sticky person with circle */}
            <div className="pointer-events-none absolute right-20 bottom-40 hidden h-96 w-96 md:block">
                <div
                    aria-hidden="true"
                    className="absolute top-2/3 left-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9F6F9]"
                />

                <div className="absolute right-[20%] z-50">
                    <Image
                        src="/plan/guy.svg"
                        alt="Traveler with suitcase"
                        width={217}
                        height={546}
                        className="md:h-[546px] md:w-[217px]"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
