import * as THREE from "three";


export default function Eliptical({ xRadius = 1, zRadius = 1,ColorPath = "#CFD1D3"}) {
    const points = [];
    for (let index = 0; index < 64; index++) {
      const angle = (index / 64) * 2 * Math.PI;
      const x = xRadius * Math.cos(angle);
      const z = zRadius * Math.sin(angle);
      points.push(new THREE.Vector3(x, 0, z));
    }
  
    points.push(points[0]);
  
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
      <line geometry={lineGeometry}>
        <lineBasicMaterial attach="material" color={ColorPath} linewidth={2} />
      </line>
    );
  }
  