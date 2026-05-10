# Arquitetura Backend — LLM IoT Thin Edge

> Status: 🚧 Desenvolvimento Ativo

---

# Visão Geral

O backend deste projeto evoluiu de um simples servidor HTTP para uma plataforma modular de orquestração de IA.

O backend tornou-se responsável por:

- APIs REST
- orquestração de LLM cloud
- processamento futuro de voz
- pipelines multimodais futuros
- abstração de segurança
- abstração de providers IA

Esta arquitetura segue o conceito de:

Thin Edge Device + Cloud Intelligence

---

# Filosofia do Backend

Os dispositivos ESP32 permanecem leves.

O backend centraliza:

- processamento IA
- comunicação com providers
- orquestração
- segurança
- serviços multimodais

Isso mantém os dispositivos embarcados:

- mais simples
- mais baratos
- mais fáceis de manter
- escaláveis

---

# Arquitetura Backend

```text
ESP32
   ↓ HTTP
Backend API
   ↓
LLM / STT / TTS
   ↓
Serviços Cloud AI
```

---

# Estrutura Atual do Backend

```text
backend/
├── README.md
├── README.pt-BR.md
│
├── api/
├── llm/
├── stt/
└── tts/
```

---

# Responsabilidade das Pastas

## api/

Camada REST de comunicação.

Responsabilidades:

- endpoints HTTP
- validação de requests
- comunicação JSON
- integração com edge devices

Exemplos:

- POST /ping
- POST /ask

---

## llm/

Camada de orquestração de Large Language Models.

Responsabilidades:

- integração OpenAI
- gerenciamento de prompts
- abstração de providers
- orquestração IA

Provider atual:

- OpenAI API

Providers futuros:

- Ollama
- Gemini
- Claude
- LLMs locais

---

## stt/

Camada speech-to-text.

Responsabilidades futuras:

- processamento de microfone
- transcrição de áudio
- reconhecimento de comandos de voz

Hardware planejado:

- Echo Pyramid

---

## tts/

Camada text-to-speech.

Responsabilidades futuras:

- síntese de voz
- geração de respostas em áudio
- assistentes embarcados

---

# Por Que Esta Arquitetura é Importante

Este design modular fornece:

- escalabilidade
- independência de provider
- debugging simplificado
- isolamento de subsistemas
- suporte multimodal futuro

---

# Arquitetura Thin Edge

O ESP32 NÃO executa workloads pesados de IA.

Ao invés disso:

```text
ESP32 → Backend → Cloud AI
```

Benefícios:

- menor custo de hardware
- firmware mais simples
- atualizações facilitadas
- orquestração IA centralizada

---

# Filosofia de Segurança

As API keys NUNCA permanecem dentro do firmware.

Correto:

```text
ESP32 → Backend → OpenAI API
```

Errado:

```text
ESP32 → OpenAI API
```

---

# Variáveis de Ambiente

Credenciais sensíveis permanecem em:

```text
.env
```

Exemplo:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Regra Importante Git

O arquivo `.env` NUNCA deve ser enviado ao GitHub.

O `.gitignore` deve conter:

```gitignore
.env
```

---

# Evolução do Desenvolvimento

## Phase 01

Validado:

- ESP-IDF
- FreeRTOS
- Wi‑Fi
- DHCP

---

## Phase 02

Validado:

- comunicação HTTP
- backend REST
- payloads JSON

---

## Phase 03

Validado:

- OpenAI API
- dotenv
- orquestração backend
- respostas LLM

---

# Fluxo Atual de IA

```text
Node.js
    ↓
askLLM()
    ↓
OpenAI API
    ↓
Response
```

---

# Problemas Reais Encontrados

## Problema 01 — Diretório Incorreto Node.js

Erro:

```text
Cannot find module 'test_llm.js'
```

Causa:

Execução em diretório incorreto.

Solução:

```bash
cd backend/api
```

---

## Problema 02 — dotenv Não Encontrado

Causa:

Dependências instaladas na camada incorreta.

Evolução arquitetural:

```text
backend/api/node_modules
```

tornou-se:

```text
backend/node_modules
```

Isso melhorou a modularidade backend.

---

# Estado Atual

| Subsistema | Status |
|---|---|
| API | Funcionando |
| Integração OpenAI | Funcionando |
| Backend LLM | Funcionando |
| STT | Planejado |
| TTS | Planejado |

---

# Objetivos Futuros

- pipeline de voz
- IA multimodal
- integração câmera
- suporte LLM local
- hybrid edge AI

---

# Visão Final

O backend está evoluindo para:

- plataforma de orquestração IA
- gateway multimodal
- camada de inteligência embarcada
- sistema de abstração cloud
