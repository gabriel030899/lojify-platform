export type Sellings = Array<{
    id: number;
    product: { id: number; name: string; quantity: number; value: number }[];
    date: string;
    totalValue: number;
    seller: { id: number; name: string }[];
    client: { id: number; name: string }[];
  }>;