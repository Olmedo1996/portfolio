import { ModeToggle } from '@/components/mode-toggle';
import { ThemeSwitcher } from '@/components/theme-switcher';

export function SiteHeader() {
    return (
        <header className='bg-background sticky top-0 z-40 w-full'>
            <div className='container flex h-16'>
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto w-full'>
                        <div></div>
                        <ThemeSwitcher />
                    </nav>
                </div>
            </div>
        </header>
    );
}
