# Backend Architecture — LLM IoT Thin Edge

> Status: 🚧 Active Development

---

# Overview

The backend evolved from a simple REST server into a modular AI orchestration platform.

Originally the backend only validated:

- HTTP communication
- REST APIs
- JSON payloads

Now the backend also handles:

- Cloud LLM orchestration
- AI abstraction
- provider isolation
- future multimodal services
- orchestration layers
- API security

This architecture follows the concept of:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Learning Philosophy

This project intentionally evolves incrementally.

Every subsystem is validated independently before integration.

The backend evolution followed this order:

1. Basic HTTP server
2. REST API validation
3. OpenAI integration
4. Backend orchestration
5. Future ESP32 + LLM integration

This approach simplifies:

- debugging
- architecture understanding
- troubleshooting
- subsystem isolation

---

# Current Backend Architecture

```text
ESP32
   ↓ HTTP
Backend API
   ↓
LLM / STT / TTS
   ↓
Cloud AI Services
```

---

# Backend Structure

```text
backend/
├── README.md
├── README.pt-BR.md
│
├── api/
│   ├── server.js
│   ├── test_llm.js
│   ├── snapshots/
│   │   ├── step_01_basic_http_server.js
│   │   └── step_02_llm_rest_api.js
│   │
│   └── .env
│
├── llm/
│   └── openai.js
│
├── stt/
└── tts/
```

---

# Backend Responsibilities

| Layer | Responsibility |
|---|---|
| api | REST communication |
| llm | AI orchestration |
| stt | future speech-to-text |
| tts | future text-to-speech |

---

# Snapshot Evolution

| Step | File | Description |
|---|---|---|
| 01 | step_01_basic_http_server.js | Basic REST backend |
| 02 | step_02_llm_rest_api.js | REST + LLM integration |
| 03 | server.js | Current operational backend |

---

# Step-by-Step Evolution

## Step 01 — Basic HTTP Backend

Initial backend responsibilities:

- receive HTTP requests
- process JSON
- validate REST architecture

Endpoint:

```text
POST /ping
```

Validated:

- Express
- JSON communication
- REST APIs
- backend communication

---

## Step 02 — OpenAI Integration

The backend evolved into:

```text
REST API + AI Orchestration
```

New concepts introduced:

- OpenAI SDK
- async/await
- backend abstraction layer
- provider orchestration
- dotenv
- API key security

---

# Why Provider Abstraction Matters

The ESP32 firmware does NOT know:

- OpenAI
- Ollama
- Gemini
- Claude

The ESP32 only communicates with:

```text
Backend API
```

This allows provider replacement without firmware changes.

---

# Thin Edge Philosophy

The ESP32 remains lightweight.

The backend centralizes:

- AI processing
- provider communication
- orchestration
- multimodal services
- security

Benefits:

- lower hardware cost
- easier firmware maintenance
- scalable architecture
- centralized AI evolution

---

# Security Architecture

API keys NEVER remain inside:

- firmware
- ESP32
- GitHub repositories

Correct architecture:

```text
ESP32 → Backend → OpenAI API
```

Wrong architecture:

```text
ESP32 → OpenAI API
```

---

# Environment Variables

Sensitive credentials remain inside:

```text
.env
```

Example:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Important Git Rules

`.gitignore` must contain:

```gitignore
.env
node_modules/
```

The `.env` file must NEVER be uploaded to GitHub.

---

# Backend AI Flow

Current validated flow:

```text
Node.js
    ↓
askLLM()
    ↓
OpenAI API
    ↓
Response
```

Future flow:

```text
ESP32
    ↓ HTTP
Backend API
    ↓
askLLM()
    ↓
OpenAI API
    ↓
Response
```

---

# Real Problems Encountered

## Problem 01 — Wrong Node.js Directory

Error:

```text
Cannot find module 'test_llm.js'
```

Cause:

Execution from wrong directory.

Solution:

```bash
cd backend/api
```

---

## Problem 02 — dotenv Not Found

Error:

```text
Cannot find module 'dotenv'
```

Cause:

Dependencies installed in wrong backend layer.

---

# Architectural Improvement

The backend evolved from:

```text
backend/api/node_modules
```

to:

```text
backend/node_modules
```

This improved:

- modularity
- scalability
- dependency organization

---

# First Successful LLM Response

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Validated:

- OpenAI API
- dotenv
- backend orchestration
- provider abstraction
- cloud AI integration

---

# Concepts Introduced

| Concept | Description |
|---|---|
| LLM | Large Language Model |
| Backend Proxy | AI abstraction layer |
| dotenv | Environment variables |
| Thin Edge | Lightweight edge device |
| Cloud AI | AI outside ESP32 |
| REST API | HTTP orchestration |

---

# Current Status

| Subsystem | Status |
|---|---|
| API | ✅ Working |
| OpenAI Integration | ✅ Working |
| Backend LLM | ✅ Working |
| STT | 🚧 Planned |
| TTS | 🚧 Planned |

---

# Future Goals

- voice pipeline
- multimodal AI
- camera integration
- local LLM support
- hybrid edge AI

---

# Final Vision

The backend is evolving into:

- AI orchestration platform
- multimodal gateway
- cloud abstraction layer
- embedded intelligence backend
