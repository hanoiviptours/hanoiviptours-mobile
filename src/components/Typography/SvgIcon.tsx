import * as React from 'react';
import Plane from '../../theme/assets/icons/plane.svg';

type SvgIconProps = {
  width?: number | string;
  height?: number | string;
  uri?: string;
};
const SvgIcon = ({ width, height, uri = '' }: SvgIconProps) => {
  // const { Gutters, darkMode: isDark } = useTheme();

  return <Plane width={width} height={height} />;
};

export default SvgIcon;
