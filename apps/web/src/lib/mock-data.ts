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

export type ChannelSpend = {
  channel: string;
  spend: number;
};

export type Expense = {
  category: string;
  amount: string;
  owner: string;
};

export const dashboardMetrics: Metric[] = [
  { title: 'Total Revenue', value: '$128,430', change: '+12.4%', trend: 'up' },
  { title: 'Orders', value: '1,284', change: '+4.1%', trend: 'up' },
  { title: 'Active Products', value: '312', change: '-1.2%', trend: 'down' },
  { title: 'Ad Spend', value: '$24,980', change: '+6.8%', trend: 'up' }
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

export const advertisingSpend: ChannelSpend[] = [
  { channel: 'Search', spend: 14800 },
  { channel: 'Social', spend: 9200 },
  { channel: 'Affiliates', spend: 4800 },
  { channel: 'Email', spend: 2100 }
];

export const expensesList: Expense[] = [
  { category: 'Fulfillment', amount: '$12,400', owner: 'Operations' },
  { category: 'Payroll', amount: '$38,900', owner: 'People Ops' },
  { category: 'Software', amount: '$6,250', owner: 'IT' },
  { category: 'Facilities', amount: '$4,800', owner: 'Facilities' }
];
