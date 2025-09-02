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
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Zeitraum wählen",
  className,
  size = "default"
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(() => {
    if (value?.startDate && value?.endDate) {
      return {
        from: new Date(value.startDate),
        to: new Date(value.endDate)
      }
    }
    return undefined
  })

  const handleSelect = (newDate: DateRange | undefined) => {
    setDate(newDate)
    
    if (newDate?.from && newDate?.to && onChange) {
      onChange({
        startDate: format(newDate.from, "yyyy-MM-dd"),
        endDate: format(newDate.to, "yyyy-MM-dd")
      })
    } else if (newDate?.from && !newDate?.to && onChange) {
      // Only start date selected
      onChange({
        startDate: format(newDate.from, "yyyy-MM-dd"),
        endDate: ""
      })
    }
  }

  const formatDateRange = () => {
    if (date?.from) {
      if (date.to) {
        return `${format(date.from, "dd.MM.yyyy", { locale: de })} - ${format(date.to, "dd.MM.yyyy", { locale: de })}`
      }
      return `${format(date.from, "dd.MM.yyyy", { locale: de })} - ...`
    }
    return placeholder
  }

  const sizeClasses = {
    default: "h-10 text-sm px-3 py-2",
    lg: "h-12 text-lg px-4 py-3", 
    xl: "h-14 text-xl px-5 py-4"
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark",
            !date && "text-muted-foreground",
            sizeClasses[size],
            "w-full",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          {formatDateRange()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={handleSelect}
          numberOfMonths={2}
          className="p-3 pointer-events-auto"
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
              "focus-within:relative focus-within:z-20",
              "[&:has([data-selected])]:bg-accent/20 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md",
              "[&:has([data-range-start])]:rounded-l-md [&:has([data-range-end])]:rounded-r-md",
              "[&:has([data-range-middle])]:bg-accent/20"
            ),
            day: cn(
              "h-12 w-12 p-0 font-normal text-base rounded-md transition-smooth",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:bg-accent focus:text-accent-foreground focus:outline-none",
              // Saturday highlighting (day 6 = Saturday)
              "[&[data-day-of-week='6']]:bg-accent/30 [&[data-day-of-week='6']]:text-accent-foreground"
            ),
            day_range_start: "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-l-md rounded-r-none",
            day_range_end: "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-r-md rounded-l-none", 
            day_selected: "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            day_today: "bg-accent/50 text-accent-foreground font-semibold",
            day_outside: "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent/20 aria-selected:text-accent-foreground rounded-none",
            day_hidden: "invisible",
          }}
          modifiers={{
            saturday: (date) => date.getDay() === 6
          }}
          modifiersClassNames={{
            saturday: "bg-accent/30 text-accent-foreground"
          }}
        />
      </PopoverContent>
    </Popover>
  )
}