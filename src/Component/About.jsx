import React from 'react'

export default function About(props) {
  return (
    <div className='px-20 py-2 w-full min-h-[90vh] flex flex-col items-center justify-center gap-8 text-center text-base'>
      <p> <strong>{props.title}</strong>, is a dynamic and forward-thinking digital agency committed to transforming ideas into impactful digital experiences. We provide end-to-end services that blend strategy, creativity, and technology to help businesses thrive in the modern digital landscape.</p>
      
      <ul className='w-[60%] flex flex-col items-start'>
        <p className='font-bold'>Our core specialties include:</p>
        <li>
          <p>
            <strong>UI/UX Design:</strong>
            We design intuitive, user-centered interfaces that are not only visually engaging but also enhance usability and drive user satisfaction. Every element we create is tailored to provide seamless interaction and elevate the customer experience.
          </p>
        </li>
        <li>
          <p>
            <strong>Front-End Web Development: </strong>
            Using the latest technologies such as React.js, Tailwind CSS, and modern frameworks, we bring your designs to life with responsive, high-performance websites that look great on any device.
          </p>
        </li>
        <li>
          <p>
            <strong>Back-End Web Development:</strong>
            We build robust and scalable server-side applications that power your website or platform. From databases to APIs, our back-end solutions are built for reliability, security, and future growth.
          </p>
        </li>
        <li>
          <p>
            <strong>Full-Stack Web Development:</strong>
            As full-stack experts, we handle every aspect of your digital product—from front-end visuals to back-end logic—ensuring complete integration, efficiency, and control.
          </p>
        </li>
        <li>
          <p>
            <strong>Branding & Identity:</strong>
            We help businesses define who they are with strong brand identities. Through custom logo design, visual systems, and brand strategy, we ensure your brand is memorable, cohesive, and aligned with your vision.
          </p>
        </li>
        <li>
          <p>
            <strong>Free Consultation: </strong>
            Not sure where to start? We offer free consultations to help you explore your ideas, get expert feedback, and identify the right digital solutions—no cost, no pressure.
          </p>
        </li>
      </ul>
      <p>Our mission is to empower businesses—big or small—to succeed online. We believe in honest communication, long-term partnerships, and delivering measurable results. Whether you’re launching a new product, redesigning your website, or building a brand from scratch, our team is here to make it happen.</p>
      <p>Let’s collaborate and bring your vision to life with creativity, code, and clarity.</p>

    </div>
  )
}
