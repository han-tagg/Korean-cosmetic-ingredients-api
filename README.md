# Korean-cosmetic-ingredients-api
REST API for Korean Cosmetic Ingredients (INCI, MFDS, KCIA data)

# 🇰🇷 K-Beauty Cosmetic Ingredients API

> Access **21,796 Korean cosmetic ingredients** with INCI names, CAS numbers, Korean translations, and regulatory status from official Korean government sources.

[![Available on RapidAPI](https://img.shields.io/badge/RapidAPI-Available-0055DA?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
[![API Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-Commercial-orange?style=for-the-badge)]()

---

## 📌 What is this?

If you're building cosmetic apps, formulation tools, or compliance systems for the Korean market, you've probably struggled with:

- Korean government sites only in Korean
- PDF documents instead of structured data
- No official API available
- Manual translation and data entry

**This API solves all of that.**

We've compiled and translated the complete Korean cosmetic ingredients database from official government sources:

| Source | Description |
|--------|-------------|
| **KCIA** | Korea Cosmetic Industry Association - Industry standard ingredient names |
| **MFDS** | Ministry of Food and Drug Safety - Regulatory status and restrictions |

All **21,796 ingredients** are searchable via REST API with English translations.

---

## ✨ Features

### 🔍 Multiple Search Methods
- **INCI Name Search** — International standard ingredient names
- **CAS Number Search** — Chemical Abstracts Service registry numbers
- **Korean Name Search** — Native Korean ingredient names (한글명)
- **Partial Text Search** — Find ingredients containing your query (PRO/ULTRA)

### 📋 Comprehensive Data Fields
- INCI names (International Nomenclature of Cosmetic Ingredients)
- CAS numbers
- EC numbers
- Korean names (한글명)
- Cosmetic purposes/functions
- Regulatory status (Prohibited / Restricted / Not Listed)
- Restriction limits and conditions (PRO/ULTRA)
- MFDS classification (PRO/ULTRA)
- Origin definitions and notes (ULTRA)

### ⚡ Developer-Friendly
- RESTful JSON API
- Fast response times (<50ms average)
- Pagination support
- Tiered access for different needs
- 99.9% uptime

---

## 🆚 Why This API?

### Not Another "Safety Score" API

Many cosmetic APIs focus on consumer-facing hazard scores and AI-generated safety ratings.  
**This API is different.**

We provide **official regulatory data** that businesses actually need:

| Need | Consumer APIs | This API |
|------|---------------|----------|
| "Is this safe for my skin?" | ✅ | ❌ |
| "Can I legally sell this in Korea?" | ❌ | ✅ |
| "What's the max concentration allowed?" | ❌ | ✅ |
| "Is this ingredient prohibited?" | ❌ | ✅ |
| "What are the MFDS restrictions?" | ❌ | ✅ |

### Built for Professionals

- ✅ Cosmetic formulators checking compliance
- ✅ Regulatory consultants auditing products  
- ✅ Manufacturers preparing for Korea market entry
- ✅ Export companies verifying ingredient legality
- ✅ Contract manufacturers validating formulations

### Official Government Sources

No AI guesswork. No estimated scores. Direct from:
- **MFDS** (Ministry of Food and Drug Safety) - Korea's FDA equivalent
- **KCIA** (Korea Cosmetic Industry Association) - Industry standard names

### Data That Matters for Business

| Field | Consumer APIs | This API |
|-------|---------------|----------|
| INCI Name | ✅ | ✅ |
| Korean Name | ✅ | ✅ |
| CAS Number | ❌ | ✅ |
| EC Number | ❌ | ✅ |
| Regulatory Status | ❌ | ✅ |
| Concentration Limits | ❌ | ✅ |
| MFDS Classification | ❌ | ✅ |
| Usage Conditions | ❌ | ✅ |

---

## 🚀 Quick Start

### Get your API Key
1. Sign up at [RapidAPI](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
2. Subscribe to a plan (Free tier available)
3. Copy your API key

### Python
```python
import requests

url = "https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/inci"
params = {"q": "retinol"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "k-beauty-cosmetic-ingredients.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

for ingredient in data["data"]:
    print(f"{ingredient['inci_name']} - {ingredient['regulation_status']}")
```

### JavaScript (fetch)
```javascript
const response = await fetch(
  'https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/inci?q=retinol',
  {
    headers: {
      'X-RapidAPI-Key': 'YOUR_API_KEY',
      'X-RapidAPI-Host': 'k-beauty-cosmetic-ingredients.p.rapidapi.com'
    }
  }
);

const data = await response.json();
data.data.forEach(ingredient => {
  console.log(`${ingredient.inci_name} - ${ingredient.regulation_status}`);
});
```

### cURL
```bash
curl -X GET \
  "https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/inci?q=retinol" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: k-beauty-cosmetic-ingredients.p.rapidapi.com"
```

### Example Response
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "code": "KC-12345",
      "inci_name": "RETINOL",
      "kr_name": "레티놀",
      "cas_numbers": "68-26-8",
      "purposes": "Skin conditioning",
      "regulation_status": "Restricted"
    }
  ]
}
```

---

## 📡 API Endpoints

### Search Endpoints

| Endpoint | Method | Description | Tiers |
|----------|--------|-------------|-------|
| `/v1/ingredient/inci` | GET | Search by INCI name (starts with) | All |
| `/v1/ingredient/cas` | GET | Search by CAS number (starts with) | All |
| `/v1/ingredient/kr` | GET | Search by Korean name (starts with) | All |
| `/v1/ingredient/search` | GET | Partial text search (contains) | PRO, ULTRA |
| `/v1/ingredient/status` | GET | List by regulatory status | All |
| `/v1/ingredient/{code}` | GET | Get single ingredient by code | All |

### Utility Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/stats` | GET | Database statistics |
| `/health` | GET | Health check |

### Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `q` | Search query (min 2 chars) | `q=retinol` |
| `field` | Search field for `/search` endpoint | `field=inci`, `field=kr`, `field=cas`, `field=all` |
| `s` | Regulatory status for `/status` endpoint | `s=Prohibited`, `s=Restricted` |
| `page` | Page number for pagination | `page=1` |

### Regulatory Status Values
- `Prohibited` — Banned ingredients (172 items)
- `Restricted` — Allowed with conditions (1,046 items)
- `Restricted / Prohibited` — Context-dependent (277 items)
- `Not Listed` — No restrictions (20,301 items)

---

## 💰 Pricing

| Feature | BASIC (Free) | PRO ($19/mo) | ULTRA ($49/mo) |
|---------|--------------|--------------|----------------|
| **Monthly Requests** | 100 | 2,000 | 10,000 |
| **Results per Request** | 10 | 30 | 50 |
| **Exact Search** | ✅ | ✅ | ✅ |
| **Partial Search** | ❌ | ✅ | ✅ |
| **Core Fields** | ✅ | ✅ | ✅ |
| **Restriction Limits** | ❌ | ✅ | ✅ |
| **MFDS Classification** | ❌ | ✅ | ✅ |
| **Regulatory Notes** | ❌ | ❌ | ✅ |
| **Origin Definitions** | ❌ | ❌ | ✅ |
| **Timestamps** | ❌ | ❌ | ✅ |

### Fields by Tier

**BASIC:**
`code`, `kr_name`, `inci_name`, `cas_numbers`, `ec_numbers`, `purposes`, `regulation_status`

**PRO adds:**
`limit_value`, `mfds_classification`

**ULTRA adds:**
`kcia_proviso`, `origin_definition`, `old_name`, `created_at`, `updated_at`

---

## 💡 Use Cases

### 🧪 Cosmetic Formulators
Check ingredient regulatory status before formulating products for the Korean market. Instantly verify if an ingredient is prohibited, restricted, or requires specific concentration limits.

### 📋 Regulatory Consultants
Speed up compliance audits with instant access to MFDS restriction data. No more manual searches through Korean government PDFs.

### 🏭 Contract Manufacturers
Validate customer formulations against Korean regulations. Provide compliance reports with accurate regulatory references.

### 📱 K-Beauty App Developers
Build ingredient scanner apps, skincare routine analyzers, or product comparison tools with reliable backend data.

### 🛒 E-commerce Platforms
Enhance product pages with ingredient safety information. Help customers make informed purchasing decisions.

### 🔬 Research & Development
Explore ingredient options filtered by regulatory status. Find alternatives for restricted ingredients.

---

## 📊 Database Statistics

| Metric | Value |
|--------|-------|
| Total Ingredients | 21,796 |
| Prohibited | 172 |
| Restricted | 1,046 |
| Restricted / Prohibited | 277 |
| Not Listed | 20,301 |
| Data Sources | KCIA, MFDS |
| Languages | English, Korean |
| Update Frequency | Monthly |

---

## 🔗 Links

- **API on RapidAPI:** [K-Beauty Cosmetic Ingredients](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
- **API Documentation:** Available on RapidAPI
- **Support:** Contact via RapidAPI messaging

---

## ⚠️ Disclaimer

This API provides data for **reference purposes only**. It is not legal or regulatory advice.

- Data is sourced from public Korean government sources
- May not reflect the most recent regulatory changes
- Always verify with official MFDS publications before making compliance decisions
- The provider is not liable for errors or damages arising from use of this data

---

## 📄 Terms of Use

1. API access is for your own applications and services
2. Do not resell or redistribute raw data
3. Respect rate limits
4. API abuse may result in access termination

---

## 🏷️ Keywords

`k-beauty` `Korean-cosmetics` `cosmetic-ingredients` `inci` `cas-number` `skincare` `beauty-api` `ingredient-database` `cosmetic-safety` `kcia` `mfds` `Korean-skincare` `beauty-tech` `cosmetic-compliance` `ingredient-lookup` `cosmetic-formulation` `regulatory-data`

---

<p align="center">
  <b>Built for developers who build for beauty 💄</b>
</p>

<p align="center">
  <a href="https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients">
    <img src="https://img.shields.io/badge/Get%20API%20Key-RapidAPI-0055DA?style=for-the-badge&logo=rapidapi" alt="Get API Key">
  </a>
</p>
