import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex w-full rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-smooth resize-none",
  {
    variants: {
      size: {
        default: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[100px] px-4 py-3 text-lg",
        xl: "min-h-[120px] px-5 py-4 text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
