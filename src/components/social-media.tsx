import React from 'react';
import { Icons, LinkedIn } from './icons';

export default function SocialMedia({className}:{className?:string}) {
    return (
        <div  className= {`flex items-center ${className}`}>
            <Icons.gitHub className='h-6 w-6 mr-2' />
            <LinkedIn className='h-6 w-6 mr-2' />
            <Icons.gmail className='h-6 w-6 mr-2' />
        </div>
    );
}
