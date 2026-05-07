# LLM IoT Thin Edge

Projeto educacional e profissional explorando o conceito de **Thin Edge Devices utilizando LLMs na nuvem** com hardware ESP32 da M5Stack.

O projeto foi concebido para evoluir incrementalmente através de fases isoladas e funcionais, garantindo que novas funcionalidades não quebrem as implementações anteriores.

---

## Objetivos do Projeto

- Explorar arquiteturas Thin Edge Device
- Integrar dispositivos ESP32 com LLMs na nuvem
- Construir sistemas multimodais embarcados
- Criar um projeto de referência didático e profissional
- Manter cada fase isolada e reproduzível

---

## Filosofia de Arquitetura

Este projeto segue o conceito:

> Thin Edge Device + Cloud-based LLM

Fases futuras também explorarão:

> Hybrid Edge AI Architecture

---

## Devices Utilizados

### Devices principais
- M5AtomS3 Lite
- M5AtomS3R
- M5AtomS3R CAM
- Echo Pyramid
- CoreS3 Lite
- Module-LLM

---

## Estrutura do Repositório

```text
llm-iot-thin-edge/
├── firmware/
├── backend/
├── docs/
├── README.md
└── README.pt-BR.md
```

---

## Regras de Desenvolvimento

- Uma fase = uma entrega funcional
- Novas fases não podem quebrar fases anteriores
- Testar no hardware real antes de avançar
- Firmware isolado por fase
- Evitar misturar áudio/câmera cedo demais
- MQTT/TLS estão propositalmente fora do escopo deste repositório

---

## Fases Planejadas

| Fase | Descrição |
|---|---|
| 01 | Fundação Wi-Fi |
| 02 | Comunicação HTTP |
| 03 | Integração Cloud LLM |
| 04 | Interação básica Echo Pyramid |
| 05 | Interação física com AtomS3R |
| 06 | Pipeline de voz |
| 07 | Integração de visão |
| 08 | IA multimodal |
| 09 | Hybrid Local LLM |

---

## Licença

MIT License