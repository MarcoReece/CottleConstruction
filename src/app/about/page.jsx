import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Driven by Hard Work and Dedication."
        invert
      >
        <p>
          We are a team of skilled professionals who take pride in getting the 
          job done right. Our success is built on experience, reliability, and 
          a commitment to delivering quality workmanship on every project.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          We work with a trusted team of tradesmen who bring expertise and 
          dedication to every job.
          </GridListItem>
          <GridListItem title="Trust" invert>
          We focus on results—when there's work to be done, we get it 
          done, no matter what it takes.
          </GridListItem>
          <GridListItem title="Commitment" invert>
          Our team is built on a strong work ethic, ensuring every 
          project is completed with precision and efficiency.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Waldo Cottle',
        role: 'Founder / CEO',
        image: { 
          src: '/images/waldo-still_upscaled.jpg',
          width: 1100,  // Updated to actual image dimensions
          height: 1544, // Updated to actual image dimensions
        },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FadeIn>
                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                      <Image
                        alt=""
                        {...group.people[0].image}
                        className="h-[500px] w-full object-cover object-[center_0%] grayscale transition duration-500 motion-safe:group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                          {group.people[0].name}
                        </p>
                        <p className="mt-2 text-sm text-white">
                          {group.people[0].role}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                  
                  <FadeIn>
                    <div className="prose prose-neutral">
                      <p className="text-base leading-7">
                        With over two decades of experience in construction, Waldo Cottle has built a reputation 
                        for excellence and integrity in the industry. Starting from humble beginnings, he learned 
                        the trade from the ground up, working on various projects that helped shape his 
                        comprehensive understanding of construction.
                      </p>
                      <p className="mt-4 text-base leading-7">
                        As the founder and CEO of Cottle Construction, he has successfully led countless projects, 
                        from residential renovations to large-scale commercial developments. His hands-on approach 
                        and dedication to quality have earned him the trust of clients throughout the region.
                      </p>
                      <p className="mt-4 text-base leading-7">
                        Waldo's vision for Cottle Construction is rooted in traditional values of craftsmanship 
                        while embracing modern techniques and innovations. Under his leadership, the company 
                        continues to grow while maintaining its commitment to excellence and customer satisfaction.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Built on Trust, Quality, and Collaboration">
        <p>
          At Cottle Construction, we believe our strength lies in our collaborative 
          approach, putting our clients at the center of everything we do. From the 
          initial consultation to project completion, we work closely with you to 
          ensure the highest quality craftsmanship and attention to detail.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Our company was founded on the principles of integrity, reliability, and excellence. 
          With years of experience in the building industry, we've built a reputation for 
          delivering exceptional results—on time and within budget.
          </p>
          <p>
          At Cottle Construction, we treat every project as if it were our own, ensuring 
          the highest standards of workmanship while maintaining open and honest communication. 
          Your vision is our mission, and we're here to bring it to life.
          </p>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
