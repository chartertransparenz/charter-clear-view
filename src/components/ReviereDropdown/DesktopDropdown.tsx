import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { DesktopDropdownProps, MenuItem } from './types';

const DesktopDropdown = ({ isOpen, onClose, onNavigate, menuItems }: DesktopDropdownProps) => {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleItemClick = (item: MenuItem) => {
    // Always navigate to the main page, regardless of children
    onNavigate(item.href);
    onClose();
  };

  const handleSubItemClick = (href: string) => {
    onNavigate(href);
    onClose();
  };

  return (
    <div
      ref={dropdownRef}
      className="reviere-dropdown"
      role="menu"
      aria-label="Reviere Navigation"
    >
      <div className="flex min-h-[300px]">
        {/* Left Column - Main Categories */}
        <div className="reviere-main-column flex-1 min-w-[200px]">
          {menuItems.map((item) => (
            <button
              key={item.href}
              className={`reviere-item w-full text-left ${
                activeItem?.label === item.label ? 'active' : ''
              } ${item.children && item.children.length > 0 ? 'has-children' : ''}`}
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => item.children && item.children.length > 0 && setActiveItem(item)}
              role="menuitem"
              aria-haspopup={item.children && item.children.length > 0 ? 'true' : 'false'}
              aria-expanded={activeItem?.label === item.label ? 'true' : 'false'}
            >
              <span className="menu-typography">{item.label}</span>
              {item.children && item.children.length > 0 && (
                <ChevronRight className="inline-block w-4 h-4 ml-2 float-right mt-1" />
              )}
            </button>
          ))}
        </div>

        {/* Right Column - Submenu */}
        {activeItem && activeItem.children && activeItem.children.length > 0 && (
          <div className="reviere-sub-column flex-1 min-w-[200px]">
            {activeItem.children.map((subItem) => (
              <button
                key={subItem.href}
                className="reviere-sub-item w-full text-left"
                onClick={() => handleSubItemClick(subItem.href)}
                role="menuitem"
              >
                <span className="text-sm">{subItem.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopDropdown;