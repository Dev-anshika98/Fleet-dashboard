-- Fleet Dashboard Seed Data
-- Replace 2c77bca3-7b25-4067-b682-8319edf133c6 with your actual Supabase auth user ID after creating the demo account
-- To find your user ID: Go to Supabase Dashboard > Authentication > Users > copy the user's UUID

-- ============================================================
-- VEHICLES (28 vehicles across Bangalore)
-- ============================================================

INSERT INTO vehicles (id, fleet_id, name, plate_number, vehicle_type, status, fuel_level, last_lat, last_lng, last_speed, last_heading, last_seen, driver_name, driver_phone, odometer_km, user_id) VALUES
('a1000001-0000-0000-0000-000000000001', 'FLT-BLR-001', 'Tata Ace Gold', 'KA 01 MG 4521', 'truck', 'active', 72, 12.9352, 77.6245, 38.5, 145.0, now() - interval '2 minutes', 'Ramesh Kumar', '+91 98451 23456', 45230, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000002', 'FLT-BLR-002', 'Mahindra Bolero Pickup', 'KA 03 AB 8834', 'van', 'active', 55, 12.9716, 77.5946, 42.0, 220.0, now() - interval '1 minute', 'Suresh Gowda', '+91 98452 34567', 38100, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000003', 'FLT-BLR-003', 'Ashok Leyland Dost', 'KA 05 CD 1122', 'truck', 'active', 88, 12.9170, 77.6227, 28.0, 90.0, now() - interval '3 minutes', 'Venkatesh R', '+91 98453 45678', 52400, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000004', 'FLT-BLR-004', 'Tata 407', 'KA 01 EF 3344', 'truck', 'active', 63, 12.9565, 77.7010, 52.0, 180.0, now() - interval '1 minute', 'Raju Naik', '+91 98454 56789', 67800, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000005', 'FLT-BLR-005', 'Mahindra Supro', 'KA 02 GH 5566', 'van', 'active', 45, 12.9780, 77.6408, 35.0, 310.0, now() - interval '4 minutes', 'Prasad M', '+91 98455 67890', 29500, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000006', 'FLT-BLR-006', 'Eicher Pro 1049', 'KA 04 IJ 7788', 'truck', 'active', 81, 12.8920, 77.6420, 48.0, 160.0, now() - interval '2 minutes', 'Naveen Kumar', '+91 98456 78901', 78200, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000007', 'FLT-BLR-007', 'Tata Ace Mega', 'KA 01 KL 9900', 'truck', 'active', 59, 12.9450, 77.5680, 31.0, 45.0, now() - interval '3 minutes', 'Manoj Shetty', '+91 98457 89012', 41200, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000008', 'FLT-BLR-008', 'Force Traveller', 'KA 03 MN 1234', 'bus', 'active', 67, 13.0050, 77.5520, 44.0, 270.0, now() - interval '1 minute', 'Harish B', '+91 98458 90123', 93400, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000009', 'FLT-BLR-009', 'Bajaj RE Auto', 'KA 01 OP 5678', 'auto', 'active', 78, 12.9600, 77.5850, 25.0, 120.0, now() - interval '5 minutes', 'Ganesh P', '+91 98459 01234', 18700, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000010', 'FLT-BLR-010', 'Tata Ultra T.7', 'KA 05 QR 9012', 'truck', 'active', 34, 12.9850, 77.6900, 55.0, 200.0, now() - interval '2 minutes', 'Anil Kumar', '+91 98460 12345', 56700, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000011', 'FLT-BLR-011', 'Mahindra Jeeto', 'KA 02 ST 3456', 'van', 'active', 90, 12.9280, 77.5750, 18.0, 350.0, now() - interval '6 minutes', 'Kiran Raj', '+91 98461 23456', 22100, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000012', 'FLT-BLR-012', 'Eicher Pro 2049', 'KA 01 UV 7890', 'truck', 'active', 12, 12.9100, 77.6500, 40.0, 135.0, now() - interval '3 minutes', 'Deepak S', '+91 98462 34567', 84500, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000013', 'FLT-BLR-013', 'Tata Intra V30', 'KA 04 WX 1122', 'truck', 'active', 56, 12.9950, 77.6100, 33.0, 75.0, now() - interval '4 minutes', 'Yogesh M', '+91 98463 45678', 35800, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000014', 'FLT-BLR-014', 'Piaggio Ape', 'KA 01 YZ 3344', 'auto', 'active', 85, 12.9400, 77.6100, 22.0, 260.0, now() - interval '2 minutes', 'Santosh K', '+91 98464 56789', 15200, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000015', 'FLT-BLR-015', 'Ashok Leyland Boss', 'KA 03 AA 5566', 'truck', 'active', 71, 12.8800, 77.5900, 46.0, 185.0, now() - interval '1 minute', 'Murali K', '+91 98465 67890', 71200, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000016', 'FLT-BLR-016', 'Tata Yodha', 'KA 05 BB 7788', 'truck', 'active', 48, 12.9650, 77.7200, 50.0, 155.0, now() - interval '3 minutes', 'Rajesh T', '+91 98466 78901', 48900, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000017', 'FLT-BLR-017', 'Force Gurkha', 'KA 01 CC 9900', 'van', 'active', 62, 12.9500, 77.6350, 28.0, 300.0, now() - interval '5 minutes', 'Vikram H', '+91 98467 89012', 33400, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000018', 'FLT-BLR-018', 'Tata Ace EV', 'KA 02 DD 1234', 'truck', 'active', 82, 12.9200, 77.5600, 30.0, 60.0, now() - interval '2 minutes', 'Siddharth N', '+91 98468 90123', 12300, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000019', 'FLT-BLR-019', 'Mahindra Bolero MaXX', 'KA 04 EE 5678', 'van', 'idle', 73, 12.9340, 77.6120, 0.0, 180.0, now() - interval '35 minutes', 'Prakash R', '+91 98469 01234', 42100, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000020', 'FLT-BLR-020', 'Tata 709', 'KA 01 FF 9012', 'truck', 'idle', 54, 12.9680, 77.5780, 0.0, 90.0, now() - interval '1 hour', 'Arvind G', '+91 98470 12345', 95300, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000021', 'FLT-BLR-021', 'Eicher Pro 3015', 'KA 03 GG 3456', 'truck', 'idle', 66, 12.9050, 77.5680, 0.0, 270.0, now() - interval '45 minutes', 'Sunil V', '+91 98471 23456', 108200, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000022', 'FLT-BLR-022', 'Ashok Leyland Partner', 'KA 05 HH 7890', 'truck', 'idle', 41, 12.9900, 77.6600, 0.0, 0.0, now() - interval '2 hours', 'Basavaraj K', '+91 98472 34567', 62800, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000023', 'FLT-BLR-023', 'Tata Winger', 'KA 02 II 1122', 'bus', 'idle', 58, 12.9750, 77.6050, 0.0, 135.0, now() - interval '25 minutes', 'Mohan Das', '+91 98473 45678', 51600, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000024', 'FLT-BLR-024', 'Mahindra Treo', 'KA 01 JJ 3344', 'auto', 'idle', 92, 12.9420, 77.5920, 0.0, 225.0, now() - interval '50 minutes', 'Girish M', '+91 98474 56789', 8900, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000025', 'FLT-BLR-025', 'Tata Prima', 'KA 04 KK 5566', 'truck', 'maintenance', 28, 12.9300, 77.5500, 0.0, 0.0, now() - interval '1 day', 'Manjunath P', '+91 98475 67890', 124500, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000026', 'FLT-BLR-026', 'Ashok Leyland Guru', 'KA 01 LL 7788', 'truck', 'maintenance', 15, 12.9150, 77.6350, 0.0, 0.0, now() - interval '2 days', 'Shivakumar B', '+91 98476 78901', 156700, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000027', 'FLT-BLR-027', 'Eicher Pro 6025', 'KA 03 MM 9900', 'truck', 'maintenance', 50, 12.9600, 77.5750, 0.0, 0.0, now() - interval '12 hours', 'Nagaraj R', '+91 98477 89012', 89300, '2c77bca3-7b25-4067-b682-8319edf133c6'),
('a1000001-0000-0000-0000-000000000028', 'FLT-BLR-028', 'Tata LPT 1613', 'KA 05 NN 1234', 'truck', 'offline', 0, 12.8700, 77.6000, 0.0, 0.0, now() - interval '3 days', 'Vehicle Unassigned', '', 178900, '2c77bca3-7b25-4067-b682-8319edf133c6');

