import React from 'react';
import { JavaScriptIcon, ReactIcon, TailwindIcon, PythonIcon, LaravelIcon, NextjsIcon } from './icons';

export const TechnologyIcons = () => {
    return (
        <div className='flex items-center'>
            <ReactIcon className='h-6 w-6 mr-2' />
            <TailwindIcon className='h-6 w-6 mr-2' />
            <JavaScriptIcon className='h-6 w-6 mr-2' />
            <LaravelIcon className='h-6 w-6 mr-2' />
            <NextjsIcon className='h-6 w-6 mr-2 dark:text-white' />
            <PythonIcon className='h-6 w-6 mr-2' />
        </div>
    );
};
