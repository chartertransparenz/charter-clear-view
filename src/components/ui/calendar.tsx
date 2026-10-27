import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { de } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// Deutsche Beschriftungen für Screenreader (Navigation und Monats-/Jahresauswahl)
const germanLabels: CalendarProps["labels"] = {
  labelPrevious: () => "Vorheriger Monat",
  labelNext: () => "Nächster Monat",
  labelMonthDropdown: () => "Monat",
  labelYearDropdown: () => "Jahr",
};

// Zellengröße: max. 40px unter 360px, max. 44px ab 360px, 48px ab sm – auf Mobilgeräten aber nie breiter als
// ein Siebtel der Viewportbreite abzüglich Rand. So passt der Kalender auch bei 320px, Seitenzoom oder
// vergrößerter Schrift ohne Querscroll.
const cellSize =
  "h-[min(2.5rem,calc((100vw_-_3rem)/7))] w-[min(2.5rem,calc((100vw_-_3rem)/7))] min-[360px]:h-[min(2.75rem,calc((100vw_-_3rem)/7))] min-[360px]:w-[min(2.75rem,calc((100vw_-_3rem)/7))] sm:h-12 sm:w-12";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  locale = de,
  labels,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale}
      labels={{ ...germanLabels, ...labels }}
      className={cn("p-2 sm:p-3 pointer-events-auto", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center min-h-10 min-[360px]:min-h-11",
        caption_label: "flex items-center gap-1 text-base sm:text-lg font-semibold text-foreground",
        // Seitenabstand = Pfeilbreite; bei wenig Platz (lange Monatsnamen, große Schrift) umbrechen statt unter die Pfeile rutschen
        caption_dropdowns: "flex flex-wrap items-center justify-center gap-1 px-10 min-[360px]:px-11",
        dropdown_month: "relative inline-flex h-10 min-[360px]:h-11 items-center rounded-md border border-input px-2 hover:border-primary focus-within:ring-2 focus-within:ring-ring",
        dropdown_year: "relative inline-flex h-10 min-[360px]:h-11 items-center rounded-md border border-input px-2 hover:border-primary focus-within:ring-2 focus-within:ring-ring",
        // Natives <select> liegt unsichtbar über der Beschriftung und öffnet auf Mobilgeräten die System-Auswahl
        dropdown: "absolute inset-0 z-[1] h-full w-full cursor-pointer appearance-none opacity-0",
        dropdown_icon: "h-4 w-4 opacity-60",
        vhidden: "sr-only",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-[min(2.5rem,calc((100vw_-_3rem)/7))] w-[min(2.5rem,calc((100vw_-_3rem)/7))] min-[360px]:h-[min(2.75rem,calc((100vw_-_3rem)/7))] min-[360px]:w-[min(2.75rem,calc((100vw_-_3rem)/7))] bg-transparent p-0 opacity-70 hover:opacity-100 border-muted hover:border-primary transition-all"
        ),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: cn(
          "text-muted-foreground rounded-md font-semibold text-sm flex items-center justify-center",
          cellSize
        ),
        row: "flex w-full mt-1",
        cell: cn(
          "text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          cellSize
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          cellSize,
          "p-0 font-medium aria-selected:opacity-100 text-sm hover:bg-accent/50 transition-colors"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
        IconDropdown: ({ className }) => <ChevronDown className={className} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
