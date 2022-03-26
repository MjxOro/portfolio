import { Object3DNode } from '@react-three/fiber';
import { ImageFadeMaterial } from './components/Shaders/ProjectsShaders/CustomMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      customMaterial: Object3DNode<CustomMaterial, typeof CustomMaterial>;
      imageFadeMaterial: Object3DNode<
        ImageFadeMaterial,
        typeof ImageFadeMaterial
      >;
    }
  }
}
