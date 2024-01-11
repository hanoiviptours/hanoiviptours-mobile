import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';
import { useTheme } from '@/hooks';

const ClassSeatSkeleton = () => {
  const { Layout, Gutters } = useTheme();

  return (
    <SkeletonPlaceholder borderRadius={30}>
      <View
        style={[
          Layout.row,
          Layout.center,
          Gutters.tinyLMargin,
          {
            borderWidth: 2,
          },
        ]}
      >
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            {
              padding: 2,
              marginTop: 2,
              marginBottom: 2,
              marginRight: 5,
              borderColor: 'transparent',
            },
          ]}
        >
          <View
            style={{
              width: 50,
              height: 30,
              borderRadius: 30,
            }}
          />
          <View
            style={{
              width: 70,
              height: 15,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export default ClassSeatSkeleton;
