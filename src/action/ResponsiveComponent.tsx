import React, { ReactNode } from 'react';
import {ScreenSize} from './useScreenSize'
import {useScreenSize} from './useScreenSize'

interface ResponsiveComponentProps {
  children: (props: { size: ScreenSize }) => ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;