import { motion, useInView, useSpring, useTransform, useScroll, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState, type ReactNode } from 'react';

// ─── Fade in from bottom on scroll ────────────────────────────────────────────
export function FadeInUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Fade in from left ─────────────────────────────────────────────────────────
export function FadeInLeft({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Fade in from right ────────────────────────────────────────────────────────
export function FadeInRight({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Scale up on scroll ────────────────────────────────────────────────────────
export function ScaleIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger container ─────────────────────────────────────────────────────────
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────
export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(easeProgress * value));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
}

// ─── Parallax image ───────────────────────────────────────────────────────────
export function ParallaxImage({ src, alt, className = '', speed = 0.5 }: { src: string; alt: string; className?: string; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 15}%`, `${speed * 15}%`]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-[130%] object-cover" />
    </div>
  );
}

// ─── Floating element ─────────────────────────────────────────────────────────
export function FloatingElement({ children, className = '', duration = 3 }: { children: ReactNode; className?: string; duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [-1, 1, -1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Pulse element ────────────────────────────────────────────────────────────
export function PulseElement({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Tilt card ────────────────────────────────────────────────────────────────
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5, rotateX: -3 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated progress bar ────────────────────────────────────────────────────
export function AnimatedProgress({ progress, className = '' }: { progress: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={`h-3 w-full bg-slate-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="h-full bg-gradient-to-r from-secondary to-primary rounded-full relative overflow-hidden"
      >
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>
    </div>
  );
}

// ─── Scroll progress bar ──────────────────────────────────────────────────────
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-orange-400 to-primary origin-left z-[100]"
    />
  );
}

// ─── Text reveal ──────────────────────────────────────────────────────────────
export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');
  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ─── Magnetic button ──────────────────────────────────────────────────────────
export function MagneticButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.25;
    const y = (clientY - top - height / 2) * 0.25;
    setPosition({ x, y });
  };
  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Typewriter effect ────────────────────────────────────────────────────────
export function TypeWriter({ text, className = '', speed = 50 }: { text: string; className?: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) { setDisplayText(text.slice(0, i + 1)); i++; }
        else clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  );
}

// ─── Particle Background ──────────────────────────────────────────────────────
interface Particle { id: number; x: number; y: number; size: number; opacity: number; duration: number; delay: number; }
export function ParticleBackground({ count = 20, color = '#ffffff' }: { count?: number; color?: string }) {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
    }))
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -40, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

// ─── Reveal on scroll with clip path ─────────────────────────────────────────
export function ClipReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={isInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Horizontal scroll section ────────────────────────────────────────────────
export function HorizontalScroll({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div className={`relative ${className}`}>
      <div ref={ref} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
        {children}
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-secondary to-primary rounded-full mt-4"
        style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
      />
    </div>
  );
}

// ─── Scroll-linked number ─────────────────────────────────────────────────────
export function ScrollLinkedCounter({ value, scrollYProgress }: { value: number; scrollYProgress: MotionValue<number> }) {
  const displayValue = useTransform(scrollYProgress, [0, 1], [0, value]);
  const [display, setDisplay] = useState(0);
  displayValue.on('change', (v) => setDisplay(Math.floor(v)));
  return <span>{display.toLocaleString()}</span>;
}

// ─── Glowing orb ──────────────────────────────────────────────────────────────
export function GlowOrb({ color = '#fd761a', size = 300, className = '' }: { color?: string; size?: number; className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// ─── Flip card ────────────────────────────────────────────────────────────────
export function FlipCard({ front, back, className = '' }: { front: ReactNode; back: ReactNode; className?: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`relative cursor-pointer ${className}`}
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'relative' }}
        className="w-full h-full"
      >
        {/* Front */}
        <div style={{ backfaceVisibility: 'hidden' }} className="w-full h-full">
          {front}
        </div>
        {/* Back */}
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', inset: 0 }}
          className="w-full h-full"
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}

// ─── India Flag Wave ──────────────────────────────────────────────────────────
export function FlagWave() {
  return (
    <div className="relative w-32 h-20 overflow-hidden rounded-sm shadow-lg">
      {['#FF9933', '#FFFFFF', '#138808'].map((color, i) => (
        <motion.div
          key={i}
          className="absolute w-full"
          style={{ height: '33.33%', top: `${i * 33.33}%`, backgroundColor: color }}
          animate={{ skewX: [-2, 2, -2] }}
          transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Ashoka Chakra */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-5 h-5 border-2 border-blue-800 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
