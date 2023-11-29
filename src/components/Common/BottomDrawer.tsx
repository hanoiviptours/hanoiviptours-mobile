import React, { forwardRef, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Colors } from '../../theme/Variables';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

type BottomDrawerProps = {
  children: React.ReactNode;
  snapPoint: string;
};

const BottomDrawer = forwardRef<BottomSheetModal, BottomDrawerProps>(
  ({ children, snapPoint }, ref) => {
    const snapPoints = useMemo(() => [snapPoint, snapPoint], []);
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
      <BottomSheetModalProvider>
        <View>
          <BottomSheetModal
            ref={ref}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{
              shadowColor: Colors.primaryColor,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 20.32,

              elevation: 24,
            }}
          >
            {children}
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    );
  },
);

export default BottomDrawer;
