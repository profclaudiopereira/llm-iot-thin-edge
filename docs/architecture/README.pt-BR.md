# docs/architecture/README.pt-BR.md

# LLM IoT Thin Edge — Arquitetura do Sistema

Este documento descreve a visão arquitetural, decisões técnicas, organização de hardware e roadmap evolutivo do projeto **LLM IoT Thin Edge**.

---

# Visão do Projeto

O projeto explora arquiteturas modernas de IA embarcada utilizando:

```text
Thin Edge Device + Cloud-based LLM
```

O objetivo é criar uma plataforma modular e educacional capaz de evoluir desde comunicação Wi-Fi simples até sistemas multimodais embarcados com IA.

---

# Filosofia Central da Arquitetura

O projeto separa intencionalmente:

```text
Dispositivo Embarcado
↓
Camada de Orquestração Backend
↓
Provedores de LLM
```

Essa arquitetura permite:

- abstração de provedores
- escalabilidade
- isolamento de segurança
- respostas em streaming
- evolução multimodal
- arquiteturas híbridas de IA

---

# Arquitetura Atual do Sistema

```text
ESP32 Device
    ↓
Backend API
    ↓
LLM Provider
    ↓
Cloud AI Models
```

Implementação atualmente validada:

```text
ESP32-S3
    ↓
Backend Node.js
    ↓
OpenAI API
```

---

# Princípios Arquiteturais

- Thin Edge Devices
- Inteligência na Nuvem
- Evolução Incremental
- Validação em Hardware Real
- Comunicação Event-Driven
- Arquitetura Streaming-first
- Firmware Modular
- Backend Modular

---

# Arquitetura de Hardware

## Camada Thin Edge

Devices focados em interação leve e orquestração embarcada.

- AtomS3 Lite
- AtomS3R
- Echo Pyramid

---

## Camada de Runtime Interativo

Principal runtime visual embarcado.

- CoreS3 Lite

Responsabilidades:

- interface visual
- renderização streaming
- interação touch
- monitoramento do runtime
- orquestração local

---

## Camada de Visão

Visão computacional e captura multimodal.

- AtomS3R CAM AI Chatbot

---

## Camada Hybrid AI

Inferência local e experimentação híbrida de IA.

- Module LLM Kit

---

# Arquitetura do Firmware

O firmware é organizado por fases isoladas.

```text
firmware/
├── phase_01_wifi/
├── phase_02_http/
├── phase_03_cloud_llm/
└── futuras fases
```

Cada fase deve:

- permanecer funcional isoladamente
- preservar aprendizados anteriores
- evitar quebrar implementações anteriores
- suportar evolução incremental

---

# Arquitetura do Backend

```text
backend/
├── api/
├── llm/
├── stt/
└── tts/
```

O backend atua como:

- camada de orquestração
- camada de abstração de provedores
- processador de streaming
- futuro gerenciador de memória
- futuro coordenador multimodal

---

# Arquitetura de Streaming

Um dos principais conceitos já validados é:

```text
HTTP streaming
```

A implementação atual valida:

- comunicação orientada a eventos
- streaming incremental
- HTTP_EVENT_ON_DATA
- processamento assíncrono

Fases futuras evoluirão isso para:

- renderização visual em streaming
- síntese de voz streaming
- pipelines multimodais orientados a eventos

---

# Roadmap Evolutivo

| Fase | Descrição |
|---|---|
| 01 | Fundação Wi-Fi |
| 02 | Comunicação HTTP |
| 03 | Integração Cloud LLM |
| 04 | Integração Display CoreS3 Lite |
| 05 | Interação básica Echo Pyramid |
| 06 | Interação física com AtomS3R |
| 07 | Pipeline de voz |
| 08 | Integração de visão |
| 09 | IA multimodal |
| 10 | Hybrid Local LLM |

---

# Visão de Longo Prazo

O projeto pretende evoluir para:

```text
Interactive Embedded AI Runtime
```

e posteriormente:

```text
Hybrid Edge AI Architecture
```

combinando:

- inteligência em nuvem
- inferência local
- interação multimodal
- orquestração embarcada
- dispositivos edge distribuídos

---

# Filosofia da Documentação

A documentação segue:

- estilo educacional
- aprendizado incremental
- preservação arquitetural
- preservação de troubleshooting
- evolução por snapshots
- fases reproduzíveis

O projeto valoriza compreender a jornada arquitetural tanto quanto a implementação final.
