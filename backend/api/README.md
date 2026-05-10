# Backend API — LLM IoT Thin Edge

> Status: 🚧 REST + LLM Active Development

---

# Overview

The API layer evolved from a simple HTTP validation server into the communication gateway between embedded devices and cloud AI services.

Initially the API validated:

- HTTP communication
- JSON payloads
- REST architecture

Now the API also orchestrates:

- LLM communication
- backend AI requests
- provider abstraction
- future multimodal services

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

This follows the concept of:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Current API Architecture

```text
ESP32
   ↓ HTTP JSON
REST API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
LLM Response
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
| server.js | operational REST API |
| test_llm.js | isolated backend validation |
| snapshots/ | architectural evolution history |
| .env | secure credentials |

---

# Snapshot Evolution

| Step | File | Description |
|---|---|---|
| 01 | step_01_basic_http_server.js | Basic REST validation |
| 02 | step_02_llm_rest_api.js | REST + LLM orchestration |
| 03 | server.js | Current operational API |

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

# Current AI Endpoint

```text
POST /ask
```

Purpose:

- receive user questions
- orchestrate AI requests
- return LLM responses

---

# Example AI Request

```json
{
  "message": "What is FreeRTOS?"
}
```

---

# Example AI Response

```json
{
  "response": "FreeRTOS is..."
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

## Step 02 — Backend AI Orchestration

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
LLM Response
```

---

# Important API Concepts

| Concept | Description |
|---|---|
| REST API | HTTP communication layer |
| JSON | structured communication |
| Backend Proxy | AI abstraction layer |
| async/await | asynchronous orchestration |
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

Execution from the wrong directory.

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

# First Successful LLM Response

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Validated:

- OpenAI API
- backend orchestration
- dotenv
- provider abstraction
- AI REST API

---

# Current Status

| Feature | Status |
|---|---|
| REST API | ✅ Working |
| JSON Requests | ✅ Working |
| /ping | ✅ Working |
| /ask | ✅ Working |
| OpenAI Integration | ✅ Working |
| Backend Orchestration | ✅ Working |

---

# Next Steps

- integrate ESP32 with /ask
- JSON parsing on ESP32
- display AI responses
- future voice integration
- multimodal evolution

---

# Final Vision

The API layer is evolving into:

- AI gateway
- orchestration layer
- embedded communication layer
- multimodal integration API
