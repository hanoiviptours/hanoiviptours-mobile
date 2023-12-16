import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { useRef, useCallback } from 'react';

const useBottomSheetModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const presentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return { bottomSheetModalRef, closeModal, presentModal };
};

export default useBottomSheetModal;
