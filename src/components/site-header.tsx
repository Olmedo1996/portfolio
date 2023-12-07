import { ModeToggle } from '@/components/mode-toggle';

export function SiteHeader() {
    return (
        <header className='bg-background sticky top-0 z-40 w-full'>
            <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center space-x-1 gap-3'>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
