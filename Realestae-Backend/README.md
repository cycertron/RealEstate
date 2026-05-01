# Estatly Backend Services

The core infrastructure for the Estatly Real Estate platform, built using a modern microservices architecture with Node.js and TypeScript.

## 🏗 Architecture

The backend is divided into specialized microservices to ensure scalability and maintainability:

- **Auth Service (`/Services/Auth`)**: Handles user registration, login, JWT token generation, and role-based access control (Admin, Agent, Client).
- **Admin Service (`/Services/admin`)**: Manages agency-wide data, commission tracking, and overall system configuration.
- **RealEstate Service (`/Services/RealEstate`)**: Manages the core property inventory, details, media, and listing statuses.
- **Booking Service (`/Services/booking`)**: Handles property viewing schedules, appointments, and calendar syncing.
- **Notification Service (`/Services/notifications`)**: Manages email dispatches and push notifications.

## 🚀 Running the Services

### Using Docker Compose (Recommended)

From the project root directory:
```bash
docker-compose up -d
```

### Running Locally (Development)

Navigate into any specific service directory and run:
```bash
cd Services/<service-name>
npm install
npm run dev
```

Each service runs on its own dedicated port (e.g., Auth on 3000, Admin on 4001, Booking on 5002, RealEstate on 5003).
