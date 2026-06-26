import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import robotVideo from '../Video/IMG_5117.MP4';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoBackground() {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const hero = wrap.parentElement;

    const setVideoProgress = (progress) => {
      if (video.readyState < 1 || !video.duration) return;

      try {
        video.currentTime = Math.min(video.duration - 0.05, Math.max(0, progress * video.duration));
      } catch {
        // Some mobile browsers reject seeks until the video has been briefly primed.
      }
    };

    const primeVideoForMobileSeek = () => {
      video
        .play()
        .then(() => {
          video.pause();
          setVideoProgress(0);
          ScrollTrigger.refresh();
        })
        .catch(() => {
          setVideoProgress(0);
        });
    };

    video.load();
    video.addEventListener('loadedmetadata', primeVideoForMobileSeek);
    video.addEventListener('loadeddata', () => ScrollTrigger.refresh());

    const tween = gsap.fromTo(
      wrap,
      { opacity: 0 },
      { opacity: 1, duration: 3.2, ease: 'sine.inOut', delay: 0.2, overwrite: true }
    );

    // Playback is scroll-driven on every viewport.
    const st = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 3,
      onLeave: () => gsap.to(wrap, { opacity: 0, duration: 1, ease: 'power1.in', overwrite: true }),
      onEnterBack: () => gsap.to(wrap, { opacity: 1, duration: 0.8, ease: 'power1.out', overwrite: true }),
      onUpdate: (self) => {
        setVideoProgress(self.progress);
      },
    });

    return () => {
      video.removeEventListener('loadedmetadata', primeVideoForMobileSeek);
      tween.kill();
      gsap.killTweensOf(wrap);
      st.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-video-bg">
      <video
        ref={videoRef}
        src={robotVideo}
        className="hero-video-element"
        muted
        playsInline
        preload="auto"
      />
      <div className="hero-video-overlay" />
    </div>
  );
}
