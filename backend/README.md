# Backend Architecture — LLM IoT Thin Edge

> Status: 🚧 Active Development

---

# Overview

The backend of this project evolved from a simple HTTP server into a modular AI orchestration platform.

The backend is responsible for:

- REST APIs
- Cloud LLM orchestration
- Future speech processing
- Future multimodal pipelines
- Security abstraction
- AI provider abstraction

This architecture follows the concept of:

Thin Edge Device + Cloud Intelligence

---

# Backend Philosophy

The ESP32 devices remain lightweight.

The backend centralizes:

- AI processing
- provider communication
- orchestration
- security
- multimodal services

This keeps embedded devices:

- simpler
- cheaper
- easier to maintain
- scalable

---

# Backend Architecture

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

# Current Backend Structure

```text
backend/
├── README.md
├── README.pt-BR.md
│
├── api/
├── llm/
├── stt/
└── tts/
```

---

# Folder Responsibilities

## api/

REST communication layer.

Responsibilities:

- HTTP endpoints
- request validation
- JSON communication
- edge device integration

Examples:

- POST /ping
- POST /ask

---

## llm/

Large Language Model orchestration layer.

Responsibilities:

- OpenAI integration
- prompt management
- provider abstraction
- AI orchestration

Current provider:

- OpenAI API

Future providers:

- Ollama
- Gemini
- Claude
- local LLMs

---

## stt/

Speech-to-text layer.

Future responsibilities:

- microphone processing
- audio transcription
- voice command recognition

Planned hardware:

- Echo Pyramid

---

## tts/

Text-to-speech layer.

Future responsibilities:

- voice synthesis
- audio response generation
- embedded assistant responses

---

# Why This Architecture Matters

This modular design provides:

- scalability
- provider independence
- easier debugging
- subsystem isolation
- future multimodal support

---

# Thin Edge Architecture

The ESP32 does NOT execute heavy AI workloads.

Instead:

```text
ESP32 → Backend → Cloud AI
```

Benefits:

- lower hardware cost
- simpler firmware
- easier updates
- centralized AI orchestration

---

# Security Philosophy

API keys NEVER remain inside firmware.

Correct:

```text
ESP32 → Backend → OpenAI API
```

Wrong:

```text
ESP32 → OpenAI API
```

---

# Environment Variables

Sensitive credentials remain in:

```text
.env
```

Example:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Important Git Rule

The `.env` file must NEVER be uploaded to GitHub.

`.gitignore` must contain:

```gitignore
.env
```

---

# Development Evolution

## Phase 01

Validated:

- ESP-IDF
- FreeRTOS
- Wi‑Fi
- DHCP

---

## Phase 02

Validated:

- HTTP communication
- REST backend
- JSON payloads

---

## Phase 03

Validated:

- OpenAI API
- dotenv
- backend orchestration
- LLM responses

---

# Current AI Flow

```text
Node.js
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

Cause:

Dependencies installed in wrong layer.

Architectural evolution:

```text
backend/api/node_modules
```

became:

```text
backend/node_modules
```

This improved backend modularity.

---

# Current Status

| Subsystem | Status |
|---|---|
| API | Working |
| OpenAI Integration | Working |
| LLM Backend | Working |
| STT | Planned |
| TTS | Planned |

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
- embedded intelligence layer
- cloud abstraction system
