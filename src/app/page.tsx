'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DivCardsContainer from "@/components/divCardsContainer";
import Header from "@/components/header";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <DivCardsContainer />
    </QueryClientProvider>
    
  );
}
