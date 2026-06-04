import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SKILLS = [
  { label: "React",            color: "#61dafb" },
  { label: "Node.js",          color: "#68a063" },
  { label: "FastAPI",          color: "#009688" },
  { label: "NestJS",           color: "#e0234e" },
  { label: "MongoDB",          color: "#47a248" },
  { label: "Python",           color: "#ffd43b" },
  { label: "Machine Learning", color: "#a855f7" },
  { label: "TypeScript",       color: "#007acc" },
  { label: "Docker",           color: "#0db7ed" },
  { label: "LangChain",        color: "#12b886" },
];

const RADIUS = 130; // px from orb center

function SkillOrb() {
  const mountRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const SIZE = 260;

    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(SIZE, SIZE);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Core glass orb
    const orbMat = new THREE.MeshPhysicalMaterial({
      color: 0x080820, emissive: 0x18086e, emissiveIntensity: 1.0,
      metalness: 0.05, roughness: 0.04,
      transmission: 0.6, thickness: 1.2, ior: 1.4, clearcoat: 1,
    });
    const orb = new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), orbMat);
    scene.add(orb);

    // Glow shell
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x5533ff, transparent: true, opacity: 0.07, side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(1.55, 32, 32), glowMat);
    scene.add(glow);

    // Wireframe
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6644ee, wireframe: true, transparent: true, opacity: 0.12,
    });
    const wire = new THREE.Mesh(new THREE.SphereGeometry(1.13, 22, 22), wireMat);
    scene.add(wire);

    // Orbit ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.62, 0.013, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0x7755ff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending })
    );
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Particles
    const pCount = 200;
    const pPos   = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const th  = Math.random() * Math.PI * 2;
      const r   = 1.75 + Math.random() * 0.7;
      pPos[i*3]   = r * Math.sin(phi) * Math.cos(th);
      pPos[i*3+1] = r * Math.sin(phi) * Math.sin(th);
      pPos[i*3+2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pts = new THREE.Points(pGeo, new THREE.PointsMaterial({
      color: 0xaa88ff, size: 0.04, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending,
    }));
    scene.add(pts);

    // Lights
    scene.add(new THREE.AmbientLight(0x1a1a4e, 2.5));
    const p1 = new THREE.PointLight(0x7744ff, 10, 12);
    p1.position.set(3, 2, 3);
    scene.add(p1);
    const p2 = new THREE.PointLight(0x0055ff, 6, 9);
    p2.position.set(-3, -2, -2);
    scene.add(p2);

    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      orb.rotation.y   =  t * 0.28;
      wire.rotation.y  = -t * 0.14;
      wire.rotation.x  =  t * 0.09;
      ring.rotation.z  =  t * 0.22;
      pts.rotation.y   =  t * 0.10;
      const pulse = 1 + Math.sin(t * 2) * 0.04;
      glow.scale.setScalar(pulse);
      p1.color.setHSL(0.75 + Math.sin(t * 0.5) * 0.08, 1, 0.65);
      orbMat.emissiveIntensity = 1.0 + Math.sin(t * 1.8) * 0.35;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="skill-orb-section">
      <div
        className={`skill-orb-container${hovered ? " hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Three.js canvas */}
        <div ref={mountRef} className="skill-orb-canvas" />

        {/* Glow ring */}
        <div className="orb-glow-ring" />

        {/* Center label */}
        <div className={`skill-orb-label${hovered ? " hidden" : ""}`}>
          <span>Hover to</span>
          <span>explore skills</span>
        </div>

        {/* Orbit wrapper — the whole wrapper spins; tags counter-spin to stay readable */}
        <div className={`orbit-wrapper${hovered ? " spinning" : ""}`}>
          {SKILLS.map((skill, i) => {
            const angle = (i / SKILLS.length) * 2 * Math.PI;
            const x = Math.round(Math.cos(angle) * RADIUS);
            const y = Math.round(Math.sin(angle) * RADIUS);
            return (
              <div
                key={skill.label}
                className={`skill-tag${hovered ? " visible" : ""}`}
                style={{
                  "--x":     `${x}px`,
                  "--y":     `${y}px`,
                  "--color": skill.color,
                  "--delay": `${i * 0.06}s`,
                }}
              >
                {skill.label}
              </div>
            );
          })}
        </div>
      </div>

      <p className="skill-orb-hint">
        Explore my <span className="purple">tech universe</span>
      </p>
    </div>
  );
}

export default SkillOrb;
