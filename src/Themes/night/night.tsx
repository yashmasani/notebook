import { useEffect, useRef } from 'react';
import './night.css';

function Night() {
  
  const nightRef = useRef(null);
  
  useEffect(() => {
    const canvas:HTMLCanvasElement|null = nightRef.current;
    if (canvas) {
      const ctx = (canvas as HTMLCanvasElement).getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(20,30,40,50);
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={nightRef} />
    </div>
  );
}

export default Night;
