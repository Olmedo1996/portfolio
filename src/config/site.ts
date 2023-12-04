export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: 'Sala Situacional',
    description:
        'Plataforma dedicada a monitorear, analizar y proporcionar información actualizada sobre la propagación y control de enfermedades endémicas, centrándonos inicialmente en el dengue.',
    mainNav: [
        {
            title: 'Datos',
            href: '/prueba'
        },
        {
            title: 'Informes',
            href: '/prueba'
        },
        {
            title: 'Sobre nosotros',
            href: '/prueba'
        }
    ],
    links: {
        twitter: 'https://twitter.com/shadcn',
        github: 'https://github.com/shadcn/ui',
        docs: 'https://ui.shadcn.com'
    }
};
