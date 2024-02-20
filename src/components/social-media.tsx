import React from 'react';
import { Icons, InstagramIcon, LinkedIn } from './icons';

const Enlace = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        target="_blank"
        href={href}
    >
        {children}
    </a>
)

export default function SocialMedia({className}:{className?:string}) {
    return (
        <div className={`flex items-center justify-center h-6 gap-3 ${className}`}>
            <Enlace href="https://github.com/Olmedo1996">
                <Icons.gitHub className='h-6 w-auto' />
            </Enlace>
            <Enlace href="https://www.linkedin.com/in/diego-olmedo-gim%C3%A9nez-388756240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <LinkedIn className='h-6 w-auto' />
            </Enlace>
            <Enlace href="https://www.instagram.com/diego0lmedo/">
                <InstagramIcon className='h-6 w-6' />
            </Enlace>
        </div>
    );
}
