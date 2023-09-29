CREATE TABLE "users" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  admin BOOLEAN DEFAULT FALSE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "payment_details" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  method VARCHAR(32) NOT NULL,
  reference VARCHAR(16) UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id)
);

CREATE TABLE "cars" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  longitude DOUBLE PRECISION NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  place_name VARCHAR(255) NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  approved BOOLEAN DEFAULT FALSE,
  price_per_day MONEY NOT NULL
)

CREATE TABLE "schedules" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  start_date_time TIMESTAMP NOT NULL,
  end_date_time TIMESTAMP NOT NULL,
  car_id uuid REFERENCES cars(id) NOT NULL
)

CREATE TABLE "transactions" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  renter UUID REFERENCES users(id) NOT NULL,
  provider UUID REFERENCES users(id) NOT NULL,
  status SMALLINT NOT NULL,
  schedule_id UUID REFERENCES schedules(id) NOT NULL
);

CREATE TABLE "reviews" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  reviewer UUID REFERENCES users(id) NOT NULL,
  comment TEXT,
  anonymous BOOLEAN DEFAULT TRUE,
  rating NUMERIC(2, 1),
  car_id UUID REFERENCES cars(id) NOT NULL,
)

CREATE TABLE "car_details" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  make VARCHAR(127) NOT NULL,
  model VARCHAR(127) NOT NULL,
  year SMALLINT NOT NULL,
  transmission_type VARCHAR(8),
  fuel_type VARCHAR(16),
  engine_size NUMERIC(3,2),
  seating_capacity SMALLINT,
  car_id UUID REFERENCES cars(id) NOT NULL
)

CREATE TABLE "car_registrations" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  vin VARCHAR(32),
  registration_photo TEXT,
  license_plate VARCHAR(8),
  registered_until DATE,
  car_id UUID REFERENCES cars(id) NOT NULL
)

CREATE TABLE "car_images" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  src TEXT,
  alt VARCHAR(255),
  car_id UUID REFERENCES cars(id) NOT NULL
)

CREATE TABLE "car_features" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  feature TEXT UNIQUE
)

CREATE TABLE "cars_features_mapping" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  feature_id UUID REFERENCES car_features(id) NOT NULL,
  car_id UUID REFERENCES cars(id) NOT NULL
)