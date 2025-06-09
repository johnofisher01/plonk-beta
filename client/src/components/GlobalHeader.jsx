import React, { useState } from "react";

type DropdownState = {
  about: boolean;
  trust: boolean;
  newsroom: boolean;
};

const GlobalHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    about: false,
    trust: false,
    newsroom: false,
  });

  const toggleDropdown = (menu: keyof DropdownState) =>
    setDropdownOpen(prev => ({ ...prev, [menu]: !prev[menu] }));

  return (
    <header className="bg-white ...">
      {/* SVG, nav structure, mobile menu */}
    </header>
  );
};

export default GlobalHeader;
