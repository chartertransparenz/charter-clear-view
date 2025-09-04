import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { MobileAccordionProps, MenuItem } from './types';

const MobileAccordion = ({ onNavigate, menuItems }: MobileAccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemLabel: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemLabel)) {
      newOpenItems.delete(itemLabel);
    } else {
      newOpenItems.add(itemLabel);
    }
    setOpenItems(newOpenItems);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      toggleItem(item.label);
    } else {
      onNavigate(item.href);
    }
  };

  const handleSubItemClick = (href: string) => {
    onNavigate(href);
  };

  return (
    <div className="reviere-mobile-accordion">
      {menuItems.map((item) => (
        <div key={item.href} className="border-b border-gray-200">
          <button
            className="reviere-mobile-item w-full flex items-center justify-between"
            onClick={() => handleItemClick(item)}
            aria-expanded={openItems.has(item.label) ? 'true' : 'false'}
            aria-haspopup={item.children && item.children.length > 0 ? 'true' : 'false'}
          >
            <span className="menu-typography text-gray-900">{item.label}</span>
            {item.children && item.children.length > 0 && (
              openItems.has(item.label) ? (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )
            )}
          </button>

          {item.children && item.children.length > 0 && openItems.has(item.label) && (
            <div className="reviere-mobile-submenu">
              {item.children.map((subItem) => (
                <button
                  key={subItem.href}
                  className="reviere-mobile-sub-item w-full text-left"
                  onClick={() => handleSubItemClick(subItem.href)}
                >
                  <span className="text-sm text-gray-700">{subItem.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileAccordion;