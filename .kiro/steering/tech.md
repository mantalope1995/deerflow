---
inclusion: always
---

# Tech Stack

## Backend
- Python 3.12+
- LangGraph 1.0.6+ (agent orchestration)
- LangChain 1.2.3+ (LLM abstractions)
- FastAPI 0.115.0+ (Gateway API)
- uvicorn (ASGI server)
- uv (package manager)
- ruff (linting/formatting)

## Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript 5.8+
- Tailwind CSS 4
- pnpm 10.26.2+ (package manager)
- Shadcn UI, MagicUI components

## Infrastructure
- nginx (reverse proxy)
- Docker (optional sandbox isolation)
- LangGraph SDK (client communication)

## Code Style

### Python
- Line length: 240 characters
- Formatter: ruff
- Quotes: double quotes
- Indentation: 4 spaces
- Type hints required

### TypeScript
- ESLint + Prettier
- Strict TypeScript configuration

## Common Commands

### Full Stack
```bash
make config          # Generate config files
make check           # Verify dependencies
make install         # Install all dependencies
make dev             # Start all services (localhost:2026)
make stop            # Stop all services
```

### Backend Only
```bash
cd backend
make install         # Install Python dependencies
make dev             # Start LangGraph server (port 2024)
make gateway         # Start Gateway API (port 8001)
make test            # Run tests
make lint            # Run linter
make format          # Format code
```

### Frontend Only
```bash
cd frontend
pnpm install         # Install dependencies
pnpm dev             # Start dev server (port 3000)
pnpm build           # Build for production
pnpm typecheck       # Type checking
pnpm lint            # Run linter
```

### Docker Development
```bash
make docker-init     # Build images (first time)
make docker-start    # Start Docker services
make docker-stop     # Stop Docker services
make docker-logs     # View logs
```