-- ============================================================
-- TRIPS (Sample trips for first few vehicles with realistic routes)
-- ============================================================

-- Vehicle 1: Tata Ace Gold - Koramangala to Electronic City
INSERT INTO trips (id, vehicle_id, start_time, end_time, distance_km, avg_speed_kmh, max_speed_kmh, idle_time_min, halt_count, fuel_consumed_liters, start_location, end_location, start_lat, start_lng, end_lat, end_lng) VALUES
('b1000001-0000-0000-0000-000000000001', 'a1000001-0000-0000-0000-000000000001', now() - interval '3 hours', now() - interval '2 hours 15 minutes', 18.4, 24.5, 58.0, 12, 3, 2.8, 'Koramangala 5th Block', 'Electronic City Phase 1', 12.9352, 77.6245, 12.8390, 77.6777),
('b1000001-0000-0000-0000-000000000002', 'a1000001-0000-0000-0000-000000000001', now() - interval '6 hours', now() - interval '5 hours', 15.2, 22.0, 52.0, 18, 4, 2.3, 'Whitefield Main Road', 'Koramangala 5th Block', 12.9698, 77.7500, 12.9352, 77.6245),
('b1000001-0000-0000-0000-000000000003', 'a1000001-0000-0000-0000-000000000001', now() - interval '1 day 2 hours', now() - interval '1 day 1 hour', 12.8, 21.3, 48.0, 8, 2, 1.9, 'Indiranagar 100ft Road', 'Marathahalli Bridge', 12.9784, 77.6408, 12.9565, 77.7010),

