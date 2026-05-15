![LLM IoT Thin Edge](docs/assests/llm-iot-thin-edge-banner.png)

# LLM IoT Thin Edge

An educational and professional project exploring the concept of **Thin Edge Devices powered by Cloud-based LLMs** using ESP32-S3 hardware from the M5Stack ecosystem.

The project evolves incrementally through isolated and functional phases, ensuring that each new feature does not break previous implementations.

---

# Project Goals

- Explore Thin Edge Device architectures
- Integrate ESP32 devices with Cloud-based LLMs
- Build multimodal embedded AI systems
- Create a didactic and professional reference project
- Preserve architecture evolution and troubleshooting history
- Keep each phase isolated and reproducible

---

# Architecture Philosophy

This project follows the concept of:

```text
Thin Edge Device + Cloud-based LLM
```

Future phases will evolve toward:

```text
Interactive Embedded AI Runtime
```

and later:

```text
Hybrid Edge AI Architecture
```

---

# Hardware Ecosystem

The project uses modular ESP32-S3 devices from the M5Stack ecosystem.

Core devices currently used:

- AtomS3 Lite
- AtomS3R AI Chatbot
- AtomS3R CAM AI Chatbot
- Echo Pyramid
- CoreS3 Lite
- Module LLM Kit

More information:

```text
docs/devices/
```

---

# Current Validated Stack

- ESP-IDF
- ESP32-S3
- FreeRTOS
- Node.js
- Express
- OpenAI API
- REST API
- HTTP Streaming
- HTTP_EVENT_ON_DATA
- dotenv

---

# Current Validated Concepts

- Thin Edge Architecture
- Cloud LLM Integration
- Backend Orchestration
- Provider Abstraction
- HTTP Streaming
- Event-driven Networking
- Streaming Responses
- Incremental Embedded Runtime Evolution

---

# Repository Structure

```text
llm-iot-thin-edge/
├── firmware/
├── backend/
├── docs/
│   ├── architecture/
│   ├── devices/
│   ├── diagrams/
│   ├── phases/
│   └── assets/
├── README.md
└── README.pt-BR.md
```

---

# Development Rules

- One phase = one functional delivery
- New phases must not break previous phases
- Test on real hardware before advancing
- Preserve troubleshooting history
- Keep firmware isolated by phase
- Preserve architecture evolution

---

# Planned Phases

| Phase | Description |
|---|---|
| 01 | Wi-Fi Foundation |
| 02 | HTTP Communication |
| 03 | Cloud LLM Integration |
| 04 | Display Runtime |
| 05 | Voice Interaction |
| 06 | Vision Pipeline |
| 07 | Multimodal AI |
| 08 | Hybrid Local LLM |

---

## Hardware Compatibility Notes

The initial phases of the project were intentionally designed to remain hardware-agnostic.

Phases:

```text
01 — Wi-Fi Foundation
02 — HTTP Communication
03 — Cloud LLM Integration
```

can be reproduced using many ESP32 and ESP32-S3 development boards, including:

* ESP32 DevKit
* ESP32-S3 DevKit
* AtomS3 Lite
* other compatible ESP32 devices

This is possible because the project follows the concept of:

```text
Thin Edge Device + Cloud-based LLM
```

where the embedded device acts primarily as an edge orchestrator while the AI processing occurs in the cloud.

Starting from:

```text
Phase 04 — Display Runtime
```

the project begins introducing hardware-specific runtime layers such as:

* display rendering
* touch interaction
* audio pipelines
* multimodal interaction

which depend on specific devices from the M5Stack ecosystem.

---

# Documentation Structure

## Architecture Documentation

```text
docs/architecture/
```

Contains:

- system architecture
- backend architecture
- hardware architecture
- streaming concepts
- roadmap evolution

---

## Devices Documentation

```text
docs/devices/
```

Contains:

- device specifications
- hardware roles
- official documentation links
- ecosystem overview

---

## Phases Documentation

```text
docs/phases/
```

Contains:

- phase evolution
- development roadmap
- firmware progression
- snapshot philosophy

---

# Educational Philosophy

The project prioritizes:

- didactic documentation
- incremental learning
- real hardware validation
- architecture clarity
- troubleshooting preservation
- reproducible experiments

The goal is not only to build the final system, but also to preserve and document the entire engineering journey.

---

# License

MIT License
