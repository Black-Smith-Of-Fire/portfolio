import React from 'react';
import ResponsiveComponent from './../action/ResponsiveComponent';
import SmallScreen from './SmallScreen';
import BigScreen from './BigScreen';

const TemporyNav: React.FC = () => {
  return (
    <ResponsiveComponent>
      {({ size }) => (size === 'xs' ? <SmallScreen /> : <BigScreen />)}
    </ResponsiveComponent>
  );
};

export default TemporyNav;