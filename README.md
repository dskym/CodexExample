# Household Ledger Service

This repository contains a basic setup for a household ledger service built with **NextJS** for the front end and **NestJS** for the back end. The environment uses **Docker** and includes MySQL and MongoDB containers.

## Project Structure

- `frontend/` – NextJS application written in TypeScript
- `backend/` – NestJS API written in TypeScript
- `docker-compose.yml` – development stack with MySQL, MongoDB, frontend and backend services

## Development

1. Ensure Docker and Docker Compose are installed.
2. Run `docker-compose up --build` to start all services.
3. Frontend is available at [http://localhost:3000](http://localhost:3000)
4. Backend API runs on [http://localhost:3001](http://localhost:3001)

This project follows the **git flow** branching strategy.
