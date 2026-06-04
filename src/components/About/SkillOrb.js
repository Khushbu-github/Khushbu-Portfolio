import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SKILLS = [
  { label: "C++", color: "#00599c" },
  { label: "Javascript", color: "#f7df1e" },
  { label: "Typescript", color: "#3178c6" },
  { label: "Python", color: "#3776ab" },
  { label: "Node.Js", color: "#339933" },
  { label: "React.Js", color: "#61dafb" },
  { label: "Next.js", color: "#ffffff" },
  { label: "Express.js", color: "#ffffff" },
  { label: "FastAPI", color: "#009688" },
  { label: "Tailwind CSS", color: "#06b6d4" },
  { label: "MongoDB", color: "#47a248" },
  { label: "PostgreSQL", color: "#4169e1" },
  { label: "Firebase", color: "#ffca28" },
  { label: "Redis", color: "#dc382d" },
  { label: "Docker", color: "#2496ed" },
  { label: "AWS", color: "#ff9900" },
  { label: "Git", color: "#f05032" },
  { label: "Postman", color: "#ff6c37" },
  { label: "PyTorch", color: "#ee4c2c" },
  { label: "LLMs", color: "#7c3aed" },
  { label: "Fine-tuning", color: "#ec4899" },
  { label: "MLOps", color: "#10b981" },
  { label: "LangChain", color: "#12b886" },
  { label: "RAG", color: "#3b82f6" },
  { label: "Vector DBs", color: "#8b5cf6" },
  { label: "Computer Vision", color: "#6366f1" },
  { label: "Diffusion Models", color: "#f43f5e" },
  { label: "Multimodal AI", color: "#8b5cf6" },
  { label: "Generative AI", color: "#06b6d4" },
  { label: "Linear Algebra", color: "#f59e0b" },
  { label: "Calculus", color: "#ef4444" },
  { label: "Differentiation", color: "#8b5cf6" },
  { label: "Probability", color: "#10b981" },
  { label: "Statistics", color: "#3b82f6" },
  { label: "Optimization", color: "#f97316" }
];

const RADIUS = 165; // Slightly larger for more skills

function SkillOrb() {
  const mountRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [tagPos, setTagPos] = useState([]);

  // Pre-calculate spherical positions
  useEffect(() => {
    const n = SKILLS.length;
    const positions = SKILLS.map((skill, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      
      return {
        ...skill,
        phi,
        theta,
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        initialDelay: i * 0.02
      };
    });
    setTagPos(positions);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const SIZE = 320;

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
      metalness: 0.1, roughness: 0.05,
      transmission: 0.7, thickness: 1.5, ior: 1.45, clearcoat: 1,
    });
    const orb = new THREE.Mesh(new THREE.SphereGeometry(1.2, 64, 64), orbMat);
    scene.add(orb);

    // Glow shell
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x5533ff, transparent: true, opacity: 0.08, side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(1.6, 32, 32), glowMat);
    scene.add(glow);

    // Wireframe
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6644ee, wireframe: true, transparent: true, opacity: 0.15,
    });
    const wire = new THREE.Mesh(new THREE.SphereGeometry(1.22, 24, 24), wireMat);
    scene.add(wire);

    // Orbit rings (Multiple for more complex look)
    const ringGroup = new THREE.Group();
    [0, Math.PI/3, -Math.PI/3].forEach((rot, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.7 + i*0.1, 0.01, 8, 100),
        new THREE.MeshBasicMaterial({ color: 0x7755ff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending })
      );
      ring.rotation.x = rot;
      ring.rotation.y = (i * Math.PI) / 3;
      ringGroup.add(ring);
    });
    scene.add(ringGroup);

    // Particles
    const pCount = 300; // More particles
    const pPos   = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const th  = Math.random() * Math.PI * 2;
        const r   = 1.8 + Math.random() * 0.8;
        pPos[i*3]   = r * Math.sin(phi) * Math.cos(th);
        pPos[i*3+1] = r * Math.sin(phi) * Math.sin(th);
        pPos[i*3+2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pts = new THREE.Points(pGeo, new THREE.PointsMaterial({
        color: 0xaa88ff, size: 0.035, transparent: true, opacity: 0.6,
        blending: THREE.AdditiveBlending,
    }));
    scene.add(pts);

    // Lights
    scene.add(new THREE.AmbientLight(0x1a1a4e, 3));
    const p1 = new THREE.PointLight(0x7744ff, 15, 15);
    p1.position.set(3, 2, 3);
    scene.add(p1);
    const p2 = new THREE.PointLight(0x0055ff, 8, 10);
    p2.position.set(-3, -2, -2);
    scene.add(p2);

    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
        raf = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        orb.rotation.y   =  t * 0.25;
        wire.rotation.y  = -t * 0.15;
        wire.rotation.x  =  t * 0.1;
        ringGroup.rotation.y = t * 0.2;
        pts.rotation.y   =  t * 0.08;
        
        const pulse = 1 + Math.sin(t * 2) * 0.05;
        glow.scale.setScalar(pulse);
        p1.color.setHSL(0.75 + Math.sin(t * 0.5) * 0.1, 1, 0.65);
        orbMat.emissiveIntensity = 1.0 + Math.sin(t * 2) * 0.4;
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
          <span>The</span>
          <span className="purple" style={{ fontWeight: 800 }}>Skill Globe</span>
        </div>

        {/* 3D Skill Cloud */}
        <div className={`orbit-wrapper${hovered ? " spinning" : ""}`} style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
          {tagPos.map((skill, i) => {
            return (
              <div
                key={skill.label}
                className={`skill-tag${hovered ? " visible" : ""}`}
                style={{
                  "--x":     `${skill.x * RADIUS}px`,
                  "--y":     `${skill.y * RADIUS}px`,
                  "--z":     `${skill.z * RADIUS}px`,
                  "--color": skill.color,
                  "--delay": `${skill.initialDelay}s`,
                }}
              >
                {skill.label}
              </div>
            );
          })}
        </div>
      </div>

      <p className="skill-orb-hint">
        Hover to reveal my <span className="purple">tech universe</span>
      </p>
    </div>
  );
}

export default SkillOrb;
