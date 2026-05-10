# docs/phases/README.pt-BR.md

# LLM IoT Thin Edge — Fases de Desenvolvimento

Esta seção documenta a evolução incremental das fases do projeto.

O projeto segue uma estratégia arquitetural progressiva onde cada fase representa um marco funcional e isolado.

---

# Filosofia das Fases

Cada fase deve:

- ser reproduzível independentemente
- preservar aprendizados anteriores
- evitar quebrar implementações anteriores
- validar funcionalidades em hardware real
- documentar histórico de troubleshooting
- preservar evolução arquitetural

---

# Fluxo Atual de Desenvolvimento

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
IA Multimodal
   ↓
Hybrid Local AI
```

---

# Fases Planejadas

| Fase | Nome | Objetivo Principal |
|---|---|---|
| 01 | Fundação Wi-Fi | Inicialização Wi‑Fi e conectividade ESP32 |
| 02 | Comunicação HTTP | Comunicação REST API e cliente HTTP |
| 03 | Integração Cloud LLM | Integração OpenAI e respostas streaming |
| 04 | Integração Display CoreS3 Lite | Runtime visual embarcado e renderização streaming |
| 05 | Interação básica Echo Pyramid | Primeiros experimentos de interação por voz |
| 06 | Interação física com AtomS3R | Interação embarcada e controles de runtime |
| 07 | Pipeline de voz | Integração de pipeline STT/TTS |
| 08 | Integração de visão | Integração de câmera e IA visual |
| 09 | IA multimodal | Orquestração combinada de voz, visão e LLM |
| 10 | Hybrid Local LLM | Inferência local e experimentos híbridos |

---

# Organização das Fases

Estrutura recomendada:

```text
docs/phases/
├── phase_01_wifi.md
├── phase_02_http.md
├── phase_03_cloud_llm.md
├── phase_04_display.md
└── futuras fases
```

---

# Evolução do Firmware

O firmware evolui incrementalmente:

```text
firmware/
├── phase_01_wifi/
├── phase_02_http/
├── phase_03_cloud_llm/
├── phase_04_display/
└── futuras fases
```

---

# Evolução do Backend

Os serviços backend evoluem modularmente:

```text
backend/
├── api/
├── llm/
├── stt/
├── tts/
└── futuros serviços
```

---

# Filosofia de Snapshots

O projeto preserva marcos importantes de aprendizado utilizando snapshots.

Exemplos:

```text
step_01_wifi_http_base_main.c
step_02_llm_request_main.c
step_03_llm_response_main.c
```

Os snapshots ajudam a preservar:

- histórico de troubleshooting
- decisões arquiteturais
- evolução do aprendizado
- comparação entre implementações

---

# Filosofia Educacional

O projeto prioriza:

- documentação didática
- clareza arquitetural
- aprendizado incremental
- validação em hardware real
- experimentação prática

O objetivo não é apenas construir o sistema final, mas também documentar toda a jornada de engenharia.
