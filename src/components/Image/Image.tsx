import React, { CSSProperties } from 'react';
import { DimensionValue, Image, View } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  src?: any;
  styles: any;
};

const ImageComponents = ({ height, width, mode, src, styles }: Props) => {
  const { Layout, Images } = useTheme();
  const imageSource = Images[src as keyof typeof Images];
  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'brand-img'}
        style={[Layout.fullSize, { ...styles }]}
        source={imageSource}
        resizeMode={mode}
      />
    </View>
  );
};

ImageComponents.defaultProps = {
  height: 100,
  width: 100,
  src: '',
  mode: 'contain',
};

export default ImageComponents;
