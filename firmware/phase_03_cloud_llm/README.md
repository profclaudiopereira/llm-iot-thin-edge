# Phase 03 — Cloud LLM Integration

> Status: 🚧 Backend + LLM Validated

---

# Overview

Phase 03 introduces the first real Artificial Intelligence integration of the project.

The project architecture evolved from:

```text
ESP32 → Backend
```

to:

```text
ESP32 → Backend → LLM → Response
```

This phase validates the concept of:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Learning Philosophy

This project intentionally evolves incrementally.

Each subsystem is validated independently before integration.

This avoids:

- hidden problems
- difficult debugging
- architecture confusion

The current development order is:

1. Wi‑Fi foundation
2. HTTP communication
3. Backend API
4. LLM orchestration
5. ESP32 + LLM integration

---

# Current Architecture

```text
[ESP32-S3]
      ↓ HTTP JSON
[Backend API]
      ↓
[LLM Orchestration]
      ↓ HTTPS
[OpenAI API]
      ↓
[LLM Response]
```

---

# Hardware Used

- M5AtomS3 Lite
- Windows PC
- Local Wi‑Fi Router

---

# Backend Architecture

```text
backend/
├── README.md
├── README.pt-BR.md
│
├── api/
│   ├── server.js
│   ├── test_llm.js
│   └── snapshots/
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

# Step-by-Step Development

## Step 01 — Create OpenAI API Key

The OpenAI API key was created separately from ChatGPT web subscriptions.

Important learning:

```text
ChatGPT plans and OpenAI API billing are different services.
```

---

## Step 02 — Configure Billing

A small prepaid balance was configured.

Recommended:

- 5 USD
- 10 USD

Enough for educational projects.

---

## Step 03 — Install Dependencies

Inside:

```text
backend/
```

Run:

```bash
npm install openai dotenv express
```

---

## Step 04 — Create .env

Inside:

```text
backend/api/.env
```

Content:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Security Rules

The `.env` file must NEVER be uploaded to GitHub.

Add to `.gitignore`:

```gitignore
.env
```

The API key must NEVER remain inside:

- firmware
- ESP32
- GitHub
- screenshots

---

## Step 05 — Create openai.js

File:

```text
backend/llm/openai.js
```

Responsibilities:

- connect to OpenAI
- send prompts
- receive responses
- isolate provider logic

---

# Why Provider Abstraction Matters

The ESP32 does NOT know which AI provider exists.

Today:

- OpenAI

Future:

- Ollama
- Gemini
- Claude
- Local LLMs

without changing firmware.

---

## Step 06 — Create test_llm.js

File:

```text
backend/api/test_llm.js
```

Purpose:

Validate backend LLM communication independently before ESP32 integration.

---

# REST API Evolution

## Initial Backend

```text
POST /ping
```

Validated:

- REST
- JSON
- Express
- HTTP communication

---

## Current Backend

```text
POST /ask
```

Validated:

- OpenAI integration
- async orchestration
- AI responses
- backend abstraction layer

---

# Troubleshooting Real Problems

## Problem 01 — Wrong Directory

Error:

```text
Cannot find module 'test_llm.js'
```

Cause:

Execution from repository root.

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

Architectural improvement:

```text
backend/api/node_modules
```

became:

```text
backend/node_modules
```

This improved modularity and scalability.

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
- cloud AI integration

---

# Concepts Introduced

| Concept | Description |
|---|---|
| LLM | Large Language Model |
| Thin Edge | Lightweight embedded device |
| Backend Proxy | AI abstraction layer |
| dotenv | Environment variables |
| Cloud AI | Intelligence outside ESP32 |
| REST API | HTTP orchestration |

---

# Current Project Status

| Phase | Status |
|---|---|
| Phase 01 — Wi‑Fi Foundation | ✅ Complete |
| Phase 02 — HTTP Communication | ✅ Complete |
| Phase 03 — Cloud LLM Integration | 🚧 Backend validated |

---

# Next Step

Integrate ESP32 with:

```text
POST /ask
```

Future flow:

```text
ESP32
   ↓
Backend API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
Response
```
