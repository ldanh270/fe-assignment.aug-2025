import { LanguageToggle } from '@/components/layout/(header)/components/language-toggle'
import Lower from '@/components/layout/(header)/lower'
import Upper from '@/components/layout/(header)/upper'

import Image from 'next/image'

import AddressIcon from '/icons/address.svg'

export default function Header() {
    return (
        <section className="w-dvw h-[139px] bg-background">
            <Upper />
            <Lower />
        </section>
    )
}
