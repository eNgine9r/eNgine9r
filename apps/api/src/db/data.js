const orders = [
  {
    id: "ord_1001",
    productId: "prod_1",
    quantity: 2,
    total: 240,
    productCost: 136,
    deliveryCost: 18,
    adCost: 12,
    currency: "USD",
    orderedAt: "2024-05-01"
  },
  {
    id: "ord_1002",
    productId: "prod_2",
    quantity: 1,
    total: 130,
    productCost: 72,
    deliveryCost: 10,
    adCost: 8,
    currency: "USD",
    orderedAt: "2024-05-02"
  },
  {
    id: "ord_1003",
    productId: "prod_3",
    quantity: 3,
    total: 315,
    productCost: 174,
    deliveryCost: 24,
    adCost: 16,
    currency: "USD",
    orderedAt: "2024-05-03"
  }
];

const products = [
  {
    id: "prod_1",
    name: "Starter Kit",
    price: 120,
    costPrice: 68,
    currency: "USD"
  },
  {
    id: "prod_2",
    name: "Growth Bundle",
    price: 130,
    costPrice: 72,
    currency: "USD"
  },
  {
    id: "prod_3",
    name: "Enterprise Pack",
    price: 105,
    costPrice: 58,
    currency: "USD"
  }
];

const adSpend = [
  {
    id: "ads_2001",
    channel: "Search",
    amount: 220,
    currency: "USD",
    date: "2024-05-01"
  },
  {
    id: "ads_2002",
    channel: "Social",
    amount: 180,
    currency: "USD",
    date: "2024-05-02"
  }
];

const expenses = [
  {
    id: "exp_3001",
    name: "Software Subscriptions",
    amount: 900,
    currency: "USD",
    cadence: "monthly",
    type: "fixed"
  },
  {
    id: "exp_3002",
    name: "Warehouse Rent",
    amount: 1500,
    currency: "USD",
    cadence: "monthly",
    type: "fixed"
  },
  {
    id: "exp_3003",
    name: "Packaging",
    amount: 120,
    currency: "USD",
    cadence: "per-order",
    type: "variable"
  }
];

module.exports = {
  orders,
  products,
  adSpend,
  expenses
};
