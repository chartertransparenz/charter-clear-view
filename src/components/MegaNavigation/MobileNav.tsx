import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavItem } from "./types";

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (href: string) => void;
}

export const MobileNav = ({ items, isOpen, onOpenChange, onNavigate }: MobileNavProps) => {
  const handleNavigate = (href: string) => {
    onNavigate(href);
    onOpenChange(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-2 text-gray-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Navigation öffnen"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <nav className="mt-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {items.map((item, index) => (
              <div key={item.href}>
                {item.children ? (
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="hover:no-underline py-3 px-4 rounded-md hover:bg-accent transition-colors text-left">
                      <span className="text-base font-medium">{item.label}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="space-y-1 ml-4">
                        <button
                          onClick={() => handleNavigate(item.href)}
                          className="block w-full text-left py-2 px-4 text-sm text-primary font-medium hover:bg-accent rounded-md transition-colors min-h-[44px] border-0 bg-transparent cursor-pointer"
                        >
                          {item.label} - Übersicht
                        </button>
                        {item.children.map((child) => (
                          <button
                            key={child.href}
                            onClick={() => handleNavigate(child.href)}
                            className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:text-primary hover:bg-accent rounded-md transition-colors min-h-[44px] border-0 bg-transparent cursor-pointer"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.href)}
                    className="block w-full text-left py-3 px-4 text-base font-medium text-gray-900 hover:text-primary hover:bg-accent rounded-md transition-colors min-h-[44px] border-0 bg-transparent cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};