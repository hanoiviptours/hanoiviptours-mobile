import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { PlaneListScreenProps } from '../../../@types/navigation';
import PlaneListHeader from './components/PlaneListHeader';
import PlaneListItem from './components/PlaneListItem';
import FlightListSkeleton from './components/FlightListSkeleton';
import { FlashList } from '@shopify/flash-list';

const MemorizedItem = memo(PlaneListItem);

const PlaneList = ({ navigation }: PlaneListScreenProps) => {
  const { Gutters, Layout } = useTheme();
  const flightSearch = useSelector((state: any) => state.flightSearch);

  const renderItem = useCallback(
    ({ item }: any) => (
      <MemorizedItem flightInfos={item} navigation={navigation} />
    ),
    [flightSearch.data],
  );

  const renderEmpty = useCallback(() => {
    return Array.from({ length: 10 }).map((_, index) => (
      <FlightListSkeleton key={index} />
    ));
  }, [flightSearch.isLoading]);

  const keyExtractor = useCallback(
    (item: any) => item.id,
    [flightSearch.data],
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
      <PlaneListHeader isLoading={flightSearch.isLoading} />
      <FlashList
        data={flightSearch?.data?.data || []}
        removeClippedSubviews={true}
        estimatedItemSize={145}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PlaneList;
