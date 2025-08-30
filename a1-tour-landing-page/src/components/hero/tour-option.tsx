'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Image from 'next/image'

export function TourOption({
    children,
    dropdownOptions,
    className,
}: {
    children?: React.ReactNode
    dropdownOptions?: string[]
    className?: string
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="default"
                    className={`size-auto flex flex-row justify-start items-center gap-2 font-text font-normal text-foreground text-[14px] m-0 p-0 cursor-pointer h-full hover:text-secondary hover:bg-none ${className}`}
                >
                    {children}
                    <Image
                        src="/icons/dropdown-icon-arrow.svg"
                        alt="Dropdown Icon"
                        width={10}
                        height={10}
                    />
                    <span className="sr-only">
                        Toggle {typeof children === 'string' ? children : 'menu'}
                    </span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="bottom" align="center">
                {dropdownOptions?.map((option) => (
                    <DropdownMenuItem key={option} asChild>
                        <span>{option}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
