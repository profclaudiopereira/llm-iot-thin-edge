
# Phase 03 — Cloud LLM Integration

> Status: ✅ ESP32 + Cloud LLM Fully Validated

---

# Overview

Phase 03 introduced the first real Artificial Intelligence integration of the project.

The architecture evolved from:

```text
ESP32 → Backend
```

to:

```text
ESP32 → Backend → LLM → Response
```

and finally into:

```text
ESP32 → Backend API → OpenAI API → Streamed LLM Response
```

This phase officially validated the concept of:

```text
Thin Edge Device + Cloud Intelligence
```

using real ESP32 hardware communicating with a real Cloud-based LLM.

---

# Learning Philosophy

This project intentionally evolved incrementally.

Each subsystem was validated independently before integration.

Development order:

1. Wi‑Fi foundation
2. HTTP communication
3. Backend API
4. OpenAI orchestration
5. ESP32 → LLM requests
6. Streamed LLM responses

This methodology simplified:

- debugging
- troubleshooting
- architecture understanding
- subsystem isolation

---

# Final Architecture

```text
[ESP32-S3]
      ↓ HTTP JSON
[Backend REST API]
      ↓
[askLLM()]
      ↓ HTTPS
[OpenAI API]
      ↓
[Streamed LLM Response]
      ↓ HTTP JSON
[ESP32-S3]
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
| 01 | step_01_wifi_http_base_main.c | Wi‑Fi + HTTP foundation |
| 02 | step_02_llm_request_main.c | First successful LLM request |
| 03 | step_03_llm_response_main.c | First streamed LLM response displayed |

---

# Step-by-Step Development

## Step 01 — Create OpenAI API Key

The OpenAI API key was created separately from ChatGPT subscriptions.

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

## AI Backend

```text
POST /ask
```

Validated:

- OpenAI integration
- async orchestration
- AI responses
- backend abstraction layer

---

# ESP32 + LLM Integration

The ESP32 evolved from:

```text
HTTP client
```

into:

```text
AI-enabled edge device
```

The firmware now:

- sends prompts
- receives AI responses
- handles streamed HTTP payloads
- displays LLM responses

---

# Important ESP-IDF Learning

The initial implementation incorrectly attempted to use:

```c
esp_http_client_read_response()
```

This caused blocking behavior during streamed responses.

The correct solution used:

```c
HTTP_EVENT_ON_DATA
```

through ESP-IDF event-driven HTTP callbacks.

---

# Why HTTP Streaming Matters

Large LLM responses arrived in multiple chunks.

This validated:

- event-driven HTTP
- streamed payload handling
- asynchronous orchestration
- real cloud AI communication

---

# Example ESP32 Output

```text
PHASE_03_LLM: Sending HTTP POST...

PHASE_03_LLM: LLM Response:

{"response":"M5Stack is a modular embedded development platform..."}

PHASE_03_LLM: HTTP Status = 200

PHASE_03_LLM: LLM request completed successfully
```

![ESP32 + LLM](../../docs/assets/phase_03_cloud_llm/photos/esp32_llm_first_success.jpg)

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

## Problem 03 — Backend Not Running

Symptoms:

```text
HTTP timeout
```

Cause:

ESP32 attempted to connect before Node.js backend initialization.

Solution:

```bash
node server.js
```

---

## Problem 04 — HTTP Blocking Response

Cause:

Incorrect response handling using blocking reads.

Final solution:

```c
HTTP_EVENT_ON_DATA
```

through ESP-IDF asynchronous callbacks.

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
| HTTP Streaming | chunked responses |
| Event-driven HTTP | asynchronous callbacks |

---

# Final Validations

| Feature | Status |
|---|---|
| Wi‑Fi | ✅ |
| DHCP | ✅ |
| HTTP POST | ✅ |
| REST API | ✅ |
| Backend orchestration | ✅ |
| OpenAI API | ✅ |
| Cloud LLM | ✅ |
| HTTP streaming | ✅ |
| ESP32 streamed responses | ✅ |

---

# Current Project Status

| Phase | Status |
|---|---|
| Phase 01 — Wi‑Fi Foundation | ✅ Complete |
| Phase 02 — HTTP Communication | ✅ Complete |
| Phase 03 — ESP32 + Cloud LLM | ✅ Complete |

---

# Reflections and Lessons Learned

This phase demonstrated that modern embedded systems can remain lightweight while leveraging powerful cloud AI services.

The project validated:

- Thin Edge Architecture
- Cloud AI orchestration
- Embedded REST communication
- Provider abstraction
- Event-driven networking
- Real-world AI integration

The ESP32 remained lightweight while all intelligence executed in the cloud.

---

# Next Steps

Future evolution planned:

- JSON parsing
- response extraction
- CoreS3 Lite display
- conversation memory
- voice pipeline
- multimodal AI
- local LLM support
