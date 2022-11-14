import { lazy, PropsWithChildren } from 'react';

const Blue = lazy(() => import('./blue/blue'));
const Night = lazy(() => import('./night/night'));

function Theme(props: PropsWithChildren) {
  return (
    <div className="container">
      <Night/>
      { props.children }
    </div>
  );
}

export default Theme;
