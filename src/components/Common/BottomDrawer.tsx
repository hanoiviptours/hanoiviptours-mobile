import React, { forwardRef, useCallback, useMemo } from 'react';
import { Colors } from '../../theme/Variables';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
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
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      ),
      [],
    );
    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        style={{
          flex: 1,
          shadowColor: Colors.primaryColor,
          backgroundColor: Colors.white,
          borderRadius: 20,
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
    );
  },
);

export default BottomDrawer;
