import { lazy, PropsWithChildren } from 'react';

const Blue = lazy(() => import('./blue/blue'));

function Theme(props: PropsWithChildren) {
  return (
    <div className="container">
      <Blue/>
      { props.children }
    </div>
  );
}

export default Theme;
