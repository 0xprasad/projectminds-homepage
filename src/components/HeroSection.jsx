import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className={styles.hero} 
      ref={ref}
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    >
      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.heroContent} ${inView ? styles.visible : ''}`}>
          <h1 className={styles.headline}>
            Build Real-World Projects That Actually Matter
          </h1>
          <p className={styles.subheadline}>
            We help students go beyond theory and work on practical, industry-relevant systems with proper guidance.
          </p>
          
          <div className={styles.ctaButtons}>
            <a href="/projects" className={styles.btnPrimary}>
              Explore Projects
            </a>
            <a 
              href="https://wa.link/majb9j" 
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
