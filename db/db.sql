psql  -U postgres

DROP DATABASE showroom;

CREATE USER admin WITH ENCRYPTED PASSWORD '123';

CREATE DATABASE showroom OWNER admin;

GRANT ALL PRIVILEGES ON DATABASE showroom to admin;

\c showroom admin

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    number text,
    email text,
    created_at text DEFAULT CURRENT_DATE
);

CREATE TABLE car_models (
  id SERIAL PRIMARY KEY,
  model text NOT NULL,
  created_at text DEFAULT CURRENT_DATE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  car_id integer NOT NULL,
  amount integer,
  price integer,
  client_id integer NOT NULL,
  created_at text DEFAULT CURRENT_DATE,
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (car_id) REFERENCES car_models(id)
);

INSERT INTO public.car_models VALUES (1, 'BMW X5', '2022-10-20');
INSERT INTO public.car_models VALUES (3, 'BMW X7', '2022-10-20');
INSERT INTO public.car_models VALUES (2, 'BMW X6', '2022-10-20');

INSERT INTO public.clients VALUES (1, 'Иванов Сергей', '79107891122', NULL, '2022-07-01');
INSERT INTO public.clients VALUES (2, 'Коробкин Олег', '79107891155', NULL, '2022-07-02');
INSERT INTO public.clients VALUES (3, 'Олейкин Роман', '79107891166', NULL, '2022-07-02');

INSERT INTO public.orders VALUES (1, 2, 1, 2000000, 1, '2022-07-01');
INSERT INTO public.orders VALUES (2, 1, 2, 3500000, 2, '2022-07-02');
INSERT INTO public.orders VALUES (3, 3, 1, 2000000, 3, '2022-07-02');
INSERT INTO public.orders VALUES (4, 3, 1, 2000000, 2, '2022-07-02');
INSERT INTO public.orders VALUES (5, 2, 2, 2000000, 2, '2022-07-02');
INSERT INTO public.orders VALUES (6, 1, 1, 3000000, 1, '2022-07-03');
