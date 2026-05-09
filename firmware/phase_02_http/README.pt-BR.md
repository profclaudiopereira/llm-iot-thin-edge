# Fase 02 — Comunicação HTTP

> Status: ✅ Completa

---

# Visão Geral

Esta fase introduz comunicação HTTP real entre o ESP32-S3 e um servidor backend.

O objetivo é evoluir o dispositivo de:

```text
Dispositivo conectado à rede
```

para:

```text
Dispositivo conectado à nuvem
```

Esta é a primeira etapa real de comunicação cloud do projeto.

O ESP32 agora torna-se capaz de:

- Conectar a um servidor backend
- Enviar dados estruturados
- Receber respostas da nuvem
- Utilizar comunicação estilo REST
- Preparar a arquitetura para integração futura com LLM

---

# Arquitetura

```text
[ESP32-S3]
      ↓ HTTP POST
[Backend Node.js]
      ↓ JSON Response
[HTTP 200 OK]
```

---

# Hardware Utilizado

- M5AtomS3 Lite
- PC Windows
- Roteador Wi‑Fi local

---

# Softwares Utilizados

| Componente | Função |
|---|---|
| ESP-IDF | Framework embarcado |
| FreeRTOS | Escalonamento de tasks |
| Node.js | Runtime do backend |
| Express | Servidor HTTP |
| esp_http_client | Biblioteca HTTP do ESP-IDF |

---

# Objetivos de Aprendizagem

Esta fase ensina:

- fundamentos de comunicação HTTP
- fundamentos de arquitetura REST
- troca de payload JSON
- arquitetura cliente/servidor
- conectividade cloud do ESP32
- debugging de backend
- troubleshooting de rede

---

# Estrutura da Pasta

```text
phase_02_http/
├── main/
│   └── main.c
├── README.md
├── README.pt-BR.md
├── CMakeLists.txt
└── sdkconfig
```

---

# Estrutura do Backend

```text
backend/api/
├── package.json
└── server.js
```

---

# Guia Passo a Passo

## Etapa 01 — Criar a Pasta do Backend

Dentro do repositório:

```text
backend/api/
```

---

## Etapa 02 — Inicializar Node.js

Abra um terminal:

```bash
cd backend/api
npm init -y
```

Isso cria:

```text
package.json
```

---

## Etapa 03 — Instalar Express

```bash
npm install express
```

---

## Etapa 04 — Criar o Servidor Backend

Crie:

```text
server.js
```

com o seguinte conteúdo:

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.post("/ping", (req, res) => {

    console.log("Request received:");
    console.log(req.body);

    res.json({
        status: "ok",
        message: "Hello from backend"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## Etapa 05 — Executar o Backend

```bash
node server.js
```

Saída esperada:

```text
Server running on port 3000
```

---

# Entendendo o Backend

O backend expõe:

```text
POST /ping
```

Isso significa:

| Parte | Significado |
|---|---|
| POST | Envio de dados |
| /ping | Caminho do endpoint |

O servidor recebe JSON e retorna uma resposta JSON.

---

# Etapa 06 — Descobrir o IP do PC

No Windows:

```bash
ipconfig
```

Procure:

```text
IPv4 Address
```

Exemplo:

```text
192.168.77.16
```

---

# Conceito Importante de Rede

## localhost NÃO é o PC

O ESP32 não pode utilizar:

```text
localhost
```

porque localhost no ESP32 significa:

```text
O próprio ESP32
```

O ESP32 deve utilizar o IP real do computador.

---

# Etapa 07 — Configurar o Firmware do ESP32

Dentro de:

```text
main/main.c
```

configure:

```c
#define WIFI_SSID      "YOUR_WIFI_SSID"
#define WIFI_PASSWORD  "YOUR_WIFI_PASSWORD"

#define SERVER_URL "http://YOUR_PC_IP:3000/ping"
```

Exemplo:

```c
#define SERVER_URL "http://192.168.77.16:3000/ping"
```

---

# Etapa 08 — Compilar o Firmware

```bash
idf.py build
```

---

# Etapa 09 — Gravar o Firmware

```bash
idf.py flash
```

---

# Etapa 10 — Abrir o Monitor Serial

```bash
idf.py monitor
```

---

# Saída Esperada no ESP32

```text
Connecting to Wi‑Fi...
Got IP: 192.168.x.x
Sending HTTP POST...
HTTP POST Status = 200
```

---

# Saída Esperada no Backend

```text
Request received:
{
  device: 'atom_s3_lite',
  message: 'hello backend'
}
```

---

# Problemas Reais Encontrados Durante o Desenvolvimento

Este projeto documenta intencionalmente situações reais de debugging.

## Problema 01 — Loop de Desconexão Wi‑Fi

Sintoma:

```text
Wi‑Fi disconnected
```

Causas investigadas:

- senha incorreta
- SSID incorreto
- rede 5GHz
- falha de associação ao roteador

Aprendizado importante:

O ESP32-S3 suporta:

```text
apenas 2.4 GHz
```

---

## Problema 02 — Host Unreachable

Erro:

```text
Host is unreachable
```

Causa:

O ESP32 não possuía rota de rede válida porque a associação Wi‑Fi falhou.

---

## Problema 03 — Connection Reset by Peer

Erro:

```text
Connection reset by peer
```

Causa:

O backend estava inacessível ou bloqueado pelo firewall do Windows.

---

# Conceitos Importantes Aprendidos

## DHCP

O ESP32 não conhece automaticamente seu IP.

O roteador fornece:

- endereço IP
- gateway
- máscara de rede

através do DHCP.

---

## HTTP Status Code 200

```text
HTTP POST Status = 200
```

significa:

```text
Requisição executada com sucesso
```

---

## Comunicação REST

O ESP32 atua como:

```text
Cliente HTTP
```

O backend atua como:

```text
Servidor HTTP
```

---

# Resultado Final

Validado:

- modo STA Wi‑Fi
- DHCP
- stack TCP/IP
- HTTP Client
- payload JSON
- backend Node.js
- endpoint REST
- requisição HTTP POST
- resposta HTTP 200
- fundação de comunicação cloud

---

# Próxima Fase

## Phase 03 — Integração Cloud LLM

Arquitetura futura:

```text
[ESP32-S3]
      ↓ HTTP
[Backend Node.js]
      ↓
[LLM API]
      ↓
[Response]
```