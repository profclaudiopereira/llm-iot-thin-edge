
# Arquitetura Backend — LLM IoT Thin Edge

> Status: ✅ Backend IA Operacional Validado com Hardware ESP32 Real

---

# Visão Geral

O backend evoluiu de um simples servidor REST para uma plataforma modular de orquestração IA.

Originalmente o backend validava apenas:

- comunicação HTTP
- APIs REST
- payloads JSON

O backend agora também valida:

- comunicação ESP32 real
- orquestração OpenAI
- respostas IA streaming
- abstração providers
- orquestração assíncrona
- networking orientado eventos
- integração cloud AI

Esta arquitetura segue o conceito:

```text
Thin Edge Device + Cloud Intelligence
```

utilizando hardware embarcado real.

---

# Filosofia de Aprendizagem

Este projeto evoluiu propositalmente de forma incremental.

Cada subsistema foi validado independentemente antes integração.

Ordem evolução backend:

1. Backend HTTP básico
2. Validação REST API
3. Integração OpenAI
4. Orquestração backend
5. Integração ESP32
6. Respostas IA streaming

Esta abordagem simplificou:

- debugging
- entendimento arquitetural
- troubleshooting
- isolamento subsistemas

---

# Arquitetura Backend Final

```text
ESP32
   ↓ HTTP JSON
Backend API
   ↓
Camada LLM
   ↓ HTTPS
OpenAI API
   ↓
Respostas IA Streaming
```

---

# Estrutura Backend

```text
backend/
├── README.md
├── README.pt-BR.md
│
├── api/
│   ├── server.js
│   ├── test_llm.js
│   ├── snapshots/
│   │   ├── step_01_basic_http_server.js
│   │   └── step_02_llm_rest_api.js
│   │
│   └── .env
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

# Evolução Snapshots

| Etapa | Arquivo | Descrição |
|---|---|---|
| 01 | step_01_basic_http_server.js | Backend REST básico |
| 02 | step_02_llm_rest_api.js | REST + integração LLM |
| 03 | server.js | Backend IA operacional |

---

# Evolução Passo a Passo

## Etapa 01 — Backend HTTP Básico

Responsabilidades iniciais:

- receber requests HTTP
- processar JSON
- validar arquitetura REST

Endpoint:

```text
POST /ping
```

Validado:

- Express
- comunicação JSON
- APIs REST
- comunicação backend

---

## Etapa 02 — Integração OpenAI

O backend evoluiu para:

```text
REST API + Orquestração IA
```

Novos conceitos introduzidos:

- OpenAI SDK
- async/await
- camada abstração backend
- orquestração providers
- dotenv
- segurança API key

---

## Etapa 03 — Validação ESP32 + Cloud AI

O backend foi totalmente validado utilizando:

```text
ESP32 → Backend → OpenAI → ESP32
```

Isso confirmou:

- orquestração hardware real
- comunicação REST embarcada
- respostas streaming
- integração cloud AI

---

# Por Que Abstração Provider é Importante

O firmware ESP32 NÃO conhece:

- OpenAI
- Ollama
- Gemini
- Claude

O ESP32 comunica apenas com:

```text
Backend API
```

Isso permite troca provider sem alterar firmware.

---

# Filosofia Thin Edge

O ESP32 permaneceu leve.

O backend centralizou:

- processamento IA
- comunicação providers
- orquestração
- serviços multimodais
- segurança

Benefícios:

- menor custo hardware
- manutenção firmware simplificada
- arquitetura escalável
- evolução IA centralizada

---

# Respostas IA Streaming

O backend validou comunicação IA streaming.

Grandes respostas chegaram em múltiplos chunks.

Isso exigiu:

- orquestração assíncrona
- networking orientado eventos
- tratamento payload streaming

O ESP32 consumiu essas respostas através:

```c
HTTP_EVENT_ON_DATA
```

utilizando callbacks assíncronos ESP-IDF.

---

# Arquitetura Segurança

API keys NUNCA permanecem em:

- firmware
- ESP32
- GitHub

Arquitetura correta:

```text
ESP32 → Backend → OpenAI API
```

Arquitetura incorreta:

```text
ESP32 → OpenAI API
```

---

# Variáveis Ambiente

Credenciais sensíveis permanecem em:

```text
.env
```

Exemplo:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Regras Git Importantes

O `.gitignore` deve conter:

```gitignore
.env
node_modules/
```

O arquivo `.env` NUNCA deve ser enviado GitHub.

---

# Fluxo IA Backend

Fluxo operacional validado:

```text
ESP32
    ↓ HTTP
Backend API
    ↓
askLLM()
    ↓
OpenAI API
    ↓
Resposta Streaming
    ↓
ESP32
```

---

# Troubleshooting Real

## Problema 01 — Diretório Node.js Incorreto

Erro:

```text
Cannot find module 'test_llm.js'
```

Causa:

Execução diretório incorreto.

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

Dependências instaladas camada backend incorreta.

---

# Melhoria Arquitetural

O backend evoluiu de:

```text
backend/api/node_modules
```

para:

```text
backend/node_modules
```

Isso melhorou:

- modularidade
- escalabilidade
- organização dependências

---

## Problema 03 — Backend Não Executando

Sintoma:

```text
HTTP timeout
```

Causa:

ESP32 tentou comunicação antes startup backend.

Solução:

```bash
node server.js
```

---

## Problema 04 — Resposta HTTP Bloqueante

Causa:

Tratamento resposta bloqueante incorreto.

Solução:

```c
HTTP_EVENT_ON_DATA
```

através callbacks orientados eventos ESP-IDF.

---

# Reflexões Importantes

Esta arquitetura backend provou que sistemas embarcados podem permanecer leves enquanto utilizam poderosos sistemas IA cloud.

O backend tornou-se com sucesso:

- camada orquestração IA
- camada abstração providers
- fundação multimodal
- gateway IA embarcado

---

# Conceitos Introduzidos

| Conceito | Descrição |
|---|---|
| LLM | Large Language Model |
| Backend Proxy | camada abstração IA |
| dotenv | variáveis ambiente |
| Thin Edge | dispositivo edge leve |
| Cloud AI | IA fora ESP32 |
| REST API | orquestração HTTP |
| HTTP Streaming | respostas chunked |
| Networking orientado eventos | callbacks assíncronos |

---

# Validações Finais

| Funcionalidade | Status |
|---|---|
| REST API | ✅ |
| Integração OpenAI | ✅ |
| Comunicação ESP32 | ✅ |
| Respostas Streaming | ✅ |
| Backend Orchestration | ✅ |
| Provider Abstraction | ✅ |
| Arquitetura Thin Edge | ✅ |

---

# Estado Atual

| Subsistema | Status |
|---|---|
| API | ✅ Operacional |
| Integração OpenAI | ✅ Operacional |
| Backend LLM | ✅ Operacional |
| STT | 🚧 Planejado |
| TTS | 🚧 Planejado |

---

# Objetivos Futuros

- pipeline voz
- IA multimodal
- display CoreS3 Lite
- integração câmera
- suporte LLM local
- hybrid edge AI

---

# Visão Final

O backend evoluiu para:

- plataforma orquestração IA
- gateway multimodal
- camada abstração cloud
- backend inteligência embarcada
- plataforma Thin Edge AI operacional
