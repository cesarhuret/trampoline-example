import React, { createContext, useContext, useState } from 'react';

interface ITransactionContext {
  transactionValue: string;
  setTransactionValue: (value: string) => void;
}

const TransactionContext = createContext<ITransactionContext>({
  transactionValue: '',
  setTransactionValue: () => {},
});

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [transactionValue, setTransactionValue] = useState<string>('');

  return (
    <TransactionContext.Provider
      value={{ transactionValue, setTransactionValue }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactionValue(): string {
  return useContext(TransactionContext).transactionValue;
}

export function useSetTransactionValue(): (value: string) => void {
  return useContext(TransactionContext).setTransactionValue;
}
