'use client'

import { useId, useState, useRef } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
      )

      if (result.text === 'OK') {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus(''), 5000) // Clear message after 5 seconds
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form ref={formRef} onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput 
            label="Phone" 
            type="tel" 
            name="phone" 
            autoComplete="tel" 
          />
          <TextInput 
            label="Message" 
            name="message" 
            required 
          />
        </div>

        {status === 'success' && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm text-green-800">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-800">
            Oops! Something went wrong. Please try again or email us directly.
          </div>
        )}

        <Button type="submit" className="mt-10" disabled={loading}>
          {loading ? 'Sending...' : "Let's work together"}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'waldo@cottleconstruction.co.za'],
            ['Contact Number', '072 412 3701'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export function ContactClient() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let's work together">
        <p>We can't wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40 border-4 border-[#5470c6] rounded-2xl p-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
