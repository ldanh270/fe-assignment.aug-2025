import Divider from '@/components/common/divider'
import { LanguageToggle } from '@/components/layout/header/components/language-toggle'
import { NavToggle } from '@/components/layout/header/components/nav-toggle'
import navPages from '@/constants/links/nav-pages'

import Image from 'next/image'
import Link from 'next/link'

export default function Upper() {
    return (
        <section className="flex flex-row justify-between items-center px-[4.5rem] py-1.5 border-b border-border text-[14px] text-foreground">
            <div
                id="left"
                className="flex flex-row w-auto h-auto gap-6.5 *:flex *:flex-row *:justify-between *:gap-2"
            >
                <span>
                    <Image
                        src="/icons/address.svg"
                        alt="Address Icon"
                        width={10.5}
                        height={14}
                        className="select-none"
                    />
                    45 New Eskaton Road, Austria
                </span>
                <Divider orientation="vertical" />
                <span>
                    <Image
                        src="/icons/clock.svg"
                        alt="Clock Icon"
                        width={14}
                        height={14}
                        className="select-none"
                    />
                    Sun to Friday: 8.00 am - 7.00 pm, Austria
                </span>
            </div>
            <div
                id="right"
                className="flex flex-row w-auto h-auto gap-6.5 *:flex *:flex-row *:justify-between *:gap-2"
            >
                <LanguageToggle />
                <div className="flex-row items-center justify-center gap-6">
                    <Link href="/faq">Faq</Link>
                    <Divider orientation="vertical" />
                    <Link href="/support">Support</Link>
                    <Divider orientation="vertical" />
                    <NavToggle
                        variant="link"
                        dropdownOptions={[
                            {
                                label: 'Sign in',
                                href: '/login',
                            },
                            {
                                label: 'Register',
                                href: '/register',
                            },
                        ]}
                    >
                        Sign in/ Register
                    </NavToggle>
                </div>
            </div>
        </section>
    )
}
