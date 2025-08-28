'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ButtonSize, ButtonVariant } from '@/constants/ui-attibutes/button-variants'

import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export function NavToggle({
    children,
    variant,
    size,
    dropdownOptions,
    className,
}: {
    children: React.ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    dropdownOptions?: { label: string; href: string }[]
    className?: string
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={variant ?? 'outline'}
                    size={size ?? 'default'}
                    className={`size-auto flex flex-row gap-2 font-text font-normal text-foreground text-[14px] m-0 p-0 cursor-pointer ${className}`}
                >
                    {children}
                    <Image
                        src="/icons/dropdown-icon-arrow.svg"
                        alt="Dropdown Icon"
                        width={10}
                        height={10}
                    />
                    <span className="sr-only">Toggle {children}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                {dropdownOptions?.map((option) => (
                    <DropdownMenuItem key={option.href}>
                        <Link href={option.href}>{option.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
