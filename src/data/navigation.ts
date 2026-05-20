// Navigation configuration

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Fire Doors', href: '/products?category=fire-doors' },
      { label: 'Specialized Doors', href: '/products?category=specialized-doors' },
      { label: 'Wall Panels & Hardware', href: '/products?category=wall-panels-hardware' },
    ],
  },
  { label: 'Factory', href: '/factory' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];