-- Vehicle 2: Mahindra Bolero - MG Road to Hebbal
('b1000001-0000-0000-0000-000000000004', 'a1000001-0000-0000-0000-000000000002', now() - interval '2 hours', now() - interval '1 hour 20 minutes', 14.6, 22.0, 55.0, 10, 2, 2.5, 'MG Road Metro', 'Hebbal Flyover', 12.9716, 77.5946, 13.0358, 77.5970),
('b1000001-0000-0000-0000-000000000005', 'a1000001-0000-0000-0000-000000000002', now() - interval '5 hours', now() - interval '4 hours 10 minutes', 11.3, 18.5, 45.0, 15, 5, 1.8, 'Jayanagar 4th Block', 'MG Road Metro', 12.9250, 77.5938, 12.9716, 77.5946),

-- Vehicle 3: Ashok Leyland - Silk Board to Marathahalli
('b1000001-0000-0000-0000-000000000006', 'a1000001-0000-0000-0000-000000000003', now() - interval '1 hour', now() - interval '20 minutes', 8.5, 12.8, 42.0, 22, 6, 1.4, 'Silk Board Junction', 'Marathahalli', 12.9170, 77.6227, 12.9565, 77.7010),
('b1000001-0000-0000-0000-000000000007', 'a1000001-0000-0000-0000-000000000003', now() - interval '4 hours', now() - interval '3 hours 20 minutes', 10.2, 15.3, 48.0, 18, 4, 1.7, 'Marathahalli', 'Whitefield ITPL', 12.9565, 77.7010, 12.9698, 77.7500),

