# Enterprise Full-Stack E-Commerce Platform Monorepo

A production-ready, highly modular E-Commerce platform built with a monorepo architecture, multi-warehouse stock reservation engine, automated order state machine, and interactive operations control panel.

---

## Table of Contents
- [Platform Architecture](#platform-architecture)
- [Platform Features](#platform-features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Build](#build)
- [Run](#run)
- [Usage](#usage)
- [Testing](#testing)
- [Docker Deployment](#docker-deployment)

---

## Platform Architecture

```
ecommerce-platform/
├── apps/
│   ├── api/             # High scale REST & GraphQL backend services
│   ├── storefront/      # Next.js / Tailwind CSS customer storefront
│   └── admin-dashboard/ # React executive operations & telemetry panel
├── packages/
│   ├── database/        # PostgreSQL schema DDL & migration scripts
│   ├── types/           # Shared TypeScript interfaces & DTO definitions
│   ├── validators/      # Zod request validation schemas
│   └── ui-components/   # Reusable UI design system component library
├── tests/               # 5 Automated core domain unit & integration test suites
├── scripts/             # Infrastructure & LOC benchmark scripts
├── serve_app.py         # Reusable multithreaded web application server daemon
├── Dockerfile           # Multi-stage production container build manifest
├── package.json         # Workspace package manifest
└── package-lock.json    # Dependency lockfile
```

---

## Platform Features
- **Authentication & RBAC**: OAuth2, JWT Refresh Tokens, Role-Based Access Control matrix (`ADMIN`, `SELLER`, `CUSTOMER`, `WAREHOUSE_MANAGER`).
- **Product Catalog Engine**: Multi-category hierarchies, dynamic SKU variants, stock reservation locks across 8 warehouse locations.
- **Shopping Cart & Pricing Engine**: Real-time tax calculator, coupon engine, dynamic tier discounts.
- **Order Management System (OMS)**: State machine pipeline (`PENDING` -> `PAID` -> `PROCESSING` -> `SHIPPED` -> `COMPLETED`).
- **Payment Adapters**: Stripe, PayPal, Mock Gateway integration with webhook signature verification.
- **Analytics & Admin Panel**: Real-time KPIs, inventory turnover, customer cohorts, revenue charts.
- **Test Automation**: 5 comprehensive automated test suites covering core domain modules.

---

## Dependencies

Before installing and running the application, ensure the following dependencies are installed on your system:

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **Python**: `3.10` or higher
- **Docker**: `v24.0.0` or higher (optional for containerized setup)

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/kondetivasanthi2002/ecommerce-monorepo-core.git
cd ecommerce-monorepo-core
```

### 2. Set Up Python Virtual Environment
```bash
python -m venv venv
# On Windows PowerShell:
.\venv\Scripts\Activate.ps1
# On Linux/macOS:
source venv/bin/activate
```

### 3. Install Package Dependencies
```bash
npm install
```

---

## Build

To compile and build all workspace applications and packages:

### Build Workspace Packages & Monorepo Apps
```bash
npm run build
```

### Build Docker Container Image
```bash
docker build -t ecommerce-monorepo-core:latest .
```

---

## Run

You can run the interactive unified platform server locally:

### Start Interactive Web Application
```bash
python serve_app.py
```

Once started, access the application in your web browser:
- **Customer Storefront**: [http://127.0.0.1:5050](http://127.0.0.1:5050)
- **Admin Control Panel**: [http://127.0.0.1:5050/admin](http://127.0.0.1:5050/admin)

### Start Development Server
```bash
npm run dev
```

### Run Platform Service Simulation
```bash
python run_app.py
```

---

## Usage

1. **Customer Storefront**:
   - Browse products across categories (**Laptops**, **Audio**, **Wearables**, **Cameras**).
   - Use live search to filter SKUs.
   - Click **Add** to add items to your cart.
   - Open the **Shopping Cart Drawer** to adjust quantities and calculate tax.
   - Click feature pills (**High Scale API**, **RBAC Security**, **100% Test Pass**, **Atomic Commits**) to view interactive spec popups.

2. **Admin Operations Panel**:
   - Navigate to `/admin`.
   - Switch between **Executive Dashboard**, **Catalog & Inventory Control**, **Fulfillment State Machine Board**, and **RBAC Permissions Matrix**.
   - Trigger **Refresh Metrics** for real-time telemetry updates.

---

## Testing

Run all 5 core automated test suites:

```bash
python tests/run_tests.py
```

Or execute unit tests via node runner:

```bash
npm run test
```

---

## Docker Deployment

To launch the platform via Docker container:

```bash
docker build -t ecommerce-platform:v1.0.0 .
docker run -d -p 5050:5050 --name ecommerce-app ecommerce-platform:v1.0.0
```
