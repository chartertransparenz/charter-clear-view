import * as React from "react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface InlineDateRangePickerProps {
  value?: { startDate: string; endDate: string }
  onChange?: (value: { startDate: string; endDate: string }) => void
  placeholder?: string
  className?: string
  size?: "default" | "lg" | "xl"
}

export function InlineDateRangePicker({
  value,
  onChange,
  placeholder = "Zeitraum wählen",
  className,
  size = "default"
}: InlineDateRangePickerProps) {
  const [startDate, setStartDate] = React.useState<Date | undefined>(() => {
    return value?.startDate ? new Date(value.startDate) : undefined
  })
  const [endDate, setEndDate] = React.useState<Date | undefined>(() => {
    return value?.endDate ? new Date(value.endDate) : undefined
  })
  const [isSelectingEnd, setIsSelectingEnd] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentMonth, setCurrentMonth] = React.useState(new Date())
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Close calendar when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsSelectingEnd(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleDateClick = (selectedDate: Date, event?: React.MouseEvent) => {
    // Prevent focus and scrolling
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    // Save current scroll position
    const scrollPosition = window.pageYOffset

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
          setIsOpen(false)
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

    // Restore scroll position immediately
    setTimeout(() => {
      window.scrollTo(0, scrollPosition)
    }, 0)
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

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1 // Monday = 0

    const days = []
    
    // Empty cells for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false
    return date >= startDate && date <= endDate
  }

  const isDateRangeStart = (date: Date) => {
    return startDate && date.getTime() === startDate.getTime()
  }

  const isDateRangeEnd = (date: Date) => {
    return endDate && date.getTime() === endDate.getTime()
  }

  const isSaturday = (date: Date) => {
    return date.getDay() === 6
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const days = getDaysInMonth(currentMonth)
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

  return (
    <div className="relative" ref={containerRef}>
      <Button
        type="button"
        variant="outline"
        className={cn(
          "justify-start text-left font-normal border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark",
          !startDate && "text-muted-foreground",
          sizeClasses[size],
          "w-full",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        {formatDateRange()}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-popover border rounded-md shadow-md p-3 min-w-[280px]">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goToPreviousMonth}
              onMouseDown={(e) => e.preventDefault()}
              tabIndex={-1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-base font-medium">
              {format(currentMonth, "MMMM yyyy", { locale: de })}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goToNextMonth}
              onMouseDown={(e) => e.preventDefault()}
              tabIndex={-1}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div key={index} className="relative">
                {day ? (
                  <button
                    type="button"
                    onClick={(e) => handleDateClick(day, e)}
                    onMouseDown={(e) => e.preventDefault()}
                    onFocus={(e) => e.target.blur()}
                    tabIndex={-1}
                    disabled={isSelectingEnd && startDate && day < startDate}
                    className={cn(
                      "w-full h-10 text-sm rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      isSaturday(day) && "bg-accent/30 text-accent-foreground",
                      isDateRangeStart(day) && "bg-accent text-accent-foreground",
                      isDateRangeEnd(day) && "bg-accent text-accent-foreground",
                      isDateInRange(day) && !isDateRangeStart(day) && !isDateRangeEnd(day) && "bg-accent/20 text-accent-foreground"
                    )}
                  >
                    {day.getDate()}
                  </button>
                ) : (
                  <div className="w-full h-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}