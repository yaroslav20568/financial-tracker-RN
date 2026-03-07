import React, { ReactNode } from 'react';

import { Portal } from '@gorhom/portal';

interface IProps {
  children: ReactNode;
}

export const portalHostName = 'modals_host';

export const PortalLayout = ({ children }: IProps) => {
  return <Portal hostName={portalHostName}>{children}</Portal>;
};
