import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";

export type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

/** Shadcn-kompatibler Toaster-Wrapper (nutzt intern "sonner") */
export function Toaster(props: ToasterProps) {
  return <SonnerToaster richColors closeButton {...props} />;
}