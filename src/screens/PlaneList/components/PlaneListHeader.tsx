import React, { useState, useCallback, useEffect, Fragment } from 'react';
import { View, Platform, Text, useWindowDimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { Icon } from '@/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const absoluteIcon = Platform.OS === 'ios' ? '-35%' : '-20%';

type PlaneListHeaderProps = {
  isLoading: boolean;
};
const PlaneListHeader = ({ isLoading }: PlaneListHeaderProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);
  const { width } = useWindowDimensions();
  const { Gutters, Layout, Fonts } = useTheme();
  const [progress, setProgress] = useState(0);

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
  //todo create a custom hook for this
  const getProgress = useCallback(() => {
    if (isLoading) {
      const step = 0.2; // Each step is 25%
      let progress = 0;
      const interval = setInterval(() => {
        progress += step;
        if (progress >= 1) {
          clearInterval(interval);
          progress = 1;
        }
        setProgress(progress);
      }, 1000); // Progress increments every 4 seconds
      return () => clearInterval(interval);
    } else {
      setProgress(0);
      return undefined;
    }
  }, [isLoading]);
  useEffect(getProgress, [isLoading]);

  return (
    <>
      {isLoading && (
        <Progress.Bar
          borderRadius={0}
          height={6}
          progress={progress}
          width={width}
          color={Colors.primaryColor}
        />
      )}
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
    </>
  );
};

export default PlaneListHeader;
