import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ─── Project Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, 
    title: "IntelliCredit", 
    emoji: "🏦", 
    color: "#c770f0",
    description: "Corporate credit appraisal engine with PDF OCR, GST anomaly detection, and MCA research agent.",
    tech: ["Python", "FastAPI", "OCR", "Pandas"],
    github: "https://github.com/Khushbu-github/Intellicredit",
    live: "https://intellicredit-lilac.vercel.app",
  },
  {
    id: 2, 
    title: "Smart Incident Analyzer", 
    emoji: "🛰️", 
    color: "#0ea5e9",
    description: "AI-powered platform integrating traffic, accident, and weather data for Bengaluru city risk prediction.",
    tech: ["XGBoost", "LangChain", "Data Science", "Maps"],
    github: "https://github.com/Khushbu-github/Bengaluru-Smart-City-Incident-Analyzer",
    live: "#",
  },
  {
    id: 3, 
    title: "InterXAI", 
    emoji: "🤖", 
    color: "#10b981",
    description: "AI-assisted career platform with Groq LLM for automated interview question generation and monitoring.",
    tech: ["Groq", "FaceApi", "React", "Stable Diffusion"],
    github: "https://github.com/Khushbu-github/InterXAI",
    live: "#",
  },
  {
    id: 4, 
    title: "IncluVerse", 
    emoji: "🌍", 
    color: "#f59e0b",
    description: "Accessibility-first digital platform with voice commands and OCR to empower differently-abled users.",
    tech: ["Tesseract.js", "LangChain", "Voice AI", "A11y"],
    github: "https://github.com/Khushbu-github/IncluVerse-AIOP-For-Diabled",
    live: "https://incl-u-verse-aiop-for-diabled.vercel.app",
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <div className="laptop-modal-overlay" onClick={onClose}>
      <div className="laptop-modal-card" onClick={e => e.stopPropagation()} style={{ "--accent": project.color }}>
        <button className="laptop-modal-close" onClick={onClose}>✕</button>
        <div className="laptop-modal-emoji">{project.emoji}</div>
        <h2 className="laptop-modal-title">{project.title}</h2>
        <p className="laptop-modal-desc">{project.description}</p>
        <div className="laptop-modal-tech">
          {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
        </div>
        <div className="laptop-modal-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="modal-btn modal-btn-ghost">⬡ GitHub</a>
          <a href={project.live} target="_blank" rel="noreferrer" className="modal-btn modal-btn-solid" style={{ background: project.color }}>↗ Live Demo</a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div className="screen-project-card" style={{ "--accent": project.color }} onClick={() => onClick(project)}>
      <div className="screen-card-emoji">{project.emoji}</div>
      <h3 className="screen-card-title">{project.title}</h3>
      <p className="screen-card-desc">{project.description}</p>
      <div className="screen-card-tech">
        {project.tech.map(t => <span key={t} className="tech-badge-sm">{t}</span>)}
      </div>
      <div className="screen-card-actions">
        <a href={project.github} target="_blank" rel="noreferrer" className="sc-btn sc-btn-outline" onClick={e => e.stopPropagation()}>GitHub</a>
        <a href={project.live} target="_blank" rel="noreferrer" className="sc-btn sc-btn-fill" style={{ background: project.color }} onClick={e => e.stopPropagation()}>Live</a>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function Home3D() {
  const mountRef   = useRef(null);
  const screenRef  = useRef(null);
  const sfRef      = useRef(null);
  const dims       = useRef({ W: 500, H: 480 });
  const hoverRef   = useRef(false);  // raw hover flag
  const [cssHover, setCssHover] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [visible, setVisible] = useState(false);

  // Entrance
  useEffect(() => {
    const el = mountRef.current?.parentElement;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    dims.current.W = mount.clientWidth || 500;
    const { W, H } = dims.current;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, W / H, 0.1, 200);
    camera.position.set(0, 2.2, 7.5);
    camera.lookAt(0, 0.8, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── Materials ─────────────────────────────────────────────────────────────
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x1c1c2e, metalness: 0.92, roughness: 0.08, reflectivity: 1,
    });
    const screenGlowMat = new THREE.MeshPhysicalMaterial({
      color: 0x020212, emissive: 0x0b1630, emissiveIntensity: 2,
      metalness: 0, roughness: 0,
    });
    const logoMat = new THREE.MeshStandardMaterial({
      color: 0x6622bb, emissive: 0x4411aa, emissiveIntensity: 2.5,
    });

    // ── Laptop group ──────────────────────────────────────────────────────────
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.14, 2.5), bodyMat);
    laptopGroup.add(base);

    // Keyboard cutout
    const kb = new THREE.Mesh(
      new THREE.PlaneGeometry(3.15, 1.88),
      new THREE.MeshStandardMaterial({ color: 0x0f0f1f, roughness: 0.9 })
    );
    kb.rotation.x = -Math.PI / 2;
    kb.position.set(0, 0.071, 0.12);
    laptopGroup.add(kb);

    // Trackpad
    const tpad = new THREE.Mesh(
      new THREE.PlaneGeometry(0.95, 0.62),
      new THREE.MeshPhysicalMaterial({ color: 0x191930, metalness: 0.4, roughness: 0.25 })
    );
    tpad.rotation.x = -Math.PI / 2;
    tpad.position.set(0, 0.072, 0.88);
    laptopGroup.add(tpad);

    // Lid pivot (hinge at back of base)
    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, 0.07, -1.25);
    laptopGroup.add(lidPivot);
    lidPivot.rotation.x = -0.30; // ~17° past vertical — screen faces the camera

    // Lid panel
    const lid = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.4, 0.1), bodyMat);
    lid.position.set(0, 1.2, 0);
    lid.castShadow = true;
    lidPivot.add(lid);

    // Bezel
    const bezel = new THREE.Mesh(
      new THREE.PlaneGeometry(3.5, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x06060f, roughness: 0.5 })
    );
    bezel.position.set(0, 1.2, 0.051);
    lidPivot.add(bezel);

    // Screen face
    const screenFace = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 1.94), screenGlowMat);
    screenFace.position.set(0, 1.2, 0.052);
    lidPivot.add(screenFace);
    sfRef.current = screenFace;

    // Apple logo
    const logo = new THREE.Mesh(new THREE.CircleGeometry(0.18, 32), logoMat);
    logo.position.set(0, 1.2, -0.052);
    logo.rotation.y = Math.PI;
    lidPivot.add(logo);

    // Hinges
    [-1.6, 1.6].forEach(x => {
      const h = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.055, 0.28, 16),
        new THREE.MeshPhysicalMaterial({ color: 0x888898, metalness: 1, roughness: 0.05 })
      );
      h.rotation.z = Math.PI / 2;
      h.position.set(x, 0, 0);
      lidPivot.add(h);
    });

    // ── Holographic rings ─────────────────────────────────────────────────────
    const rings = [];
    [
      { r: 2.7,  tube: 0.016, color: 0x4466ff, sp:  0.38 },
      { r: 3.5,  tube: 0.011, color: 0xaa44ff, sp: -0.25 },
      { r: 4.2,  tube: 0.008, color: 0x22bbff, sp:  0.15 },
    ].forEach(({ r, tube, color, sp }) => {
      const mat = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 8, 128), mat);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.y = -0.85;
      mesh.userData.sp = sp;
      scene.add(mesh);
      rings.push(mesh);
    });

    // ── Shock-wave ring (appears on hover start) ───────────────────────────────
    const shockMat = new THREE.MeshBasicMaterial({
      color: 0x88aaff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
    });
    const shock = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.04, 8, 64), shockMat);
    shock.rotation.x = Math.PI / 2;
    shock.position.y = -0.2;
    shock.scale.setScalar(1);
    scene.add(shock);
    let shockActive = false;
    let shockT = 0;

    // ── Particles ─────────────────────────────────────────────────────────────
    const pCount = 500;
    const pPos   = new Float32Array(pCount * 3);
    const pOrig  = new Float32Array(pCount * 3); // original positions
    for (let i = 0; i < pCount; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      pPos[i*3] = pOrig[i*3] = x;
      pPos[i*3+1] = pOrig[i*3+1] = y;
      pPos[i*3+2] = pOrig[i*3+2] = z;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xaa88ff, size: 0.032, transparent: true, opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(pGeo, pMat);
    scene.add(pts);

    // ── Lights ────────────────────────────────────────────────────────────────
    const ambient   = new THREE.AmbientLight(0x1a1a4e, 2);
    const keyLight  = new THREE.PointLight(0x7744ff, 12, 28);
    const fillLight = new THREE.PointLight(0x0044ff,  6, 22);
    const rimLight  = new THREE.PointLight(0xffffff,  4, 18);
    const screenLt  = new THREE.PointLight(0x3355ff, 10,  7);
    keyLight.position.set(3, 5, 5);
    keyLight.castShadow = true;
    fillLight.position.set(-5, -2, -2);
    rimLight.position.set(0, 3, -5);
    screenLt.position.set(0, 1.5, 1.5);
    [ambient, keyLight, fillLight, rimLight, screenLt].forEach(l => scene.add(l));

    // Extra crazy lights (off by default, lit on hover)
    const crazyLight1 = new THREE.PointLight(0xff44ff, 0, 20);
    const crazyLight2 = new THREE.PointLight(0x44ffff, 0, 20);
    crazyLight1.position.set(-4, 3, 2);
    crazyLight2.position.set( 4, -3, -3);
    scene.add(crazyLight1); scene.add(crazyLight2);

    // ── Mouse tracking ────────────────────────────────────────────────────────
    let mX = 0, mY = 0, tX = 0, tY = 0;
    let hoverIntensity = 0; // 0–1 lerped float
    let prevHovered = false;

    const onMouse = e => {
      mX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onEnter = () => { hoverRef.current = true;  setCssHover(true); };
    const onLeave = () => { hoverRef.current = false; setCssHover(false); };

    window.addEventListener("mousemove", onMouse);
    mount.addEventListener("mouseenter", onEnter);
    mount.addEventListener("mouseleave", onLeave);

    // ── Animation loop ────────────────────────────────────────────────────────
    let raf;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const hovering = hoverRef.current;

      // Lerp hover intensity (quick ramp-up, slow ramp-down)
      hoverIntensity += ((hovering ? 1 : 0) - hoverIntensity) * (hovering ? 0.06 : 0.03);

      // Trigger shock wave on hover start
      if (hovering && !prevHovered) {
        shockActive = true; shockT = 0;
        shock.scale.setScalar(0.5);
        shockMat.opacity = 0.9;
      }
      prevHovered = hovering;

      // Smooth mouse follow — much tighter on hover
      const mouseLerp = 0.035 + hoverIntensity * 0.08;
      tX += (mX - tX) * mouseLerp;
      tY += (mY - tY) * mouseLerp;

      // ── LAPTOP MOTION ────────────────────────────────────────────────────────
      // Float: faster + bigger amplitude on hover
      const floatAmp   = 0.15 + hoverIntensity * 0.28;
      const floatSpeed = 0.88 + hoverIntensity * 1.8;
      laptopGroup.position.y = Math.sin(t * floatSpeed) * floatAmp;

      // Add hover shake/wobble
      if (hoverIntensity > 0.05) {
        laptopGroup.position.x = Math.sin(t * 7.3) * hoverIntensity * 0.06;
        laptopGroup.position.z = Math.cos(t * 5.7) * hoverIntensity * 0.04;
      }

      // Tilt + Auto-Rotation (gentle spin)
      const tiltY = 0.18 + hoverIntensity * 0.52;
      const tiltX = 0.08 + hoverIntensity * 0.22;
      laptopGroup.rotation.y = t * 0.22 + tX * tiltY;
      laptopGroup.rotation.x = -tY * tiltX;

      // Z-roll (crazy!) — based on horizontal mouse speed on hover
      laptopGroup.rotation.z = tX * hoverIntensity * 0.18;

      // ── LID BREATHE ─────────────────────────────────────────────────────────
      // Lid angle breathes on hover
      lidPivot.rotation.x = -0.30 + Math.sin(t * 2.5) * hoverIntensity * 0.06;

      // ── SCREEN GLOW ─────────────────────────────────────────────────────────
      const flickerNoise = hoverIntensity > 0.3
        ? Math.sin(t * 25) * 0.4 + Math.sin(t * 17) * 0.3
        : 0;
      screenGlowMat.emissiveIntensity = 2 + hoverIntensity * 4 + Math.sin(t * 2.4) * 1.5 + flickerNoise;
      screenGlowMat.emissive.setHSL(
        0.62 + Math.sin(t * (1 + hoverIntensity * 3)) * 0.12,
        1, 0.3 + hoverIntensity * 0.2
      );

      // ── RINGS ────────────────────────────────────────────────────────────────
      const ringSpeedMult = 1 + hoverIntensity * 7; // 1x → 8x
      rings.forEach((r, i) => {
        r.rotation.z += r.userData.sp * 0.008 * ringSpeedMult;
        r.material.opacity = 0.38 + hoverIntensity * 0.45 + Math.sin(t * (1.1 + i) + hoverIntensity * 4) * 0.15;
        // Rings expand outward on hover
        const scl = 1 + hoverIntensity * 0.25 * (i + 1) * 0.3;
        r.scale.setScalar(scl);
        // Color shift on hover
        r.material.color.setHSL(
          (0.66 + i * 0.1 + hoverIntensity * Math.sin(t * 2 + i) * 0.2) % 1,
          1, 0.5 + hoverIntensity * 0.3
        );
      });

      // ── SHOCK WAVE ───────────────────────────────────────────────────────────
      if (shockActive) {
        shockT += 0.04;
        const s = 0.5 + shockT * 12;
        shock.scale.setScalar(s);
        shockMat.opacity = Math.max(0, 0.9 - shockT * 1.1);
        if (shockT > 0.85) { shockActive = false; shockMat.opacity = 0; }
      }

      // ── PARTICLES ────────────────────────────────────────────────────────────
      pts.rotation.y  = t * (0.034 + hoverIntensity * 0.15);
      pts.rotation.x  = t * (0.011 + hoverIntensity * 0.08);
      pMat.size       = 0.032 + hoverIntensity * 0.055;
      pMat.opacity    = 0.65  + hoverIntensity * 0.35;
      pMat.color.setHSL(0.75 + hoverIntensity * Math.sin(t * 3) * 0.2, 1, 0.7);

      // Burst positions outward on hover
      if (hoverIntensity > 0.1) {
        const posAttr = pGeo.getAttribute("position");
        const burst   = hoverIntensity * 2.5;
        for (let i = 0; i < pCount; i++) {
          const ox = pOrig[i*3], oy = pOrig[i*3+1], oz = pOrig[i*3+2];
          const len = Math.sqrt(ox*ox + oy*oy + oz*oz) || 1;
          posAttr.setXYZ(i,
            ox + (ox / len) * burst + Math.sin(t * 2 + i) * hoverIntensity * 0.15,
            oy + (oy / len) * burst * 0.6,
            oz + (oz / len) * burst
          );
        }
        posAttr.needsUpdate = true;
      } else if (hoverIntensity < 0.05) {
        // Reset to original positions
        const posAttr = pGeo.getAttribute("position");
        for (let i = 0; i < pCount; i++) {
          posAttr.setXYZ(i, pOrig[i*3], pOrig[i*3+1], pOrig[i*3+2]);
        }
        posAttr.needsUpdate = true;
      }

      // ── LIGHTS ───────────────────────────────────────────────────────────────
      keyLight.color.setHSL(0.78 + Math.sin(t * (0.28 + hoverIntensity * 3)) * (0.05 + hoverIntensity * 0.2), 1, 0.65);
      keyLight.intensity  = 12  + hoverIntensity * 30;
      screenLt.intensity  = 8   + hoverIntensity * 35 + Math.sin(t * (2.4 + hoverIntensity * 10)) * (2 + hoverIntensity * 8);
      fillLight.intensity = 6   + hoverIntensity * 14;
      rimLight.intensity  = 4   + hoverIntensity * 12;

      // Crazy neon side lights on hover
      crazyLight1.intensity = hoverIntensity * 18 * (0.5 + 0.5 * Math.sin(t * 4));
      crazyLight2.intensity = hoverIntensity * 18 * (0.5 + 0.5 * Math.cos(t * 3.7));
      crazyLight1.color.setHSL((t * 0.1) % 1, 1, 0.6);
      crazyLight2.color.setHSL((t * 0.1 + 0.5) % 1, 1, 0.6);

      // Logo pulse
      logoMat.emissiveIntensity = 2.5 + hoverIntensity * 8 * (0.5 + 0.5 * Math.sin(t * 6));

      // Apollo logo hue shift
      logoMat.emissive.setHSL((0.8 + t * 0.05 * hoverIntensity) % 1, 1, 0.5);

      // ── RENDER ───────────────────────────────────────────────────────────────
      renderer.render(scene, camera);

      // ── SCREEN OVERLAY SYNC ──────────────────────────────────────────────
      if (screenRef.current && sfRef.current) {
        const { W: cW, H: cH } = dims.current;
        scene.updateMatrixWorld(true); // ensure matrices are current
        const hw = 1.55, hh = 0.97;
        const corners = [
          new THREE.Vector3(-hw,  hh, 0),
          new THREE.Vector3( hw,  hh, 0),
          new THREE.Vector3(-hw, -hh, 0),
          new THREE.Vector3( hw, -hh, 0),
        ].map(v => {
          v.applyMatrix4(sfRef.current.matrixWorld);
          v.project(camera);
          return { x: (v.x + 1) * 0.5 * cW, y: (-v.y + 1) * 0.5 * cH };
        });

        const minX = Math.min(...corners.map(c => c.x));
        const maxX = Math.max(...corners.map(c => c.x));
        const minY = Math.min(...corners.map(c => c.y));
        const maxY = Math.max(...corners.map(c => c.y));

        // Mild tilt + Auto-spin offset for CSS
        const rx = -tY * 4.5;
        const ry = (t * 0.22 * (180 / Math.PI)) + tX * 10;
        Object.assign(screenRef.current.style, {
          left:      `${minX}px`,
          top:       `${minY}px`,
          width:     `${maxX - minX}px`,
          height:    `${maxY - minY}px`,
          transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`,
        });
      }
    };

    animate();

    const ro = new ResizeObserver(() => {
      const cW = mount.clientWidth;
      dims.current.W = cW;
      renderer.setSize(cW, dims.current.H);
      camera.aspect = cW / dims.current.H;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      mount.removeEventListener("mouseenter", onEnter);
      mount.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div className={`laptop-hero-wrapper${visible ? " laptop-visible" : ""}${cssHover ? " laptop-crazy" : ""}`}>
        <div ref={mountRef} style={{ width: "100%", height: "480px" }} />

        <div ref={screenRef} className="screen-overlay">
          <div className="screen-inner">
            <div className="screen-header">
              <span className="screen-dot red" />
              <span className="screen-dot amber" />
              <span className="screen-dot green" />
              <span className="screen-title-bar">portfolio.projects</span>
            </div>
            <div className="screen-cards-scroll">
              {PROJECTS.map(p => (
                <ProjectCard key={p.id} project={p} onClick={setActiveProject} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}

export default Home3D;
