import React, { useEffect } from 'react';
import './Cursor.css';

export default function Cursor() {
  const onMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor') as HTMLElement;
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
      cursor.style.display = '';
    },
    onMouseOut = (e: MouseEvent) => {
      if (
        !(
          e.clientY <= 0 ||
          e.clientX <= 0 ||
          e.clientX >= window.innerWidth ||
          e.clientY >= window.innerHeight
        )
      )
        return;
      const cursor = document.querySelector('.cursor') as HTMLElement;
      cursor.style.display = 'none';
    };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return <div className="cursor" />;
}
