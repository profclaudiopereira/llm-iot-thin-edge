# Phase 01 — Wi‑Fi Foundation

> Status: ✅ Complete

---

# Overview

Phase 01 establishes the complete embedded firmware foundation used by all future phases of the project.

This phase intentionally focuses on:

- ESP-IDF fundamentals
- FreeRTOS basics
- Embedded debugging
- Event-driven architecture
- Wi‑Fi networking
- DHCP/IP acquisition
- Real hardware validation

The objective is NOT Artificial Intelligence yet.

Instead, the goal is to create a stable and professional embedded networking foundation for future cloud and LLM integrations.

---

# Hardware Used

- M5AtomS3 Lite
- Windows PC
- USB-C cable
- Local Wi‑Fi router

---

# Final Architecture

```text
[ESP32-S3]
      ↓
Wi‑Fi Router
      ↓
DHCP
      ↓
IP Address
```

---

# Learning Philosophy

This project intentionally avoids “magic code”.

The firmware was developed incrementally to help new developers understand:

- why each subsystem exists
- how ESP-IDF works internally
- how networking works on embedded devices
- how to debug real problems

---

# Project Structure

```text
phase_01_wifi/
├── main/
├── snapshots/
│   ├── step_01_basic_foundation_main.c
│   ├── step_02_wifi_base_main.c
│   └── step_03_network_ready_main.c
├── README.md
├── README.pt-BR.md
├── CMakeLists.txt
└── sdkconfig
```

---

# Development Evolution

The phase was intentionally divided into progressive learning steps.

Each step preserved the previous functionality while introducing new concepts.

---

# Step 01 — Basic ESP-IDF Foundation

Snapshot:

```text
snapshots/step_01_basic_foundation_main.c
```

Source reference:
- step_01_basic_foundation_main.c

---

## Objective

Validate the minimum ESP-IDF execution pipeline.

At this point we wanted to confirm:

- ESP-IDF installation
- Build system
- Flash process
- FreeRTOS execution
- Serial monitor communication

---

# Step 01 Source Code

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

void app_main(void)
{
    printf("Phase 01 - WiFi Foundation\n");

    while (1)
    {
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}
```

---

# Understanding the Code

## `app_main()`

```c
void app_main(void)
```

This is the firmware entry point used by ESP-IDF.

Equivalent idea:

```text
main()
```

in traditional C applications.

---

## `printf()`

```c
printf("Phase 01 - WiFi Foundation\n");
```

Used to validate:

- serial monitor
- USB communication
- firmware execution

---

## Infinite Loop

```c
while (1)
```

Embedded firmware usually runs forever.

Unlike desktop software, embedded devices normally do not terminate execution.

---

## `vTaskDelay()`

```c
vTaskDelay(pdMS_TO_TICKS(1000));
```

This function yields CPU time back to FreeRTOS.

This is extremely important.

---

# Real Problem Encountered — Watchdog Reset

Initial incorrect code:

```c
while (1)
{
}
```

This caused watchdog resets.

---

# Why?

FreeRTOS requires idle tasks to execute periodically.

A busy loop blocks the scheduler.

---

# Solution

```c
vTaskDelay(pdMS_TO_TICKS(1000));
```

This allows:

- task scheduling
- idle task execution
- watchdog stability

---

# Important Concept Learned

Embedded firmware must cooperate with the RTOS scheduler.

---

# Step 02 — Wi‑Fi Base

Snapshot:

```text
snapshots/step_02_wifi_base_main.c
```

---

# Objective

Add real Wi‑Fi support using ESP-IDF native APIs.

This step introduced:

- NVS
- Event loop
- Wi‑Fi STA mode
- WPA2 authentication
- ESP-IDF logging
- Network event handling

---

# Why NVS?

```c
nvs_flash_init();
```

ESP-IDF stores Wi‑Fi and internal configuration data inside flash memory.

NVS means:

```text
Non-Volatile Storage
```

---

# Event-Driven Architecture

Instead of continuously checking Wi‑Fi state, ESP-IDF sends events.

Example:

```c
WIFI_EVENT_STA_CONNECTED
```

This means:

```text
The ESP32 associated successfully with the router.
```

---

# Important Networking Concept

## Wi‑Fi connected does NOT mean internet ready.

The device still needs:

- DHCP negotiation
- IP assignment
- gateway configuration

---

# Real Problem Encountered — Missing Braces

Compilation failed because of incorrectly closed `{ }` blocks.

Example error:

```text
expected declaration or statement at end of input
```

---

# Learning

Embedded C projects require careful block organization.

The VSCode brace matching feature became very important during debugging.

---

# Step 03 — Network Ready

Snapshot:

```text
snapshots/step_03_network_ready_main.c
```

---

# Objective

Validate complete network stack initialization.

This final step added:

- DHCP validation
- IP acquisition
- Gateway visualization
- Netmask visualization
- Stable reconnection logic

---

# DHCP Explained

DHCP automatically provides:

- IP address
- gateway
- network mask

Without DHCP the ESP32 cannot communicate with other devices.

---

# Important Event

```c
IP_EVENT_STA_GOT_IP
```

This means:

```text
The network stack is fully operational.
```

---

# Final Expected Output

```text
========== NETWORK READY ==========
IP Address : 192.168.x.x
Gateway    : 192.168.x.1
Netmask    : 255.255.255.0
===================================
```

---

# Real Problem Encountered — Wi‑Fi Disconnect Loop

Symptoms:

```text
Wi‑Fi disconnected
```

Possible causes investigated:

- Wrong password
- Wrong SSID
- 5GHz network
- Router association failure

---

# Important Discovery

ESP32-S3 supports:

```text
2.4 GHz only
```

This became an important practical networking lesson.

---

# Concepts Introduced

| Concept | Description |
|---|---|
| ESP-IDF | Official Espressif framework |
| FreeRTOS | Real-time operating system |
| Event Loop | Event-driven architecture |
| Watchdog | Detects blocked tasks |
| Wi‑Fi STA Mode | Client networking mode |
| DHCP | Automatic IP assignment |
| Serial Monitor | Embedded debugging |
| WPA2 | Wireless authentication |

---

# Final Result

Validated:

- ESP-IDF environment
- Build system
- Flash process
- Serial monitor
- FreeRTOS execution
- Task scheduling
- Watchdog handling
- Wi‑Fi STA mode
- WPA2 authentication
- DHCP
- Event-driven networking
- Stable network stack

---

# Lessons Learned

This phase demonstrated that embedded networking involves much more than “connecting to Wi‑Fi”.

Real embedded development requires:

- debugging
- event handling
- scheduler understanding
- networking fundamentals
- incremental validation

---

# Next Phase

## Phase 02 — HTTP Communication

Future architecture:

```text
[ESP32-S3]
      ↓ HTTP
[Backend API]
```
