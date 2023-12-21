import React, { FC, useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface ISliderPickerProps {
  renderItem: any;
  data: any[];
  onSnapToItem: (item: any) => void;
}

const SliderPicker: FC<ISliderPickerProps> = ({
  renderItem,
  data,
  onSnapToItem,
}) => {
  const { width } = useWindowDimensions();
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        vertical={false}
        ref={isCarousel}
        sliderWidth={width}
        itemWidth={width * 0.5}
        data={data}
        renderItem={renderItem}
        onSnapToItem={onSnapToItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default SliderPicker;
