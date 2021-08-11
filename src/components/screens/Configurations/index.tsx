import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import Button from '../../shared/Button';

interface ConfigScreenProps {}

const ConfigScreen: React.FC<ConfigScreenProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!theme) setTheme('light');
  }, []);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppLayout title="Configurations">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <p>Change your theme</p>
          <Button text={theme ? theme : 'light'} onClick={switchTheme} />
        </div>
      </div>
    </AppLayout>
  );
};
export default ConfigScreen;
