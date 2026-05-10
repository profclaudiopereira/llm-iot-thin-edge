
# Backend LLM Layer — LLM IoT Thin Edge

> Status: ✅ OpenAI Integration Operationally Validated with Real ESP32 Hardware

---

# Overview

The `backend/llm/` layer became the operational Artificial Intelligence orchestration subsystem of the project.

This layer isolates:

- AI providers
- prompt orchestration
- model selection
- LLM communication
- future multimodal orchestration
- streamed AI responses

The ESP32 firmware never communicates directly with cloud AI providers.

Instead:

```text
ESP32 → Backend API → LLM Layer → Cloud AI
```

This architecture validated the concept:

```text
Thin Edge Device + Cloud Intelligence
```

using real embedded hardware communicating with real Cloud AI services.

---

# Learning Philosophy

This subsystem evolved incrementally.

The development order followed:

1. OpenAI SDK validation
2. dotenv integration
3. askLLM() orchestration
4. backend REST integration
5. ESP32 operational validation
6. streamed AI responses

This methodology simplified:

- debugging
- orchestration understanding
- provider abstraction
- subsystem isolation

---

# Current Structure

```text
backend/llm/
├── README.md
├── README.pt-BR.md
└── openai.js
```

---

# Why This Layer Exists

Without an orchestration layer, the firmware would need to know:

- provider APIs
- authentication
- models
- prompt structures
- provider-specific logic

This would create:

- complex firmware
- difficult maintenance
- provider lock-in
- security problems

Instead, the project centralized all AI communication inside the backend.

---

# Current Provider

Operationally validated provider:

- OpenAI API

Future providers planned:

- Ollama
- Gemini
- Claude
- local LLMs

---

# Provider Abstraction Philosophy

The ESP32 does NOT know:

- which provider exists
- which model is being used
- how prompts are sent

The ESP32 only knows:

```text
REST API
```

This abstraction proved extremely important.

---

# Final AI Flow

```text
ESP32
   ↓ HTTP
Backend API
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

# Current File

```text
openai.js
```

This file centralizes all OpenAI communication.

---

# Step-by-Step Evolution

## Step 01 — Install OpenAI SDK

Inside:

```text
backend/
```

Dependencies installed:

```bash
npm install openai dotenv express
```

---

# Why dotenv Matters

The project intentionally avoids hardcoded secrets.

Instead of:

```javascript
const API_KEY = "sk-xxxxxxxx";
```

the project uses:

```javascript
process.env.OPENAI_API_KEY
```

This follows professional backend security practices.

---

# Step 02 — Create .env

File:

```text
backend/api/.env
```

Example:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Security Rules

The API key must NEVER remain inside:

- ESP32 firmware
- screenshots
- GitHub repositories
- commits

The `.env` file must NEVER be uploaded.

---

# openai.js Source Code

Main concepts implemented:

```javascript
require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
```

---

# Understanding the Code

## `dotenv`

```javascript
require("dotenv").config();
```

Loads environment variables automatically.

This allows secure credential handling.

---

## OpenAI Client

```javascript
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
```

Creates the provider communication client.

---

## askLLM()

Operational orchestration function:

```javascript
async function askLLM(message)
```

Responsibilities:

- receive prompts
- send prompts
- receive responses
- return plain text

---

# Why async/await Matters

LLM communication is asynchronous.

The backend waits for the cloud response:

```javascript
await client.chat.completions.create(...)
```

Without async/await:

- responses would break
- execution order would fail
- orchestration would become unstable

---

# Current Model

Validated operational model:

```text
gpt-4.1-mini
```

Reasons:

- low cost
- fast responses
- excellent for educational projects
- ideal for backend orchestration tests

---

# Why Model Isolation Matters

The ESP32 firmware does NOT know the model.

Today:

```text
gpt-4.1-mini
```

Future:

- gpt-4.1
- gpt-4o
- local models

without changing firmware.

---

# Streamed AI Responses

Large LLM responses arrived in multiple HTTP chunks.

The ESP32 consumed these responses using:

```c
HTTP_EVENT_ON_DATA
```

through ESP-IDF event-driven callbacks.

This validated:

- asynchronous networking
- streamed payload handling
- cloud AI orchestration
- event-driven communication

---

# Real Troubleshooting

## Problem 01 — dotenv Not Found

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
- shared dependencies
- modular backend
- scalability

---

## Problem 02 — Wrong Execution Directory

Error:

```text
Cannot find module 'test_llm.js'
```

Cause:

Node.js executed from repository root.

Solution:

```bash
cd backend/api
```

---

## Problem 03 — Backend Not Running

Symptoms:

```text
HTTP timeout
```

Cause:

ESP32 attempted requests before backend initialization.

Solution:

```bash
node server.js
```

---

## Problem 04 — Blocking HTTP Response

Initial implementation incorrectly attempted to use:

```c
esp_http_client_read_response()
```

This caused blocking behavior.

Final solution:

```c
HTTP_EVENT_ON_DATA
```

through asynchronous ESP-IDF callbacks.

---

# First Operational ESP32 Response

```text
PHASE_03_LLM: LLM Response:

{"response":"M5Stack is a modular embedded development platform..."}
```

This validated:

- OpenAI API
- backend orchestration
- streamed responses
- cloud AI integration
- ESP32 operational communication

---

# Important Reflections

This subsystem proved that lightweight embedded systems can leverage powerful cloud AI services without executing local AI workloads.

The `llm/` layer successfully became:

- AI orchestration engine
- provider abstraction layer
- cloud AI gateway
- multimodal foundation

---

# Concepts Introduced

| Concept | Description |
|---|---|
| LLM | Large Language Model |
| Provider Abstraction | backend AI isolation |
| dotenv | secure environment variables |
| async/await | asynchronous orchestration |
| Thin Edge | lightweight edge devices |
| Cloud AI | AI outside firmware |
| HTTP Streaming | chunked AI responses |
| Event-driven Networking | asynchronous callbacks |

---

# Final Validations

| Feature | Status |
|---|---|
| OpenAI Integration | ✅ |
| askLLM() | ✅ |
| dotenv | ✅ |
| Backend Orchestration | ✅ |
| Provider Abstraction | ✅ |
| Streamed Responses | ✅ |
| ESP32 Integration | ✅ |

---

# Current Status

| Component | Status |
|---|---|
| OpenAI Integration | ✅ Operational |
| askLLM() | ✅ Operational |
| Streamed Responses | ✅ Operational |
| ESP32 Communication | ✅ Operational |
| Local LLM Support | 🚧 Planned |

---

# Next Steps

Future evolution planned:

- system prompts
- conversation memory
- multimodal orchestration
- image understanding
- voice integration
- local LLM support
- CoreS3 Lite display integration

---

# Final Vision

The `llm/` layer evolved into:

- AI orchestration engine
- provider abstraction layer
- multimodal intelligence subsystem
- operational cloud/local AI gateway
