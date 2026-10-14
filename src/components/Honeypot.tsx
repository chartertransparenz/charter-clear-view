import { forwardRef } from "react";

/**
 * Unsichtbares Honeypot-Feld als einfacher Spam-Schutz.
 * Menschen sehen und füllen es nicht; Bots tragen oft etwas ein.
 * Der Server verwirft Anfragen, bei denen "website" befüllt ist.
 */
const Honeypot = forwardRef<HTMLInputElement, { id: string }>(function Honeypot({ id }, ref) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
    >
      <label htmlFor={id}>Website</label>
      <input ref={ref} id={id} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
});

export default Honeypot;
