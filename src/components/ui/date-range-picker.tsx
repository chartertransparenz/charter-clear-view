import * as React from "react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateRangePickerProps {
  value?: { startDate: string; endDate: string }
  onChange?: (value: { startDate: string; endDate: string }) => void
  placeholder?: string
  className?: string
  size?: "default" | "lg" | "xl"
  onPopoverOpenChange?: (open: boolean) => void
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Zeitraum wählen",
  className,
  size = "default",
  onPopoverOpenChange
}: DateRangePickerProps) {
  const [startDate, setStartDate] = React.useState<Date | undefined>(() => {
    return value?.startDate ? new Date(value.startDate) : undefined
  })
  const [endDate, setEndDate] = React.useState<Date | undefined>(() => {
    return value?.endDate ? new Date(value.endDate) : undefined
  })
  const [isSelectingEnd, setIsSelectingEnd] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const handleSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return
    
    if (!startDate || isSelectingEnd) {
      if (!startDate) {
        // First click - set start date
        setStartDate(selectedDate)
        setEndDate(undefined)
        setIsSelectingEnd(true)
      } else {
        // Second click - set end date
        if (selectedDate >= startDate) {
          setEndDate(selectedDate)
          setIsSelectingEnd(false)
          // Close popover and call onChange when both dates are set
          handleOpenChange(false)
          if (onChange) {
            onChange({
              startDate: format(startDate, "yyyy-MM-dd"),
              endDate: format(selectedDate, "yyyy-MM-dd")
            })
          }
        }
      }
    } else {
      // Third click - reset and start over
      setStartDate(selectedDate)
      setEndDate(undefined)
      setIsSelectingEnd(true)
    }
  }

  const formatDateRange = () => {
    if (startDate) {
      if (endDate) {
        return `${format(startDate, "dd.MM.yyyy", { locale: de })} - ${format(endDate, "dd.MM.yyyy", { locale: de })}`
      }
      return `${format(startDate, "dd.MM.yyyy", { locale: de })} - ...`
    }
    return placeholder
  }

  const sizeClasses = {
    default: "h-10 text-sm px-3 py-2",
    lg: "h-12 text-lg px-4 py-3", 
    xl: "h-14 text-xl px-5 py-4"
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    onPopoverOpenChange?.(newOpen)
    if (!newOpen) {
      setIsSelectingEnd(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark",
            !startDate && "text-muted-foreground",
            sizeClasses[size],
            "w-full",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          {formatDateRange()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[60]" align="start">
        <Calendar
          initialFocus
          mode="single"
          defaultMonth={startDate}
          selected={isSelectingEnd ? endDate : startDate}
          onSelect={handleSelect}
          numberOfMonths={1}
          className="p-3 pointer-events-auto"
          disabled={(date) => {
            if (isSelectingEnd && startDate) {
              return date < startDate
            }
            return false
          }}
          modifiers={{
            saturday: (date) => date.getDay() === 6,
            rangeStart: startDate ? (date) => date.getTime() === startDate.getTime() : undefined,
            rangeEnd: endDate ? (date) => date.getTime() === endDate.getTime() : undefined,
            rangeMiddle: (startDate && endDate) ? (date) => {
              return date > startDate && date < endDate
            } : undefined
          }}
          modifiersClassNames={{
            saturday: "bg-accent/30 text-accent-foreground",
            rangeStart: "bg-accent text-accent-foreground",
            rangeEnd: "bg-accent text-accent-foreground", 
            rangeMiddle: "bg-accent/20 text-accent-foreground"
          }}
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-base font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 border border-input rounded-md hover:bg-accent hover:text-accent-foreground"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-12 font-normal text-base",
            row: "flex w-full mt-2",
            cell: cn(
              "relative h-12 w-12 text-center text-base p-0",
              "focus-within:relative focus-within:z-20"
            ),
            day: cn(
              "h-12 w-12 p-0 font-normal text-base rounded-md transition-smooth",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:bg-accent focus:text-accent-foreground focus:outline-none"
            ),
            day_selected: "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            day_today: "bg-accent/50 text-accent-foreground font-semibold",
            day_outside: "text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
            day_hidden: "invisible",
          }}
        />
      </PopoverContent>
    </Popover>
  )
}