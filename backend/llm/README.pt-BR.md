# Camada Backend LLM — LLM IoT Thin Edge

> Status: 🚧 Integração OpenAI Validada

---

# Visão Geral

A camada `backend/llm/` é responsável por toda a orquestração de Inteligência Artificial do projeto.

Este subsistema isola:

- providers IA
- orquestração de prompts
- seleção de modelos
- comunicação LLM
- futura orquestração multimodal

O firmware ESP32 nunca comunica diretamente com providers cloud IA.

Ao invés disso:

```text
ESP32 → Backend API → Camada LLM → Cloud AI
```

Isso segue a filosofia arquitetural:

```text
Thin Edge Device + Cloud Intelligence
```

---

# Estrutura Atual

```text
backend/llm/
├── README.md
├── README.pt-BR.md
└── openai.js
```

---

# Por Que Esta Camada Existe

Sem uma camada de orquestração, o firmware precisaria conhecer:

- APIs providers
- autenticação
- modelos
- estruturas prompts
- lógica específica providers

Isso criaria:

- firmware complexo
- manutenção difícil
- provider lock-in
- problemas segurança

Ao invés disso, o projeto centraliza toda comunicação IA dentro do backend.

---

# Provider Atual

Provider validado:

- OpenAI API

Providers futuros planejados:

- Ollama
- Gemini
- Claude
- LLMs locais

---

# Filosofia de Abstração Providers

O ESP32 NÃO conhece:

- qual provider existe
- qual modelo está sendo usado
- como prompts são enviados

O ESP32 conhece apenas:

```text
REST API
```

Esta abstração é extremamente importante.

---

# Fluxo Atual IA

```text
ESP32
   ↓ HTTP
Backend API
   ↓
askLLM()
   ↓
OpenAI API
   ↓
LLM Response
```

---

# Arquivo Atual

```text
openai.js
```

Este arquivo centraliza toda comunicação OpenAI.

---

# Evolução Passo a Passo

## Etapa 01 — Instalar OpenAI SDK

Dentro de:

```text
backend/
```

Dependências instaladas:

```bash
npm install openai dotenv express
```

---

# Por Que dotenv?

O projeto evita propositalmente segredos hardcoded.

Ao invés de:

```javascript
const API_KEY = "sk-xxxxxxxx";
```

o projeto utiliza:

```javascript
process.env.OPENAI_API_KEY
```

Isso segue práticas profissionais backend.

---

# Etapa 02 — Criar .env

Arquivo:

```text
backend/api/.env
```

Exemplo:

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

---

# Regras Segurança

A API key NUNCA deve permanecer em:

- firmware ESP32
- screenshots
- GitHub
- commits

O arquivo `.env` NUNCA deve ser enviado.

---

# Código openai.js

Principais conceitos implementados:

```javascript
require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
```

---

# Entendendo o Código

## `dotenv`

```javascript
require("dotenv").config();
```

Carrega variáveis ambiente automaticamente.

Isso permite manipulação segura de credenciais.

---

## Cliente OpenAI

```javascript
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
```

Cria cliente de comunicação provider.

---

## askLLM()

Função atual de orquestração:

```javascript
async function askLLM(message)
```

Responsabilidades:

- receber prompts
- enviar prompts
- receber respostas
- retornar texto puro

---

# Por Que async/await é Importante

Comunicação LLM é assíncrona.

O backend espera pela resposta cloud:

```javascript
await client.chat.completions.create(...)
```

Sem async/await:

- respostas quebrariam
- ordem execução falharia
- orquestração tornaria-se instável

---

# Modelo Atual

Modelo validado:

```text
gpt-4.1-mini
```

Motivos:

- baixo custo
- respostas rápidas
- excelente para projetos educacionais
- ideal para testes orquestração backend

---

# Por Que Isolamento Modelo é Importante

O firmware ESP32 NÃO conhece o modelo.

Hoje:

```text
gpt-4.1-mini
```

Futuro:

- gpt-4.1
- gpt-4o
- modelos locais

sem alterar firmware.

---

# Troubleshooting Real

## Problema 01 — dotenv Não Encontrado

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
- dependências compartilhadas
- backend modular
- escalabilidade

---

## Problema 02 — Diretório Execução Incorreto

Erro:

```text
Cannot find module 'test_llm.js'
```

Causa:

Node.js executado da raiz repositório.

Solução:

```bash
cd backend/api
```

---

# Primeira Resposta Bem-Sucedida

```text
Sending question to LLM...

LLM Response:

An embedded system is...
```

Isso validou:

- OpenAI API
- billing
- dotenv
- camada orquestração
- integração cloud AI

---

# Conceitos Introduzidos

| Conceito | Descrição |
|---|---|
| LLM | Large Language Model |
| Provider Abstraction | isolamento IA backend |
| dotenv | variáveis ambiente seguras |
| async/await | orquestração assíncrona |
| Thin Edge | edge devices leves |
| Cloud AI | IA fora firmware |

---

# Estado Atual

| Componente | Status |
|---|---|
| Integração OpenAI | ✅ Funcionando |
| askLLM() | ✅ Funcionando |
| dotenv | ✅ Funcionando |
| Backend Orchestration | ✅ Funcionando |
| Provider Abstraction | ✅ Funcionando |

---

# Próximos Passos

Evolução futura planejada:

- system prompts
- memória conversacional
- orquestração multimodal
- entendimento imagens
- integração voz
- suporte LLM local

---

# Visão Final

A camada `llm/` está evoluindo para:

- engine orquestração IA
- camada abstração providers
- subsistema inteligência multimodal
- gateway IA cloud/local
