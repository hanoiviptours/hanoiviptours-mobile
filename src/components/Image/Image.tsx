import React from 'react';
import { DimensionValue, Animated, Image, View } from 'react-native';
import { useTheme } from '../../hooks';

type ImageProps = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  src?: any;
  styles?: any;
  pan?: any;
  isAnimated?: boolean;
};

const AnimatedImage = Animated.Image;

const ImageComponents = ({
  height,
  width,
  mode,
  src,
  styles,
  pan,
  isAnimated = false,
}: ImageProps) => {
  const { Layout, Images } = useTheme();
  const imageSource = Images[src as keyof typeof Images];
  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      {isAnimated ? (
        <AnimatedImage
          testID={'brand-img'}
          style={[
            Layout.fullSize,
            {
              ...styles,
              transform: [
                {
                  translateY: pan.y.interpolate({
                    inputRange: [-200, 0],
                    outputRange: [-120, 0],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  scale: pan.y.interpolate({
                    inputRange: [-6000, 0],
                    outputRange: [35, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
          source={imageSource}
          resizeMode={mode}
        />
      ) : (
        <Image
          style={[
            Layout.fullSize,
            {
              ...styles,
            },
          ]}
          source={imageSource}
          resizeMode={mode}
        />
      )}
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
