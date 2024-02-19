import './globals.css';
import type { Metadata } from 'next';
// import Navbar from '@/components/navbar/Navbar';
// import Footer from '@/components/footer/Footer';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    icons: {
        icon: '/logo.ico'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='es' suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background font-sans antialiased h-full', fontSans.variable)}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <div className='relative flex min-h-screen flex-col' >
                        <SiteHeader/>
                        <div className='container py-1'>{children}</div>
                    </div>
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}
