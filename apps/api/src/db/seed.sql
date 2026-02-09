INSERT INTO users (id, name, email, hashed_password)
VALUES
  ('user_1', 'Avery Powell', 'avery@example.com', 'seeded-salt:575bc12c7a0214ebfe610969c4121e72faede66e244754f0a036fdb0810bf8ef20e9d1e483f853febd0ddf8b4cd806f8583c3543f4ace2d338103e1204e78e12'),
  ('user_2', 'Jordan Lee', 'jordan@example.com', 'seeded-salt:575bc12c7a0214ebfe610969c4121e72faede66e244754f0a036fdb0810bf8ef20e9d1e483f853febd0ddf8b4cd806f8583c3543f4ace2d338103e1204e78e12');

INSERT INTO products (id, name, price, cost_price, currency)
VALUES
  ('prod_1', 'Starter Kit', 120, 68, 'USD'),
  ('prod_2', 'Growth Bundle', 130, 72, 'USD'),
  ('prod_3', 'Enterprise Pack', 105, 58, 'USD');

INSERT INTO orders (id, user_id, product_id, quantity, total, currency, product_cost, delivery_cost, ad_cost, ordered_at)
VALUES
  ('ord_1001', 'user_1', 'prod_1', 2, 240, 'USD', 136, 18, 12, '2024-05-01'),
  ('ord_1002', 'user_2', 'prod_2', 1, 130, 'USD', 72, 10, 8, '2024-05-02'),
  ('ord_1003', 'user_1', 'prod_3', 3, 315, 'USD', 174, 24, 16, '2024-05-03');

INSERT INTO ad_spend (id, channel, amount, currency, spend_date)
VALUES
  ('ads_2001', 'Search', 220, 'USD', '2024-05-01'),
  ('ads_2002', 'Social', 180, 'USD', '2024-05-02');

INSERT INTO expenses (id, name, amount, currency, cadence, type, effective_month, incurred_on)
VALUES
  ('exp_3001', 'Software Subscriptions', 900, 'USD', 'monthly', 'fixed', '2024-05', NULL),
  ('exp_3002', 'Warehouse Rent', 1500, 'USD', 'monthly', 'fixed', '2024-05', NULL),
  ('exp_3003', 'Packaging', 120, 'USD', 'per-order', 'variable', NULL, '2024-05-01');
