---
inclusion: always
---

# Product Overview

DeerFlow is an open-source super agent harness that orchestrates sub-agents, memory, and sandboxes to execute complex tasks. Built on LangGraph and LangChain, it provides:

- Extensible skills system for domain-specific workflows
- Sub-agent delegation for parallel task execution
- Sandboxed execution environment with isolated filesystem
- Long-term memory across conversations
- MCP (Model Context Protocol) integration for external tools
- Multi-modal support (vision, thinking modes)

The system consists of three main components:
- Backend (Python): LangGraph agent runtime + FastAPI Gateway
- Frontend (Next.js): React-based web interface
- Nginx: Unified reverse proxy on port 2026

DeerFlow is model-agnostic and works with any OpenAI-compatible API.
