# Sellora — CRM/ERP for Instagram Shops

<p align="center">
  <img src="./assets/sellora-logo.png" alt="Sellora Logo" width="160" />
</p>

<p align="center">
  <strong>From Instagram Direct to order, shipment, profit and repeat sales — in one clean SaaS workspace.</strong>
</p>

<p align="center">
  <a href="#product-overview">Overview</a> ·
  <a href="#key-features">Features</a> ·
  <a href="#architecture">Architecture</a> ·
  <a href="#roadmap">Roadmap</a> ·
  <a href="#status">Status</a>
</p>

<p align="center">
  <img alt="Product" src="https://img.shields.io/badge/Product-CRM%2FERP-blue" />
  <img alt="Market" src="https://img.shields.io/badge/Market-Instagram%20Shops-purple" />
  <img alt="Backend" src="https://img.shields.io/badge/Backend-FastAPI-green" />
  <img alt="Frontend" src="https://img.shields.io/badge/Frontend-Next.js-black" />
  <img alt="Database" src="https://img.shields.io/badge/Database-PostgreSQL-blue" />
  <img alt="Status" src="https://img.shields.io/badge/Status-MVP%20in%20progress-orange" />
</p>

---

## Product Overview

**Sellora** is a SaaS CRM/ERP platform designed for Instagram-based online stores.

Most small Instagram shops manage their business through a mix of Direct messages, spreadsheets, screenshots, payment notes, delivery apps and advertising dashboards. Sellora brings this entire workflow into one modern workspace.

```text
Instagram Direct
      ↓
Lead
      ↓
Customer
      ↓
Order
      ↓
Payment
      ↓
Shipment
      ↓
Profit
      ↓
Repeat Sale
```

The goal is simple: help store owners understand what is happening in their business without living inside five different tools.

---

## Why Sellora Exists

Instagram shops usually do not fail because they lack products.

They struggle because business data is scattered:

* leads are hidden in Direct;
* orders live in chats or spreadsheets;
* stock is updated manually;
* ad performance is hard to connect with revenue;
* profit is unclear;
* delivery statuses are checked outside the CRM;
* repeat customer opportunities are missed.

Sellora turns this chaos into a clear operating system for small e-commerce teams.

---

## Key Features

### Lead Management

Manage potential customers from Instagram, Facebook, Telegram or manual entry.

* Lead statuses
* Source tracking
* Manager assignment
* Lead-to-customer conversion
* Lead-to-order workflow
* Future Instagram Direct parsing readiness

---

### Orders & Profit Engine

Create and manage orders with real business logic.

* Order statuses
* Payment statuses
* Order items
* Revenue calculation
* Product cost tracking
* Shipping cost
* Cash on delivery fee
* Net profit calculation
* Order status history

---

### Customers

Build a usable customer base instead of losing people inside old messages.

* Customer profiles
* Phone and Instagram handle
* Order history
* Notes
* Tags
* Repeat customer tracking
* Address readiness for delivery integrations

---

### Products & Inventory

Control products, variants and stock from one place.

* Products
* Product variants
* SKU support
* Categories
* Stock quantity
* Reserved quantity
* Inventory transactions
* Low stock alerts
* Import-ready structure

---

### Advertising & ROAS Analytics

Connect advertising spend with real store results.

* Campaigns
* Daily metrics
* Spend
* Leads
* Orders
* Revenue
* Net profit
* ROAS
* CPA
* CPL
* Decision labels for campaign quality

For Instagram stores, this is one of the core modules: not just “how much we spent”, but whether the ads actually created profit.

---

### Finance & Analytics

See the real business picture.

* Revenue
* Expenses
* Net profit
* Margin
* Average order value
* Product performance
* Sales trends
* Advertising efficiency
* Dashboard KPI cards
* Period-based analytics

---

### Shipments

A logistics layer prepared for Nova Poshta integration.

* Shipment records
* Tracking number support
* Shipment statuses
* Order-to-shipment relation
* One active shipment per order for MVP
* Future TTN creation and sync

---

### Import Center

Move from spreadsheets to Sellora without starting from zero.

* Excel import
* Mapping columns
* Dry-run validation
* Duplicate detection
* Row-level issues
* Historical order import
* Product import readiness
* Advertising metrics import

---

## Architecture

Sellora is built as a modern SaaS product with clean separation of responsibilities.

### Backend

* **Python 3.12**
* **FastAPI**
* **SQLAlchemy 2.0**
* **Alembic**
* **PostgreSQL**
* **Pydantic v2**
* **JWT authentication**
* **RBAC**
* **Pytest**

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **TanStack Query**
* **Recharts**
* **Responsive SaaS UI**
* **Ukrainian-first localization**

### Infrastructure

* **Vercel** for frontend
* **Render** for backend
* **Supabase PostgreSQL** for database
* **Docker Compose** for local development

---

## Core Architecture Principles

Sellora is not just a set of screens. It follows product-grade backend principles from day one.

* Clean Architecture
* Modular monolith
* Multi-tenant workspace isolation
* Workspace-scoped queries
* Repository layer for database access
* Service layer for business logic
* API layer without business logic
* Soft delete
* Audit logging
* RBAC permissions
* Future integration readiness

```text
API Layer
   ↓
Service Layer
   ↓
Repository Layer
   ↓
Database Layer
```

