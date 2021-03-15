import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import Button from '../../shared/components/Button';
import AppLayout from '../../shared/layouts/AppLayout/AppLayout';

interface ConfigScreenProps {}

const ConfigScreen: React.FC<ConfigScreenProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <AppLayout title="Configurations">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <p>Change your theme</p>
          <Button text={theme} onClick={switchTheme} />
        </div>
      </div>
    </AppLayout>
  );
};
export default ConfigScreen;
