import { useEffect, useRef, useState } from "react";

type ObserverRect = Omit<DOMRectReadOnly, "toJSON">;

/** A React hook for using the Resize Observer API.
 *
 * Based on https://dev.to/punitsonime/custom-react-hook-useresizeobserver-3m8.
 */
function useResizeObserver<T>(): [
  React.RefObject<T>,
  ObserverRect | undefined
] {
  const ref = useRef<T & Element>(null);
  const [rect, setRect] = useState<ObserverRect>();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect();
        setRect(boundingRect);
      }
    });
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return [ref, rect];
}

export default useResizeObserver;
