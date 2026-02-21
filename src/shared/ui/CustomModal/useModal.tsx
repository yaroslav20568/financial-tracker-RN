import React, { useState, useCallback, useMemo } from 'react';

import { CustomModal, ICustomModalProps } from './CustomModal';

interface IProps extends Omit<ICustomModalProps, 'visible'> {}

export const useModal = (props: IProps) => {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  const modalElement = useMemo(() => {
    if (!visible) return null;

    return <CustomModal {...props} visible={visible} onClose={close} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return {
    open,
    modalElement
  };
};