-- Vehicle 4: Tata 407 - Yeshwanthpur to Bannerghatta
('b1000001-0000-0000-0000-000000000008', 'a1000001-0000-0000-0000-000000000004', now() - interval '2 hours 30 minutes', now() - interval '1 hour 30 minutes', 22.5, 22.5, 62.0, 14, 3, 3.8, 'Yeshwanthpur Railway', 'Bannerghatta Road', 12.9980, 77.5440, 12.8900, 77.5950),
('b1000001-0000-0000-0000-000000000009', 'a1000001-0000-0000-0000-000000000004', now() - interval '7 hours', now() - interval '6 hours', 19.8, 19.8, 55.0, 20, 5, 3.2, 'Electronic City', 'Yeshwanthpur Railway', 12.8390, 77.6777, 12.9980, 77.5440),

-- Vehicle 5: Mahindra Supro - Indiranagar to Yelahanka
('b1000001-0000-0000-0000-000000000010', 'a1000001-0000-0000-0000-000000000005', now() - interval '1 hour 30 minutes', now() - interval '45 minutes', 16.2, 21.6, 50.0, 10, 2, 2.6, 'Indiranagar CMH Road', 'Yelahanka New Town', 12.9780, 77.6408, 13.1007, 77.5963),

-- Vehicle 6: Eicher Pro - HSR to Airport
('b1000001-0000-0000-0000-000000000011', 'a1000001-0000-0000-0000-000000000006', now() - interval '4 hours', now() - interval '2 hours 30 minutes', 38.5, 25.7, 72.0, 20, 4, 6.2, 'HSR Layout BDA Complex', 'Kempegowda Airport', 12.9120, 77.6380, 13.1989, 77.7068),

-- Vehicle 7-10: Various routes
('b1000001-0000-0000-0000-000000000012', 'a1000001-0000-0000-0000-000000000007', now() - interval '2 hours', now() - interval '1 hour 30 minutes', 9.8, 19.6, 44.0, 8, 3, 1.5, 'Rajajinagar 1st Block', 'Malleshwaram Circle', 12.9450, 77.5680, 12.9970, 77.5710),
('b1000001-0000-0000-0000-000000000013', 'a1000001-0000-0000-0000-000000000008', now() - interval '3 hours', now() - interval '2 hours', 20.1, 20.1, 58.0, 15, 4, 3.5, 'Hebbal Lake', 'Banashankari', 13.0050, 77.5520, 12.9250, 77.5460),
('b1000001-0000-0000-0000-000000000014', 'a1000001-0000-0000-0000-000000000009', now() - interval '45 minutes', now() - interval '20 minutes', 5.2, 12.5, 35.0, 5, 2, 0.4, 'Brigade Road', 'Cubbon Park', 12.9600, 77.5850, 12.9763, 77.5929),
('b1000001-0000-0000-0000-000000000015', 'a1000001-0000-0000-0000-000000000010', now() - interval '3 hours', now() - interval '2 hours', 24.3, 24.3, 65.0, 12, 3, 4.0, 'Whitefield', 'KR Puram Railway', 12.9850, 77.6900, 12.9980, 77.7040);

-- ============================================================
-- TRIP POINTS (Route coordinates for trips)
-- ============================================================

