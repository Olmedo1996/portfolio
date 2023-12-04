import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <main className='mt-20 flex gap-3 flex-col'>
                <section className=' lg:flex lg:items-center lg:justify-between flex-row-reverse'>
                    <Avatar className='w-32 h-32 mx-auto lg:mx-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-4 lg:mb-0'>
                        <AvatarImage src='https://2.gravatar.com/avatar/1cca61a7aa7164d020228b1a5c212f368eb3e0cee611a2276b7b96f230323edd?size=128' />
                        <AvatarFallback>DO</AvatarFallback>
                    </Avatar>
                    <div className='font-medium dark:text-white text-center mb-4 lg:text-left'>
                        <div className='space-y-1'>
                            <h1 className='text-3xl font-bold tracking-tight dark:text-white lg:text-4xl'>Diego Olmedo</h1>
                            <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
                                Ingeniero de Software y Desarrollador Web.
                            </p>
                        </div>
                    </div>
                </section>

                <div className='bg-indigo-100 h-[1000px] p-2'> Content for demo purposes</div>
            </main>
        </>
    );
}
