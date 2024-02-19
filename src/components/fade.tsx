import React from 'react';

import { AnimatePresence, motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface FadeProps {
    children: React.ReactNode;
    isActive?: boolean;
    className?: string;
    position?: 'left' | 'right';
}

export const Fade = ({ children, isActive, className, position} : FadeProps) => {
    return (
        <AnimatePresence>
            {(isActive) && (
                <motion.div
                    className={cn(className)}
                    initial={{ opacity: 0, x: position === 'left' ? '-100%' : '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    {children}
                </motion.div>
            )}
            {/* {!isActive && (
                <motion.div
                    className={cn(className)}
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    {children}
                </motion.div>
            )} */}
        </AnimatePresence>
    );
};
