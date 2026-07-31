-- =====================================================
-- Integration Testing: API & Database Verification
-- Author: QA Engineer
-- Database: PostgreSQL
-- =====================================================

-- 1. Table Schema Setup
CREATE TABLE IF NOT EXISTS public.products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.orders (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES public.products(id),
    customer_email VARCHAR(255) NOT NULL,
    order_status VARCHAR(50) DEFAULT 'PENDING',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Scenario 1: Verify Direct Record Creation (INSERT & SELECT)
INSERT INTO public.products (title, price) 
VALUES ('Klawiatura Mechaniczna RGB', 350.00);

SELECT id, title, price, status, created_at 
FROM public.products 
WHERE title = 'Klawiatura Mechaniczna RGB';

-- 3. Scenario 2: Verify Order Processing with Relational Join (JOIN)
INSERT INTO public.orders (product_id, customer_email, order_status) 
VALUES (1, 'piotr@test.pl', 'PENDING');

UPDATE public.orders 
SET order_status = 'PAID', updated_at = CURRENT_TIMESTAMP 
WHERE customer_email = 'piotr@test.pl';

SELECT 
    o.id AS order_id,
    o.customer_email,
    o.order_status,
    p.title AS product_name,
    p.price
FROM public.orders o
JOIN public.products p ON o.product_id = p.id
WHERE o.customer_email = 'piotr@test.pl';

-- 4. Scenario 3: Bulk Data Metrics & Aggregation (GROUP BY & COUNT)
INSERT INTO public.products (title, price, status) VALUES 
('Mysz Bezprzewodowa', 150.00, 'ACTIVE'),
('Podkładka XL', 80.00, 'ACTIVE'),
('Monitor 27 cali', 1200.00, 'INACTIVE');

SELECT 
    status, 
    COUNT(*) AS total_count,
    ROUND(AVG(price), 2) AS average_price
FROM public.products
GROUP BY status;