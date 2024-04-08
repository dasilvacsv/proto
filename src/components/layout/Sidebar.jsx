import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine, RiMenu3Line, RiCloseLine, RiArrowDownSLine, RiArrowUpSLine, RiFileUserLine, RiEarthLine } from 'react-icons/ri';
import {FaBusinessTime, FaFileExcel, FaFingerprint, FaUsers} from "react-icons/fa";



const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('');

  const menuSections = [
    {
      label: 'Reportes', 
      items: [
        {
          name: 'Asistencia',
          icon: FaFileExcel,
          submenu: [
            { name: 'Información', path: '/tablero' },
            { name: 'Información Específica', path: '/tablero' },
          ],
        },
        {
          name: 'Empleado',
          icon: RiFileUserLine, 
          submenu: [
            { name: 'Información General', path: '/tablero' },
            { name: 'Información Específica', path: '/tablero' },
          ],
        },
      ],
    },
    {
      label: 'Gestión', 
      items: [
        {
          name: 'Empleados',
          icon: FaBusinessTime,
          submenu: [
            { name: 'Familiar', path: '/' },
            { name: 'Expediente', path: '/' },
          ],
        },
        {
          name: 'Ubicación',
          icon: RiEarthLine, 
          submenu: [
            { name: 'País', path: '/pais' },
            { name: 'Estado', path: '/pais' },
            { name: 'Municipio', path: '/pais' },
            { name: 'Parroquia', path: '/pais' },
          ],
        },
      ],
    },
    {
      label: 'Configuración', 
      items: [
        {
          name: 'Usuarios',
          icon: FaBusinessTime,
          submenu: [
            { name: 'Gestión', path: '/empleados' },
            { name: 'Registro', path: '/registro' },
          ],
        },
      ],
    },
    {
      label: 'Biométrico', 
      items: [
        {
          name: 'Usuarios',
          icon: FaFingerprint,
          submenu: [
            { name: 'Registro', path: '/biometrico' },
            { name: 'Lista', path: '/registro' },
          ],
        },
        {
          name: 'Asistencia',
          icon: FaUsers,
          submenu: [
            { name: 'Tiempo Real', path: '/biometrico' },
            { name: 'Lista', path: '/biometrico' },
            { name: 'Manual', path: '/registro' },
          ],
        },
      ],
    },
  ];


  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? '' : name);
  };

  return (
    <>
    {/* SIDEBAR CLASSNAME */}
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-blue-50 p-4 flex flex-col justify-between z-50 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all`}
      >
        {/* HEADER SIDEBAR */}
        <div>
        
        <div className="flex flex-col items-center">
  <h1 className="text-2xl font-bold text-gray-700">
    CIFF GESTIÓN<span className="text-primary text-4xl">.</span>
  </h1>
  <img
    src="/ff.png"
    className="w-24 my-3 transform transition duration-300 ease-in-out hover:scale-110"
    alt="Logo"
  />
</div>
          <ul>
          {menuSections.map((section, sectionIndex) => (
              <React.Fragment key={section.label}>
                <li className="text-lg font-semibold px-4 py-2">{section.label}</li>
                {section.items.map((item, itemIndex) => (
                  <li key={`${section.label}-${item.name}`}>
                    <button
                      className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                      onClick={() => toggleSubmenu(`${section.label}-${item.name}`)}
                    >
                      <span className="flex items-center gap-4">
                        <item.icon className="text-primary" />
                        <span className="text-black">{item.name}</span>
                      </span>
                      {activeSubmenu === `${section.label}-${item.name}` ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </button>
                    {activeSubmenu === `${section.label}-${item.name}` && (
                      <ul className="pl-4">
                        {item.submenu.map((subItem, subItemIndex) => (
                          <li key={`${section.label}-${item.name}-${subItem.name}`}>
                            <Link to={subItem.path} className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 text-gray-500 hover:text-black transition-colors">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <nav>
          <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
            <RiLogoutCircleRLine className="text-primary" />
            <span className="text-black">Cerrar sesión</span>
          </Link>
        </nav>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
