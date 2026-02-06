INSERT INTO users (id, name, email)
VALUES
  ('user_1', 'Avery Powell', 'avery@example.com'),
  ('user_2', 'Jordan Lee', 'jordan@example.com');

INSERT INTO products (id, name, price, currency)
VALUES
  ('prod_1', 'Starter Kit', 120, 'USD'),
  ('prod_2', 'Growth Bundle', 130, 'USD'),
  ('prod_3', 'Enterprise Pack', 105, 'USD');

INSERT INTO orders (id, user_id, product_id, quantity, total, currency, ordered_at)
VALUES
  ('ord_1001', 'user_1', 'prod_1', 2, 240, 'USD', '2024-05-01'),
  ('ord_1002', 'user_2', 'prod_2', 1, 130, 'USD', '2024-05-02'),
  ('ord_1003', 'user_1', 'prod_3', 3, 315, 'USD', '2024-05-03');

INSERT INTO ad_spend (id, channel, amount, currency, spend_date)
VALUES
  ('ads_2001', 'Search', 220, 'USD', '2024-05-01'),
  ('ads_2002', 'Social', 180, 'USD', '2024-05-02');

INSERT INTO expenses (id, name, amount, currency, cadence, type, effective_month, incurred_on)
VALUES
  ('exp_3001', 'Software Subscriptions', 900, 'USD', 'monthly', 'fixed', '2024-05', NULL),
  ('exp_3002', 'Warehouse Rent', 1500, 'USD', 'monthly', 'fixed', '2024-05', NULL),
  ('exp_3003', 'Packaging', 120, 'USD', 'per-order', 'variable', NULL, '2024-05-01');
