import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
      
    },
    {
      text: 'Services',
      href: getPermalink('/services/#services1'),
      links: [
        {
          text: 'Application Security Assessment',
          href: getPermalink('/services'),
        },
        {
          text: 'API Security Assessment',
          href: getPermalink('/services'),
        },
        {
          text: 'Application Threat Modeling',
          href: getPermalink('/services'),
        },
        {
          text: 'AI-Powered Security Code Reviews',
          href: getPermalink('/services'),
        },
        {
          text: 'Mobile Application Security Testing',
          href: getPermalink('/services'),
        },
        {
          text: 'Penetration Testing',
          href: getPermalink('/services'),
        },
        {
          text: 'Cloud Application Security Assessment',
          href: getPermalink('/services'),
        },
        {
          text: 'Security Awareness Training',
          href: getPermalink('/services'),
        },
        {
          text: 'Network Security',
          href: getPermalink('/services'),
        },
      ],
    },
       {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Resources',
      href: getPermalink('/resources'), 
    },
   
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Application Security Assessment', href: '/#services/services2' },
        { text: 'API Security Assessment', href: '/services' },
        { text: 'Application Threat Modeling', href: '/services' },
        { text: 'AI-Powered Security Code Reviews', href: '/services' },
        // { text: 'Mobile Application Security Testing', href: '#' },
        // { text: 'Penetration Testing', href: '#' },
        // { text: 'Cloud Application Security Assessment', href: '#' },
        // { text: 'Security Awareness Training', href: '#' },
        // { text: 'Network Security', href: '#' },
        // { text: 'External Penetration Testing', href: '#' },
        // { text: 'Internal Penetration Testing', href: '#' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Resources', href: '/resources' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#encrypttion' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/encrypttion' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
