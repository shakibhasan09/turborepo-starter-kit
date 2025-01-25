# TurboFullStack Starter 🚀

A production-ready monorepo starter kit for modern full-stack applications featuring Hono API, Vite + shadcn UI, Drizzle ORM, BullMQ queues, and Dockerized infrastructure. Powered by Turborepo ⚡

## Features

- 🔥 **Hono.js** API server with TypeScript
- ⚡ **Vite** React frontend with **shadcn/ui** components
- 🐘 **PostgreSQL** database with **Drizzle ORM**
- 📮 **Redis** queue system with **BullMQ**
- 🐳 **Docker Compose** for Postgres & Redis
- 📦 **Dev Container** setup for VS Code
- ⚡ **Turborepo** optimized monorepo architecture

## Getting Started

### Prerequisites

- Node.js v18+
- Docker & Docker Compose
- VS Code Dev Containers (optional but recommended)

### Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/shakibhasan09/turbo-repo-starter-kit.git
cd turbo-repo-starter-kit
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Setup environment variables**

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.local.example apps/web/.env.local
```

4. **Start database & redis**

```bash
docker-compose up -d
```

5. **Run development servers**

```bash
pnpm dev
```

## Tech Stack 🛠️

### API (apps/api)

- [Hono](https://hono.dev/) - Ultrafast edge-ready web framework
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM for PostgreSQL
- [Zod](https://zod.dev/) - Schema validation
- [Redis](https://redis.io/) - Queue persistence

### Web (apps/web)

- [Vite](https://vitejs.dev/) - Next-gen frontend tooling
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [React Query](https://tanstack.com/query/latest) - Data fetching
- [React Router](https://tanstack.com/router/latest) - Tanstack Router
- [Tailwind CSS](https://tailwindcss.com/) - Styling

### Database (packages/postgres-database)

- [PostgreSQL](https://www.postgresql.org/) - Relational database
- [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) - Database migrations

### Queue (packages/queue-worker)

- [BullMQ](https://docs.bullmq.io/) - Redis queue system
- [Redis](https://redis.io/) - In-memory data store

### DevOps

- [Turborepo](https://turbo.build/repo) - Monorepo build system
- [Docker](https://www.docker.com/) - Containerization
- [Dev Containers](https://containers.dev/) - Consistent development environment

## Project Structure 📁

```bash
turbo-repo-starter-kit/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   └── package.json
│   │
│   └── web/
│       ├── src/
│       └── package.json
│
├── packages/
│   ├── postgres-database/
│   │   ├── src/
│   │   └── package.json
│   │
│   └── queue-worker/
│       ├── src/
│       └── package.json
│
├── docker-compose.yml        # Postgres & Redis services
└── package.json              # Turborepo workspace config
```

## Environment Setup 🔒

1. Update database credentials in `apps/api/.env`:

```env
DATABASE_URL="postgres://user:pass@localhost:5432/dbname"
REDIS_URL="redis://localhost:6379"
```

2. Configure frontend in `apps/web/.env`:

```env
VITE_API_URL=http://localhost:3000
```

## Development Workflow 🛠️

| Command            | Description                   |
| ------------------ | ----------------------------- |
| `pnpm dev`         | Start web + api in dev mode   |
| `pnpm build`       | Build all packages            |
| `pnpm db:generate` | Generate Drizzle migrations   |
| `pnpm db:migrate`  | Run database migrations       |
| `pnpm format`      | Format all code with Prettier |
| `pnpm lint`        | Lint all packages             |

## Contributing 🤝

Contributions welcome! Please follow:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License 📄

MIT License - see [LICENSE](LICENSE) for details

---

**Happy coding!** 🚀 Built with ❤️ by Sakib Hasan