---

## Multi-Tenant SaaS Model

Sellora is designed for multiple shops from the beginning.

Each business entity belongs to a workspace:

```text
workspace_id
```

Users can access only the data of their workspace.

Roles:

| Role    | Access                              |
| ------- | ----------------------------------- |
| OWNER   | Full access                         |
| MANAGER | Leads, orders, customers, shipments |
| ANALYST | Read-only analytics and reports     |

---

## MVP Modules

| Module           | Status | Purpose                              |
| ---------------- | -----: | ------------------------------------ |
| Auth & Workspace |      ✅ | Secure login and tenant separation   |
| Leads            |      ✅ | Manage potential customers           |
| Customers        |      ✅ | Store customer data and history      |
| Products         |      ✅ | Product catalog                      |
| Inventory        |      ✅ | Stock and reservations               |
| Orders           |      ✅ | Sales workflow and profit            |
| Analytics        |      ✅ | Business performance insights        |
| Import Center    |      ✅ | Move data from spreadsheets          |
| Advertising      |      ✅ | Manual campaign metrics and ROAS     |
| Shipments        |      ✅ | Delivery workflow foundation         |
| Finance          |     🚧 | Profit accuracy and expense tracking |
| Meta API         |     🧭 | Future controlled integration        |
| AI Features      |     🧭 | Future Direct parsing and insights   |

---

## Dashboard Vision

The dashboard should answer the most important questions in under 30 seconds:

1. How much did we sell?
2. How much profit did we make?
3. How many orders came in?
4. Which campaign performs best?
5. Which product needs attention?
6. What should the owner do next?

```text
Revenue · Profit · Orders · ROAS · CPA · Low Stock · Alerts
```

---

## Future AI Layer

Sellora is being prepared for AI-assisted workflows.

Potential AI features:

* parse Instagram Direct messages into lead drafts;
* detect order intent from messages;
* suggest missing customer data;
* highlight risky campaigns;
* generate business insights;
* summarize daily store performance;
* suggest repeat-sale opportunities.

The important rule: AI should assist the manager, not silently create business-critical records without review.

```text
Direct Message
      ↓
AI Parser
      ↓
Lead Draft
      ↓
Manager Review
      ↓
Confirmed Lead / Order
```

---

## Integration Readiness

Sellora is being prepared for safe integrations without rushing into risky live automation.

Planned integrations:

* Meta Ads API
* Instagram Messaging API
* Nova Poshta API
* AI parsing layer
* future payment and notification services

Security principles:

* no raw token exposure;
* encrypted integration credentials;
* audit logs;
* dry-run sync before real writes;
* preview before import;
* workspace-level isolation.

---

## Roadmap

### Completed / In Progress

* Product concept
* Backend architecture
* Frontend architecture
* Workspace model
* Auth and RBAC
* Leads and customers
* Products and inventory
* Orders and profit engine
* Analytics foundation
* Import Center
* Advertising module
* Shipment foundation
* Finance stabilization
* Meta API readiness planning

### Next Milestones

| Stage     | Focus                                               |
| --------- | --------------------------------------------------- |
| Sprint 5C | Finance QA stabilization, mobile UX, Meta readiness |
| Sprint 6A | Meta Developer App and secure OAuth design          |
| Sprint 6B | Controlled Meta Ads preview and dry-run sync        |
| Sprint 7  | Mobile UX / PWA polish                              |
| Sprint 8  | SaaS readiness and onboarding                       |
| Sprint 9  | AI features                                         |
| Sprint 10 | Release Candidate                                   |

---

## What Makes Sellora Different

Sellora is not a generic CRM adapted to online stores.

It is designed around the real workflow of Instagram commerce:

```text
Message → Lead → Order → Delivery → Profit → Repeat Sale
```

That means the product focuses on:

* speed of order creation;
* clear lead handling;
* real profit visibility;
* ad efficiency;
* inventory awareness;
* simple mobile-first workflows;
* Ukrainian-first user experience.

---

## Project Status

Sellora is currently in active MVP development.

The product already has a working architecture foundation and staging deployment flow. The next focus is stabilization, UX polish, finance accuracy, integration readiness and preparation for early pilot users.

---

## Screenshots

> Add product screenshots here when the staging UI is ready for public preview.

```md
![Sellora Dashboard](./assets/screenshots/dashboard.png)
![Sellora Orders](./assets/screenshots/orders.png)
![Sellora Advertising](./assets/screenshots/advertising.png)
```

---

## Local Development

```bash
git clone https://github.com/eNgine9r/sellora.git
cd sellora
```

Backend and frontend setup may differ depending on the current sprint branch.

Recommended local workflow:

```bash
# Backend
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest

# Frontend
cd ../frontend
npm install
npm run typecheck
npm run build
```

---

## Author

Built by **eNgine9r** as a real SaaS product for Instagram-based commerce.

The project started from a practical business need: manage an Instagram shop more clearly, faster and with better profit visibility.

---

## Short Pitch

> **Sellora is a Ukrainian-first CRM/ERP platform for Instagram shops that connects leads, orders, products, advertising, shipments, finance and analytics in one modern SaaS workspace.**

---

<p align="center">
  <strong>Sellora — from Direct to profit.</strong>
</p>
