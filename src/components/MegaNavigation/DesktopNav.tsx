import { ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavItem } from "./types";

interface DesktopNavProps {
  items: NavItem[];
  onNavigate: (href: string) => void;
}

export const DesktopNav = ({ items, onNavigate }: DesktopNavProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-1">
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.children ? (
              <>
                <NavigationMenuTrigger 
                  className="h-10 px-4 py-2 text-sm font-medium text-gray-900 hover:text-primary focus:text-primary bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  aria-haspopup="menu"
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background border shadow-lg rounded-md p-4 w-[400px]">
                  <div className="grid grid-cols-1 gap-1" role="menu">
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => onNavigate(item.href)}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left border-0 bg-transparent cursor-pointer w-full",
                          "font-medium text-primary border-b border-border pb-3 mb-2"
                        )}
                        role="menuitem"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.label} - Übersicht
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Alle {item.label} Segelreviere entdecken
                        </p>
                      </button>
                    </NavigationMenuLink>
                    {item.children.map((child) => (
                      <NavigationMenuLink key={child.href} asChild>
                        <button
                          onClick={() => onNavigate(child.href)}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left border-0 bg-transparent cursor-pointer w-full"
                          )}
                          role="menuitem"
                        >
                          <div className="text-sm font-medium leading-none">
                            {child.label}
                          </div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            Yachtcharter in {child.label}
                          </p>
                        </button>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <button
                  onClick={() => onNavigate(item.href)}
                  className="h-10 px-4 py-2 text-sm font-medium text-gray-900 hover:text-primary focus:text-primary bg-transparent hover:bg-accent/50 focus:bg-accent/50 rounded-md transition-colors border-0 cursor-pointer"
                  role="menuitem"
                >
                  {item.label}
                </button>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};