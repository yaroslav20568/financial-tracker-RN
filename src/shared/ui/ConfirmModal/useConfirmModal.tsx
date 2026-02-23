import { useCallback, useMemo, useState } from 'react';

import { ConfirmModal, IConfirmModalProps } from './ConfirmModal';

interface IOptions extends Omit<IConfirmModalProps, 'visible' | 'onClose'> {}

export const useConfirmModal = (options: IOptions) => {
  const { onPress, isLoading, ...otherOptions } = options;
  const [isOpen, setIsOpen] = useState(false);

  const openConfirmModal = useCallback(() => setIsOpen(true), []);
  const closeConfirmModal = useCallback(() => setIsOpen(false), []);

  const handleOnPress = useCallback(async () => {
    await onPress();
    closeConfirmModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onPress]);

  const confirmModal = useMemo(
    () => (
      <ConfirmModal
        visible={isOpen}
        onClose={closeConfirmModal}
        onPress={handleOnPress}
        isLoading={isLoading}
        {...otherOptions}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen, isLoading]
  );

  return [confirmModal, openConfirmModal] as const;
};
