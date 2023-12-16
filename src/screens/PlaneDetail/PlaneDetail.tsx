import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import PlaneDetailHeader from './components/PlaneDetailHeader';
import { ScrollView } from 'react-native-gesture-handler';
import PlaneDetailContent from './components/PlaneDetailContent';

const PlaneDetail = ({ navigation }: any) => {
  const { Gutters, Layout } = useTheme();
  const pan = useRef(new Animated.ValueXY()).current;

  return (
    <ScrollView
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: pan.y } } }],
        {
          useNativeDriver: false,
        },
      )}
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.fullHeight,
        Gutters.largeBPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <PlaneDetailHeader pan={pan} />
      <PlaneDetailContent navigation={navigation} />
    </ScrollView>
  );
};

export default PlaneDetail;
