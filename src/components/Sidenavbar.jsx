import React from 'react';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';

export const Sidenavbar = [
  {
    title: "Profile",
    path: '/',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
  {
    title: "Attendance",
    path: '../pages/Attendance',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text',
  },
  {
    title: "Attendance History",
    path: '/',
    icon: <FaIcons.FaHistory />,
    cName: 'nav-text',
  }
];


