'use client';

import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const [svg, setSvg] = useState(<MoonIcon />);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
      setSvg(<MoonIcon />);
    } else {
      setTheme('light');
      setSvg(<SunIcon />);
    }
  };

  return (
    <Button isIconOnly variant='light' onClick={handleClick}>
      {svg}
    </Button>
  );
}
