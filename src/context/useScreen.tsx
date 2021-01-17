import { useEffect, useState } from 'react';

export interface screen {
  dimensions?: [number, number];
  aspect?: 'square' | 'portrait' | 'landscape';
}

export default function useScreen(): screen {
  const [dimensions, setDimensions] = useState<screen['dimensions']>(),
    [aspect, setAspect] = useState<screen['aspect']>(),
    setSize = () => {
      const w = window.innerWidth,
        h = window.innerHeight;
      setDimensions([w, h]);
      setAspect(h === w ? 'square' : h > w ? 'portrait' : 'landscape');
    };

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return { dimensions, aspect };
}
