# Backend LLM Layer — LLM IoT Thin Edge

> Status: 🚧 OpenAI Integration Validated

---

# Overview

The `backend/llm/` layer is responsible for all Artificial Intelligence orchestration inside the project.

This subsystem isolates:

- AI providers
- prompt orchestration
- model selection
- LLM communication
- future multimodal orchestration

The ESP32 firmware never communicates directly with cloud AI providers.

Instead:

```text
ESP32 → Backend API → LLM Layer → Cloud AI
```

This follows the architecture philosophy:

```text
Thin Edge Device + Cloud Intelligence
```

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

Instead, the project centralizes all AI communication inside the backend.

---

# Current Provider

Validated provider:

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

This abstraction is extremely important.

---

# Current AI Flow

```text
ESP32
   ↓ HTTP
Backend API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
LLM Response
```

---

# Current File

```text
openai.js
```

This file currently centralizes all OpenAI communication.

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

# Why dotenv?

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

Main concepts currently implemented:

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

Current orchestration function:

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

Validated model:

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

# First Successful Response

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

This validated:

- OpenAI API
- billing
- dotenv
- orchestration layer
- cloud AI integration

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

---

# Current Status

| Component | Status |
|---|---|
| OpenAI Integration | ✅ Working |
| askLLM() | ✅ Working |
| dotenv | ✅ Working |
| Backend Orchestration | ✅ Working |
| Provider Abstraction | ✅ Working |

---

# Next Steps

Future evolution planned:

- system prompts
- conversation memory
- multimodal orchestration
- image understanding
- voice integration
- local LLM support

---

# Final Vision

The `llm/` layer is evolving into:

- AI orchestration engine
- provider abstraction layer
- multimodal intelligence subsystem
- cloud/local AI gateway
