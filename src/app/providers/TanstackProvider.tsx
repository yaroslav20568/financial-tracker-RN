import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { STALE_TIME_FIVE_MINUTES } from '@/shared';

interface IProps {
  children: ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME_FIVE_MINUTES
    }
  }
});

export const TanstackProvider = ({ children }: IProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
