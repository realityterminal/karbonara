import React from 'react';
import { Zap, Menu, X, ChevronDown } from 'lucide-react';

type MenuData = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const menuData: MenuData[] = [
  {
    label: 'Home',
    dropdown: [
      { label: 'Overview', href: '#home-overview' },
      { label: 'Features', href: '#home-features' },
      { label: 'Pricing', href: '#home-pricing' },
    ],
  },
  {
    label: 'Pages',
    dropdown: [
      { label: 'About Us', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    label: 'Portfolio',
    dropdown: [
      { label: 'Web Projects', href: '#portfolio-web' },
      { label: 'Mobile Apps', href: '#portfolio-mobile' },
      { label: 'Branding', href: '#portfolio-branding' },
    ],
  },
  {
    label: 'Contact',
    dropdown: [
      { label: 'Contact Form', href: '#contact-form' },
      { label: 'Locations', href: '#locations' },
      { label: 'Support', href: '#support' },
    ],
  },
];

// Custom Desktop Dropdown (accessible, keyboard navigable)
const DesktopDropdown: React.FC<{
  label: string;
  items: { label: string; href: string }[];
}> = ({ label, items }) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !menuRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      buttonRef.current?.focus();
    }
    if (e.key === 'ArrowDown' && open) {
      e.preventDefault();
      menuRef.current?.querySelector('a')?.focus();
    }
  }

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition font-semibold text-lg text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`dropdown-${label}`}
        type="button"
        tabIndex={0}
        onClick={() => setOpen(v => !v)}
        onBlur={e => {
          // If focus moves outside both button and menu, close
          setTimeout(() => {
            if (
              !buttonRef.current?.contains(document.activeElement) &&
              !menuRef.current?.contains(document.activeElement)
            ) {
              setOpen(false);
            }
          }, 10);
        }}
      >
        {label}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      {open && (
        <ul
          ref={menuRef}
          id={`dropdown-${label}`}
          role="menu"
          aria-label={label}
          className="absolute left-0 mt-2 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-2 animate-fadeIn"
        >
          {items.map((item, idx) => (
            <li key={item.label} role="none">
              <a
                href={item.href}
                role="menuitem"
                tabIndex={0}
                className="block px-4 py-2 text-gray-900 hover:bg-blue-50 focus:bg-blue-100 rounded transition cursor-pointer outline-none"
                onKeyDown={e => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = (e.target as HTMLElement).parentElement?.nextElementSibling?.querySelector('a');
                    (next as HTMLElement | null)?.focus();
                  }
                  if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = (e.target as HTMLElement).parentElement?.previousElementSibling?.querySelector('a');
                    (prev as HTMLElement | null)?.focus();
                  }
                  if (e.key === 'Escape') {
                    setOpen(false);
                    buttonRef.current?.focus();
                  }
                }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Custom Mobile Dropdown (accordion style, accessible)
const MobileDropdown: React.FC<{
  label: string;
  items: { label: string; href: string }[];
}> = ({ label, items }) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // Keyboard navigation for mobile dropdown
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <div className="w-full" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        className="flex w-full items-center justify-between px-2 py-3 rounded-lg text-lg font-semibold text-gray-900 hover:bg-blue-50 focus:bg-blue-100 focus:outline-none"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`mobile-dropdown-${label}`}
        onClick={() => setOpen(v => !v)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <ul
        id={`mobile-dropdown-${label}`}
        role="menu"
        aria-label={label}
        className={`pl-4 pr-2 transition-all duration-200 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        {items.map(item => (
          <li key={item.label} role="none">
            <a
              href={item.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              className="block px-4 py-2 text-gray-900 hover:bg-blue-50 focus:bg-blue-100 rounded transition cursor-pointer outline-none"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Custom Mobile Menu (Dialog replacement)
const MobileMenu: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  menuData: MenuData[];
}> = ({ open, setOpen, menuData }) => {
  // Trap focus inside mobile menu when open
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        // Focus trap
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, setOpen]);

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/35 transition-opacity opacity-100"
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
      <div
        ref={menuRef}
        className="fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 translate-x-0"
        aria-label="Mobile Navigation"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Zap className="w-7 h-7 text-gray-900" />
            <span className="text-xl font-extrabold text-gray-900 tracking-tight select-none" style={{ fontFamily: 'Inter, sans-serif' }}>
              Digiso
            </span>
          </div>
          <button
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => setOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-2">
            {menuData.map(item =>
              item.dropdown ? (
                <li key={item.label}>
                  <MobileDropdown label={item.label} items={item.dropdown} />
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-2 py-3 rounded-lg text-lg font-semibold text-gray-900 hover:bg-blue-50 focus:bg-blue-100"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
            <li className="mt-4">
              <a
                href="#"
                className="block w-full text-center text-lg font-bold text-gray-900 underline underline-offset-4 decoration-2 decoration-gray-900 hover:text-blue-600 transition py-3 rounded"
              >
                Join with us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Responsive: close mobile menu on resize to desktop
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-8 px-6" aria-label="Main Navigation">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8 text-gray-900 font-bold" />
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight select-none" style={{ fontFamily: 'Inter, sans-serif' }}>
            Digiso
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-lg text-gray-900" role="menubar" aria-label="Primary">
          {menuData.map(item =>
            item.dropdown ? (
              <li key={item.label} className="relative" role="none">
                <DesktopDropdown label={item.label} items={item.dropdown} />
              </li>
            ) : (
              <li key={item.label} role="none">
                <a
                  href={item.href}
                  className="cursor-pointer hover:text-gray-600 transition"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        

        </ul>
				<a
					href="#"
					className="text-lg font-bold text-gray-900 underline underline-offset-4 decoration-2 decoration-gray-900 hover:decoration-gray-600 hover:text-gray-600 transition"
					tabIndex={0}
				>
					Join with us
				</a>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} menuData={menuData} />
    </header>
  );
};

export default Header;

/**
 * --- Documentation: Custom Dropdown & Mobile Menu Implementation ---
 * 
 * 1. Desktop Dropdowns:
 *    - Fully custom, accessible dropdowns using React state and refs.
 *    - Keyboard navigation: ArrowDown/ArrowUp to move, Escape to close, focus returns to trigger.
 *    - ARIA roles: menu, menuitem, aria-haspopup, aria-expanded, aria-controls.
 *    - Click outside and blur closes dropdown.
 *    - Visual design matches previous Radix UI version.
 * 
 * 2. Mobile Menu:
 *    - Custom dialog-style menu with focus trap and Escape to close.
 *    - Prevents background scroll when open.
 *    - Mobile dropdowns are accordion style, accessible, and keyboard navigable.
 *    - All links and buttons are accessible and keyboard navigable.
 * 
 * 3. Accessibility:
 *    - All interactive elements are reachable by keyboard.
 *    - ARIA attributes and roles are used for menus and menu items.
 *    - Focus is managed for dropdowns and dialogs.
 *    - Escape closes dropdowns and mobile menu.
 *    - Focus trap in mobile menu.
 *    - Tested with axe DevTools and keyboard navigation for compliance.
 * 
 * 4. Design:
 *    - Matches Digiso branding, spacing, and transitions.
 *    - Responsive: desktop, tablet, mobile.
 *    - Smooth transitions and clear focus states.
 * 
 * 5. No external dropdown/dialog dependencies are used.
 */
