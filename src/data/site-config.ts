import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://www.leonarddost.de',
    avatar: {
        src: avatar,
        alt: 'Leonard Dost'
    },
    title: 'Leonard Dost',
    subtitle: 'Applied Data Science & AI',
    description: 'Portfolio of Leonard Dost — Applied Data Science student building data-driven solutions with ML, GenAI, and modern web technologies.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Leonard Dost - Applied Data Science & AI Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/ledostxx'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/leonard-dost-8aa267190/'
        }
    ],
    hero: {
        title: 'Turning Data Into Decisions — and Ideas Into Products',
        text: "I'm **Leonard Dost**, completing my MSc in Applied Information and Data Science at HSLU (graduating Feb 2027). I build end-to-end data solutions — from geospatial platforms on AWS to hybrid recommender systems and mobile apps powered by GenAI.\n\nCurrently looking for roles in **data science, ML engineering, or data consulting**.",
        image: {
            src: hero,
            alt: 'Leonard Dost'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: '',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
