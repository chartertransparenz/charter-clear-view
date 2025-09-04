export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface ReviereDropdownProps {
  isMobile?: boolean;
  onNavigate?: (href: string) => void;
}

export interface DesktopDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  menuItems: MenuItem[];
}

export interface MobileAccordionProps {
  onNavigate: (href: string) => void;
  menuItems: MenuItem[];
}