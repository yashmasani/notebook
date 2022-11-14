import './blue.css';

function Blue() {
  
  const SPREAD = 15;
  
  function colorSpawner(): number {
    return Math.ceil(Math.random() * 255);
  }
  return (
      <div className="container-ball">
        {
          [...Array(6)].map((_, i) => (
            <span style={{ backgroundColor: `rgb(${colorSpawner()}, ${colorSpawner()}, ${colorSpawner()})`, left: `${10 + (i*SPREAD)}%`, animationDelay: `${((colorSpawner()/255) * 100)}s` }} key={i} />
          ))
        }
      </div>
  );
}

export default Blue;
