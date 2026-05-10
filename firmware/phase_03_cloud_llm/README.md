# Phase 03 — Cloud LLM Integration

> Status: 🚧 Backend Validated

---

# Overview

Phase 03 introduces the first real Artificial Intelligence integration of the project.

Previous phases validated:

- Wi‑Fi connectivity
- DHCP
- HTTP communication
- Backend communication

Now the architecture evolves into:

```text
ESP32 → Backend → LLM → Response
```

The goal is to keep the ESP32 lightweight while the intelligence runs in the cloud.

---

# Thin Edge + Cloud LLM Philosophy

This project intentionally avoids running AI directly on the ESP32.

Instead:

- ESP32 handles connectivity and interaction
- Backend handles orchestration and security
- Cloud LLM handles intelligence

This architecture is called:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Hardware Used

- M5AtomS3 Lite
- Windows PC
- Local Wi‑Fi Router

---

# Architecture

```text
[ESP32-S3]
      ↓ HTTP JSON
[Node.js Backend]
      ↓ HTTPS
[OpenAI API]
      ↓ JSON
[Backend]
      ↓ HTTP JSON
[ESP32-S3]
```

---

# Why This Architecture Matters

The ESP32 does NOT communicate directly with OpenAI.

Correct architecture:

```text
ESP32 → Backend → OpenAI API
```

Benefits:

- API key protection
- Provider abstraction
- Easier debugging
- Scalability
- Future provider replacement

---

# Backend Structure

```text
backend/
├── api/
│   ├── test_llm.js
│   └── .env
│
├── llm/
│   └── openai.js
│
├── stt/
└── tts/
```

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| OpenAI SDK | LLM communication |
| dotenv | Environment variables |
| JSON | Data exchange |
| REST | API architecture |

---

# Step-by-Step

## Step 01 — Create OpenAI API Key

Create the key in:

OpenAI Platform → API Keys

Important:

```text
The API key must NEVER be stored inside ESP32 firmware.
```

---

## Step 02 — Configure Billing

Add a small prepaid credit:

- 5 USD
- 10 USD

Enough for educational testing.

---

## Step 03 — Install Dependencies

Inside:

```text
backend/
```

run:

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

Never:

- hardcode API keys
- commit secrets
- place keys inside firmware

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

# Example Backend Logic

```javascript
require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
```

---

## Step 06 — Create test_llm.js

File:

```text
backend/api/test_llm.js
```

Purpose:

Validate backend LLM communication independently.

Project philosophy:

```text
Validate subsystems independently before integration.
```

---

# Troubleshooting Real Problems

## Problem 01 — Wrong Directory

Error:

```text
Cannot find module 'test_llm.js'
```

Cause:

The command was executed from the repository root.

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

Dependencies were installed in the wrong backend layer.

Solution:

Install dependencies inside:

```text
backend/
```

instead of:

```text
backend/api/
```

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
- provider abstraction

---

# First Successful LLM Response

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Validated:

- OpenAI API access
- Billing
- dotenv
- Backend orchestration
- Cloud AI integration

---

# Concepts Introduced

| Concept | Description |
|---|---|
| LLM | Large Language Model |
| Backend Proxy | API abstraction layer |
| API Security | Secrets remain in backend |
| dotenv | Environment configuration |
| Thin Edge | Lightweight embedded device |
| Cloud AI | Intelligence outside ESP32 |

---

# Current Project Status

| Phase | Status |
|---|---|
| Phase 01 — Wi‑Fi Foundation | ✅ Complete |
| Phase 02 — HTTP Communication | ✅ Complete |
| Phase 03 — Cloud LLM Integration | 🚧 Backend Validated |

---

# Next Steps

Create REST endpoint:

```text
POST /ask
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
