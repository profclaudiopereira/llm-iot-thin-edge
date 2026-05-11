# docs/hybrid_ai/README.pt-BR.md

# LLM IoT Thin Edge — Hybrid Edge AI

Esta seção documenta a futura arquitetura Hybrid Edge AI do projeto.

A camada Hybrid AI representa uma das mais importantes evoluções arquiteturais de longo prazo da plataforma.

---

# O Que É Hybrid Edge AI?

A arquitetura atual do projeto segue:

```text
Thin Edge Device
+
Cloud-based LLM
```

Fases futuras evoluirão para:

```text
Hybrid Edge AI Architecture
```

combinando:

- inferência local
- inferência em nuvem
- IA distribuída
- orquestração multimodal de runtime

---

# Principal Plataforma de Hardware

Hardware principal utilizado para exploração Hybrid AI:

- M5Stack Module LLM Kit

Documentação oficial:

https://docs.m5stack.com/en/module/Module%20LLM%20Kit

---

# Arquitetura Híbrida Futura

Arquitetura atual:

```text
ESP32
   ↓
Backend
   ↓
Cloud LLM
```

Arquitetura híbrida futura:

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

# Objetivos de Longo Prazo

A camada Hybrid AI explorará:

- inferência local
- orquestração híbrida
- IA offline
- inteligência distribuída
- processamento edge-side
- interação de baixa latência

---

# Estrutura Recomendada da Documentação

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

# Filosofia Educacional

A documentação Hybrid AI segue a mesma filosofia do restante do projeto:

- aprendizado incremental
- validação em hardware real
- design orientado à arquitetura
- experimentos reproduzíveis
- preservação de troubleshooting
