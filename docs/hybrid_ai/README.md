# docs/hybrid_ai/README.md

# LLM IoT Thin Edge — Hybrid Edge AI

This section documents the future Hybrid Edge AI architecture of the project.

The Hybrid AI layer represents one of the most important long-term architectural evolutions of the platform.

---

# What Is Hybrid Edge AI?

The current project architecture follows:

```text
Thin Edge Device
+
Cloud-based LLM
```

Future phases will evolve toward:

```text
Hybrid Edge AI Architecture
```

combining:

- local inference
- cloud inference
- distributed AI
- multimodal runtime orchestration

---

# Main Hardware Platform

Primary hardware used for Hybrid AI exploration:

- M5Stack Module LLM Kit

Official documentation:

https://docs.m5stack.com/en/module/Module%20LLM%20Kit

---

# Future Hybrid Architecture

Current architecture:

```text
ESP32
   ↓
Backend
   ↓
Cloud LLM
```

Future hybrid architecture:

```text
ESP32 Runtime
    ↓
Local LLM Module
    ↓
Backend Orchestration
    ↓
Cloud LLM
```

---

# Long-Term Goals

The Hybrid AI layer will explore:

- local inference
- hybrid orchestration
- offline AI
- distributed intelligence
- edge-side AI processing
- low-latency interaction

---

# Suggested Documentation Structure

```text
docs/hybrid_ai/
├── README.md
├── README.pt-BR.md
├── module_llm_kit.md
├── local_inference.md
├── hybrid_runtime.md
└── future_architecture.md
```

---

# Educational Philosophy

The Hybrid AI documentation follows the same philosophy as the rest of the project:

- incremental learning
- real hardware validation
- architecture-first design
- reproducible experiments
- troubleshooting preservation
