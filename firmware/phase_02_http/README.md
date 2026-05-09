# README.md (English)

# Phase 02 — HTTP Communication

> Status: ✅ Complete

---

# Overview

This phase introduces real HTTP communication between the ESP32-S3 device and a backend server.

The objective is to evolve the device from:

```text
Network Connected Device
```

into:

```text
Cloud Connected Device
```

This is the first real cloud communication stage of the project.

The ESP32 now becomes capable of:

- Connecting to a backend server
- Sending structured data
- Receiving responses from the cloud
- Using REST-style communication
- Preparing the architecture for future LLM integration

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

# Hardware Used

- M5AtomS3 Lite
- Windows PC
- Local Wi‑Fi Router

---

# Software Used

| Component | Purpose |
|---|---|
| ESP-IDF | Embedded firmware framework |
| FreeRTOS | Task scheduling |
| Node.js | Backend runtime |
| Express | HTTP server |
| esp_http_client | ESP-IDF HTTP library |

---

# Learning Goals

This phase teaches:

- HTTP communication fundamentals
- REST architecture basics
- JSON payload exchange
- Client/server architecture
- ESP32 cloud connectivity
- Backend debugging
- Networking troubleshooting

---

# Folder Structure

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

# Backend Structure

```text
backend/api/
├── package.json
└── server.js
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

## Step 04 — Create the Backend Server

Create:

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

## Step 05 — Run the Backend

```bash
node server.js
```

Expected output:

```text
Server running on port 3000
```

---

# Understanding the Backend

The backend exposes:

```text
POST /ping
```

This means:

| Part | Meaning |
|---|---|
| POST | Send data |
| /ping | Endpoint path |

The server receives JSON data and returns a JSON response.

---

# Step 06 — Discover the PC IP Address

On Windows:

```bash
ipconfig
```

Find:

```text
IPv4 Address
```

Example:

```text
192.168.77.16
```

---

# Important Networking Concept

## localhost is NOT the PC

The ESP32 cannot use:

```text
localhost
```

because localhost on the ESP32 means:

```text
The ESP32 itself
```

The ESP32 must use the real IP address of the computer.

---

# Step 07 — Configure the ESP32 Firmware

Inside:

```text
main/main.c
```

Configure:

```c
#define WIFI_SSID      "YOUR_WIFI_SSID"
#define WIFI_PASSWORD  "YOUR_WIFI_PASSWORD"

#define SERVER_URL "http://YOUR_PC_IP:3000/ping"
```

Example:

```c
#define SERVER_URL "http://192.168.77.16:3000/ping"
```

---

# Step 08 — Build the Firmware

```bash
idf.py build
```

---

# Step 09 — Flash the Device

```bash
idf.py flash
```

---

# Step 10 — Open Serial Monitor

```bash
idf.py monitor
```

---

# Expected ESP32 Output

```text
Connecting to Wi‑Fi...
Got IP: 192.168.x.x
Sending HTTP POST...
HTTP POST Status = 200
```

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

# Real Problems Encountered During Development

This project intentionally documents real debugging situations.

## Problem 01 — Wi‑Fi Disconnect Loop

Symptoms:

```text
Wi‑Fi disconnected
```

Root causes investigated:

- Wrong password
- Wrong SSID
- 5GHz network
- Router association failure

Important learning:

ESP32-S3 supports:

```text
2.4 GHz only
```

---

## Problem 02 — Host Unreachable

Error:

```text
Host is unreachable
```

Cause:

The ESP32 had no valid network route because Wi‑Fi association failed.

---

## Problem 03 — Connection Reset by Peer

Error:

```text
Connection reset by peer
```

Cause:

The backend server was unreachable or blocked by the Windows firewall.

---

# Important Concepts Learned

## DHCP

The ESP32 does not automatically know its IP address.

The router assigns:

- IP address
- Gateway
- Netmask

through DHCP.

---

## HTTP Status Code 200

```text
HTTP POST Status = 200
```

means:

```text
Request succeeded
```

---

## REST Communication

The ESP32 acts as:

```text
HTTP Client
```

The backend acts as:

```text
HTTP Server
```

---

# Final Result

Validated:

- Wi‑Fi STA mode
- DHCP
- TCP/IP stack
- HTTP Client
- JSON payload
- Node.js backend
- REST endpoint
- HTTP POST request
- HTTP 200 response
- Cloud communication foundation

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



---
---