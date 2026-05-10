# docs/devices/README.md

# LLM IoT Thin Edge — Devices

This section documents the hardware devices used throughout the project.

The project uses modular ESP32-S3 based devices from the M5Stack ecosystem to explore:

- Thin Edge AI
- Cloud-based LLMs
- Embedded multimodal systems
- Voice interfaces
- Vision pipelines
- Hybrid Edge AI architectures

---

# M5Stack Ecosystem

The project is primarily based on the M5Stack modular IoT ecosystem.

Official website:

https://m5stack.com/

Official documentation:

https://docs.m5stack.com/

GitHub:

https://github.com/m5stack

M5Stack provides modular ESP32-based devices focused on:

- rapid prototyping
- embedded systems
- IoT
- edge AI
- industrial applications
- educational platforms

---

# Devices Used in the Project

---

# AtomS3 Lite

Thin edge node and lightweight embedded runtime device.

Main characteristics:

- ESP32-S3
- compact form factor
- low power
- USB-C
- embedded RGB LED

Typical project roles:

- edge nodes
- lightweight controllers
- IoT endpoints
- distributed agents

Official documentation:

https://docs.m5stack.com/en/core/AtomS3%20Lite

---

# AtomS3R AI Chatbot

AI voice interaction development kit based on ESP32-S3.

Official documentation:

https://docs.m5stack.com/en/core/AtomS3R-AI%20Chatbot

Key features:

- ESP32-S3
- 8MB Flash
- 8MB PSRAM
- IMU sensors
- microphone
- speaker support
- ES8311 audio codec
- OpenAI Voice Assistant support

Typical project roles:

- voice assistant
- conversational AI
- embedded runtime interaction
- voice experimentation

Supported frameworks:

- ESP-IDF
- Arduino
- PlatformIO
- UiFlow2

---

# AtomS3R CAM AI Chatbot

AI vision and voice development kit.

Official documentation:

https://docs.m5stack.com/en/core/AtomS3R-CAM%20AI%20Chatbot

Key features:

- ESP32-S3
- 0.3MP GC0308 camera
- 8MB Flash
- 8MB PSRAM
- voice support
- MEMS microphone
- speaker support
- IMU sensors

Typical project roles:

- computer vision
- visual AI
- multimodal AI
- smart assistant
- image streaming

Supported frameworks:

- ESP-IDF
- Arduino
- PlatformIO
- UiFlow2

---

# Echo Pyramid

Voice interaction smart speaker base for Atom devices.

Official documentation:

https://docs.m5stack.com/en/atom/Echo_Pyramid

GitHub repository:

https://github.com/m5stack/M5Echo-Pyramid

Main features:

- smart voice interaction
- touch controls
- RGB indicators
- audio processing
- far-field voice interaction
- speaker integration

Typical project roles:

- voice assistant interface
- smart speaker experiments
- voice gateway
- multimodal interaction

---

# CoreS3 Lite

Interactive visual runtime device based on ESP32-S3.

Official documentation:

https://docs.m5stack.com/en/core/CoreS3-Lite

Main features:

- integrated display
- touch screen
- ESP32-S3
- PSRAM support
- USB-C
- embedded sensors

Typical project roles:

- visual runtime
- streamed UI rendering
- local debugging
- multimodal interaction
- embedded dashboard

---

# Module LLM Kit

Hybrid AI and local inference experimentation module.

Official documentation:

https://docs.m5stack.com/en/module/Module%20LLM%20Kit

Main goals in the project:

- local LLM experiments
- hybrid cloud/local AI
- edge inference
- AI acceleration
- offline AI experimentation

Strategic importance:

This module represents the future transition from:

```text
Cloud-only AI
```

toward:

```text
Hybrid Edge AI
```

---

# Hardware Architecture Overview

```text
Thin Edge Layer
├── AtomS3 Lite
├── AtomS3R
└── Echo Pyramid

Interactive Runtime Layer
└── CoreS3 Lite

Vision Layer
└── AtomS3R CAM

Hybrid AI Layer
└── Module LLM Kit
```

---

# Development Philosophy

The project intentionally uses real hardware validation.

Each device is explored incrementally through isolated phases in order to preserve:

- architecture clarity
- educational value
- troubleshooting history
- reproducibility
- engineering evolution

---

# Recommended Development Platforms

The devices support multiple frameworks:

- ESP-IDF
- Arduino
- PlatformIO
- UiFlow2

Primary platform used in this project:

```text
ESP-IDF
```
