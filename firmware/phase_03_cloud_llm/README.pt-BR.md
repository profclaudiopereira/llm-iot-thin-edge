# Fase 03 — Integração Cloud LLM

> Status: 🚧 Backend Validado

---

# Visão Geral

A Fase 03 introduz a primeira integração real de Inteligência Artificial do projeto.

As fases anteriores validaram:

- conectividade Wi‑Fi
- DHCP
- comunicação HTTP
- comunicação backend

Agora a arquitetura evolui para:

```text
ESP32 → Backend → LLM → Response
```

O objetivo é manter o ESP32 leve enquanto a inteligência executa na nuvem.

---

# Filosofia Thin Edge + Cloud LLM

Este projeto evita propositalmente executar IA diretamente no ESP32.

Ao invés disso:

- ESP32 cuida da conectividade e interação
- Backend cuida da orquestração e segurança
- Cloud LLM cuida da inteligência

Esta arquitetura é chamada:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Hardware Utilizado

- M5AtomS3 Lite
- PC Windows
- Roteador Wi‑Fi local

---

# Arquitetura

```text
[ESP32-S3]
      ↓ HTTP JSON
[Backend Node.js]
      ↓ HTTPS
[OpenAI API]
      ↓ JSON
[Backend]
      ↓ HTTP JSON
[ESP32-S3]
```

---

# Por Que Esta Arquitetura é Importante

O ESP32 NÃO se comunica diretamente com a OpenAI.

Arquitetura correta:

```text
ESP32 → Backend → OpenAI API
```

Benefícios:

- proteção da API key
- abstração de providers
- debugging simplificado
- escalabilidade
- futura troca de providers

---

# Estrutura do Backend

```text
backend/
├── api/
│   ├── test_llm.js
│   └── .env
│
├── llm/
│   └── openai.js
│
├── stt/
└── tts/
```

---

# Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| Node.js | Runtime backend |
| OpenAI SDK | Comunicação LLM |
| dotenv | Variáveis de ambiente |
| JSON | Troca de dados |
| REST | Arquitetura de API |

---

# Passo a Passo

## Etapa 01 — Criar API Key OpenAI

Criar a chave em:

OpenAI Platform → API Keys

Importante:

```text
A API key NUNCA deve ficar dentro do firmware ESP32.
```

---

## Etapa 02 — Configurar Billing

Adicionar pequeno saldo pré-pago:

- 5 USD
- 10 USD

Suficiente para testes educacionais.

---

## Etapa 03 — Instalar Dependências

Dentro de:

```text
backend/
```

executar:

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

Nunca:

- hardcodar API keys
- commitar segredos
- colocar chaves no firmware

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

# Exemplo de Lógica Backend

```javascript
require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
```

---

## Etapa 06 — Criar test_llm.js

Arquivo:

```text
backend/api/test_llm.js
```

Objetivo:

Validar comunicação LLM independentemente.

Filosofia do projeto:

```text
Validar subsistemas independentemente antes da integração.
```

---

# Troubleshooting Real

## Problema 01 — Diretório Incorreto

Erro:

```text
Cannot find module 'test_llm.js'
```

Causa:

O comando foi executado na raiz do repositório.

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

As dependências foram instaladas na camada errada do backend.

Solução:

Instalar dependências em:

```text
backend/
```

ao invés de:

```text
backend/api/
```

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
- abstração de providers

---

# Primeira Resposta LLM Bem-Sucedida

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Validado:

- acesso OpenAI API
- billing
- dotenv
- orquestração backend
- integração cloud AI

---

# Conceitos Introduzidos

| Conceito | Descrição |
|---|---|
| LLM | Large Language Model |
| Backend Proxy | Camada de abstração |
| API Security | Segredos ficam no backend |
| dotenv | Configuração de ambiente |
| Thin Edge | Dispositivo embarcado leve |
| Cloud AI | Inteligência fora do ESP32 |

---

# Estado Atual do Projeto

| Fase | Status |
|---|---|
| Fase 01 — Fundação Wi‑Fi | ✅ Completa |
| Fase 02 — Comunicação HTTP | ✅ Completa |
| Fase 03 — Integração Cloud LLM | 🚧 Backend Validado |

---

# Próximos Passos

Criar endpoint REST:

```text
POST /ask
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
