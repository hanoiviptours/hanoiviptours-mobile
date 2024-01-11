import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';

const PriceSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={{ width: 70, height: 17, marginTop: 5 }} />
    </SkeletonPlaceholder>
  );
};
export default PriceSkeleton;
