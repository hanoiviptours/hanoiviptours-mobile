import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useTheme, useGetAvailableFares } from '@/hooks';
import { Colors } from '@/theme/Variables';
import PlaneDetailHeader from './components/PlaneDetailHeader';
import { ScrollView } from 'react-native-gesture-handler';
import PlaneDetailContent from './components/PlaneDetailContent';
import { IFareSearchQueryBody } from 'types/flight';

const PlaneDetail = ({ navigation, route }: any) => {
  const { flightAvailableBody, airlineInfos, currentFlight } = route.params;
  const [fareSearchBody, setFareSearchBody] = useState<IFareSearchQueryBody>({
    ...flightAvailableBody,
    cabin: 'ECONOMY',
  });
  const { availableFares, isLoading } = useGetAvailableFares({
    body: fareSearchBody,
    currentFlight,
  });
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
      <PlaneDetailHeader pan={pan} airlineInfos={airlineInfos} />

      <PlaneDetailContent
        navigation={navigation}
        availableFares={availableFares}
        flightAvailableBody={flightAvailableBody}
        isTicketClassLoading={isLoading}
        setFareSearchBody={setFareSearchBody}
      />
    </ScrollView>
  );
};

export default PlaneDetail;
