import type { Site, SocialLink, IconMap } from '@/types'

export const SITE: Site = {
  title: 'JosephGallegos',
  description: 'Site Realibility Engenieer',
  href: 'https://jaremgallegos.github.io',
  author: 'JosephGallegos',
  locale: 'es-PE',
  featuredPostContent: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/me',
    label: 'About Me',
  },
  {
    href: '/projects',
    label: 'Projects'
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/JaremGallegos',
    label: 'GitHub',
  },
  {
    href: 'https://gitlab.com/JaremGallegos',
    label: 'GitLab'
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail'
}