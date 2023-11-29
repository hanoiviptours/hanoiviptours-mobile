import React, { useState, useRef, useCallback, Fragment } from 'react';
import { View, Platform, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { Icon } from '@/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const absoluteIcon = Platform.OS === 'ios' ? '-35%' : '-20%';

type PlaneListHeaderProps = {};

const PlaneListHeader = ({}: PlaneListHeaderProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);
  const { Gutters, Layout, Fonts } = useTheme();

  const filterButtons = [
    {
      icon: <Icon name="sort" size={30} />,
      title: t('plane:sort'),
      onPress: () => console.log('sort'),
    },
    {
      icon: <Icon name="filter-alt" size={30} />,
      title: t('plane:filter'),
      onPress: () => console.log('sort'),
    },
    {
      icon: <Icon name="list" size={30} />,
      title: t('plane:compact'),
      onPress: () => console.log('sort'),
    },
  ];
  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        Gutters.smallLPadding,
        Gutters.smallRPadding,
        Gutters.tinyTPadding,
        Gutters.tinyBPadding,
        {
          backgroundColor: Colors.white,
          borderBottomWidth: 1.5,
          borderBottomColor: Colors.textGray200,
        },
      ]}
    >
      {filterButtons.map((button, index) => (
        <Fragment key={index}>
          <TouchableOpacity
            style={[Layout.row, Layout.center, Gutters.smallRMargin]}
            onPress={button.onPress}
          >
            {button.icon}
            <Text style={[Fonts.textSmall, { color: Colors.textGray400 }]}>
              {button.title}
            </Text>
          </TouchableOpacity>
          {index !== filterButtons.length - 1 && (
            <View
              style={{
                borderWidth: 0.75,
                borderColor: Colors.textGray200,
                height: 25,
                opacity: 1,
              }}
            />
          )}
        </Fragment>
      ))}
    </View>
  );
};

export default PlaneListHeader;
