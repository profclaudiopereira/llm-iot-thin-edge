# Phase 01 — Wi‑Fi Foundation

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
- Future Wi‑Fi foundation

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

## Real Wi‑Fi Connection

After validating the ESP-IDF execution pipeline, the device was connected to a real WPA2 Wi‑Fi network using the ESP-IDF native Wi‑Fi stack.

### Implemented Features

- Wi‑Fi STA mode
- WPA2 authentication
- DHCP IP acquisition
- Event-driven connection handling
- Automatic reconnection logic
- ESP-IDF logging infrastructure

---

## Wi‑Fi Event Flow

```text
ESP32-S3
   ↓
Wi‑Fi Driver
   ↓
Router Association
   ↓
DHCP
   ↓
IP Address
```

---

## Important Concepts

### Wi‑Fi Connected

The event:

```c
WIFI_EVENT_STA_CONNECTED
```

means the device successfully authenticated and associated with the Access Point.

However, this does not mean the device already has network connectivity.

---

### IP Acquisition

The event:

```c
IP_EVENT_STA_GOT_IP
```

indicates that DHCP completed successfully and the device is fully connected to the network.

---

## Example Output

```text
PHASE_01_WIFI: Connecting to Wi‑Fi...
PHASE_01_WIFI: Wi‑Fi connected
PHASE_01_WIFI: Got IP: 192.168.x.x
```

---

## Lessons Learned

A Wi‑Fi association is different from obtaining a valid IP address.

The connection flow involves:

1. Authentication
2. Association
3. DHCP negotiation
4. Network availability

---

## Internal Steps

### Step 01 — Foundation Bootstrap

- ESP-IDF installation
- Build pipeline
- Flash pipeline
- Serial monitor
- FreeRTOS execution
- Watchdog behavior

### Step 02 — Real Wi‑Fi Connection

- STA mode
- WPA2 authentication
- DHCP negotiation
- Event loop handling
- Automatic reconnection

---

## Current Status

Validated:

- ESP-IDF environment
- Real Wi‑Fi connection
- WPA2 authentication
- DHCP negotiation
- Event loop handling
- Stable system execution

Next step:

- HTTP communication

---
