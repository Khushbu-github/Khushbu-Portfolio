import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;

      // Ring lags behind
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      dot.classList.add("cursor-hover");
      ring.classList.add("cursor-hover");
    };

    const onMouseLeaveLink = () => {
      dot.classList.remove("cursor-hover");
      ring.classList.remove("cursor-hover");
    };

    const attachLinkListeners = () => {
      document.querySelectorAll("a, button, .hero-btn, .tech-icons, .exp-accordion-header").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();
    attachLinkListeners();

    // Re-attach for dynamic content
    const observer = new MutationObserver(attachLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Glowing dot */}
      <div ref={dotRef} className="custom-cursor-dot">
        <svg width="12" height="12" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="5" fill="#c770f0" />
          <circle cx="6" cy="6" r="3" fill="#fff" />
        </svg>
      </div>
      {/* Trailing ring */}
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}

export default CustomCursor;
