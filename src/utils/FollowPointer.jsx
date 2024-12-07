import { useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react';

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

function FollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  return { x, y };
}

export default FollowPointer;