
# Backend API — LLM IoT Thin Edge

> Status: ✅ REST + LLM Operational API Validated with Real ESP32 Hardware

---

# Overview

The API layer evolved from a simple HTTP validation server into the operational communication gateway between embedded devices and Cloud-based AI services.

Initially the API validated:

- HTTP communication
- JSON payloads
- REST architecture

The API now also validates:

- real ESP32 requests
- streamed LLM responses
- OpenAI orchestration
- asynchronous AI communication
- event-driven networking
- backend AI abstraction
- real Thin Edge AI communication

---

# API Philosophy

The API layer intentionally isolates embedded devices from AI providers.

The ESP32 communicates only with:

```text
Backend API
```

The backend becomes responsible for:

- AI orchestration
- provider communication
- security
- response formatting
- streamed response handling

This follows the concept:

```text
Thin Edge Device + Cloud Intelligence
```

using real ESP32 hardware.

---

# Final API Architecture

```text
ESP32
   ↓ HTTP JSON
REST API
   ↓
askLLM()
   ↓ HTTPS
OpenAI API
   ↓
Streamed LLM Response
   ↓ HTTP JSON
ESP32
```

---

# Current API Structure

```text
backend/api/
├── README.md
├── README.pt-BR.md
├── server.js
├── test_llm.js
├── snapshots/
│   ├── step_01_basic_http_server.js
│   └── step_02_llm_rest_api.js
│
└── .env
```

---

# File Responsibilities

| File | Responsibility |
|---|---|
| server.js | operational REST AI API |
| test_llm.js | isolated backend validation |
| snapshots/ | architectural evolution history |
| .env | secure credentials |

---

# Snapshot Evolution

| Step | File | Description |
|---|---|---|
| 01 | step_01_basic_http_server.js | Basic REST validation |
| 02 | step_02_llm_rest_api.js | REST + LLM orchestration |
| 03 | server.js | Operational AI REST API |

---

# REST API Evolution

## Initial Endpoint

```text
POST /ping
```

Purpose:

- validate backend
- validate JSON
- validate REST communication

---

# Example Request

```json
{
  "device": "atom_s3_lite"
}
```

---

# Example Response

```json
{
  "status": "ok",
  "message": "Backend online"
}
```

---

# AI Endpoint

```text
POST /ask
```

Purpose:

- receive embedded AI prompts
- orchestrate OpenAI requests
- return streamed AI responses

---

# Example AI Request

```json
{
  "message": "What is M5Stack?"
}
```

---

# Example AI Response

```json
{
  "response": "M5Stack is..."
}
```

---

# Step-by-Step Evolution

## Step 01 — Basic REST Server

The initial backend validated:

- Express
- JSON
- POST requests
- HTTP communication

This created the foundation for future AI communication.

---

## Step 02 — AI Gateway Architecture

The API evolved into:

```text
REST API + AI Gateway
```

New concepts introduced:

- async/await
- OpenAI SDK
- provider abstraction
- backend orchestration
- dotenv
- API key security

---

## Step 03 — ESP32 Operational Validation

The API was fully validated using:

```text
ESP32 → Backend API → OpenAI → ESP32
```

This validated:

- real hardware orchestration
- embedded AI communication
- streamed responses
- cloud AI integration

---

# Why Backend Orchestration Matters

The ESP32 firmware does NOT know:

- OpenAI
- Gemini
- Ollama
- Claude

The firmware communicates only with:

```text
REST API
```

This architecture allows future provider replacement without firmware changes.

---

# Current Request Flow

```text
ESP32
   ↓
POST /ask
   ↓
REST API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
Streamed LLM Response
   ↓
ESP32
```

---

# HTTP Streaming Validation

Large LLM responses arrived in multiple chunks.

This required:

- asynchronous orchestration
- streamed payload handling
- event-driven networking

The ESP32 consumed these responses using:

```c
HTTP_EVENT_ON_DATA
```

through ESP-IDF event-driven callbacks.

---

# Important API Concepts

| Concept | Description |
|---|---|
| REST API | HTTP communication layer |
| JSON | structured communication |
| Backend Proxy | AI abstraction layer |
| async/await | asynchronous orchestration |
| HTTP Streaming | chunked responses |
| Event-driven Networking | asynchronous callbacks |
| Thin Edge | lightweight embedded devices |

---

# Security Architecture

The API key NEVER remains inside:

- ESP32 firmware
- screenshots
- GitHub repositories

Correct architecture:

```text
ESP32 → REST API → OpenAI API
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

# Git Security Rules

`.gitignore` must contain:

```gitignore
.env
node_modules/
```

The `.env` file must NEVER be uploaded to GitHub.

---

# Real Troubleshooting

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

Benefits:

- cleaner architecture
- scalability
- shared dependencies
- modular backend

---

## Problem 03 — Backend Not Running

Symptoms:

```text
HTTP timeout
```

Cause:

ESP32 attempted communication before backend startup.

Solution:

```bash
node server.js
```

---

## Problem 04 — Blocking HTTP Response

Cause:

Incorrect blocking response handling.

Final solution:

```c
HTTP_EVENT_ON_DATA
```

through ESP-IDF asynchronous callbacks.

---

# Important Reflections

This API architecture proved that embedded devices can communicate with powerful cloud AI systems while remaining lightweight.

The API successfully became:

- AI gateway
- orchestration layer
- embedded communication layer
- cloud AI bridge

---

# Final Validations

| Feature | Status |
|---|---|
| REST API | ✅ |
| JSON Requests | ✅ |
| /ping | ✅ |
| /ask | ✅ |
| OpenAI Integration | ✅ |
| Backend Orchestration | ✅ |
| Streamed Responses | ✅ |
| ESP32 Integration | ✅ |

---

# Current Status

| Component | Status |
|---|---|
| REST API | ✅ Operational |
| OpenAI Integration | ✅ Operational |
| Streamed Responses | ✅ Operational |
| ESP32 Requests | ✅ Operational |
| Voice Pipeline | 🚧 Planned |

---

# Next Steps

- JSON parsing on ESP32
- display rendering
- conversation memory
- CoreS3 Lite integration
- future voice integration
- multimodal evolution

---

# Final Vision

The API layer evolved into:

- AI gateway
- orchestration layer
- embedded communication layer
- multimodal integration API
- operational Thin Edge AI interface
