# docs/architecture/README.md

# LLM IoT Thin Edge — System Architecture

This document describes the architectural vision, technical decisions, hardware organization, and evolution roadmap of the **LLM IoT Thin Edge** project.

---

# Project Vision

The project explores modern embedded AI architectures using:

```text
Thin Edge Device + Cloud-based LLM
```

The goal is to create a modular and educational platform capable of evolving from simple Wi-Fi communication to multimodal embedded AI systems.

---

# Core Architectural Philosophy

The project intentionally separates:

```text
Embedded Device
↓
Backend Orchestration Layer
↓
LLM Providers
```

This architecture enables:

- provider abstraction
- scalability
- security isolation
- streaming responses
- multimodal evolution
- hybrid AI architectures

---

# Current System Architecture

```text
ESP32 Device
    ↓
Backend API
    ↓
LLM Provider
    ↓
Cloud AI Models
```

Current validated implementation:

```text
ESP32-S3
    ↓
Node.js Backend
    ↓
OpenAI API
```

---

# Architectural Principles

- Thin Edge Devices
- Cloud Intelligence
- Incremental Evolution
- Hardware Validation First
- Event-Driven Communication
- Streaming-first Design
- Modular Firmware
- Modular Backend

---

# Hardware Architecture

## Thin Edge Layer

Devices focused on lightweight interaction and edge orchestration.

- AtomS3 Lite
- AtomS3R
- Echo Pyramid

---

## Interactive Runtime Layer

Primary embedded visual runtime.

- CoreS3 Lite

Responsibilities:

- visual UI
- streaming rendering
- touch interaction
- runtime monitoring
- local orchestration

---

## Vision Layer

Computer vision and multimodal capture.

- AtomS3R CAM AI Chatbot

---

## Hybrid AI Layer

Local inference and hybrid AI experimentation.

- Module LLM Kit

---

# Firmware Architecture

Firmware is organized by isolated phases.

```text
firmware/
├── phase_01_wifi/
├── phase_02_http/
├── phase_03_cloud_llm/
└── future phases
```

Each phase must:

- remain functional independently
- preserve previous learning
- avoid breaking earlier implementations
- support incremental evolution

---

# Backend Architecture

```text
backend/
├── api/
├── llm/
├── stt/
└── tts/
```

The backend acts as:

- orchestration layer
- provider abstraction layer
- streaming processor
- future memory manager
- future multimodal coordinator

---

# Streaming Architecture

One of the major validated concepts is:

```text
HTTP streaming
```

Current implementation validates:

- event-driven networking
- incremental streaming
- HTTP_EVENT_ON_DATA
- asynchronous processing

Future phases will evolve this into:

- streamed UI rendering
- streamed voice synthesis
- multimodal event pipelines

---

# Evolution Roadmap

| Phase | Description |
|---|---|
| 01 | Wi-Fi Foundation |
| 02 | HTTP Communication |
| 03 | Cloud LLM Integration |
| 04 | CoreS3 Lite Display Integration |
| 05 | Basic Echo Pyramid Interaction |
| 06 | Physical Interaction with AtomS3R |
| 07 | Voice Pipeline |
| 08 | Vision Integration |
| 09 | Multimodal AI |
| 10 | Hybrid Local LLM |

---

# Long-Term Vision

The project aims to evolve toward:

```text
Interactive Embedded AI Runtime
```

and eventually:

```text
Hybrid Edge AI Architecture
```

combining:

- cloud intelligence
- local inference
- multimodal interaction
- embedded orchestration
- distributed edge devices

---

# Documentation Philosophy

The documentation follows:

- educational style
- incremental learning
- architecture preservation
- troubleshooting preservation
- snapshot evolution
- reproducible phases

The project values understanding the architectural journey as much as the final implementation itself.
