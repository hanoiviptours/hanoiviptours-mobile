import React, { useState, useCallback, memo } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { PlaneListScreenProps } from '../../../@types/navigation';
import PlaneListHeader from './components/PlaneListHeader';
import PlaneListItem from './components/PlaneListItem';
import { FlatList } from 'react-native-gesture-handler';
import { mockFlight } from '@/services/mockres';

const MemorizedItem = memo(PlaneListItem);

const PlaneList = ({ navigation }: PlaneListScreenProps) => {
  const dispatch = useDispatch();
  const { Gutters, Layout } = useTheme();

  const [flightInfo, setFlightInfo] = useState([]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <MemorizedItem flightInfos={item} navigation={navigation} />
    ),
    [],
  );

  return (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.fullHeight,
        Gutters.smallBPadding,
        { backgroundColor: Colors.white },
      ]}
    >
      <PlaneListHeader />
      <FlatList data={mockFlight} renderItem={renderItem} />
    </View>
  );
};

export default PlaneList;
