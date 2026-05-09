# Backend API — Fase 02 Comunicação HTTP

> Status: ✅ Completa

---

# Visão Geral

Este documento explica a API backend utilizada durante a Fase 02 do projeto.

O backend atua como um serviço cloud simples que recebe requisições HTTP do dispositivo ESP32-S3.

Esta fase introduz:

- fundamentos de REST API
- comunicação JSON
- arquitetura cliente/servidor
- desenvolvimento backend Node.js
- comunicação cloud do ESP32

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

# Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| Node.js | Runtime JavaScript |
| Express | Framework servidor HTTP |
| JSON | Troca estruturada de dados |
| REST | Modelo de comunicação |

---

# Estrutura de Pastas

```text
backend/
└── api/
    ├── package.json
    ├── server.js
    ├── README.md
    └── README.pt-BR.md
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

## Etapa 04 — Criar server.js

Crie o arquivo:

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

# Executando o Backend

Inicie o backend:

```bash
node server.js
```

Saída esperada:

```text
Server running on port 3000
```

---

# Endpoint da API

## POST /ping

Este endpoint recebe dados do dispositivo ESP32.

---

# Exemplo de Requisição

```http
POST /ping
Content-Type: application/json
```

Payload JSON:

```json
{
  "device": "atom_s3_lite",
  "message": "hello backend"
}
```

---

# Exemplo de Resposta

```json
{
  "status": "ok",
  "message": "Hello from backend"
}
```

---

# Entendendo REST

REST é um modelo de comunicação utilizado entre clientes e servidores.

Neste projeto:

| Componente | Papel |
|---|---|
| ESP32 | Cliente HTTP |
| Node.js | Servidor HTTP |

---

# Conceitos Importantes de Rede

## localhost

O ESP32 não pode utilizar:

```text
localhost
```

porque localhost no ESP32 significa o próprio ESP32.

O ESP32 deve utilizar o IP real do computador.

Exemplo:

```text
http://192.168.77.16:3000/ping
```

---

# Considerações sobre Firewall

O Firewall do Windows pode bloquear conexões Node.js.

Se o ESP32 não conseguir conectar:

- liberar Node.js no firewall
- verificar a porta 3000
- verificar se ambos dispositivos estão na mesma rede

---

# Erros Comuns

## Host is unreachable

Causa:
- Wi‑Fi desconectado
- IP incorreto do servidor
- problema de roteamento

---

## Connection reset by peer

Causa:
- backend não está executando
- firewall bloqueando conexão
- porta incorreta

---

# Saída Esperada do Backend

```text
Request received:
{
  device: 'atom_s3_lite',
  message: 'hello backend'
}
```

---

# Resultados de Aprendizagem

Ao final desta fase, o desenvolvedor compreende:

- fundamentos REST
- comunicação JSON
- requisições HTTP POST
- arquitetura backend/servidor
- comunicação cloud do ESP32
- troubleshooting de rede

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
