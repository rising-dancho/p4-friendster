import React, { useState, useEffect } from 'react';
import ProfilePage from '../pages/ProfilePage';
import Access from '../components/Access';

function HomePage() {
  const [showProfile, setShowProfile] = useState(false);

  // local storage: get
  const localSignUp = localStorage.getItem('signedIn');

  useEffect(() => {
    if (localSignUp) {
      setShowProfile(true);
    }
  }, [localSignUp]);

  // note: pls make sure you understand the logic of your useState before working with the codes (don't just start typing.. THINK!! STUPID!!).. in order to prevent a simple bug like this from ever happening again in the future.
  return <div>{showProfile ? <ProfilePage /> : <Access />}</div>;
}

export default HomePage;
