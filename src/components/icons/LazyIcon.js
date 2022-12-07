import React, { Suspense } from "react";

// Component to lazy load icons
function LazyIcon({ iconName, iconAlt, iconProp }) {
  const Icon = React.lazy(() => import(`./${iconName}`));
  return (
    <Suspense fallback={<div>{iconAlt}</div>}>
      <Icon {...iconProp} />
    </Suspense>
  );
}

export default LazyIcon;
