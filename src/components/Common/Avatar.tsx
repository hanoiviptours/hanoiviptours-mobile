import React, { useCallback } from 'react';
import { Avatar as AvatarComponent } from '@rneui/themed';

type Avatar = {
  label: string;
  component: React.ReactNode;
};

type AvatarProps = {
  userName: string;
  size?: number;
  styles: any;
  titleStyles: any;
};
const Avatar = ({ userName, size, styles, titleStyles }: AvatarProps) => {
  const getUserAvatar = useCallback(() => {
    const name = userName.split(' ');
    return name[0].charAt(0) + name[1].charAt(0);
  }, [userName]);

  return (
    <AvatarComponent
      size={size}
      rounded
      title={getUserAvatar()}
      titleStyle={titleStyles}
      containerStyle={[styles, { textColor: '#000000' }]}
    />
  );
};

Avatar.defaultProps = {
  size: 64,
};
export default Avatar;
