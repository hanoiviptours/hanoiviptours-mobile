import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import { ShadowBox } from '@/components';

const FlightListSkeleton = () => {
  const { Layout, Gutters, Colors } = useTheme();
  
  return (
    <ShadowBox
      style={[
        Layout.fill,
        Layout.row,
        Layout.justifyContentBetween,
        Gutters.tinyLMargin,
        Gutters.tinyRMargin,
        Gutters.tinyBMargin,
        Gutters.tinyTMargin,
        {
          backgroundColor: Colors.white,
          borderRadius: 10,
          height: 'auto',
          maxHeight: 145,
        },
      ]}
    >
      <SkeletonPlaceholder borderRadius={4}>
        <View style={[Layout.justifyContentStart]}>
          <View style={{ width: 100, height: 20, marginBottom: 7 }} />
          <View style={{ width: 80, height: 15 }} />
          <View style={[Layout.row, Gutters.tinyTMargin]}>
            <View style={{ width: 50, height: 30, marginRight: 10 }} />
            <View
              style={{
                width: 50,
                height: 20,
                marginBottom: 20,
                marginRight: 10,
              }}
            />
            <View style={{ width: 50, height: 30 }} />
          </View>
          <View style={[Layout.row, { marginTop: 2 }]}>
            <View style={{ width: 50, height: 20, marginRight: 10 }} />
            <View
              style={{
                width: 50,
                height: 15,
                marginBottom: 20,
                marginRight: 10,
              }}
            />
            <View style={{ width: 50, height: 20 }} />
          </View>
        </View>
      </SkeletonPlaceholder>
      <View style={[Layout.center, Layout.col]}>
        <SkeletonPlaceholder borderRadius={4}>
          <View style={[Layout.justifyContentStart]}>
            <View
              style={{
                width: 50,
                height: 15,
                alignSelf: 'flex-end',
                marginBottom: 5,
              }}
            />
            <View style={{ width: 130, height: 25 }} />
          </View>
        </SkeletonPlaceholder>
      </View>
    </ShadowBox>
  );
};
export default FlightListSkeleton;
