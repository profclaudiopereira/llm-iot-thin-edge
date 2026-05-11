# Phase 04 — Planejamento do Display Runtime

# LLM IoT Thin Edge

Este documento descreve o planejamento e os objetivos arquiteturais da:

```text
phase_04_display_runtime
```

Esta fase introduz a primeira camada de runtime visual embarcado do projeto utilizando o M5Stack CoreS3 Lite.

---

# Objetivo da Fase

O principal objetivo desta fase é transformar o projeto de:

```text
ESP32 + Cloud LLM
```

para:

```text
Interactive Embedded AI Runtime
```

através de renderização visual em tempo real no display embarcado.

---

# Principais Conceitos Introduzidos

Esta fase introduz diversos conceitos importantes de runtime embarcado com IA:

- renderização em display
- respostas visuais streaming
- runtime UI
- renderização assíncrona
- atualização visual orientada a eventos
- feedback visual embarcado
- visualização de estados do runtime

---

# Device Principal

Device principal utilizado nesta fase:

- CoreS3 Lite

Principais recursos explorados:

- display integrado
- interface touch
- ESP32-S3
- PSRAM
- runtime visual embarcado

Documentação oficial:

https://docs.m5stack.com/en/core/CoreS3-Lite

---

# Evolução Arquitetural

Arquitetura anterior:

```text
ESP32
   ↓
Backend
   ↓
LLM Provider
```

Nova arquitetura introduzida nesta fase:

```text
ESP32 Runtime
   ↓
Display Runtime Layer
   ↓
Backend
   ↓
LLM Provider
```

---

# Objetivos da Fase

## Objetivo 01

Inicializar e validar o display do CoreS3 Lite.

---

## Objetivo 02

Renderizar textos estáticos e estados do runtime.

Exemplos:

```text
WiFi Connected
Backend Online
Requesting LLM...
```

---

## Objetivo 03

Exibir respostas do LLM localmente no device.

---

## Objetivo 04

Implementar renderização incremental streaming.

Exemplo:

```text
H
He
Hel
Hell
Hello
```

sem esperar a resposta completa.

---

## Objetivo 05

Preparar o projeto para futuras interações multimodais.

Esta fase se torna a base visual para:

- interação por voz
- IA multimodal
- dashboards locais
- monitoramento do runtime
- interação touch

---

# Estratégia de Desenvolvimento

A fase evoluirá incrementalmente.

Cada etapa deve permanecer funcional e reproduzível.

---

# Etapas Incrementais Recomendadas

## Step 01 — Inicialização do Display

Objetivos:

- inicializar display
- validar renderização
- validar fontes
- validar atualização da tela

Resultado esperado:

```text
Hello CoreS3 Lite
```

---

## Step 02 — Renderização de Status

Objetivos:

- renderizar estado do Wi‑Fi
- renderizar estado do backend
- renderizar informações de conexão

Resultado esperado:

```text
WiFi Connected
API Online
```

---

## Step 03 — Renderização de Respostas LLM

Objetivos:

- renderizar respostas do backend
- exibir respostas completas
- validar renderização de texto

---

## Step 04 — Renderização Streaming

Objetivos:

- renderizar chunks streaming
- atualizar display incrementalmente
- preservar responsividade

Esta etapa valida o conceito de:

```text
Streaming Embedded Runtime
```

---

## Step 05 — Runtime UI com Scroll

Objetivos:

- implementar scroll
- preservar mensagens anteriores
- gerenciar espaço do display

---

## Step 06 — Gerenciamento de Estados

Objetivos:

- criar estados da aplicação
- melhorar organização da UI
- preparar interação multimodal

Estados sugeridos:

```text
BOOT
CONNECTING_WIFI
CONNECTED
REQUESTING_LLM
STREAMING
IDLE
ERROR
```

---

# Arquitetura Recomendada

Esta fase deve começar a separar responsabilidades.

Estrutura futura recomendada:

```text
display_task
network_task
llm_task
ui_renderer
```

Isso melhora:

- escalabilidade
- responsividade
- modularidade
- debugging

---

# Conceitos Técnicos Importantes

## Streaming-first Design

A UI deve renderizar os dados progressivamente.

---

## Renderização Orientada a Eventos

Evitar loops bloqueantes.

---

## Comunicação Baseada em Filas

Etapas futuras podem introduzir:

```text
HTTP_EVENT_ON_DATA
        ↓
Queue
        ↓
Display Renderer
```

---

# Estratégia de Snapshots

Os snapshots devem preservar os principais marcos de aprendizado.

Exemplos sugeridos:

```text
step_01_display_init_main.c
step_02_runtime_status_main.c
step_03_llm_display_main.c
step_04_streaming_render_main.c
step_05_scroll_runtime_main.c
```

---

# Objetivos Educacionais

Esta fase ajuda a introduzir:

- conceitos de UI embarcada
- renderização assíncrona
- interação streaming
- arquitetura de runtime embarcado
- design orientado a eventos
- organização runtime FreeRTOS

---

# Resultado Final Esperado

Ao final desta fase o projeto deverá suportar:

- renderização visual em tempo real
- respostas LLM streaming
- visualização de estados do runtime
- renderização incremental
- interação visual embarcada

Esta fase representa a transição de:

```text
ESP32 demo
```

para:

```text
Embedded AI Runtime Platform
```
