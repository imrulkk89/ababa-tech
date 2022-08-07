import React, { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(elementRef.current.clientWidth);
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useSizeElement;