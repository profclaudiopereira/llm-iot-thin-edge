# docs/phases/README.md

# LLM IoT Thin Edge — Development Phases

This section documents the incremental evolution of the project phases.

The project follows a progressive architecture strategy where each phase represents an isolated and functional milestone.

---

# Phase Philosophy

Each phase must:

- be independently reproducible
- preserve previous learning
- avoid breaking earlier implementations
- validate functionality on real hardware
- document troubleshooting history
- preserve architectural evolution

---

# Current Development Flow

```text
Wi-Fi
   ↓
HTTP
   ↓
Cloud LLM
   ↓
Display Runtime
   ↓
Voice
   ↓
Vision
   ↓
Multimodal AI
   ↓
Hybrid Local AI
```

---

# Planned Phases

| Phase | Name | Main Objective |
|---|---|---|
| 01 | Wi-Fi Foundation | ESP32 Wi-Fi initialization and connectivity |
| 02 | HTTP Communication | REST API communication and HTTP client |
| 03 | Cloud LLM Integration | OpenAI integration and streaming responses |
| 04 | CoreS3 Lite Display Integration | Embedded visual runtime and streamed rendering |
| 05 | Basic Echo Pyramid Interaction | Initial voice interaction experiments |
| 06 | Physical Interaction with AtomS3R | Embedded interaction and runtime controls |
| 07 | Voice Pipeline | STT/TTS pipeline integration |
| 08 | Vision Integration | Camera integration and visual AI |
| 09 | Multimodal AI | Combined voice, vision and LLM orchestration |
| 10 | Hybrid Local LLM | Local inference and hybrid AI experiments |

---

# Phase Organization

Recommended structure:

```text
docs/phases/
├── phase_01_wifi.md
├── phase_02_http.md
├── phase_03_cloud_llm.md
├── phase_04_display.md
└── future phases
```

---

# Firmware Evolution

Firmware evolves incrementally:

```text
firmware/
├── phase_01_wifi/
├── phase_02_http/
├── phase_03_cloud_llm/
├── phase_04_display/
└── future phases
```

---

# Backend Evolution

Backend services evolve modularly:

```text
backend/
├── api/
├── llm/
├── stt/
├── tts/
└── future services
```

---

# Snapshot Philosophy

The project preserves important learning milestones using snapshots.

Examples:

```text
step_01_wifi_http_base_main.c
step_02_llm_request_main.c
step_03_llm_response_main.c
```

Snapshots help preserve:

- troubleshooting history
- architectural decisions
- learning evolution
- implementation comparison

---

# Educational Philosophy

The project prioritizes:

- didactic documentation
- architecture clarity
- incremental learning
- real hardware validation
- practical experimentation

The goal is not only to build the final system, but also to document the engineering journey.
