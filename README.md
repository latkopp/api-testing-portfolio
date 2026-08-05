# 🚀 API Testing & Automation Portfolio

![API Tests](https://github.com/latkopp/api-testing-portfolio/actions/workflows/api-tests.yml/badge.svg)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white)

Kompleksowy zestaw testów automatycznych API (REST / E-Commerce) z wykorzystaniem **Postman**, **Newman CLI** oraz ciągłej integracji **CI/CD w GitHub Actions**.

---

## 🛠️ Technologie i Narzędzia

* **Postman** – tworzenie kolekcji testowych, skrypty asercji JavaScript (`pm.test`, `pm.expect`).
* **Newman** – uruchamianie testów z poziomu wiersza poleceń (CLI).
* **GitHub Actions** – automatyczny pipeline CI/CD uruchamiający testy regresyjne przy każdym `push` / `pull_request`.
* **Platzi Fake Store API** – docelowe REST API wykorzystywane do testów E2E.

---

## 📋 Zakres Testów (Scenariusze E2E)

Kolekcja testowa pokrywa pełny cykl życia zasobu (**CRUD**) oraz autoryzację:

1. **`GET /products`** – Pobranie listy produktów (weryfikacja statusu 200 OK oraz czasu odpowiedzi < 1s).
2. **`POST /auth/login`** – Logowanie użytkownika i pobranie tokena JWT.
3. **`POST /products`** – Dynamiczne utworzenie nowego produktu i zapisanie jego `id` do środowiska.
4. **`GET /products/{id}`** – Weryfikacja szczegółów utworzonego produktu (porównanie pobranego ID ze zmienną środowiskową).
5. **`DELETE /products/{id}`** – Usuwanie utworzonego obiektu.
6. **`GET /products/{id}` (Test negatywny)** – Weryfikacja, czy usunięty produkt nie istnieje (sprawdzenie statusu 400/404).

---

## 🚀 Uruchamianie Lokalnie

### Wymagania wstępne
* Node.js (v18+)
* Git

### Instrukcja uruchomienia

1. Sklonuj repozytorium:
   ```bash
   git clone [https://github.com/latkopp/api-testing-portfolio.git](https://github.com/latkopp/api-testing-portfolio.git)
   cd api-testing-portfolio