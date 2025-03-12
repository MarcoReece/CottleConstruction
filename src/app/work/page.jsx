'use client'
import { useState } from 'react'
import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const projects = [
  {
    id: 1,
    title: 'Modern House Project',
    description: 'Luxury residential construction in Cape Town',
    image: '1.jpg',
  },
  {
    id: 2,
    title: 'Commercial Complex',
    description: 'Multi-story office building in Johannesburg',
    image: '2.jpg',
  },
  {
    id: 3,
    title: 'Commercial Complex',
    description: 'Multi-story office building in Johannesburg',
    image: '3.jpg',
  },
  {
    id: 5,
    title: '',
    description: '',
    image: '5.jpg',
  },
  {
    id: 6,
    title: '',
    description: '',
    image: '6.jpg',
  },
  {
    id: 7,
    title: '',
    description: '',
    image: '7.jpg',
  },
  {
    id: 8,
    title: '',
    description: '',
    image: '8.jpg',
  },
  {
    id: 9,
    title: '',
    description: '',
    image: '9.jpg',
  },
  {
    id: 10,
    title: '',
    description: '',
    image: '10.jpg',
  },
  {
    id: 11,
    title: '',
    description: '',
    image: '11.jpg',
  },
  {
    id: 12,
    title: '',
    description: '',
    image: '12.jpg',
  },
  {
    id: 13,
    title: '',
    description: '',
    image: '13.jpg',
  },
  {
    id: 14,
    title: '',
    description: '',
    image: '14.jpg',
  },
  {
    id: 15,
    title: '',
    description: '',
    image: '15.jpg',
  },
  {
    id: 16,
    title: '',
    description: '',
    image: '16.jpg',
  },
  {
    id: 17,
    title: '',
    description: '',
    image: '17.jpg',
  },
  {
    id: 18,
    title: '',
    description: '',
    image: '18.jpg',
  },
  {
    id: 19,
    title: '',
    description: '',
    image: '19.jpg',
  },
  {
    id: 20,
    title: '',
    description: '',
    image: '20.jpg',
  },
  {
    id: 21,
    title: '',
    description: '',
    image: '21.jpg',
  },
  {
    id: 22,
    title: '',
    description: '',
    image: '22.jpg',
  },
  {
    id: 23,
    title: '',
    description: '',
    image: '23.jpg',
  },
  {
    id: 24,
    title: '',
    description: '',
    image: '24.jpg',
  },
  {
    id: 25,
    title: '',
    description: '',
    image: '25.jpg',
  },
  {
    id: 26,
    title: '',
    description: '',
    image: '26.jpg',
  },
  {
    id: 27,
    title: '',
    description: '',
    image: '27.jpg',
  },
  {
    id: 28,
    title: '',
    description: '',
    image: '28.jpg',
  },
  {
    id: 29,
    title: '',
    description: '',
    image: '29.jpg',
  },
  {
    id: 30,
    title: '',
    description: '',
    image: '30.jpg',
  },
  {
    id: 31,
    title: '',
    description: '',
    image: '31.jpg',
  },
  // {
  //   id: 32,
  //   title: '',
  //   description: '',
  //   image: '32.jpg',
  // }
]

function ImageModal({ image, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <button
          className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <Image
          src={`/images/${image}`}
          alt=""
          width={1200}
          height={900}
          className="w-full h-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

export default function Work() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Reliable craftsmanship for real-world projects."
      >
        <p>
          We believe in efficiency and making the most of our resources to deliver the best value to 
          our clients. Our expertise comes from years of experience, using trusted building methods 
          and high-quality materials to ensure every project stands the test of time.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.id} className="flex">
              <div 
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={`/images/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ImageModal 
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  )
}
