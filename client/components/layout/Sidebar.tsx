import { useState } from 'react';
import * as React from 'react';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
          isOpen ? 'hidden' : 'block'
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
