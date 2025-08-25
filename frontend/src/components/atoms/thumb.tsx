import { Media } from '@/interfaces/general'
import Image from 'next/image'
import React from 'react'

interface ThumbProps {
    logo: Media,
    className?: string
}

const Thumb = ({ logo,className }:ThumbProps) => {
    return (
        <picture className={'block '+className}>
            <Image
                className='w-full h-auto object-contain'
                src={logo.url}
                alt={logo.alternativeText || logo.name}
                width={logo.width}
                height={logo.height}
                priority
            />
        </picture>
    )
}

export default Thumb
