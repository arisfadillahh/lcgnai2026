import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ─── RENDERER ─────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // DEEP BLUE background — not black!
    renderer.setClearColor(0x000c22, 1);
    mount.appendChild(renderer.domElement);

    // ─── SCENE + BLUE FOG ─────────────────────────────────────
    // Blue fog creates the atmospheric glow visible in the original
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000c22);
    scene.fog = new THREE.FogExp2(0x001540, 0.022);

    // ─── CAMERA ───────────────────────────────────────────────
    // Sits ABOVE the wave terrain, looking slightly down
    // → waves fill lower-half, blue sky in upper-half
    const camera = new THREE.PerspectiveCamera(72, W / H, 0.1, 200);
    camera.position.set(0, 12, 30);

    // ─── GLOW SPRITE TEXTURE ──────────────────────────────────
    const makeSprite = (r, g, b) => {
      const cv = document.createElement('canvas');
      cv.width = 128; cv.height = 128;
      const ctx = cv.getContext('2d');
      const grd = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grd.addColorStop(0,    `rgba(${r},${g},${b},1)`);
      grd.addColorStop(0.15, `rgba(${r},${g},${b},0.9)`);
      grd.addColorStop(0.4,  `rgba(${r},${g},${b},0.3)`);
      grd.addColorStop(1,    `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(cv);
    };
    const texBlue  = makeSprite(0,   100, 220);
    const texCyan  = makeSprite(30,  190, 255);
    const texWhite = makeSprite(180, 230, 255);
    const texGlow  = makeSprite(0,   80,  200);

    // ─── WAVE TERRAIN ─────────────────────────────────────────
    // Continuous SINE WAVE surface — matches original video shape
    // (not separate ridges, but flowing sinusoidal hills)
    const isMobile = W < 768;
    const GX = isMobile ? 110 : 180;
    const GZ = isMobile ? 130 : 200;

    const waveY = (x, z) => {
      // Multiple overlapping sine components = organic wave look
      const w1 = 4.5 * Math.sin(x * 0.11 + 0.7);
      const w2 = 2.0 * Math.sin(x * 0.24 - 0.5);
      const w3 = 0.9 * Math.sin(x * 0.43 + 1.8);
      const zv = 0.5 * Math.cos(z * 0.13 + 0.4);
      return -1.5 + w1 + w2 + w3 + zv;
    };

    const tCount = GX * GZ;
    const tPos   = new Float32Array(tCount * 3);
    const tColor = new Float32Array(tCount * 3);

    let k = 0;
    const jX = (110 / GX) * 0.25;
    const jZ = (105 / GZ) * 0.25;

    for (let i = 0; i < GX; i++) {
      for (let j = 0; j < GZ; j++) {
        const xb = (i / (GX - 1) - 0.5) * 110;
        const zb = (j / (GZ - 1)) * -105 - 2;
        const x  = xb + (Math.random() - 0.5) * jX;
        const z  = zb + (Math.random() - 0.5) * jZ;
        const y  = waveY(x, z);

        tPos[k * 3]     = x;
        tPos[k * 3 + 1] = y;
        tPos[k * 3 + 2] = z;

        // Trough → deep blue, Peak → bright cyan/white
        const t = Math.max(0, Math.min(1, (y + 6) / 12));
        tColor[k * 3]     = 0.0  + t * 0.25;   // R
        tColor[k * 3 + 1] = 0.40 + t * 0.60;   // G: medium→ bright
        tColor[k * 3 + 2] = 0.85 + t * 0.15;   // B: always strong
        k++;
      }
    }

    const terrainGeo = new THREE.BufferGeometry();
    terrainGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
    terrainGeo.setAttribute('color',    new THREE.BufferAttribute(tColor, 3));

    const terrainMat = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      map: texCyan,
      transparent: true,
      opacity: 0.90,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(terrainGeo, terrainMat));

    // ─── CENTRAL SPIKE + BASE GLOW ────────────────────────────
    // Thin pillar of light rising from the wave surface
    const SC = 5000;
    const sPos   = new Float32Array(SC * 3);
    const sColor = new Float32Array(SC * 3);

    for (let i = 0; i < SC; i++) {
      const t      = Math.pow(Math.random(), 1.4);
      const height = t * 52;
      const spread = Math.exp(-t * 4.0) * 5.5;

      sPos[i * 3]     = (Math.random() - 0.5) * spread;
      sPos[i * 3 + 1] = height - 1.5;            // base at wave mid-height
      sPos[i * 3 + 2] = -18 + (Math.random() - 0.5) * spread;

      // Bright white-cyan at base → pure cyan at peak
      const br = 1 - t * 0.28;
      sColor[i * 3]     = 0.40 * br;
      sColor[i * 3 + 1] = 0.88 * br;
      sColor[i * 3 + 2] = 1.0  * br;
    }

    const spikeGeo = new THREE.BufferGeometry();
    spikeGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    spikeGeo.setAttribute('color',    new THREE.BufferAttribute(sColor, 3));

    const spikeMat = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      map: texWhite,
      transparent: true,
      opacity: 1.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(spikeGeo, spikeMat));

    // ─── BLUE ATMOSPHERIC GLOW ────────────────────────────────
    // Large, faint blue cloud behind/around the spike
    // This recreates the "blue light bloom" visible in the original
    const glowCount = 3000;
    const gPos = new Float32Array(glowCount * 3);
    for (let i = 0; i < glowCount; i++) {
      const r = Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi   = (Math.random() - 0.5) * Math.PI;
      gPos[i * 3]     = r * Math.cos(theta) * Math.cos(phi) * 0.8;
      gPos[i * 3 + 1] = r * Math.abs(Math.sin(phi)) + 5;   // more above
      gPos[i * 3 + 2] = -18 + r * Math.sin(theta) * Math.cos(phi) * 0.5;
    }
    const glowGeo = new THREE.BufferGeometry();
    glowGeo.setAttribute('position', new THREE.BufferAttribute(gPos, 3));
    const glowMat = new THREE.PointsMaterial({
      size: 4.0,
      color: 0x0044cc,
      map: texGlow,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(glowGeo, glowMat));

    // ─── DUST PARTICLES ───────────────────────────────────────
    // White-blue floating dots in the "sky" area
    const DC  = isMobile ? 2500 : 4500;
    const dPos = new Float32Array(DC * 3);
    for (let i = 0; i < DC; i++) {
      dPos[i * 3]     = (Math.random() - 0.5) * 120;
      dPos[i * 3 + 1] = Math.random() * 30 - 2;
      dPos[i * 3 + 2] = Math.random() * -110 - 2;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x4499ff,
      map: texBlue,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(dustGeo, dustMat));

    // ─── ANIMATION ────────────────────────────────────────────
    const LOOP   = 14;
    const Z_FAR  = 30;
    const Z_NEAR = 6;

    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow camera flythrough
      const p = (elapsed % LOOP) / LOOP;
      camera.position.z = Z_FAR - p * (Z_FAR - Z_NEAR);
      camera.position.y = 12 + Math.sin(elapsed * 0.20) * 0.5;

      // Look forward + slightly down → waves in lower half, sky in upper half
      camera.lookAt(0, 1.5, camera.position.z - 50);

      // Spike breathe
      spikeMat.opacity = 0.88 + Math.sin(elapsed * 3.0) * 0.12;
      glowMat.opacity  = 0.06 + Math.sin(elapsed * 1.5) * 0.03;

      renderer.render(scene, camera);
    };
    animate();

    // ─── RESIZE ───────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ─── CLEANUP ──────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      [terrainGeo, spikeGeo, glowGeo, dustGeo].forEach(g => g.dispose());
      [terrainMat, spikeMat, glowMat, dustMat].forEach(m => m.dispose());
      [texBlue, texCyan, texWhite, texGlow].forEach(t => t.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
}
