# Deployment Command Reference

Quick commands for deploying the Ghumgham platform with Docker Compose.

## 📋 Prerequisites

- Docker & Docker Compose installed
- All `.env` files configured in respective directories
- Ports 3000, 3001, 4001, 5002, 6000, 6379, 27017 available

## 🚀 Quick Start

### 1. Setup Environment Variables

```bash
# Copy and configure root .env
cp .env.example .env
# Edit .env with production values
nano .env

# Setup each service
cp Realestae-Backend/Services/Auth/.env.example Realestae-Backend/Services/Auth/.env
cp Realestae-Backend/Services/admin/.env.example Realestae-Backend/Services/admin/.env
cp Realestae-Backend/Services/booking/.env.example Realestae-Backend/Services/booking/.env
cp Realestae-Backend/Services/RealEstate/.env.example Realestae-Backend/Services/RealEstate/.env
cp Realestae-Backend/Services/notifications/.env.example Realestae-Backend/Services/notifications/.env
cp Realestae-Backend/Packages/.env.example Realestae-Backend/Packages/.env
cp RealEstateAdmin-Frontend/.env.example RealEstateAdmin-Frontend/.env
cp User-Frontend/.env.example User-Frontend/.env
cp Realestae-App/.env.example Realestae-App/.env

# Edit each .env file with production values
```

### 2. Start Services

```bash
# Start all services with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f auth
docker-compose logs -f admin
docker-compose logs -f bookings
docker-compose logs -f hotel
docker-compose logs -f notifications
docker-compose logs -f db
docker-compose logs -f redis
```

### 3. Check Status

```bash
# List running containers
docker-compose ps

# Check service health
docker-compose ps --format "table {{.Name}}\t{{.Status}}"
```

## 🛑 Stop Services

```bash
# Stop all services (keeps data)
docker-compose stop

# Stop and remove containers
docker-compose down

# Stop and remove everything (including volumes - data loss!)
docker-compose down -v
```

## 🔄 Restart Services

```bash
# Restart all services
docker-compose restart

# Restart specific service
docker-compose restart auth
docker-compose restart admin
```

## 🔨 Build Services

```bash
# Build all images
docker-compose build

# Build specific service
docker-compose build auth
docker-compose build admin

# Build with no cache (force rebuild)
docker-compose build --no-cache
```

## 💾 Database Management

```bash
# Access MongoDB container
docker-compose exec db mongosh

# Access inside MongoDB shell
use realestae_auth
db.users.find()

# Export database
docker-compose exec db mongodump --archive=/data/dump.archive

# Restore database
docker-compose exec db mongorestore --archive=/data/dump.archive
```

## 🔴 Troubleshooting

### Check if ports are in use

```bash
# Check port usage
lsof -i :3000
lsof -i :3001
lsof -i :4001
lsof -i :5002
lsof -i :6000
lsof -i :27017
lsof -i :6379

# Kill process on specific port (if needed)
kill -9 <PID>
```

### View container logs

```bash
# Last 100 lines
docker-compose logs --tail=100 auth

# Follow logs in real-time
docker-compose logs -f auth

# Logs from last hour
docker-compose logs --since 1h auth
```

### Access container shell

```bash
# Access auth service container
docker-compose exec auth sh

# Access MongoDB
docker-compose exec db mongosh

# Access Redis
docker-compose exec redis redis-cli -c
```

### Clean up

```bash
# Remove unused containers
docker container prune

# Remove unused images
docker image prune

# Remove all unused data
docker system prune -a

# Remove all volumes (data loss!)
docker volume prune
```

## 📊 Scaling Services (Advanced)

```bash
# Scale specific service to 3 instances
docker-compose up -d --scale auth=3

# Scale back down
docker-compose up -d --scale auth=1
```

## 🔒 Security Checks

```bash
# Verify .env files are not in git
git status

# Check for secrets in git history
git log -p -S "JWT_SECRET" -- .env

# View docker-compose without secrets
cat docker-compose.yml | grep -v env_file
```

## 📈 Production Checklist

- [ ] All `.env` files configured with production values
- [ ] All `.env` files added to `.gitignore`
- [ ] Database backups configured
- [ ] Monitoring and logging set up
- [ ] SSL/TLS certificates configured
- [ ] Rate limiting enabled
- [ ] Database indices created
- [ ] Redis persistence enabled
- [ ] Volume persistence configured
- [ ] Firewall rules configured
- [ ] Load balancer configured (if needed)
- [ ] CDN configured for static files (if needed)

## 🆘 Getting Help

- Check `ENV_SETUP_GUIDE.md` for environment variable help
- Check `SECURITY.md` for security guidelines
- Check `CONTRIBUTING.md` for development guidelines
- Check service logs: `docker-compose logs -f <service-name>`
- Check Docker documentation: https://docs.docker.com/

## 📚 Useful Links

- Docker Official Docs: https://docs.docker.com/
- Docker Compose Docs: https://docs.docker.com/compose/
- MongoDB Docker: https://hub.docker.com/_/mongo
- Redis Docker: https://hub.docker.com/_/redis
- Node.js Docker: https://hub.docker.com/_/node

---

Last Updated: April 2026
