
# Backend API — LLM IoT Thin Edge

> Status: ✅ API REST + LLM Operacional Validada com Hardware ESP32 Real

---

# Visão Geral

A camada API evoluiu de um simples servidor HTTP de validação para o gateway operacional de comunicação entre dispositivos embarcados e serviços IA cloud.

Inicialmente a API validava:

- comunicação HTTP
- payloads JSON
- arquitetura REST

A API agora também valida:

- requests ESP32 reais
- respostas LLM streaming
- orquestração OpenAI
- comunicação IA assíncrona
- networking orientado eventos
- abstração IA backend
- comunicação Thin Edge AI real

---

# Filosofia da API

A camada API isola propositalmente dispositivos embarcados dos providers IA.

O ESP32 comunica apenas com:

```text
Backend API
```

O backend torna-se responsável por:

- orquestração IA
- comunicação providers
- segurança
- formatação respostas
- tratamento respostas streaming

Isso segue o conceito:

```text
Thin Edge Device + Cloud Intelligence
```

utilizando hardware ESP32 real.

---

# Arquitetura Final API

```text
ESP32
   ↓ HTTP JSON
REST API
   ↓
askLLM()
   ↓ HTTPS
OpenAI API
   ↓
Streamed LLM Response
   ↓ HTTP JSON
ESP32
```

---

# Estrutura Atual API

```text
backend/api/
├── README.md
├── README.pt-BR.md
├── server.js
├── test_llm.js
├── snapshots/
│   ├── step_01_basic_http_server.js
│   └── step_02_llm_rest_api.js
│
└── .env
```

---

# Responsabilidade Arquivos

| Arquivo | Responsabilidade |
|---|---|
| server.js | REST AI API operacional |
| test_llm.js | validação backend isolada |
| snapshots/ | histórico evolução arquitetural |
| .env | credenciais seguras |

---

# Evolução Snapshots

| Etapa | Arquivo | Descrição |
|---|---|---|
| 01 | step_01_basic_http_server.js | Validação REST básica |
| 02 | step_02_llm_rest_api.js | REST + orquestração LLM |
| 03 | server.js | REST AI API operacional |

---

# Evolução REST API

## Endpoint Inicial

```text
POST /ping
```

Objetivo:

- validar backend
- validar JSON
- validar comunicação REST

---

# Exemplo Request

```json
{
  "device": "atom_s3_lite"
}
```

---

# Exemplo Response

```json
{
  "status": "ok",
  "message": "Backend online"
}
```

---

# Endpoint IA

```text
POST /ask
```

Objetivo:

- receber prompts IA embarcados
- orquestrar requests OpenAI
- retornar respostas IA streaming

---

# Exemplo Request IA

```json
{
  "message": "What is M5Stack?"
}
```

---

# Exemplo Response IA

```json
{
  "response": "M5Stack is..."
}
```

---

# Evolução Passo a Passo

## Etapa 01 — Servidor REST Básico

O backend inicial validou:

- Express
- JSON
- POST requests
- comunicação HTTP

Isso criou a fundação para futura comunicação IA.

---

## Etapa 02 — Arquitetura AI Gateway

A API evoluiu para:

```text
REST API + AI Gateway
```

Novos conceitos introduzidos:

- async/await
- OpenAI SDK
- provider abstraction
- backend orchestration
- dotenv
- segurança API key

---

## Etapa 03 — Validação Operacional ESP32

A API foi totalmente validada utilizando:

```text
ESP32 → Backend API → OpenAI → ESP32
```

Isso validou:

- orquestração hardware real
- comunicação IA embarcada
- respostas streaming
- integração cloud AI

---

# Por Que Orquestração Backend é Importante

O firmware ESP32 NÃO conhece:

- OpenAI
- Gemini
- Ollama
- Claude

O firmware comunica apenas com:

```text
REST API
```

Esta arquitetura permite troca futura providers sem alterar firmware.

---

# Fluxo Atual Requests

```text
ESP32
   ↓
POST /ask
   ↓
REST API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
Streamed LLM Response
   ↓
ESP32
```

---

# Validação HTTP Streaming

Grandes respostas LLM chegaram em múltiplos chunks.

Isso exigiu:

- orquestração assíncrona
- tratamento payload streaming
- networking orientado eventos

O ESP32 consumiu essas respostas utilizando:

```c
HTTP_EVENT_ON_DATA
```

através callbacks orientados eventos ESP-IDF.

---

# Conceitos Importantes API

| Conceito | Descrição |
|---|---|
| REST API | camada comunicação HTTP |
| JSON | comunicação estruturada |
| Backend Proxy | camada abstração IA |
| async/await | orquestração assíncrona |
| HTTP Streaming | respostas chunked |
| Networking orientado eventos | callbacks assíncronos |
| Thin Edge | dispositivos embarcados leves |

---

# Arquitetura Segurança

A API key NUNCA permanece em:

- firmware ESP32
- screenshots
- GitHub

Arquitetura correta:

```text
ESP32 → REST API → OpenAI API
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

# Regras Segurança Git

O `.gitignore` deve conter:

```gitignore
.env
node_modules/
```

O `.env` NUNCA deve ser enviado GitHub.

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

Benefícios:

- arquitetura mais limpa
- escalabilidade
- dependências compartilhadas
- backend modular

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

Solução final:

```c
HTTP_EVENT_ON_DATA
```

através callbacks assíncronos ESP-IDF.

---

# Reflexões Importantes

Esta arquitetura API provou que dispositivos embarcados podem comunicar com poderosos sistemas IA cloud enquanto permanecem leves.

A API tornou-se com sucesso:

- gateway IA
- camada orquestração
- camada comunicação embarcada
- ponte cloud AI

---

# Validações Finais

| Funcionalidade | Status |
|---|---|
| REST API | ✅ |
| JSON Requests | ✅ |
| /ping | ✅ |
| /ask | ✅ |
| Integração OpenAI | ✅ |
| Backend Orchestration | ✅ |
| Respostas Streaming | ✅ |
| Integração ESP32 | ✅ |

---

# Estado Atual

| Componente | Status |
|---|---|
| REST API | ✅ Operacional |
| Integração OpenAI | ✅ Operacional |
| Respostas Streaming | ✅ Operacional |
| Requests ESP32 | ✅ Operacional |
| Pipeline Voz | 🚧 Planejado |

---

# Próximos Passos

- parsing JSON ESP32
- renderização display
- memória conversacional
- integração CoreS3 Lite
- integração voz futura
- evolução multimodal

---

# Visão Final

A camada API evoluiu para:

- gateway IA
- camada orquestração
- camada comunicação embarcada
- API integração multimodal
- interface Thin Edge AI operacional
