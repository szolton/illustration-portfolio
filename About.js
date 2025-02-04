import React from 'react';
import '../assets/style.css';
import aboutMeImage from '../assets/images/about-me.jpeg';
import Footer from '../components/Footer';

const About = () => (
  <div>
    <main className="about-container p-4">
      <h4 className="text-left p-5 pl-3 pt-1" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>
      <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
        Meet the Designer
      </h2>
      <div className="about-content flex flex-col md:flex-row">
        <img 
          src={aboutMeImage} 
          className="about-image w-full md:w-1/2 object-cover rounded mb-8 md:mb-0 md:mr-8" 
          alt="Picture of Stephanie" 
        />
        <div className="about-text text-gray-600">
          <p className="mb-4" style={{ textAlign: 'left' }}>
            Hello! I'm Stephanie Zolton, a passionate graphic designer based in Cleveland, Ohio. 
            With a keen eye for detail and a love for creativity, I specialize in crafting visual 
            stories that captivate and inspire, with a detailed history in print production, apparel 
            design and illustration, and brand identity. My journey in design began over six years 
            ago, and since then, I've had the privilege of working with a diverse range of clients 
            and projects.
          </p>
          <p className="mb-4" style={{ textAlign: 'left' }}>
            From branding and marketing materials to web design and illustration, I thrive on bringing 
            ideas to life in innovative and meaningful ways. I believe that great design is more than 
            just aesthetics; it's about communication and connection. Each project is an opportunity 
            to tell a story, evoke emotion, and make a lasting impression.
          </p>
          <p className="mb-4" style={{ textAlign: 'left' }}>
            Outside of design, I enjoy rock concerts, spin classes, watching the Cavs, and walks on 
            the beach, which often inspire my work and keep me creatively energized. I'm always looking 
            for new challenges and opportunities to collaborate. Whether you're looking to refresh your 
            brand, create stunning visuals, or bring your ideas to life, I'm here to help.
          </p>
          <p className="mb-4" style={{ textAlign: 'left' }}>
            Let's create something amazing together!
          </p>
          <h2 className="sub-header mb-2">Contact me</h2>
          <p className="mb-4" style={{ textAlign: 'left' }}>
            If you have any questions, inquiries, or would like to discuss a potential project, please 
            feel free to reach out to me. I strive to respond to all messages within 24 hours. Your 
            feedback and inquiries are valuable to me, and I look forward to hearing from you. I can 
            be contacted by email at 
            <a href="mailto:szolton.designs@gmail.com" className="underline-on-hover"> szolton.designs@gmail.com</a>, 
            and my resume is available 
            <a href="https://drive.google.com/file/d/1Q2sl7K5knj9QGR4KME2dnDOkw_HXcoxr/view?usp=sharing" target="_blank" className="underline-on-hover"> here</a> 
            to see my full range of experiences and qualifications. Thank you!
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default About;
