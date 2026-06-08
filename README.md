# FleetPulse — Fleet Management Dashboard

A lightweight fleet management dashboard for monitoring vehicles, reviewing routes, and spotting vehicle-health patterns. Built for the Bytebeam Frontend Intern Assignment.

## Live Demo

- **URL**: [Add deployed URL here]
- **Demo Login**: `demo@fleetpulse.com` / `demo123456`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript, Vite |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| Map | Leaflet + OpenStreetMap (react-leaflet) |
| Backend | Supabase (Auth + Postgres) |
| Deployment | Vercel |

## Features

- **Auth**: Email/password login via Supabase Auth with protected routes
- **Fleet Map**: Interactive Leaflet map showing 28 vehicles across Bangalore with color-coded status markers
- **Route Visualization**: Click any trip to see the route drawn on map with speed-gradient coloring (green=slow, red=fast)
- **Vehicle Detail**: Select a vehicle to see driver info, fuel level, today's summary, and trip history
- **Filtering**: Filter by status (Active/Idle/Maintenance/Offline) + text search
- **Alerts**: Real-time alert panel with severity levels (critical/warning/info) and resolve action
- **Stats Bar**: Clickable stat cards that double as quick filters

## Setup Instructions

### 1. Clone and Install

```bash
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema migration:
   - Copy contents of `supabase/migrations/001_initial_schema.sql` and execute
3. Create a demo user:
   - Go to **Authentication > Users > Add User**
   - Email: `demo@fleetpulse.com`, Password: `demo123456`
   - Copy the user's UUID
4. Seed the data:
   - Open `supabase/seed.sql`
   - Replace all instances of `USER_ID_HERE` with the UUID from step 3
   - Run the SQL in the SQL Editor
5. Copy your project URL and anon key from **Settings > API**

### 3. Environment Variables

```bash
cp .env.example .env.local
# Edit .env.local with your Supabase URL and anon key
```

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 and sign in with the demo credentials.

### 5. Deploy to Vercel

```bash
npx vercel
# Set environment variables in Vercel dashboard
```

## Backend Decisions & Tradeoffs

### Data Model

- **4 tables**: `vehicles`, `trips`, `trip_points`, `alerts` — normalized to avoid data duplication while keeping queries fast
- **`trip_points`** stored separately from trips to avoid loading large coordinate arrays when only trip summaries are needed
- **`alerts`** decoupled from trips — alerts can fire independent of a specific trip (e.g., low fuel while idle)
- **RLS policies** scope all data to the authenticated user's fleet, enabling multi-tenant usage without application-level filtering

### Tradeoffs

- **No real-time GPS ingestion**: Positions are seeded and static. Supabase Realtime is wired up so if positions were updated externally, the map would reflect it live.
- **No PostGIS**: For 28 vehicles in one city, simple lat/lng columns are sufficient. At scale (10K+ vehicles), PostGIS spatial queries would be necessary.
- **Trip points in a flat table vs. JSONB array**: Flat table allows indexed queries on individual points (e.g., "find all points over 60 km/h") vs. cheaper storage in a JSON column.

## AI Tools Used

- **Claude** (claude.ai) — used as a coding assistant for specific tasks listed below.
- Chat logs are included in `ai-chat-logs.md`.

### Where AI Helped

1. **Data model brainstorming** — discussed normalized schema options for vehicles, trips, and alerts. I chose the 4-table structure and added RLS policies myself.
2. **Seed data generation** — generated realistic Bangalore GPS coordinates for trip routes (tedious to plot manually). I verified and adjusted waypoints on Google Maps.
3. **Debugging** — identified a React 19 Strict Mode issue with Supabase Realtime double-subscription. I decided to remove realtime for seeded data and use a ref guard instead.
4. **TypeScript interfaces** — generated initial interfaces matching the database schema.

### What I Built Myself

- Product design and information architecture (what an ops user sees first, interaction flows)
- Component structure, state management design (Zustand store), and all React components/hooks
- Map interaction UX (sidebar click → map flyTo, map click → sidebar detail, speed-gradient polylines)
- Visual design decisions (status colors, layout proportions, card hierarchy)
- Data model design (normalization choices, RLS cascading through vehicle ownership)
- SQL migration, Row Level Security policies, and Supabase configuration
- Deployment and integration testing

## Project Structure

```
src/
├── components/
│   ├── auth/        — LoginForm
│   ├── layout/      — AppShell, ProtectedRoute
│   ├── map/         — FleetMap, VehicleMarker, RoutePolyline
│   ├── sidebar/     — Sidebar, VehicleList, VehicleDetail, TripHistory, FilterBar
│   ├── stats/       — StatsBar
│   └── alerts/      — AlertPanel
├── hooks/           — useAuth, useVehicles, useTrips, useTripPoints, useAlerts
├── stores/          — Zustand dashboard store
├── types/           — TypeScript interfaces
├── lib/             — Supabase client, utilities, constants
└── pages/           — LoginPage, DashboardPage
```

## What I'd Improve for Production

- Add WebSocket-based live GPS tracking with position interpolation
- Implement geofencing with configurable alert zones
- Add driver assignment/scheduling features
- Build trip replay with playback controls (play/pause/speed)
- Use PostGIS for spatial queries at scale
- Add role-based access (admin, dispatcher, viewer)
- Implement analytics (fuel efficiency trends, driver behavior scores)
