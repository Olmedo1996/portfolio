'use client';

import * as React from 'react';
import { motion } from "framer-motion";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Icons } from './icons';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [isActive, setIsActive] = React.useState(false);

    return (
        <>
            {/* <Button variant='outline' size='icon' className='' onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
                <Sun className='h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
            </Button> */}
            <motion.div
                className='w-10 h-10 rounded-full cursor-pointer flex justify-center items-center'
                onClick={() => {
                    setIsActive(!isActive);
                    setTheme(theme == 'light' ? 'dark' : 'light');
                }}
                animate={{
                    rotate: isActive ? 360 : 0
                }}
            >
                <Icons.moon className={`h-[2rem] w-[2rem] rotate-0 scale-100 transition-all transform dark:-rotate-360 dark:scale-0`} />
                <Icons.sunny className='absolute h-[2rem] w-[2rem] rotate-360 scale-0 transition-all dark:scale-100' />
            </motion.div>
        </>
    );
}
