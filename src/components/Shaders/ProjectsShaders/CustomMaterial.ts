import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';

const CustomMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    hasTexture: 0,
    scale: 0,
    shift: 0,
    opacity: 1,
    color: new THREE.Color('white')
  },
  vertexShader,
  fragmentShader
);
extend({ CustomMaterial });
