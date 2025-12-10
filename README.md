# ShopSafe - Microservices E-Commerce Backend
### 🏆 Hackathon Submission - Team [Your Name]

## 1. Project Overview
ShopSafe is a secure, containerized microservices architecture designed for high availability and observability. It separates Authentication and Inventory concerns behind a unified API Gateway.

## 2. Architecture & Tech Stack
* **Gateway:** Node.js/Express (Reverse Proxy)
* **Services:** Auth Service, Inventory Service
* **Orchestration:** Docker Compose (Single VM Deployment)
* **Observability:** Prometheus (Metrics), Grafana (Visualization)
* **CI/CD:** GitHub Actions (Build, Test, Scan, Deploy)

## 3. Key DevOps Practices (CALMS)
* **Automation:** Full CI/CD pipeline triggers on every push.
* **Security (DevSecOps):** Trivy image scanning integrated into the pipeline. Secrets managed via .env.
* **Observability:** Real-time dashboard for request rates and error tracking.

## 4. How to Run Locally
```bash
# 1. Clone the repo
git clone [repo_url]

# 2. Start services
docker-compose up --build

# 3. Access endpoints
# Gateway: http://localhost:8080
# Grafana: http://localhost:3000