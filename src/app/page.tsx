import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TechnologyIcons } from '@/components/technology-icons';
import SocialMedia from '@/components/social-media';

export default async function Home() {

//     const staticData = await fetch(`https://api.github.com/users/Olmedo1996`, { cache: 'force-cache' })
// console.log(staticData)
    return (
        <>
            <main className='mt-5 flex gap-3 flex-col'>
                <Card>
                    <CardHeader className='flex flex-col lg:flex-row items-center justify-between'>
                        <div className='flex flex-col lg:flex-row items-start lg:items-center'>
                            <Avatar className='w-32 h-32 lg:w-44 lg:h-44 mx-auto lg:mx-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-4 lg:mb-0 cursor-pointer'>
                                <AvatarImage src={`https://2.gravatar.com/avatar/1cca61a7aa7164d020228b1a5c212f368eb3e0cee611a2276b7b96f230323edd?size=128`} />
                                <AvatarFallback>DO</AvatarFallback>
                            </Avatar>
                            <div className="lg:ml-8 text-center lg:text-left">
                                <CardTitle>Diego Olmedo</CardTitle>
                                <CardDescription>
                                    <span>Ingeniero de Software</span> <span className="hidden lg:inline"> | </span>
                                    <span>Desarrollador Web Full Stack. </span>
                                    <span><br />5 años de experiencia.</span>
                                </CardDescription>
                                <SocialMedia className='mt-4'/>
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
                        <TechnologyIcons/>
                       {/*  React.js | Next.js | Laravel | PHP | JavaScript | TypeScript | CSS | HTML | TailwindCSS */}
                    </CardFooter>
                </Card>
                <section className='h-[1000px] p-2'></section>
            </main>
            <figure id='background'></figure>
        </>
    );
}
