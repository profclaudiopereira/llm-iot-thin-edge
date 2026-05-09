# Fase 01 — Fundação Wi‑Fi

> Status: ✅ Completa

---

# Visão Geral

A Fase 01 estabelece toda a fundação embarcada utilizada pelas próximas fases do projeto.

Esta fase foca propositalmente em:

- fundamentos ESP-IDF
- fundamentos FreeRTOS
- debugging embarcado
- arquitetura orientada a eventos
- conectividade Wi‑Fi
- obtenção de IP via DHCP
- validação com hardware real

O objetivo ainda NÃO é Inteligência Artificial.

O foco é construir uma base profissional e estável de conectividade embarcada para futuras integrações cloud e LLM.

---

# Hardware Utilizado

- M5AtomS3 Lite
- PC Windows
- cabo USB-C
- roteador Wi‑Fi local

---

# Arquitetura Final

```text
[ESP32-S3]
      ↓
Roteador Wi‑Fi
      ↓
DHCP
      ↓
Endereço IP
```

---

# Filosofia de Aprendizagem

Este projeto evita propositalmente “código mágico”.

O firmware foi desenvolvido incrementalmente para ajudar novos desenvolvedores a entender:

- por que cada subsistema existe
- como o ESP-IDF funciona internamente
- como redes funcionam em sistemas embarcados
- como debugar problemas reais

---

# Estrutura do Projeto

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

# Evolução do Desenvolvimento

A fase foi dividida propositalmente em etapas progressivas de aprendizado.

Cada etapa preservou a funcionalidade anterior enquanto introduzia novos conceitos.

---

# Etapa 01 — Fundação Básica ESP-IDF

Snapshot:

```text
snapshots/step_01_basic_foundation_main.c
```

---

# Objetivo

Validar o pipeline mínimo de execução ESP-IDF.

Neste ponto queríamos confirmar:

- instalação ESP-IDF
- sistema de build
- processo de gravação
- execução FreeRTOS
- comunicação serial

---

# Código da Etapa 01

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

# Entendendo o Código

## `app_main()`

```c
void app_main(void)
```

Este é o ponto de entrada do firmware no ESP-IDF.

Equivalente conceitual ao:

```text
main()
```

em aplicações C tradicionais.

---

## `printf()`

```c
printf("Phase 01 - WiFi Foundation\n");
```

Usado para validar:

- monitor serial
- comunicação USB
- execução do firmware

---

## Loop Infinito

```c
while (1)
```

Firmwares embarcados normalmente executam continuamente.

Diferente de aplicações desktop, dispositivos embarcados geralmente não encerram a execução.

---

## `vTaskDelay()`

```c
vTaskDelay(pdMS_TO_TICKS(1000));
```

Esta função devolve tempo de CPU ao FreeRTOS.

Isso é extremamente importante.

---

# Problema Real Encontrado — Reset do Watchdog

Código inicial incorreto:

```c
while (1)
{
}
```

Isso causava resets do watchdog.

---

# Por quê?

O FreeRTOS precisa executar periodicamente as tasks de idle.

Um loop ocupado bloqueia o scheduler.

---

# Solução

```c
vTaskDelay(pdMS_TO_TICKS(1000));
```

Isso permite:

- escalonamento de tasks
- execução das tasks idle
- estabilidade do watchdog

---

# Conceito Importante Aprendido

Firmwares embarcados devem cooperar com o scheduler do RTOS.

---

# Etapa 02 — Base Wi‑Fi

Snapshot:

```text
snapshots/step_02_wifi_base_main.c
```

---

# Objetivo

Adicionar suporte Wi‑Fi real utilizando APIs nativas do ESP-IDF.

Esta etapa introduziu:

- NVS
- Event loop
- modo STA Wi‑Fi
- autenticação WPA2
- logs ESP-IDF
- gerenciamento de eventos de rede

---

# Por Que NVS?

```c
nvs_flash_init();
```

O ESP-IDF armazena configurações internas e Wi‑Fi na memória flash.

NVS significa:

```text
Non-Volatile Storage
```

---

# Arquitetura Orientada a Eventos

Ao invés de verificar continuamente o estado do Wi‑Fi, o ESP-IDF envia eventos.

Exemplo:

```c
WIFI_EVENT_STA_CONNECTED
```

Isso significa:

```text
O ESP32 associou corretamente ao roteador.
```

---

# Conceito Importante de Rede

## Wi‑Fi conectado NÃO significa internet pronta.

O dispositivo ainda precisa:

- negociação DHCP
- obtenção de IP
- configuração de gateway

---

# Problema Real Encontrado — Chaves Ausentes

A compilação falhou devido a blocos `{ }` incorretamente fechados.

Erro típico:

```text
expected declaration or statement at end of input
```

---

# Aprendizado

Projetos embarcados em C exigem organização cuidadosa dos blocos.

O recurso de correspondência de chaves do VSCode tornou-se muito importante durante o debugging.

---

# Etapa 03 — Network Ready

Snapshot:

```text
snapshots/step_03_network_ready_main.c
```

---

# Objetivo

Validar a inicialização completa da stack de rede.

Esta etapa final adicionou:

- validação DHCP
- obtenção de IP
- visualização do gateway
- visualização da máscara
- lógica estável de reconexão

---

# Explicando DHCP

O DHCP fornece automaticamente:

- endereço IP
- gateway
- máscara de rede

Sem DHCP o ESP32 não consegue comunicar com outros dispositivos.

---

# Evento Importante

```c
IP_EVENT_STA_GOT_IP
```

Isso significa:

```text
A stack de rede está totalmente operacional.
```

---

# Saída Final Esperada

```text
========== NETWORK READY ==========
IP Address : 192.168.x.x
Gateway    : 192.168.x.1
Netmask    : 255.255.255.0
===================================
```

---

# Problema Real Encontrado — Loop de Desconexão Wi‑Fi

Sintoma:

```text
Wi‑Fi disconnected
```

Possíveis causas investigadas:

- senha incorreta
- SSID incorreto
- rede 5GHz
- falha de associação ao roteador

---

# Descoberta Importante

O ESP32-S3 suporta:

```text
apenas 2.4 GHz
```

Isso tornou-se uma importante lição prática de redes.

---

# Conceitos Introduzidos

| Conceito | Descrição |
|---|---|
| ESP-IDF | Framework oficial Espressif |
| FreeRTOS | Sistema operacional de tempo real |
| Event Loop | Arquitetura orientada a eventos |
| Watchdog | Detecta tasks bloqueadas |
| Wi‑Fi STA Mode | Modo cliente de rede |
| DHCP | Obtenção automática de IP |
| Serial Monitor | Debugging embarcado |
| WPA2 | Autenticação wireless |

---

# Resultado Final

Validado:

- ambiente ESP-IDF
- sistema de build
- processo de gravação
- monitor serial
- execução FreeRTOS
- escalonamento de tasks
- tratamento do watchdog
- modo STA Wi‑Fi
- autenticação WPA2
- DHCP
- rede orientada a eventos
- stack de rede estável

---

# Lições Aprendidas

Esta fase demonstrou que desenvolvimento embarcado envolve muito mais do que “conectar no Wi‑Fi”.

Desenvolvimento embarcado real exige:

- debugging
- tratamento de eventos
- entendimento do scheduler
- fundamentos de rede
- validação incremental

---

# Próxima Fase

## Phase 02 — Comunicação HTTP

Arquitetura futura:

```text
[ESP32-S3]
      ↓ HTTP
[Backend API]
```
