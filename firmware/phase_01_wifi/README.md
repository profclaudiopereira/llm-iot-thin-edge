# Phase 01 — Wi-Fi Foundation

## Overview

This phase establishes the ESP-IDF development environment and validates the minimum firmware execution pipeline on the ESP32-S3 platform.

The objective is not AI yet.

Instead, this phase focuses on:
- ESP-IDF setup
- Build system validation
- Serial monitor communication
- FreeRTOS task execution
- Watchdog behavior
- Logging infrastructure
- Future Wi-Fi foundation

---

## Hardware

- M5AtomS3 Lite

---

## Concepts Introduced

### ESP-IDF
Official Espressif IoT Development Framework.

### FreeRTOS
Real-time operating system used internally by ESP-IDF.

### Watchdog Timer (WDT)
Protection mechanism that detects blocked tasks.

### Serial Monitor
Primary debugging interface for embedded firmware.

---

## Initial Lessons Learned

A busy infinite loop:

```c
while(1)
{
}
```

causes the task watchdog to trigger because the scheduler cannot execute idle tasks properly.

Correct approach:

```c
while(1)
{
    vTaskDelay(pdMS_TO_TICKS(1000));
}
```

---

## Current Status

Validated:
- ESP-IDF installation
- Build pipeline
- Flash pipeline
- Serial monitor
- FreeRTOS execution
- Watchdog behavior

Next step:
- Real Wi-Fi connection

---