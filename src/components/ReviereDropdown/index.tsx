import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import DesktopDropdown from './DesktopDropdown';
import MobileAccordion from './MobileAccordion';
import { reviereMenu } from './data';
import { ReviereDropdownProps } from './types';

const ReviereDropdown = ({ isMobile = false, onNavigate }: ReviereDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
    setIsOpen(false);
  };

  if (isMobile) {
    return <MobileAccordion onNavigate={handleNavigate} menuItems={reviereMenu} />;
  }

  return (
    <div className="relative">
      <button
        className="menu-typography text-gray-900 hover:text-ocean-dark transition-smooth bg-transparent border-0 cursor-pointer flex items-center gap-1"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="Reviere Navigation öffnen"
      >
        Reviere
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <DesktopDropdown
        isOpen={isOpen}
        onClose={handleClose}
        onNavigate={handleNavigate}
        menuItems={reviereMenu}
      />
    </div>
  );
};

export default ReviereDropdown;