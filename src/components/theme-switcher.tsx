'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { CloudImage, StarsImage } from './icons';
import { Fade } from './fade';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isOn, setIsOn] = useState(theme === 'dark');

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setIsOn(resolvedTheme !== 'light');
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30
    };

    const CLASS_NAMES = {
        sky_day: 'bg-cyan-300',
        sun_active: 'bg-gradient-to-l from-amber-600 to-yellow-300 rounded-full shadow-outside-sun',
        moon_active: 'dark:bg-gradient-to-l dark:from-slate-100 dark:to-slate-100 dark:rounded-full dark:shadow-outside-moon justify-end'
    };

    const Clouds = () => {
        return (
            <>
                <Fade
                    className='w-full h-full top-0 left-0 absolute z-20'
                    isActive={theme === 'dark' || theme === 'light' || theme === 'system'}
                    position={theme === 'dark' ? 'left' : 'right'}
                >
                    <motion.div
                        className=''
                        animate={{
                            x: [0, 10, 10, 0, -10, -10, 0]
                        }}
                        transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
                    >
                        <CloudImage className='w-4 h-4 absolute left-11  top-2.5 dark:left-1 dark:top-2 dark:opacity-30 ' cloud={3} />
                    </motion.div>
                    <motion.div
                        className=''
                        animate={{
                            x: [0, 7, 15, 0]
                        }}
                        transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
                    >
                        <CloudImage className='w-4 h-4 absolute left-5  top-4 dark:left-5 dark:top-4 dark:opacity-70 ' cloud={2} />
                    </motion.div>
                    <motion.div
                        className=''
                        animate={{
                            x: [0, 5, 5, 0, -5, -5, 0]
                        }}
                        transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
                    >
                        <CloudImage className='w-4 h-4 absolute left-7 top-0 dark:left-7 dark:top-0 dark:opacity-60 ' />
                    </motion.div>
                </Fade>
            </>
        );
    };

    return (
        <div>
            <div
                className={cn(
                    'flex relative switch dark:justify-end w-[4.5rem] rounded-full shadow-inner-box p-1 bg-cyan-300 dark:bg-night-sky overflow-hidden cursor-pointer'
                )}
                data-ison={theme === 'dark'}
                onClick={toggleSwitch}
            >
                <StarsImage className={`absolute w-full h-full inset-0 z-0 ${theme === 'dark' ? 'opacity-70' : 'opacity-0'}`} />
                <motion.div
                    className={`handle w-6 h-6 cursor-pointe z-10 ${CLASS_NAMES.sun_active} ${CLASS_NAMES.moon_active} `}
                    layout
                    transition={spring}
                >
                    <div className='w-full h-full rounded-full shadow-inner-moon relative hidden dark:block'>
                        <span className='w-[10%] h-[10%] shadow-inner rounded-full absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2  '></span>
                        <span className='w-1/4 h-1/4 shadow-inner rounded-full absolute left-[70%] top-[50%] transform -translate-x-1/2 -translate-y-1/2'></span>
                        <span className='w-[20%] h-[20%] shadow-inner rounded-full absolute left-[30%] top-[70%] transform -translate-x-1/2 -translate-y-1/2'></span>
                    </div>
                </motion.div>
                <Clouds />
            </div>
        </div>
    );
};
