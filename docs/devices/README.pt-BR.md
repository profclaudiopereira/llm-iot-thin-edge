# docs/devices/README.pt-BR.md

# LLM IoT Thin Edge — Devices

Esta seção documenta os dispositivos de hardware utilizados ao longo do projeto.

O projeto utiliza dispositivos modulares baseados em ESP32-S3 do ecossistema M5Stack para explorar:

- Thin Edge AI
- LLMs em nuvem
- sistemas multimodais embarcados
- interfaces de voz
- pipelines de visão
- arquiteturas Hybrid Edge AI

---

# Ecossistema M5Stack

O projeto é baseado principalmente no ecossistema modular IoT da M5Stack.

Site oficial:

https://m5stack.com/

Documentação oficial:

https://docs.m5stack.com/

GitHub:

https://github.com/m5stack

A M5Stack fornece dispositivos modulares baseados em ESP32 focados em:

- prototipagem rápida
- sistemas embarcados
- IoT
- edge AI
- aplicações industriais
- plataformas educacionais

---

# Devices Utilizados no Projeto

---

# AtomS3 Lite

Thin edge node e dispositivo embarcado leve.

Principais características:

- ESP32-S3
- formato compacto
- baixo consumo
- USB-C
- LED RGB integrado

Papéis típicos no projeto:

- edge nodes
- controladores leves
- endpoints IoT
- agentes distribuídos

Documentação oficial:

https://docs.m5stack.com/en/core/AtomS3%20Lite

---

# AtomS3R AI Chatbot

Kit de desenvolvimento para interação por voz com IA baseado em ESP32-S3.

Documentação oficial:

https://docs.m5stack.com/en/core/AtomS3R-AI%20Chatbot

Principais características:

- ESP32-S3
- 8MB Flash
- 8MB PSRAM
- sensores IMU
- microfone
- suporte a speaker
- codec de áudio ES8311
- suporte OpenAI Voice Assistant

Papéis típicos no projeto:

- assistente de voz
- IA conversacional
- interação embarcada
- experimentos com voz

Frameworks suportados:

- ESP-IDF
- Arduino
- PlatformIO
- UiFlow2

---

# AtomS3R CAM AI Chatbot

Kit de desenvolvimento para visão computacional e voz.

Documentação oficial:

https://docs.m5stack.com/en/core/AtomS3R-CAM%20AI%20Chatbot

Principais características:

- ESP32-S3
- câmera GC0308 0.3MP
- 8MB Flash
- 8MB PSRAM
- suporte a voz
- microfone MEMS
- suporte a speaker
- sensores IMU

Papéis típicos no projeto:

- visão computacional
- IA visual
- IA multimodal
- assistente inteligente
- streaming de imagem

Frameworks suportados:

- ESP-IDF
- Arduino
- PlatformIO
- UiFlow2

---

# Echo Pyramid

Base smart speaker para interação por voz com dispositivos Atom.

Documentação oficial:

https://docs.m5stack.com/en/atom/Echo_Pyramid

Repositório GitHub:

https://github.com/m5stack/M5Echo-Pyramid

Principais características:

- interação inteligente por voz
- controles touch
- indicadores RGB
- processamento de áudio
- voz far-field
- integração com speaker

Papéis típicos no projeto:

- interface de assistente de voz
- experimentos smart speaker
- gateway de voz
- interação multimodal

---

# CoreS3 Lite

Dispositivo de runtime visual interativo baseado em ESP32-S3.

Documentação oficial:

https://docs.m5stack.com/en/core/CoreS3-Lite

Principais características:

- display integrado
- tela touch
- ESP32-S3
- suporte PSRAM
- USB-C
- sensores embarcados

Papéis típicos no projeto:

- runtime visual
- renderização streaming
- debug local
- interação multimodal
- dashboard embarcado

---

# Module LLM Kit

Módulo para experimentação Hybrid AI e inferência local.

Documentação oficial:

https://docs.m5stack.com/en/module/Module%20LLM%20Kit

Objetivos principais no projeto:

- experimentos com LLM local
- IA híbrida cloud/local
- inferência edge
- aceleração de IA
- experimentos offline

Importância estratégica:

Este módulo representa a futura transição de:

```text
Cloud-only AI
```

para:

```text
Hybrid Edge AI
```

---

# Visão Geral da Arquitetura de Hardware

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

# Filosofia de Desenvolvimento

O projeto utiliza intencionalmente validação em hardware real.

Cada dispositivo é explorado incrementalmente através de fases isoladas para preservar:

- clareza arquitetural
- valor educacional
- histórico de troubleshooting
- reprodutibilidade
- evolução de engenharia

---

# Plataformas de Desenvolvimento Recomendadas

Os devices suportam múltiplos frameworks:

- ESP-IDF
- Arduino
- PlatformIO
- UiFlow2

Principal plataforma utilizada neste projeto:

```text
ESP-IDF
```