-- Trip 1: Koramangala to Electronic City (via Hosur Road)
INSERT INTO trip_points (trip_id, lat, lng, speed_kmh, heading, timestamp, seq) VALUES
('b1000001-0000-0000-0000-000000000001', 12.9352, 77.6245, 0, 145, now() - interval '3 hours', 1),
('b1000001-0000-0000-0000-000000000001', 12.9310, 77.6260, 22, 160, now() - interval '2h 57m', 2),
('b1000001-0000-0000-0000-000000000001', 12.9270, 77.6280, 28, 165, now() - interval '2h 54m', 3),
('b1000001-0000-0000-0000-000000000001', 12.9220, 77.6300, 35, 170, now() - interval '2h 51m', 4),
('b1000001-0000-0000-0000-000000000001', 12.9170, 77.6320, 15, 175, now() - interval '2h 48m', 5),
('b1000001-0000-0000-0000-000000000001', 12.9120, 77.6350, 8, 168, now() - interval '2h 45m', 6),
('b1000001-0000-0000-0000-000000000001', 12.9060, 77.6380, 42, 160, now() - interval '2h 42m', 7),
('b1000001-0000-0000-0000-000000000001', 12.8980, 77.6420, 55, 155, now() - interval '2h 38m', 8),
('b1000001-0000-0000-0000-000000000001', 12.8900, 77.6470, 58, 150, now() - interval '2h 34m', 9),
('b1000001-0000-0000-0000-000000000001', 12.8820, 77.6530, 52, 148, now() - interval '2h 30m', 10),
('b1000001-0000-0000-0000-000000000001', 12.8740, 77.6580, 48, 145, now() - interval '2h 27m', 11),
('b1000001-0000-0000-0000-000000000001', 12.8650, 77.6630, 45, 142, now() - interval '2h 24m', 12),
('b1000001-0000-0000-0000-000000000001', 12.8560, 77.6680, 38, 140, now() - interval '2h 21m', 13),
('b1000001-0000-0000-0000-000000000001', 12.8470, 77.6730, 30, 138, now() - interval '2h 18m', 14),
('b1000001-0000-0000-0000-000000000001', 12.8390, 77.6777, 0, 135, now() - interval '2h 15m', 15),

-- Trip 4: MG Road to Hebbal (via Bellary Road)
('b1000001-0000-0000-0000-000000000004', 12.9716, 77.5946, 0, 0, now() - interval '2 hours', 1),
('b1000001-0000-0000-0000-000000000004', 12.9750, 77.5940, 18, 350, now() - interval '1h 57m', 2),
('b1000001-0000-0000-0000-000000000004', 12.9790, 77.5930, 25, 345, now() - interval '1h 54m', 3),
('b1000001-0000-0000-0000-000000000004', 12.9840, 77.5925, 32, 355, now() - interval '1h 51m', 4),
('b1000001-0000-0000-0000-000000000004', 12.9900, 77.5930, 38, 5, now() - interval '1h 48m', 5),
('b1000001-0000-0000-0000-000000000004', 12.9960, 77.5935, 45, 2, now() - interval '1h 45m', 6),
('b1000001-0000-0000-0000-000000000004', 13.0020, 77.5940, 50, 0, now() - interval '1h 42m', 7),
('b1000001-0000-0000-0000-000000000004', 13.0080, 77.5945, 55, 358, now() - interval '1h 38m', 8),
('b1000001-0000-0000-0000-000000000004', 13.0140, 77.5950, 52, 0, now() - interval '1h 34m', 9),
('b1000001-0000-0000-0000-000000000004', 13.0200, 77.5955, 48, 2, now() - interval '1h 30m', 10),
('b1000001-0000-0000-0000-000000000004', 13.0260, 77.5960, 42, 5, now() - interval '1h 27m', 11),
('b1000001-0000-0000-0000-000000000004', 13.0310, 77.5965, 35, 3, now() - interval '1h 24m', 12),
('b1000001-0000-0000-0000-000000000004', 13.0358, 77.5970, 0, 0, now() - interval '1h 20m', 13),

