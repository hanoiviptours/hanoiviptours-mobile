import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../theme/Variables';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Tile } from '@rneui/themed';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';

type Props = {
  title?: string;
  width?: 'small' | 'medium' | 'large' | 'regular';
  space?: 'small' | 'regular';
};
type ImagePickerResponse = {
  didCancel?: boolean;
  error?: string;
  customButton?: string;
  uri?: string;
  assets?: any;
};
type ImagePickerOptions = {
  title?: string;
  customButtons?: { name: string; title: string }[];
  storageOptions?: { skipBackup: boolean; path: string };
};
const WIDTHS = {
  small: 100,
  regular: 125,
  medium: 150,
  large: 180,
};
const SPACE = {
  tiny: 2,
  small: 5,
  regular: 10,
};

const ImagePicker = ({ title, width, space }: Props) => {
  const [filePath, setFilePath] = useState({});
  console.log('filePath---------', filePath);

  const { t } = useTranslation(['commonText']);

  const { Fonts, Gutters, Layout } = useTheme();

  const choseImg = async (): Promise<void> => {
    let options: ImagePickerOptions = {
      title: title,
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    try {
      const response: ImagePickerResponse = await launchImageLibrary(options);
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.error) {
        console.log('ImagePicker Error: ', response?.error);
      } else if (response?.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response------------', response);
        // const source = { uri: response.uri };
        const pickedImg = response?.assets[0]?.uri;
        setFilePath(pickedImg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageWidth = WIDTHS[width || 'medium'];
  const contentSpace = SPACE[space || 'tiny'];

  return (
    <View style={[Layout.center, { margin: contentSpace }]}>
      <Text style={[Fonts.textBold]}>{title}</Text>
      <Tile
        imageSrc={{
          uri: filePath ? filePath : '',
        }}
        title={t('commonText:choose-image')}
        titleStyle={Fonts.textSmall}
        onPress={choseImg}
        icon={{
          name: 'plus-circle-outline',
          type: 'material-community',
          size: 30,
          color: Colors.primaryColor,
        }}
        featured
        activeOpacity={2}
        width={imageWidth}
        height={100}
        overlayContainerStyle={[Layout.alignItemsCenter, Gutters.smallBPadding]}
        imageContainerStyle={[
          Layout.fullWidth,
          Gutters.smallRMargin,
          {
            borderRadius: 5,
            borderWidth: 1,
            borderColor: Colors.textGray150,
            backgroundColor: Colors.textGray100,
          },
        ]}
      />
    </View>
  );
};

export default ImagePicker;
