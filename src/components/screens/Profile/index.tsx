import React from 'react';

import AppLayout from '../../layouts/AppLayout/AppLayout';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  return (
    <AppLayout title="Profile">
      <div className="bg-blue-300"></div>
    </AppLayout>
  );
};
export default ProfileScreen;
