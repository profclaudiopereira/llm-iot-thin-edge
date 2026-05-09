# Backend API — Phase 02 HTTP Communication

> Status: ✅ Complete

---

# Overview

This document explains the backend API used during Phase 02 of the project.

The backend acts as a simple cloud service that receives HTTP requests from the ESP32-S3 device.

This phase introduces:

- REST API fundamentals
- JSON communication
- Client/server architecture
- Node.js backend development
- ESP32 cloud communication

---

# Architecture

```text
[ESP32-S3]
      ↓ HTTP POST
[Node.js Backend]
      ↓ JSON Response
[HTTP 200 OK]
```

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express | HTTP server framework |
| JSON | Structured data exchange |
| REST | Communication model |

---

# Folder Structure

```text
backend/
└── api/
    ├── package.json
    ├── server.js
    ├── README.md
    └── README.pt-BR.md
```

---

# Step-by-Step Guide

## Step 01 — Create the Backend Folder

Inside the repository:

```text
backend/api/
```

---

## Step 02 — Initialize Node.js

Open a terminal:

```bash
cd backend/api
npm init -y
```

This creates:

```text
package.json
```

---

## Step 03 — Install Express

```bash
npm install express
```

---

## Step 04 — Create server.js

Create the file:

```text
server.js
```

with the following content:

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

# Running the Backend

Start the backend:

```bash
node server.js
```

Expected output:

```text
Server running on port 3000
```

---

# API Endpoint

## POST /ping

This endpoint receives data from the ESP32 device.

---

# Request Example

```http
POST /ping
Content-Type: application/json
```

JSON payload:

```json
{
  "device": "atom_s3_lite",
  "message": "hello backend"
}
```

---

# Response Example

```json
{
  "status": "ok",
  "message": "Hello from backend"
}
```

---

# Understanding REST

REST is a communication model used between clients and servers.

In this project:

| Component | Role |
|---|---|
| ESP32 | HTTP Client |
| Node.js | HTTP Server |

---

# Important Networking Concepts

## localhost

The ESP32 cannot use:

```text
localhost
```

because localhost on ESP32 means the ESP32 itself.

The ESP32 must use the real IP address of the PC.

Example:

```text
http://192.168.77.16:3000/ping
```

---

# Firewall Considerations

Windows Firewall may block Node.js connections.

If the ESP32 cannot connect:

- allow Node.js through the firewall
- verify port 3000
- verify both devices are on the same network

---

# Common Errors

## Host is unreachable

Cause:
- Wi‑Fi not connected
- wrong server IP
- network routing problem

---

## Connection reset by peer

Cause:
- backend not running
- firewall blocking connection
- wrong port

---

# Expected Backend Output

```text
Request received:
{
  device: 'atom_s3_lite',
  message: 'hello backend'
}
```

---

# Learning Outcomes

At the end of this phase, the developer understands:

- REST basics
- JSON communication
- HTTP POST requests
- Backend/server architecture
- ESP32 cloud communication
- Network troubleshooting

---

# Next Phase

## Phase 03 — Cloud LLM Integration

Future architecture:

```text
[ESP32-S3]
      ↓ HTTP
[Node.js Backend]
      ↓
[LLM API]
      ↓
[Response]
```