-- Trip 6: Silk Board to Marathahalli (via ORR)
('b1000001-0000-0000-0000-000000000006', 12.9170, 77.6227, 0, 45, now() - interval '1 hour', 1),
('b1000001-0000-0000-0000-000000000006', 12.9190, 77.6280, 12, 60, now() - interval '57m', 2),
('b1000001-0000-0000-0000-000000000006', 12.9210, 77.6350, 8, 75, now() - interval '54m', 3),
('b1000001-0000-0000-0000-000000000006', 12.9240, 77.6420, 18, 65, now() - interval '51m', 4),
('b1000001-0000-0000-0000-000000000006', 12.9280, 77.6500, 25, 55, now() - interval '48m', 5),
('b1000001-0000-0000-0000-000000000006', 12.9320, 77.6570, 35, 50, now() - interval '44m', 6),
('b1000001-0000-0000-0000-000000000006', 12.9360, 77.6640, 42, 48, now() - interval '40m', 7),
('b1000001-0000-0000-0000-000000000006', 12.9400, 77.6710, 38, 50, now() - interval '36m', 8),
('b1000001-0000-0000-0000-000000000006', 12.9430, 77.6780, 30, 55, now() - interval '32m', 9),
('b1000001-0000-0000-0000-000000000006', 12.9470, 77.6850, 22, 52, now() - interval '28m', 10),
('b1000001-0000-0000-0000-000000000006', 12.9510, 77.6920, 15, 48, now() - interval '24m', 11),
('b1000001-0000-0000-0000-000000000006', 12.9565, 77.7010, 0, 45, now() - interval '20m', 12),

-- Trip 10: Indiranagar to Yelahanka
('b1000001-0000-0000-0000-000000000010', 12.9780, 77.6408, 0, 330, now() - interval '1h 30m', 1),
('b1000001-0000-0000-0000-000000000010', 12.9820, 77.6380, 20, 335, now() - interval '1h 27m', 2),
('b1000001-0000-0000-0000-000000000010', 12.9880, 77.6340, 32, 340, now() - interval '1h 24m', 3),
('b1000001-0000-0000-0000-000000000010', 12.9950, 77.6300, 40, 345, now() - interval '1h 20m', 4),
('b1000001-0000-0000-0000-000000000010', 13.0050, 77.6250, 48, 350, now() - interval '1h 16m', 5),
('b1000001-0000-0000-0000-000000000010', 13.0150, 77.6200, 50, 348, now() - interval '1h 12m', 6),
('b1000001-0000-0000-0000-000000000010', 13.0280, 77.6150, 45, 350, now() - interval '1h 8m', 7),
('b1000001-0000-0000-0000-000000000010', 13.0400, 77.6100, 42, 352, now() - interval '1h 4m', 8),
('b1000001-0000-0000-0000-000000000010', 13.0550, 77.6050, 38, 355, now() - interval '1h', 9),
('b1000001-0000-0000-0000-000000000010', 13.0700, 77.6000, 45, 358, now() - interval '55m', 10),
('b1000001-0000-0000-0000-000000000010', 13.0850, 77.5980, 48, 0, now() - interval '50m', 11),
('b1000001-0000-0000-0000-000000000010', 13.1007, 77.5963, 0, 0, now() - interval '45m', 12),

-- Trip 11: HSR to Airport (long trip)
('b1000001-0000-0000-0000-000000000011', 12.9120, 77.6380, 0, 0, now() - interval '4h', 1),
('b1000001-0000-0000-0000-000000000011', 12.9200, 77.6350, 25, 340, now() - interval '3h 55m', 2),
('b1000001-0000-0000-0000-000000000011', 12.9350, 77.6300, 35, 335, now() - interval '3h 50m', 3),
('b1000001-0000-0000-0000-000000000011', 12.9500, 77.6250, 42, 340, now() - interval '3h 44m', 4),
('b1000001-0000-0000-0000-000000000011', 12.9700, 77.6200, 50, 345, now() - interval '3h 38m', 5),
('b1000001-0000-0000-0000-000000000011', 12.9900, 77.6150, 55, 348, now() - interval '3h 32m', 6),
('b1000001-0000-0000-0000-000000000011', 13.0100, 77.6100, 60, 350, now() - interval '3h 26m', 7),
('b1000001-0000-0000-0000-000000000011', 13.0350, 77.6050, 65, 352, now() - interval '3h 18m', 8),
('b1000001-0000-0000-0000-000000000011', 13.0600, 77.6100, 70, 15, now() - interval '3h 10m', 9),
('b1000001-0000-0000-0000-000000000011', 13.0850, 77.6200, 72, 25, now() - interval '3h 2m', 10),
('b1000001-0000-0000-0000-000000000011', 13.1100, 77.6400, 68, 35, now() - interval '2h 54m', 11),
('b1000001-0000-0000-0000-000000000011', 13.1350, 77.6600, 65, 40, now() - interval '2h 46m', 12),
('b1000001-0000-0000-0000-000000000011', 13.1600, 77.6800, 60, 38, now() - interval '2h 38m', 13),
('b1000001-0000-0000-0000-000000000011', 13.1989, 77.7068, 0, 35, now() - interval '2h 30m', 14);

