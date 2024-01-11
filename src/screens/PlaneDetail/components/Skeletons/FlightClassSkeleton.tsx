import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import { BoxIconText } from '@/components';

const FlightClassSkeleton = () => {
  const { Colors } = useTheme();

  return (
    <SkeletonPlaceholder borderRadius={4}>
      <BoxIconText
        width={85}
        height={100}
        boxColor={Colors.primaryColor}
        styles={{
          borderWidth: 1,
        }}
        textStyles={{
          paddingTop: 5,
          textAlign: 'center',
        }}
        text={
          <View
            style={{
              width: 85,
              height: 15,
            }}
          />
        }
      />
    </SkeletonPlaceholder>
  );
};
export default FlightClassSkeleton;
