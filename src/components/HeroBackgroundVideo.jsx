import { useState, useEffect, useRef } from 'react'

/**
 * HeroBackgroundVideo - Alternating background video with crossfade
 * 
 * TUNABLE CONSTANTS - adjust these to fine-tune the effect:
 */
const CONFIG = {
  // Timing
  CROSSFADE_INTERVAL: 10000,    // ms between video switches (10 seconds)
  TRANSITION_DURATION: 1500,    // ms for crossfade transition (1.5 seconds)
  
  // Video styling
  VIDEO_OPACITY: 0.18,          // Base opacity (0.12-0.22 recommended)
  VIDEO_BLUR: 4,                // Blur in pixels (2-6 recommended)
  VIDEO_SATURATE: 0.85,         // Saturation (0.8-1.0)
  VIDEO_CONTRAST: 1.05,         // Contrast (1.0-1.1)
  
  // Scrim overlay
  SCRIM_TOP_OPACITY: 0.4,       // Top of gradient (lighter)
  SCRIM_BOTTOM_OPACITY: 0.85,   // Bottom of gradient (darker)
}

// Video sources - place files in /public/videos/
const VIDEOS = [
  {
    id: 'study',
    webm: '/videos/hero-study.webm',
    mp4: '/videos/hero-study.mp4',
    poster: '/videos/hero-study.jpg',
    alt: 'Persona estudiando',
  },
  {
    id: 'work',
    webm: '/videos/hero-work.webm',
    mp4: '/videos/hero-work.mp4',
    poster: '/videos/hero-work.jpg',
    alt: 'Persona trabajando concentrada',
  },
]

/**
 * Hook to detect prefers-reduced-motion
 */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return prefersReducedMotion
}

/**
 * Static fallback for reduced motion
 */
function StaticBackground() {
  return (
    <div 
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(
            180deg,
            rgba(9, 9, 11, ${CONFIG.SCRIM_TOP_OPACITY}) 0%,
            rgba(9, 9, 11, ${CONFIG.SCRIM_BOTTOM_OPACITY}) 100%
          ),
          url(${VIDEOS[0].poster}) center/cover no-repeat
        `,
        filter: `blur(${CONFIG.VIDEO_BLUR}px) saturate(${CONFIG.VIDEO_SATURATE})`,
        opacity: CONFIG.VIDEO_OPACITY * 2, // Slightly higher for static image
      }}
      role="img"
      aria-label="Fondo decorativo de enfoque y productividad"
    />
  )
}

/**
 * Main component
 */
function HeroBackgroundVideo() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRefs = useRef([null, null])
  
  // Crossfade interval
  useEffect(() => {
    if (prefersReducedMotion) return
    
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      // Switch active video
      setActiveIndex((prev) => (prev + 1) % VIDEOS.length)
      
      // Reset transition flag after duration
      setTimeout(() => {
        setIsTransitioning(false)
      }, CONFIG.TRANSITION_DURATION)
    }, CONFIG.CROSSFADE_INTERVAL)
    
    return () => clearInterval(interval)
  }, [prefersReducedMotion])
  
  // For reduced motion, show static background
  if (prefersReducedMotion) {
    return <StaticBackground />
  }
  
  const videoStyle = {
    filter: `blur(${CONFIG.VIDEO_BLUR}px) saturate(${CONFIG.VIDEO_SATURATE}) contrast(${CONFIG.VIDEO_CONTRAST})`,
    transition: `opacity ${CONFIG.TRANSITION_DURATION}ms ease-in-out`,
  }
  
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Video layers */}
      {VIDEOS.map((video, index) => (
        <video
          key={video.id}
          ref={(el) => (videoRefs.current[index] = el)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            ...videoStyle,
            opacity: index === activeIndex ? CONFIG.VIDEO_OPACITY : 0,
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={video.poster}
        >
          <source src={video.webm} type="video/webm" />
          <source src={video.mp4} type="video/mp4" />
        </video>
      ))}
      
      {/* Dark scrim overlay for readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(9, 9, 11, ${CONFIG.SCRIM_TOP_OPACITY}) 0%,
            rgba(9, 9, 11, 0.5) 50%,
            rgba(9, 9, 11, ${CONFIG.SCRIM_BOTTOM_OPACITY}) 100%
          )`,
          zIndex: 1,
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(9, 9, 11, 0.4) 100%)',
          zIndex: 2,
        }}
      />
      
      {/* Very subtle lime glow at top (optional, very low opacity) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 30% at 50% 0%, rgba(255, 107, 53, 0.03) 0%, transparent 50%)',
          zIndex: 3,
        }}
      />
    </div>
  )
}

export default HeroBackgroundVideo
