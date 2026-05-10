# Backend API — LLM IoT Thin Edge

> Status: 🚧 REST + LLM em Desenvolvimento Ativo

---

# Visão Geral

A camada API evoluiu de um simples servidor HTTP de validação para o gateway de comunicação entre dispositivos embarcados e serviços cloud de IA.

Inicialmente a API validava:

- comunicação HTTP
- payloads JSON
- arquitetura REST

Agora a API também orquestra:

- comunicação LLM
- requisições IA backend
- abstração de providers
- serviços multimodais futuros

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
- formatação de respostas

Isso segue o conceito:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Arquitetura Atual da API

```text
ESP32
   ↓ HTTP JSON
REST API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
LLM Response
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

# Responsabilidade dos Arquivos

| Arquivo | Responsabilidade |
|---|---|
| server.js | REST API operacional |
| test_llm.js | validação backend isolada |
| snapshots/ | histórico evolução arquitetural |
| .env | credenciais seguras |

---

# Evolução dos Snapshots

| Etapa | Arquivo | Descrição |
|---|---|---|
| 01 | step_01_basic_http_server.js | Validação REST básica |
| 02 | step_02_llm_rest_api.js | REST + orquestração LLM |
| 03 | server.js | API operacional atual |

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

# Endpoint IA Atual

```text
POST /ask
```

Objetivo:

- receber perguntas
- orquestrar IA
- retornar respostas LLM

---

# Exemplo Request IA

```json
{
  "message": "What is FreeRTOS?"
}
```

---

# Exemplo Response IA

```json
{
  "response": "FreeRTOS is..."
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

## Etapa 02 — Orquestração IA Backend

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

Esta arquitetura permite troca futura de providers sem alterar firmware.

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
LLM Response
```

---

# Conceitos Importantes API

| Conceito | Descrição |
|---|---|
| REST API | camada comunicação HTTP |
| JSON | comunicação estruturada |
| Backend Proxy | camada abstração IA |
| async/await | orquestração assíncrona |
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

O `.env` NUNCA deve ser enviado ao GitHub.

---

# Troubleshooting Real

## Problema 01 — Diretório Node.js Incorreto

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

Erro:

```text
Cannot find module 'dotenv'
```

Causa:

Dependências instaladas na camada backend incorreta.

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

# Primeira Resposta LLM Bem-Sucedida

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Validado:

- OpenAI API
- backend orchestration
- dotenv
- provider abstraction
- AI REST API

---

# Estado Atual

| Funcionalidade | Status |
|---|---|
| REST API | ✅ Funcionando |
| JSON Requests | ✅ Funcionando |
| /ping | ✅ Funcionando |
| /ask | ✅ Funcionando |
| Integração OpenAI | ✅ Funcionando |
| Backend Orchestration | ✅ Funcionando |

---

# Próximos Passos

- integrar ESP32 com /ask
- parsing JSON no ESP32
- exibir respostas IA
- integração voz futura
- evolução multimodal

---

# Visão Final

A camada API está evoluindo para:

- gateway IA
- camada orquestração
- camada comunicação embarcada
- API integração multimodal
