'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import * as React from 'react'

import Image from 'next/image'

export function LanguageToggle() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="default"
                    className="w-[100px] h-[34px] flex flex-row justify-center items-center rounded-full font-text font-normal px-3 gap-0 cursor-pointer"
                >
                    <span className="scale-100 rotate-0">Language</span>
                    <span className="absolute scale-0 rotate-90">Ngôn ngữ</span>
                    <Image
                        src="/icons/dropdown-icon-triangle.svg"
                        alt="Dropdown Icon"
                        width={8}
                        height={10}
                        quality={100}
                        className="h-full"
                    />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
