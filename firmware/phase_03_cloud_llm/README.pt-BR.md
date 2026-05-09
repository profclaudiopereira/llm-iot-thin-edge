# README.pt-BR.md (Português)

# Fase 03 — Integração Cloud LLM

> Status: 🚧 Em andamento

---

# Visão Geral

Esta fase introduz integração real entre o dispositivo ESP32-S3 e uma Large Language Model (LLM) baseada em nuvem.

O objetivo é evoluir a arquitetura de:

```text
ESP32 → Backend
```

para:

```text
ESP32 → Backend → LLM → Response
```

Esta é a primeira fase real de Inteligência Artificial do projeto.

---

# Objetivo Principal

O dispositivo ESP32 irá:

1. Enviar uma pergunta ao backend
2. O backend encaminhará a requisição para uma LLM cloud
3. O backend receberá a resposta da LLM
4. O backend retornará a resposta ao ESP32
5. O ESP32 exibirá a resposta no monitor serial

---

# Hardware Utilizado

- M5AtomS3 Lite
- PC Windows
- Roteador Wi‑Fi local

---

# Por Que Continuar Usando o AtomS3 Lite?

Esta fase propositalmente mantém o hardware simples.

O objetivo é demonstrar o conceito de:

> Thin Edge Device + Cloud Intelligence

O dispositivo permanece leve e barato enquanto a inteligência executa na nuvem.

---

# Arquitetura

```text
[ESP32-S3]
      ↓ HTTP JSON
[Backend Node.js]
      ↓ HTTPS
[Cloud LLM API]
      ↓ JSON
[Backend]
      ↓ HTTP JSON
[ESP32-S3]
```

---

# Responsabilidade de Cada Camada

| Camada | Responsabilidade |
|---|---|
| ESP32 | Comunicação de rede e interação |
| Backend | Orquestração e segurança |
| LLM Provider | Processamento de IA |

---

# Conceito Importante de Segurança

## A API key NUNCA deve ficar dentro do ESP32.

A chave permanecerá apenas no backend.

Arquitetura correta:

```text
ESP32 → Backend → LLM API
```

Arquitetura incorreta:

```text
ESP32 → LLM API diretamente
```

---

# Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| ESP-IDF | Framework embarcado |
| Node.js | Runtime backend |
| Express | Servidor REST |
| OpenAI API | Provedor LLM |
| JSON | Troca de dados |

---

# Estrutura do Projeto

```text
firmware/
└── phase_03_cloud_llm/
    ├── main/
    ├── README.md
    ├── README.pt-BR.md
    ├── CMakeLists.txt
    └── sdkconfig
```

Backend:

```text
backend/api/
├── llm/
│   └── openai.js
├── server.js
├── package.json
└── README.md
```

---

# Plano Passo a Passo

## Etapa 01 — Criar o Novo Projeto ESP-IDF

Criar:

```text
firmware/phase_03_cloud_llm/
```

Esta fase NÃO pode quebrar as fases anteriores.

---

## Etapa 02 — Criar o Módulo Backend da LLM

Criar:

```text
backend/api/llm/openai.js
```

Este módulo isolará toda a lógica de comunicação com a LLM.

---

## Etapa 03 — Configurar a API Key OpenAI

A chave ficará apenas no backend.

Exemplo:

```javascript
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
```

---

## Etapa 04 — Criar Novo Endpoint Backend

Novo endpoint:

```text
POST /ask
```

---

## Etapa 05 — ESP32 Envia Pergunta

Exemplo:

```json
{
  "message": "What is FreeRTOS?"
}
```

---

## Etapa 06 — Backend Chama a LLM

O backend encaminha a pergunta ao provedor LLM.

---

## Etapa 07 — Backend Retorna Resposta

Exemplo:

```json
{
  "response": "FreeRTOS is a real-time operating system..."
}
```

---

## Etapa 08 — ESP32 Exibe Resposta

O ESP32 imprime a resposta utilizando:

```c
ESP_LOGI()
```

---

# Fluxo Final Esperado

```text
ESP32:
"What is an embedded system?"

↓

Resposta LLM:
"An embedded system is a dedicated computer system..."
```

---

# Conceitos Importantes Aprendidos

Esta fase introduz:

- arquitetura cloud AI
- orquestração de LLM
- padrão backend proxy
- segurança de API
- parsing de JSON
- fluxos request/response de IA

---

# Regras Desta Fase

- Não quebrar fases anteriores
- Manter firmware isolado
- Não expor API keys
- Manter ESP32 leve
- Utilizar backend como camada de orquestração

---

# Evolução Futura

Esta fase prepara o projeto para:

- assistentes de voz
- pipelines de áudio
- sistemas de visão
- IA multimodal
- integração de LLM local

