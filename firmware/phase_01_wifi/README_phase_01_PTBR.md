# Fase 01 — Fundação Wi‑Fi

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
- preparação para Wi‑Fi

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

## Conexão Wi‑Fi Real

Após validar o pipeline de execução do ESP-IDF, o device foi conectado a uma rede Wi‑Fi WPA2 real utilizando a stack nativa de Wi‑Fi do ESP-IDF.

### Funcionalidades Implementadas

- modo STA Wi‑Fi
- autenticação WPA2
- obtenção de IP via DHCP
- tratamento orientado a eventos
- reconexão automática
- infraestrutura de logs do ESP-IDF

---

## Fluxo de Eventos Wi‑Fi

```text
ESP32-S3
   ↓
Driver Wi‑Fi
   ↓
Associação ao roteador
   ↓
DHCP
   ↓
Endereço IP
```

---

## Conceitos Importantes

### Wi‑Fi Connected

O evento:

```c
WIFI_EVENT_STA_CONNECTED
```

significa que o dispositivo autenticou e associou corretamente ao Access Point.

Porém, isso ainda não significa conectividade de rede completa.

---

### Obtenção de IP

O evento:

```c
IP_EVENT_STA_GOT_IP
```

indica que o DHCP foi concluído com sucesso e que o dispositivo está totalmente conectado à rede.

---

## Exemplo de Saída

```text
PHASE_01_WIFI: Connecting to Wi‑Fi...
PHASE_01_WIFI: Wi‑Fi connected
PHASE_01_WIFI: Got IP: 192.168.x.x
```

---

## Lições Aprendidas

Associar ao Wi‑Fi é diferente de obter um endereço IP válido.

O fluxo completo envolve:

1. Autenticação
2. Associação
3. Negociação DHCP
4. Disponibilidade de rede

---

## Etapas Internas

### Etapa 01 — Foundation Bootstrap

- instalação do ESP-IDF
- pipeline de build
- pipeline de flash
- monitor serial
- execução FreeRTOS
- comportamento do watchdog

### Etapa 02 — Conexão Wi‑Fi Real

- modo STA
- autenticação WPA2
- negociação DHCP
- tratamento de eventos
- reconexão automática

---

## Estado Atual

Validado:

- ambiente ESP-IDF
- conexão Wi‑Fi real
- autenticação WPA2
- negociação DHCP
- tratamento de eventos
- execução estável do sistema

Próximo passo:

- comunicação HTTP

---
