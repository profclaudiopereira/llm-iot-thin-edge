# README.md (English)

# Phase 03 — Cloud LLM Integration

> Status: 🚧 In Progress

---

# Overview

This phase introduces real integration between the ESP32-S3 device and a Cloud-based Large Language Model (LLM).

The objective is to evolve the architecture from:

```text
ESP32 → Backend
```

into:

```text
ESP32 → Backend → LLM → Response
```

This is the first real Artificial Intelligence phase of the project.

---

# Main Goal

The ESP32 device will:

1. Send a question to the backend
2. The backend will forward the request to a Cloud LLM
3. The backend will receive the LLM response
4. The backend will return the response to the ESP32
5. The ESP32 will display the response in the serial monitor

---

# Hardware Used

- M5AtomS3 Lite
- Windows PC
- Local Wi‑Fi Router

---

# Why Continue Using AtomS3 Lite?

This phase intentionally keeps the hardware simple.

The objective is to demonstrate the concept of:

> Thin Edge Device + Cloud Intelligence

The device itself remains lightweight and inexpensive while the intelligence runs in the cloud.

---

# Architecture

```text
[ESP32-S3]
      ↓ HTTP JSON
[Node.js Backend]
      ↓ HTTPS
[Cloud LLM API]
      ↓ JSON
[Backend]
      ↓ HTTP JSON
[ESP32-S3]
```

---

# Responsibilities of Each Layer

| Layer | Responsibility |
|---|---|
| ESP32 | Network communication and user interaction |
| Backend | API orchestration and security |
| LLM Provider | Artificial intelligence processing |

---

# Important Security Concept

## The API key must NEVER be stored inside the ESP32.

The API key will remain only inside the backend server.

Correct architecture:

```text
ESP32 → Backend → LLM API
```

Wrong architecture:

```text
ESP32 → LLM API directly
```

---

# Technologies Used

| Technology | Purpose |
|---|---|
| ESP-IDF | Embedded firmware framework |
| Node.js | Backend runtime |
| Express | REST API server |
| OpenAI API | Cloud LLM provider |
| JSON | Data exchange |

---

# Project Structure

```text
firmware/
└── phase_03_cloud_llm/
    ├── main/
    ├── README.md
    ├── README.pt-BR.md
    ├── CMakeLists.txt
    └── sdkconfig
```

Backend:

```text
backend/api/
├── llm/
│   └── openai.js
├── server.js
├── package.json
└── README.md
```

---

# Step-by-Step Plan

## Step 01 — Create the New ESP-IDF Project

Create:

```text
firmware/phase_03_cloud_llm/
```

This phase must NOT modify previous phases.

---

## Step 02 — Create LLM Backend Module

Create:

```text
backend/api/llm/openai.js
```

This module will isolate all LLM communication logic.

---

## Step 03 — Configure OpenAI API Key

The API key will be stored only in the backend.

Example:

```javascript
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
```

---

## Step 04 — Create New Backend Endpoint

New endpoint:

```text
POST /ask
```

---

## Step 05 — ESP32 Sends Question

Example payload:

```json
{
  "message": "What is FreeRTOS?"
}
```

---

## Step 06 — Backend Calls LLM

The backend forwards the request to the LLM provider.

---

## Step 07 — Backend Returns Response

Example:

```json
{
  "response": "FreeRTOS is a real-time operating system..."
}
```

---

## Step 08 — ESP32 Displays Response

The ESP32 prints the LLM response using:

```c
ESP_LOGI()
```

---

# Expected Final Flow

```text
ESP32:
"What is an embedded system?"

↓

LLM Response:
"An embedded system is a dedicated computer system..."
```

---

# Important Learning Concepts

This phase introduces:

- Cloud AI architecture
- LLM orchestration
- Backend proxy pattern
- API security
- JSON response parsing
- AI request/response flows

---

# Rules for This Phase

- Do not break previous phases
- Keep firmware isolated
- Do not expose API keys
- Keep the ESP32 lightweight
- Use the backend as orchestration layer

---

# Future Evolution

This phase prepares the project for:

- Voice assistants
- Audio pipelines
- Vision systems
- Multimodal AI
- Local LLM integration



