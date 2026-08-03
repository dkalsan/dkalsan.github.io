export interface NavItem {
  title: string;
  href: string;
}

export const site = {
  name: 'Damjan Kalšan',
  title: 'Damjan Kalšan',
  bio: 'Computer Vision PhD Student @ CVL',
  employer: 'Heidelberg University',
  location: 'Germany',
  email: 'damjan.kalsan@iwr.uni-heidelberg.de',
  avatar: '/images/bio-photo.jpg',
  description: "Damjan Kalšan's academic portfolio",
  social: {
    github: 'https://github.com/dkalsan',
    linkedin: 'https://www.linkedin.com/in/damjankalsan',
    googleScholar: 'https://scholar.google.com/citations?user=6NAxnFUAAAAJ',
    orcid: 'https://orcid.org/0009-0003-6919-5061',
  },
  nav: [
    { title: 'Publications', href: '/publications/' },
    { title: 'Teaching', href: '/teaching/' },
    { title: 'CV', href: '/cv/' },
  ] satisfies NavItem[],
};
