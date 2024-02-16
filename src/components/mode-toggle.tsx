'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [isActive, setIsActive] = React.useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    setIsActive(!isActive);
                    setTheme(theme == 'light' ? 'dark' : 'light');
                }}
                className='p-3'
                variant={'secondary'}
            >
                <motion.div
                    className=' w-full rounded-full cursor-pointer flex justify-center items-center'
                    animate={{
                        rotate: isActive ? 360 : 0
                    }}
                >
                    <Icons.moon
                        className={` w-[1.2rem] rotate-0 scale-100 transition-all transform dark:-rotate-360 dark:scale-0`}
                    />
                    <Icons.sunny className='absolute  w-[1.2rem] rotate-360 scale-0 transition-all dark:scale-100' />
                </motion.div>
            </Button>
        </>
    );
}
