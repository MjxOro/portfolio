import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const useResponsive = (
  mobile: any | number[],
  tablet: any | number[],
  desktop: any | number[]
) => {
  const { width } = useThree((s) => s.size);
  if (width < 768) return mobile;
  else if (width >= 768 && width < 1280) return tablet;
  else if (width >= 1280) return desktop;
};

export default useResponsive;
