export type Metric = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
};

export type TableRow = {
  id: string;
  status: string;
  customer?: string;
  product?: string;
  amount: string;
  date: string;
};

export type OrderRow = {
  id: string;
  date: string;
  product: string;
  revenue: string;
  productCost: string;
  deliveryCost: string;
  adCost: string;
  profit: string;
};

export type ProductRow = {
  name: string;
  costPrice: string;
  sellingPrice: string;
  margin: string;
};

export type ChannelSpend = {
  channel: string;
  spend: number;
};

export type TimeSeriesPoint = {
  label: string;
  value: number;
};

export type Expense = {
  category: string;
  amount: string;
  owner: string;
};

export const dashboardMetrics: Metric[] = [
  { title: 'Загальний дохід', value: '$128,430', change: '+12.4%', trend: 'up' },
  { title: 'Загальний прибуток', value: '$46,280', change: '+8.3%', trend: 'up' },
  { title: 'Витрати на рекламу', value: '$24,980', change: '+6.8%', trend: 'up' },
  { title: 'ROAS', value: '4.1x', change: '+1.1%', trend: 'up' },
  { title: 'Чиста маржа', value: '36%', change: '+0.7%', trend: 'up' }
];

export const ordersTable: TableRow[] = [
  {
    id: 'ORD-9201',
    status: 'В обробці',
    customer: 'Ava Williams',
    amount: '$1,240',
    date: '15 серп'
  },
  {
    id: 'ORD-9202',
    status: 'Відправлено',
    customer: 'Lucas Chen',
    amount: '$980',
    date: '14 серп'
  },
  {
    id: 'ORD-9203',
    status: 'Доставлено',
    customer: 'Noah Patel',
    amount: '$3,180',
    date: '14 серп'
  },
  {
    id: 'ORD-9204',
    status: 'Повернено',
    customer: 'Sofia Reyes',
    amount: '$420',
    date: '13 серп'
  }
];

export const productsTable: TableRow[] = [
  {
    id: 'PRD-401',
    status: 'В наявності',
    product: 'Nimbus Backpack',
    amount: '$74',
    date: 'Оновлено 2 дні тому'
  },
  {
    id: 'PRD-402',
    status: 'Мало на складі',
    product: 'Crescent Hoodie',
    amount: '$64',
    date: 'Оновлено 1 день тому'
  },
  {
    id: 'PRD-403',
    status: 'Передзамовлення',
    product: 'Atlas Sneaker',
    amount: '$132',
    date: 'Оновлено 4 дні тому'
  },
  {
    id: 'PRD-404',
    status: 'В наявності',
    product: 'Solstice Tee',
    amount: '$38',
    date: 'Оновлено 3 дні тому'
  }
];

export const orders: OrderRow[] = [
  {
    id: 'ORD-9201',
    date: '15 серп',
    product: 'Nimbus Backpack',
    revenue: '$1,240',
    productCost: '$620',
    deliveryCost: '$48',
    adCost: '$110',
    profit: '$462'
  },
  {
    id: 'ORD-9202',
    date: '14 серп',
    product: 'Crescent Hoodie',
    revenue: '$980',
    productCost: '$430',
    deliveryCost: '$42',
    adCost: '$95',
    profit: '$413'
  },
  {
    id: 'ORD-9203',
    date: '14 серп',
    product: 'Atlas Sneaker',
    revenue: '$3,180',
    productCost: '$1,520',
    deliveryCost: '$110',
    adCost: '$285',
    profit: '$1,265'
  },
  {
    id: 'ORD-9204',
    date: '13 серп',
    product: 'Solstice Tee',
    revenue: '$420',
    productCost: '$170',
    deliveryCost: '$28',
    adCost: '$40',
    profit: '$182'
  }
];

export const products: ProductRow[] = [
  { name: 'Nimbus Backpack', costPrice: '$38', sellingPrice: '$74', margin: '49%' },
  { name: 'Crescent Hoodie', costPrice: '$34', sellingPrice: '$64', margin: '47%' },
  { name: 'Atlas Sneaker', costPrice: '$64', sellingPrice: '$132', margin: '52%' },
  { name: 'Solstice Tee', costPrice: '$18', sellingPrice: '$38', margin: '53%' }
];

export const advertisingSpend: ChannelSpend[] = [
  { channel: 'Пошук', spend: 14800 },
  { channel: 'Соцмережі', spend: 9200 },
  { channel: 'Партнери', spend: 4800 },
  { channel: 'Email', spend: 2100 }
];

export const advertisingMetrics: Metric[] = [
  { title: 'Загальні витрати', value: '$24,980', change: '+6.8%', trend: 'up' },
  { title: 'Ціна за покупку', value: '$18.40', change: '-2.1%', trend: 'down' },
  { title: 'ROAS', value: '4.1x', change: '+1.1%', trend: 'up' }
];

export const revenueSeries: TimeSeriesPoint[] = [
  { label: 'Пн', value: 18400 },
  { label: 'Вт', value: 19750 },
  { label: 'Ср', value: 20320 },
  { label: 'Чт', value: 22100 },
  { label: 'Пт', value: 24800 },
  { label: 'Сб', value: 18900 },
  { label: 'Нд', value: 22160 }
];

export const profitSeries: TimeSeriesPoint[] = [
  { label: 'Пн', value: 6200 },
  { label: 'Вт', value: 7020 },
  { label: 'Ср', value: 6840 },
  { label: 'Чт', value: 7540 },
  { label: 'Пт', value: 8620 },
  { label: 'Сб', value: 6010 },
  { label: 'Нд', value: 7330 }
];

export const adSpendSeries: TimeSeriesPoint[] = [
  { label: 'Пн', value: 3200 },
  { label: 'Вт', value: 3550 },
  { label: 'Ср', value: 3380 },
  { label: 'Чт', value: 3720 },
  { label: 'Пт', value: 4150 },
  { label: 'Сб', value: 2900 },
  { label: 'Нд', value: 3410 }
];

export const expensesList: Expense[] = [
  { category: 'Виконання замовлень', amount: '$12,400', owner: 'Операційний відділ' },
  { category: 'Фонд оплати праці', amount: '$38,900', owner: 'HR' },
  { category: 'ПЗ', amount: '$6,250', owner: 'IT' },
  { category: 'Інфраструктура', amount: '$4,800', owner: 'Адміністрація' }
];

export const fixedExpenses: Expense[] = [
  { category: 'Оренда складу', amount: '$8,200', owner: 'Операційний відділ' },
  { category: 'Підписки на сервіси', amount: '$4,150', owner: 'IT' },
  { category: 'Базовий фонд оплати праці', amount: '$28,600', owner: 'HR' }
];

export const variableExpenses: Expense[] = [
  { category: 'Пакування', amount: '$1,240', owner: 'Операційний відділ' },
  { category: 'Повернення', amount: '$860', owner: 'Підтримка' },
  { category: 'Понаднормові', amount: '$1,120', owner: 'HR' }
];
