import React, { ReactNode } from 'react';

import { Portal } from '@gorhom/portal';

export const portalHostName = 'modals_host';

interface IProps {
  children: ReactNode;
}

export const PortalLayout = ({ children }: IProps) => {
  return <Portal hostName={portalHostName}>{children}</Portal>;
};
