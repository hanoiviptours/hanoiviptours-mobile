import React, { useState, useMemo, useRef, useCallback } from 'react';
import { View, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  ButtonGroup,
  DividerButtonForm,
  Button,
  RangeDatePicker,
} from '@/components';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import moment from 'moment';
import { PlaneListScreenProps } from '../../../@types/navigation';
import PlaneListHeader from './components/PlaneListHeader';
import PlaneListItem from './components/PlaneListItem';
import { FlatList } from 'react-native-gesture-handler';

const currentDate = moment().toDate();
// const absoluteIcon = Platform.OS === 'ios' ? '-35%' : '-20%';

const PlaneList = ({ navigation }: PlaneListScreenProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);
  const { Gutters, Layout, darkMode: isDark } = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [flightInfo, setFlightInfo] = useState([]);
  const renderItem = useCallback(
    ({ item }) => <PlaneListItem flightInfos={item} />,
    []
  );
  const item = [1, 2, 3, 4, 5, 6, 7];

  return (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.fullHeight,
        { backgroundColor: Colors.white },
      ]}
    >
      <PlaneListHeader />
      <FlatList data={item} renderItem={renderItem} />
    </View>
  );
};

export default PlaneList;
