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
  { title: 'Total Revenue', value: '$128,430', change: '+12.4%', trend: 'up' },
  { title: 'Total Profit', value: '$46,280', change: '+8.3%', trend: 'up' },
  { title: 'Ad Spend', value: '$24,980', change: '+6.8%', trend: 'up' },
  { title: 'ROAS', value: '4.1x', change: '+1.1%', trend: 'up' },
  { title: 'Net Margin', value: '36%', change: '+0.7%', trend: 'up' }
];

export const ordersTable: TableRow[] = [
  { id: 'ORD-9201', status: 'Processing', customer: 'Ava Williams', amount: '$1,240', date: 'Aug 15' },
  { id: 'ORD-9202', status: 'Shipped', customer: 'Lucas Chen', amount: '$980', date: 'Aug 14' },
  { id: 'ORD-9203', status: 'Delivered', customer: 'Noah Patel', amount: '$3,180', date: 'Aug 14' },
  { id: 'ORD-9204', status: 'Refunded', customer: 'Sofia Reyes', amount: '$420', date: 'Aug 13' }
];

export const productsTable: TableRow[] = [
  { id: 'PRD-401', status: 'In Stock', product: 'Nimbus Backpack', amount: '$74', date: 'Updated 2d ago' },
  { id: 'PRD-402', status: 'Low Stock', product: 'Crescent Hoodie', amount: '$64', date: 'Updated 1d ago' },
  { id: 'PRD-403', status: 'Backorder', product: 'Atlas Sneaker', amount: '$132', date: 'Updated 4d ago' },
  { id: 'PRD-404', status: 'In Stock', product: 'Solstice Tee', amount: '$38', date: 'Updated 3d ago' }
];

export const orders: OrderRow[] = [
  {
    id: 'ORD-9201',
    date: 'Aug 15',
    product: 'Nimbus Backpack',
    revenue: '$1,240',
    productCost: '$620',
    deliveryCost: '$48',
    adCost: '$110',
    profit: '$462'
  },
  {
    id: 'ORD-9202',
    date: 'Aug 14',
    product: 'Crescent Hoodie',
    revenue: '$980',
    productCost: '$430',
    deliveryCost: '$42',
    adCost: '$95',
    profit: '$413'
  },
  {
    id: 'ORD-9203',
    date: 'Aug 14',
    product: 'Atlas Sneaker',
    revenue: '$3,180',
    productCost: '$1,520',
    deliveryCost: '$110',
    adCost: '$285',
    profit: '$1,265'
  },
  {
    id: 'ORD-9204',
    date: 'Aug 13',
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
  { channel: 'Search', spend: 14800 },
  { channel: 'Social', spend: 9200 },
  { channel: 'Affiliates', spend: 4800 },
  { channel: 'Email', spend: 2100 }
];

export const advertisingMetrics: Metric[] = [
  { title: 'Total Spend', value: '$24,980', change: '+6.8%', trend: 'up' },
  { title: 'Cost per Purchase', value: '$18.40', change: '-2.1%', trend: 'down' },
  { title: 'ROAS', value: '4.1x', change: '+1.1%', trend: 'up' }
];

export const revenueSeries: TimeSeriesPoint[] = [
  { label: 'Mon', value: 18400 },
  { label: 'Tue', value: 19750 },
  { label: 'Wed', value: 20320 },
  { label: 'Thu', value: 22100 },
  { label: 'Fri', value: 24800 },
  { label: 'Sat', value: 18900 },
  { label: 'Sun', value: 22160 }
];

export const profitSeries: TimeSeriesPoint[] = [
  { label: 'Mon', value: 6200 },
  { label: 'Tue', value: 7020 },
  { label: 'Wed', value: 6840 },
  { label: 'Thu', value: 7540 },
  { label: 'Fri', value: 8620 },
  { label: 'Sat', value: 6010 },
  { label: 'Sun', value: 7330 }
];

export const adSpendSeries: TimeSeriesPoint[] = [
  { label: 'Mon', value: 3200 },
  { label: 'Tue', value: 3550 },
  { label: 'Wed', value: 3380 },
  { label: 'Thu', value: 3720 },
  { label: 'Fri', value: 4150 },
  { label: 'Sat', value: 2900 },
  { label: 'Sun', value: 3410 }
];

export const expensesList: Expense[] = [
  { category: 'Fulfillment', amount: '$12,400', owner: 'Operations' },
  { category: 'Payroll', amount: '$38,900', owner: 'People Ops' },
  { category: 'Software', amount: '$6,250', owner: 'IT' },
  { category: 'Facilities', amount: '$4,800', owner: 'Facilities' }
];

export const fixedExpenses: Expense[] = [
  { category: 'Warehouse Rent', amount: '$8,200', owner: 'Operations' },
  { category: 'Software Subscriptions', amount: '$4,150', owner: 'IT' },
  { category: 'Payroll Base', amount: '$28,600', owner: 'People Ops' }
];

export const variableExpenses: Expense[] = [
  { category: 'Packaging', amount: '$1,240', owner: 'Operations' },
  { category: 'Returns', amount: '$860', owner: 'Support' },
  { category: 'Overtime', amount: '$1,120', owner: 'People Ops' }
];
