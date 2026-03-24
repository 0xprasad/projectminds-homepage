import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './WhyChoose.module.css';

const WhyChoose = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: '🛠️',
      title: 'Guided Project Development',
      description: 'End-to-end support to help you build your project from idea to deployment.'
    },
    {
      icon: '💻',
      title: 'Domain-Based Projects',
      description: 'AI, ML, IoT, Web — aligned with real-world applications.'
    },
    {
      icon: '📄',
      title: 'Documentation & Presentation Support',
      description: 'Helping you explain what you build confidently.'
    },
    {
      icon: '🎓',
      title: 'Research & Publication Support',
      description: 'We guide students and faculty through the process of turning ideas into structured research papers — from problem selection to final submission in journals and conferences.',
      bullets: [
        'Topic identification and research direction',
        'Paper structuring and documentation guidance',
        'Support for IEEE / conference submissions',
        'Review and refinement assistance'
      ]
    }
  ];

  return (
    <section className={styles.whyChoose} ref={ref}>
      <div className={`container ${styles.whyChooseContainer}`}>
        <h2 className={styles.sectionTitle}>Project Mentorship Services</h2>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${styles.featureCard} ${inView ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.featureIcon}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              {feature.bullets && (
                <ul className={styles.featureBullets}>
                  {feature.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
