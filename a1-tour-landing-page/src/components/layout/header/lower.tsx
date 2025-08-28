import Image from 'next/image'

export default function Lower() {
    return (
        <section>
            <div id="logo" className="bg-primary">
                <Image src="logo.svg" alt="Logo" width={95} height={56} />
                <span>Tours</span>
            </div>
            <div id="navbar"></div>
            <div id="request"></div>
        </section>
    )
}
