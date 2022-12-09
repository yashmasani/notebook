import { useEffect, useRef } from 'react';
import nightStyle from './night.module.css';

function Night() {
  
  const nightRef = useRef(null);
  
  useEffect(() => {
    const canvas:HTMLCanvasElement|null = nightRef.current;
    if (canvas) {
      const ctx = (canvas as HTMLCanvasElement).getContext('2d');
      if (ctx) {
        const grad = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
        grad.addColorStop(0, '#000066');
        grad.addColorStop(0.5, '#0099ff');
        grad.addColorStop(1, '#000066');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1200, window.innerHeight);
      }
    }
  }, []);
  
  return (
    <div className={nightStyle.containerNight}>
      <canvas ref={nightRef} />
    </div>
  );
}

export default Night;
