import { useState, useEffect, RefObject } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLDivElement>,
  initialValue = true,
) {
  const [isOpen, setIsOpen] = useState(initialValue);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return [isOpen, setIsOpen];
}
