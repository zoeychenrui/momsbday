import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ImageGroup = ({ images, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Set triggerOnce to false to repeat the animation
    rootMargin: '-100px', // Adjust the rootMargin as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjust the duration as needed
        ease: 'easeInOut', // Adjust the easing as needed
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-start mb-8"
    >
      <div className="flex mb-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/2 rounded-md mx-2 overflow-hidden"
            style={{ aspectRatio: '1/1' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
      <p className="text-black text-xl mx-auto mt-4">{text}</p>
    </motion.div>
  );
};

const HomePage = () => {
  const imageGroups = [
    {
      images: [
        { src: '/wine.jpg', alt: 'happy' },
        { src: '/birthday.jpeg', alt: 'birthday' },
      ],
      text: '',
    },
    {
      images: [
        { src: '/food.jpg', alt: 'food' },
        { src: '/relax.jpg', alt: 'relax' },
      ],
      text: 'Today, I hope you think about all the things that bring you joy ✨',
    },
    {
      images: [
        { src: '/fam.jpg', alt: 'fam' },
        { src: '/tree.jpeg', alt: 'tree' },
      ],
      text: 'Fam(ily) - we love you very much 😘',
    },
    {
      images: [
        { src: '/sunflower.jpg', alt: 'sunflower' },
        { src: '/sunset.jpg', alt: 'sunset' },
        { src: '/rocks.jpg', alt: 'rocks' },
      ],
      text: "Here's to many more adventures 🚗",
    },
    {
      images: [
        { src: '/baby.jpg', alt: 'baby' },
        { src: '/adult.jpg', alt: 'adult' },
      ],
      text: 'Mom and Yi, then and now ⏱️',
    },
    {
      images: [
        { src: '/boat.jpg', alt: 'baby' },
        { src: '/buffet.jpg', alt: 'adult' },
      ],
      text: 'Mom and Dad, still looking young 👫🏻',
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 mt-36">生日快乐，妈妈 👩🏻🎂</h1>
      <div className="w-3/4">
        {imageGroups.map((group, index) => (
          <div key={index} style={{ minHeight: '100vh' }}>
            <ImageGroup images={group.images} text={group.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
