# Estatly — Real Estate Agency Management Platform

![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=flat-square)
![Status](https://img.shields.io/badge/status-Active-brightgreen?style=flat-square)

A modern, full-stack **Real Estate Agency Management Platform** built with React, TypeScript, React Native, and Node.js microservices. Manage clients, properties, deals, commissions, and more with a beautiful, high-end, and intuitive interface designed for premium brokerages.

## 🎯 Core Features

### Agency Portal (Admin Dashboard)
- 📊 **Real-Time Analytics:** Track commission earnings, gross sales volume, and agency KPIs.
- 👥 **Client Management (CRM):** Detailed profiles for buyers, sellers, investors, and tenants.
- 🏠 **Property Listings:** Complete inventory tracking with status splits (Active, Under Contract, Off Market).
- 💰 **Commission Tracking:** Automated revenue analytics, pending payouts, and financial summaries.
- 📝 **Deal Pipeline:** Kanban-style drag-and-drop board for tracking deals from lead to closing.
- 📅 **Viewing Scheduler:** Schedule, manage, and track property showings.
- 💬 **Integrated Messaging:** Real-time chat system with clients and prospective buyers.

### Mobile App (Estatly App)
- 🔐 Secure user authentication
- 🏢 Browse and search premium property listings
- 📅 Request and schedule viewings instantly
- 💬 Direct messaging with real estate agents
- 🔔 Push notifications for property updates and counter-offers

### Backend Microservices Architecture
- **Auth Service:** JWT-based role management and security.
- **Admin Service:** Core business logic for agency operations.
- **Booking/Viewing Service:** Manages appointments and showing schedules.
- **RealEstate Service:** Core property and listing data management.
- **Notification Service:** Email and push notification dispatch.

---

## 📁 Project Structure

```text
RealEstate/
├── RealEstateAdmin-Frontend/ # React agency management dashboard
├── Realestae-App/            # React Native mobile app for clients
├── Realestae-Backend/        # Backend microservices workspace
│   ├── Packages/             # Shared utilities and types
│   └── Services/             # Individual microservices (Auth, Admin, RealEstate, etc.)
├── User-Frontend/            # Public-facing landing page and portal
└── docker-compose.yml        # Docker orchestration setup
```

## 🚀 Quick Start & Setup

### Full Stack with Docker (Recommended for Backend)
```bash
# Start all microservices at once
docker-compose up -d
```

### Running Frontends
```bash
# Agency Portal
cd RealEstateAdmin-Frontend && npm install && npm run dev

# Public Website
cd User-Frontend && npm install && npm run dev

# Mobile App
cd Realestae-App && npm install && npm start
```

## 🔐 Demo Credentials

### Agency Portal (Admin Dashboard)
Navigate to `http://localhost:5173/login` and use:
```text
Email: admin@estatly.com
Password: admin123
```
