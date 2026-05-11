# Phase 04 — Display Runtime Planning

# LLM IoT Thin Edge

This document describes the planning and architectural goals for:

```text
phase_04_display_runtime
```

This phase introduces the first embedded visual runtime layer of the project using the M5Stack CoreS3 Lite.

---

# Phase Goal

The main goal of this phase is to transform the project from:

```text
ESP32 + Cloud LLM
```

into:

```text
Interactive Embedded AI Runtime
```

through real-time visual rendering on the embedded display.

---

# Main Concepts Introduced

This phase introduces several important embedded AI runtime concepts:

- display rendering
- streamed visual responses
- runtime UI
- asynchronous rendering
- event-driven display updates
- embedded interaction feedback
- runtime state visualization

---

# Main Device

Primary device used in this phase:

- CoreS3 Lite

Main hardware resources explored:

- integrated display
- touch interface
- ESP32-S3
- PSRAM
- embedded runtime UI

Official documentation:

https://docs.m5stack.com/en/core/CoreS3-Lite

---

# Architectural Evolution

Previous architecture:

```text
ESP32
   ↓
Backend
   ↓
LLM Provider
```

New architecture introduced in this phase:

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

# Phase Objectives

## Objective 01

Initialize and validate the CoreS3 Lite display.

---

## Objective 02

Render static text and runtime states.

Examples:

```text
WiFi Connected
Backend Online
Requesting LLM...
```

---

## Objective 03

Display LLM responses locally on the device.

---

## Objective 04

Implement streamed incremental rendering.

Example:

```text
H
He
Hel
Hell
Hello
```

instead of waiting for the complete response.

---

## Objective 05

Prepare the project for future multimodal interaction.

This phase becomes the visual foundation for:

- voice interaction
- multimodal AI
- local dashboards
- runtime monitoring
- touch interaction

---

# Development Strategy

The phase will evolve incrementally.

Each step must remain functional and reproducible.

---

# Recommended Incremental Steps

## Step 01 — Display Initialization

Goals:

- initialize display
- validate rendering
- validate fonts
- validate display refresh

Expected result:

```text
Hello CoreS3 Lite
```

---

## Step 02 — Runtime Status Rendering

Goals:

- render Wi-Fi state
- render backend state
- render connection information

Expected result:

```text
WiFi Connected
API Online
```

---

## Step 03 — LLM Response Rendering

Goals:

- render backend response
- display complete responses
- validate text rendering

---

## Step 04 — Streaming Rendering

Goals:

- render streamed chunks
- update display incrementally
- preserve responsiveness

This step validates the concept of:

```text
Streaming Embedded Runtime
```

---

## Step 05 — Scrollable Runtime UI

Goals:

- implement scrolling
- preserve previous messages
- manage display space

---

## Step 06 — Runtime State Management

Goals:

- create application states
- improve UI organization
- prepare for multimodal interaction

Suggested states:

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

# Recommended Architecture

This phase should begin separating responsibilities.

Recommended future structure:

```text
display_task
network_task
llm_task
ui_renderer
```

This improves:

- scalability
- responsiveness
- modularity
- debugging

---

# Important Technical Concepts

## Streaming-first Design

The UI should progressively render incoming data.

---

## Event-driven Rendering

Avoid blocking rendering loops.

---

## Queue-based Communication

Future steps may introduce:

```text
HTTP_EVENT_ON_DATA
        ↓
Queue
        ↓
Display Renderer
```

---

# Snapshot Strategy

Snapshots should preserve major learning milestones.

Suggested examples:

```text
step_01_display_init_main.c
step_02_runtime_status_main.c
step_03_llm_display_main.c
step_04_streaming_render_main.c
step_05_scroll_runtime_main.c
```

---

# Educational Goals

This phase helps introduce:

- embedded UI concepts
- asynchronous rendering
- streamed interaction
- embedded runtime architecture
- event-driven design
- FreeRTOS runtime organization

---

# Expected Final Result

At the end of this phase the project should support:

- real-time display rendering
- streamed LLM responses
- runtime state visualization
- incremental rendering
- embedded visual interaction

This phase represents the transition from:

```text
ESP32 demo
```

to:

```text
Embedded AI Runtime Platform
```
