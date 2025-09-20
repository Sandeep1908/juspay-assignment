import { useMemo } from 'react';

export const useAnimatedList = (items, baseDelay = 0, increment = 0.1) => {
  return useMemo(() => 
    items.map((item, index) => ({
      ...item,
      animationDelay: baseDelay + (index * increment)
    })), 
    [items, baseDelay, increment]
  );
};

export const useStaggeredAnimation = (count, baseDelay = 0, increment = 0.05) => {
  return useMemo(() => 
    Array.from({ length: count }, (_, index) => baseDelay + (index * increment)),
    [count, baseDelay, increment]
  );
};