-- ============================================================
-- ALERTS
-- ============================================================

INSERT INTO alerts (id, vehicle_id, type, severity, message, value, threshold, lat, lng, triggered_at, resolved) VALUES
('c1000001-0000-0000-0000-000000000001', 'a1000001-0000-0000-0000-000000000006', 'overspeed', 'warning', 'Vehicle exceeded 60 km/h in residential zone near HSR Layout', 72.0, 60.0, 12.9120, 77.6380, now() - interval '45 minutes', false),
('c1000001-0000-0000-0000-000000000002', 'a1000001-0000-0000-0000-000000000003', 'long_idle', 'info', 'Vehicle idle for over 30 minutes at Silk Board Junction', 42.0, 30.0, 12.9170, 77.6227, now() - interval '1 hour', false),
('c1000001-0000-0000-0000-000000000003', 'a1000001-0000-0000-0000-000000000012', 'low_fuel', 'critical', 'Fuel level critically low at 12% near Bellandur', 12.0, 15.0, 12.9100, 77.6500, now() - interval '20 minutes', false),
('c1000001-0000-0000-0000-000000000004', 'a1000001-0000-0000-0000-000000000004', 'harsh_braking', 'warning', 'Harsh braking event detected near Marathahalli Bridge', NULL, NULL, 12.9565, 77.7010, now() - interval '2 hours', true),
('c1000001-0000-0000-0000-000000000005', 'a1000001-0000-0000-0000-000000000010', 'overspeed', 'warning', 'Speed limit exceeded on ORR near KR Puram', 65.0, 60.0, 12.9850, 77.6900, now() - interval '3 hours', true),
('c1000001-0000-0000-0000-000000000006', 'a1000001-0000-0000-0000-000000000022', 'long_idle', 'warning', 'Vehicle idle for over 2 hours at Whitefield depot', 125.0, 30.0, 12.9900, 77.6600, now() - interval '2 hours', false),
('c1000001-0000-0000-0000-000000000007', 'a1000001-0000-0000-0000-000000000025', 'maintenance_due', 'critical', 'Scheduled maintenance overdue by 500 km', 125000.0, 124500.0, 12.9300, 77.5500, now() - interval '1 day', false),
('c1000001-0000-0000-0000-000000000008', 'a1000001-0000-0000-0000-000000000016', 'overspeed', 'info', 'Brief speed limit exceeded on highway near Whitefield', 58.0, 50.0, 12.9650, 77.7200, now() - interval '4 hours', true),
('c1000001-0000-0000-0000-000000000009', 'a1000001-0000-0000-0000-000000000005', 'low_fuel', 'warning', 'Fuel level at 45% - below recommended refuel threshold for route', 45.0, 50.0, 12.9780, 77.6408, now() - interval '30 minutes', false),
('c1000001-0000-0000-0000-000000000010', 'a1000001-0000-0000-0000-000000000026', 'maintenance_due', 'critical', 'Engine oil change overdue by 2000 km', 158700.0, 156700.0, 12.9150, 77.6350, now() - interval '2 days', false);
