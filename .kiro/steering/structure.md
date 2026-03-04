---
inclusion: always
---

# Project Structure

## Root Layout
```
deer-flow/
├── backend/              # Python backend
├── frontend/             # Next.js frontend
├── skills/               # Agent skills
│   ├── public/          # Built-in skills
│   └── custom/          # User-installed skills
├── docker/              # Docker configs
├── config.yaml          # Main configuration
├── extensions_config.json  # MCP servers & skills state
└── Makefile             # Development commands
```

## Backend Structure
```
backend/
├── src/
│   ├── agents/          # Agent system
│   │   ├── lead_agent/  # Main agent factory
│   │   ├── middlewares/ # 9 middleware components
│   │   └── memory/      # Memory extraction
│   ├── gateway/         # FastAPI Gateway API
│   │   ├── app.py      # Application setup
│   │   └── routers/    # API route modules
│   ├── sandbox/         # Sandbox execution
│   │   ├── local/      # Local filesystem provider
│   │   └── tools.py    # bash, ls, read/write tools
│   ├── subagents/       # Subagent delegation
│   ├── tools/           # Built-in tools
│   ├── mcp/             # MCP protocol integration
│   ├── models/          # Model factory
│   ├── skills/          # Skill discovery & loading
│   ├── config/          # Configuration system
│   └── community/       # Community tools & providers
├── docs/                # Documentation
├── tests/               # Test suite
├── langgraph.json       # LangGraph server config
└── pyproject.toml       # Python dependencies
```

## Frontend Structure
```
frontend/
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── api/        # API routes
│   │   └── workspace/  # Main workspace pages
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── workspace/  # Workspace-specific
│   │   ├── landing/    # Landing page
│   │   └── ai-elements/ # AI-related UI
│   ├── core/            # Business logic
│   │   ├── api/        # API client
│   │   ├── threads/    # Thread management
│   │   ├── models/     # Data models
│   │   └── skills/     # Skills system
│   └── styles/          # Global styles
└── package.json
```

## Key Patterns

### Configuration
- `config.yaml`: Models, tools, sandbox, memory settings
- `extensions_config.json`: MCP servers and skills state
- Environment variables: Use `$VAR_NAME` syntax in configs

### Request Routing (via nginx on port 2026)
- `/api/langgraph/*` → LangGraph Server (2024)
- `/api/*` → Gateway API (8001)
- `/*` → Frontend (3000)

### Thread Isolation
Each thread has isolated directories:
- `backend/.deer-flow/threads/{thread_id}/user-data/workspace/`
- `backend/.deer-flow/threads/{thread_id}/user-data/uploads/`
- `backend/.deer-flow/threads/{thread_id}/user-data/outputs/`

### Virtual Paths (in sandbox)
- `/mnt/user-data/workspace` → thread workspace
- `/mnt/user-data/uploads` → uploaded files
- `/mnt/user-data/outputs` → generated artifacts
- `/mnt/skills` → skills directory

### Skills Format
Skills are markdown files with frontmatter:
```
skills/
├── public/skill-name/SKILL.md
└── custom/skill-name/SKILL.md
```

### Middleware Chain (execution order)
1. ThreadDataMiddleware - Initialize directories
2. UploadsMiddleware - Process uploaded files
3. SandboxMiddleware - Acquire sandbox
4. SummarizationMiddleware - Context reduction
5. TodoListMiddleware - Task tracking
6. TitleMiddleware - Auto-generate titles
7. MemoryMiddleware - Queue memory updates
8. ViewImageMiddleware - Vision support
9. ClarificationMiddleware - Handle clarifications
