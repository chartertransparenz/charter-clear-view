import { useEffect, useState } from "react";

const isFormInViewport = () =>
  Array.from(document.querySelectorAll("form")).some((form) => {
    const rect = form.getBoundingClientRect();
    return rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight;
  });

/**
 * Sichtbarkeit der Floating-Buttons (WhatsApp, Charter-Anfrage):
 * erst nach 100px Scrollen, und nicht solange ein Formular im sichtbaren Bereich liegt.
 * So überdecken die Buttons keine Labels, Eingabefelder, Checkboxen oder den Senden-Button.
 */
export const useFloatingButtonVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 100 && !isFormInViewport());
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  return isVisible;
};
