# Arquitetura Backend — LLM IoT Thin Edge

> Status: 🚧 Desenvolvimento Ativo

---

# Visão Geral

O backend evoluiu de um simples servidor REST para uma plataforma modular de orquestração de IA.

Originalmente o backend validava apenas:

- comunicação HTTP
- APIs REST
- payloads JSON

Agora o backend também tornou-se responsável por:

- orquestração cloud LLM
- abstração IA
- isolamento de providers
- serviços multimodais futuros
- camadas de orquestração
- segurança de APIs

Esta arquitetura segue o conceito:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Filosofia de Aprendizagem

Este projeto evolui propositalmente de forma incremental.

Cada subsistema é validado independentemente antes da integração.

A evolução backend seguiu esta ordem:

1. Backend HTTP básico
2. Validação REST API
3. Integração OpenAI
4. Orquestração backend
5. Integração futura ESP32 + LLM

Esta abordagem simplifica:

- debugging
- entendimento arquitetural
- troubleshooting
- isolamento de subsistemas

---

# Arquitetura Backend Atual

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

# Evolução dos Snapshots

| Etapa | Arquivo | Descrição |
|---|---|---|
| 01 | step_01_basic_http_server.js | Backend REST básico |
| 02 | step_02_llm_rest_api.js | REST + integração LLM |
| 03 | server.js | Backend operacional atual |

---

# Evolução Passo a Passo

## Etapa 01 — Backend HTTP Básico

Responsabilidades iniciais:

- receber requisições HTTP
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
- camada backend de abstração
- orquestração de providers
- dotenv
- segurança API key

---

# Por Que Abstração de Provider é Importante

O firmware ESP32 NÃO conhece:

- OpenAI
- Ollama
- Gemini
- Claude

O ESP32 comunica apenas com:

```text
Backend API
```

Isso permite troca de provider sem alterar firmware.

---

# Filosofia Thin Edge

O ESP32 permanece leve.

O backend centraliza:

- processamento IA
- comunicação com providers
- orquestração
- serviços multimodais
- segurança

Benefícios:

- menor custo hardware
- manutenção firmware simplificada
- arquitetura escalável
- evolução IA centralizada

---

# Arquitetura de Segurança

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

# Regras Git Importantes

O `.gitignore` deve conter:

```gitignore
.env
node_modules/
```

O arquivo `.env` NUNCA deve ser enviado ao GitHub.

---

# Fluxo Atual IA Backend

Fluxo validado atual:

```text
Node.js
    ↓
askLLM()
    ↓
OpenAI API
    ↓
Response
```

Fluxo futuro:

```text
ESP32
    ↓ HTTP
Backend API
    ↓
askLLM()
    ↓
OpenAI API
    ↓
Response
```

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

Isso melhorou:

- modularidade
- escalabilidade
- organização de dependências

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
- provider abstraction
- integração cloud AI

---

# Conceitos Introduzidos

| Conceito | Descrição |
|---|---|
| LLM | Large Language Model |
| Backend Proxy | Camada de abstração IA |
| dotenv | Variáveis ambiente |
| Thin Edge | Dispositivo edge leve |
| Cloud AI | IA fora do ESP32 |
| REST API | Orquestração HTTP |

---

# Estado Atual

| Subsistema | Status |
|---|---|
| API | ✅ Funcionando |
| Integração OpenAI | ✅ Funcionando |
| Backend LLM | ✅ Funcionando |
| STT | 🚧 Planejado |
| TTS | 🚧 Planejado |

---

# Objetivos Futuros

- pipeline voz
- IA multimodal
- integração câmera
- suporte LLM local
- hybrid edge AI

---

# Visão Final

O backend está evoluindo para:

- plataforma orquestração IA
- gateway multimodal
- camada abstração cloud
- backend inteligência embarcada
