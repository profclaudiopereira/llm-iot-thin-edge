# Fase 03 — Integração Cloud LLM

> Status: 🚧 Backend + LLM Validados

---

# Visão Geral

A Fase 03 introduz a primeira integração real de Inteligência Artificial do projeto.

A arquitetura evoluiu de:

```text
ESP32 → Backend
```

para:

```text
ESP32 → Backend → LLM → Response
```

Esta fase valida o conceito de:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Filosofia de Aprendizagem

Este projeto evolui propositalmente de forma incremental.

Cada subsistema é validado independentemente antes da integração.

Isso evita:

- problemas ocultos
- debugging complexo
- confusão arquitetural

A ordem atual de desenvolvimento é:

1. Fundação Wi‑Fi
2. Comunicação HTTP
3. Backend API
4. Orquestração LLM
5. Integração ESP32 + LLM

---

# Arquitetura Atual

```text
[ESP32-S3]
      ↓ HTTP JSON
[Backend API]
      ↓
[LLM Orchestration]
      ↓ HTTPS
[OpenAI API]
      ↓
[LLM Response]
```

---

# Hardware Utilizado

- M5AtomS3 Lite
- PC Windows
- Roteador Wi‑Fi local

---

# Arquitetura Backend

```text
backend/
├── README.md
├── README.pt-BR.md
│
├── api/
│   ├── server.js
│   ├── test_llm.js
│   └── snapshots/
│
├── llm/
│   └── openai.js
│
├── stt/
└── tts/
```

---

# Responsabilidades Backend

| Camada | Responsabilidade |
|---|---|
| api | comunicação REST |
| llm | orquestração IA |
| stt | speech-to-text futuro |
| tts | text-to-speech futuro |

---

# Evolução dos Snapshots

| Etapa | Arquivo | Descrição |
|---|---|---|
| 01 | step_01_basic_http_server.js | Backend REST básico |
| 02 | step_02_llm_rest_api.js | REST + integração LLM |
| 03 | server.js | Backend operacional atual |

---

# Desenvolvimento Passo a Passo

## Etapa 01 — Criar API Key OpenAI

A API key OpenAI foi criada separadamente da assinatura ChatGPT web.

Aprendizado importante:

```text
Planos ChatGPT e billing OpenAI API são serviços diferentes.
```

---

## Etapa 02 — Configurar Billing

Foi configurado pequeno saldo pré-pago.

Recomendado:

- 5 USD
- 10 USD

Suficiente para projetos educacionais.

---

## Etapa 03 — Instalar Dependências

Dentro de:

```text
backend/
```

Executar:

```bash
npm install openai dotenv express
```

---

## Etapa 04 — Criar .env

Dentro de:

```text
backend/api/.env
```

Conteúdo:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Regras de Segurança

O arquivo `.env` NUNCA deve ser enviado ao GitHub.

Adicionar ao `.gitignore`:

```gitignore
.env
```

A API key NUNCA deve permanecer em:

- firmware
- ESP32
- GitHub
- screenshots

---

## Etapa 05 — Criar openai.js

Arquivo:

```text
backend/llm/openai.js
```

Responsabilidades:

- conectar à OpenAI
- enviar prompts
- receber respostas
- isolar lógica do provider

---

# Por Que Abstração de Provider é Importante

O ESP32 NÃO conhece qual provider IA existe.

Hoje:

- OpenAI

Futuro:

- Ollama
- Gemini
- Claude
- LLMs locais

sem alterar firmware.

---

## Etapa 06 — Criar test_llm.js

Arquivo:

```text
backend/api/test_llm.js
```

Objetivo:

Validar comunicação LLM independentemente antes da integração ESP32.

---

# Evolução da REST API

## Backend Inicial

```text
POST /ping
```

Validou:

- REST
- JSON
- Express
- comunicação HTTP

---

## Backend Atual

```text
POST /ask
```

Validou:

- integração OpenAI
- orquestração assíncrona
- respostas IA
- camada backend de abstração

---

# Troubleshooting Real

## Problema 01 — Diretório Incorreto

Erro:

```text
Cannot find module 'test_llm.js'
```

Causa:

Execução na raiz do repositório.

Solução:

```bash
cd backend/api
```

---

## Problema 02 — dotenv Não Encontrado

Erro:

```text
Cannot find module 'dotenv'
```

Causa:

Dependências instaladas na camada backend incorreta.

Melhoria arquitetural:

```text
backend/api/node_modules
```

tornou-se:

```text
backend/node_modules
```

Isso melhorou modularidade e escalabilidade.

---

# Primeira Resposta LLM Bem-Sucedida

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Validado:

- OpenAI API
- dotenv
- backend orchestration
- integração cloud AI

---

# Conceitos Introduzidos

| Conceito | Descrição |
|---|---|
| LLM | Large Language Model |
| Thin Edge | Dispositivo embarcado leve |
| Backend Proxy | Camada de abstração IA |
| dotenv | Variáveis de ambiente |
| Cloud AI | Inteligência fora do ESP32 |
| REST API | Orquestração HTTP |

---

# Estado Atual do Projeto

| Fase | Status |
|---|---|
| Fase 01 — Fundação Wi‑Fi | ✅ Completa |
| Fase 02 — Comunicação HTTP | ✅ Completa |
| Fase 03 — Integração Cloud LLM | 🚧 Backend validado |

---

# Próximo Passo

Integrar ESP32 com:

```text
POST /ask
```

Fluxo futuro:

```text
ESP32
   ↓
Backend API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
Response
```
