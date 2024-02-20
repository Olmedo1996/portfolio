import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TechnologyIcons } from '@/components/technology-icons';
import SocialMedia from '@/components/social-media';

export default async function Home() {
    return (
        <>
            <main className='flex gap-3 flex-col'>
                <Card>
                    <CardHeader className='flex flex-col lg:flex-row items-center justify-between'>
                        <div className='flex flex-col lg:flex-row items-start lg:items-center'>
                            <div className='flex rounded-full w-44 h-44 mx-auto bg-gradient-to-br p-[4px]  from-yellow-300 via-red-500 to-fuchsia-900'>
                                <div className='flex flex-col justify-between w-full h-full bg-background rounded-full p-[2px]'>
                                    <Avatar className='flex-shrink-0 w-full h-full'>
                                        <AvatarImage
                                            src={`https://2.gravatar.com/avatar/1cca61a7aa7164d020228b1a5c212f368eb3e0cee611a2276b7b96f230323edd?size=128`}
                                        />
                                        <AvatarFallback> DIEGO </AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                            <div className='lg:ml-8 text-center lg:text-left'>
                                <CardTitle className='mb-3 mt-3 lg:mt-0'>Diego Olmedo</CardTitle>
                                <CardDescription>
                                    <span>Ingeniero de Software</span> <span className='hidden lg:inline'> | </span>
                                    <span>Desarrollador Web Full Stack. </span>
                                    <span>
                                        <br />3 años de experiencia.
                                    </span>
                                </CardDescription>
                                <SocialMedia className='mt-4 flex items-center justify-center lg:justify-start' />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Desarrollador web <strong>Full-Stack</strong> con experiencia en la creación de aplicaciones web con tecnologías
                            como <strong>HTML, CSS, PHP, Laravel, JavaScript, ReactJS, Next.js, REST API</strong>. Con la capacidad de
                            realizar <strong>trabajos en equipo</strong>, así como también capaz de la autogestión en{' '}
                            <strong>proyectos independientes</strong>.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <TechnologyIcons />
                    </CardFooter>
                </Card>
                <section className='h-[1000px] p-2 flex flex-row'>
                    <div className='flex justify-center items-center rounded-2xl w-52 h-52 mx-auto mt-10 p-[4px] bg-gradient-to-br from-yellow-300 via-red-500 to-fuchsia-900'>
                        <Card className='flex-shrink-0 w-full h-full'>HOLA MUNDO</Card>
                    </div>
                    <div className='flex justify-center items-center rounded-2xl w-52 h-52 mx-auto mt-10 p-[4px] bg-gradient-to-br from-yellow-300 via-red-500 to-fuchsia-900'>
                        <Card className='flex-shrink-0 w-full h-full'>PRUEBA</Card>
                    </div>
                    <div className='flex justify-center items-center rounded-2xl w-52 h-52 mx-auto mt-10 p-[4px] bg-gradient-to-br from-yellow-300 via-red-500 to-fuchsia-900'>
                        <Card className='flex-shrink-0 w-full h-full'>ASDAS</Card>
                    </div>
                </section>
            </main>
            <figure id='background'></figure>
        </>
    );
}
