#  Automated API & Database Testing Portfolio

Comprehensive QA testing project demonstrating API test automation (SOAP/XML) using **SoapUI** and relational database verification using **PostgreSQL & SQL**.

---

## 🛠 Tech Stack & Tools

* **API Testing Tool:** SoapUI 5.x
* **Database Management:** PostgreSQL, DBeaver
* **Data Protocols & Formats:** SOAP, WSDL, XML, XPath
* **Query Language:** SQL (DDL, DML, Joins, Aggregations)

---

##  Project Structure

* `soapui/` — SoapUI XML project containing automated test suites, assertions, and property transfers.
* `sql/` — Production-like SQL verification scripts covering relational assertions and state management.

---

##  Test Automation Highlights

### 1. SoapUI End-to-End Test Suite
* **WSDL Integration:** Tested `NumberConversion` Web Service.
* **Assertions:**
  * `Not SOAP Fault` (Status compliance)
  * `Contains` (Token presence)
  * `XPath Match` (Exact node XML validation using namespaces)
* **Property Transfer:** Automated dynamic parameter chaining between steps (`NumberToWords` ➡️ `NumberToDollars`).

### 2. Database Integration Verification (SQL)
* **Creation Verification:** Validated object persistence and default field initialization (`INSERT` + `SELECT`).
* **State & Relational Testing:** Joined `orders` and `products` tables to verify workflow updates (`PAID` status checks).
* **Aggregations:** Verified dataset metrics using `GROUP BY`, `COUNT(*)`, and `AVG()`.

---

##  How to Run

1. **SoapUI:**
   * Open SoapUI.
   * Go to `File -> Import Project`.
   * Select `soapui/NumberConversion-soapui-project.xml`.
   * Double-click `TestCase 1` and click **Play (▶)**.

2. **SQL Verification:**
   * Load `sql/integration_tests_verification.sql` into DBeaver or psql connected to PostgreSQL.
   * Execute script steps to verify data consistency.