# Fase 01 — Fundação Wi-Fi

## Visão Geral

Esta fase estabelece o ambiente de desenvolvimento ESP-IDF e valida o pipeline mínimo de execução de firmware na plataforma ESP32-S3.

O objetivo ainda não é IA.

Esta fase foca em:
- configuração do ESP-IDF
- validação do sistema de build
- comunicação serial
- execução de tasks FreeRTOS
- comportamento do watchdog
- infraestrutura de logs
- preparação para Wi-Fi

---

## Hardware

- M5AtomS3 Lite

---

## Conceitos Introduzidos

### ESP-IDF
Framework oficial de desenvolvimento IoT da Espressif.

### FreeRTOS
Sistema operacional de tempo real utilizado internamente pelo ESP-IDF.

### Watchdog Timer (WDT)
Mecanismo de proteção que detecta tasks bloqueadas.

### Serial Monitor
Principal interface de depuração do firmware embarcado.

---

## Primeiras Lições Aprendidas

Um loop infinito ocupado:

```c
while(1)
{
}
```

faz o watchdog disparar porque o scheduler não consegue executar corretamente as tasks de idle.

Forma correta:

```c
while(1)
{
    vTaskDelay(pdMS_TO_TICKS(1000));
}
```

---

## Estado Atual

Validado:
- instalação do ESP-IDF
- pipeline de build
- pipeline de flash
- monitor serial
- execução FreeRTOS
- comportamento do watchdog

Próximo passo:
- conexão Wi-Fi real

---