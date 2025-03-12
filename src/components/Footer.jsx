import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image';
import { Logo } from '@/components/Logo'

const navigation = [
  {
    title: 'Links',
    links: [
      { title: 'About Us', href: '/about' },
      { 
        title: 'See Our Gallery',  // Changed from JSX to string
        href: '/work',
      },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-1 gap-8">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="flex items-center space-x-4">
              <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                {section.title}
              </div>
              <div className="flex items-center space-x-4 flex-nowrap">
                {section.links.map((link, linkIndex) => (  // Removed the filter
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-sm transition hover:text-neutral-950 whitespace-nowrap inline-flex"
                  >
                    {typeof link.title === 'string' ? link.title : 'See Our Gallery'}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            {/* <NewsletterForm /> */}
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
          <Image
            src="/images/cottle-construction-logo.jpg" // Path to the image in the `public` folder
            alt="Cottle Construction Logo"
            className="h-9 sm:hidden"
            width={64} // Replace with actual width
            height={64} // Replace with actual height
          />
          <Image
            src="/images/cottle-construction-logo.jpg"
            alt="Cottle Construction Logo"
            className="hidden h-14 sm:block"
            width={128} // Replace with actual width
            height={128} // Replace with actual height
          />
          </Link>
          <p className="text-sm text-neutral-700">
            © Cottle Construction. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
