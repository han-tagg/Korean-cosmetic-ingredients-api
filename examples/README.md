# Korean-cosmetic-ingredients-api
REST API for Korean Cosmetic Ingredients & Global Regulation Data (INCI, MFDS, KCIA)

# 🇰🇷 K-Beauty Cosmetic Ingredients API

> Access **21,796 Korean cosmetic ingredients** and **30,960 regulation records across 10 countries** with INCI names, CAS numbers, Korean translations, and regulatory compliance data from official government sources.

[![Available on RapidAPI](https://img.shields.io/badge/RapidAPI-Available-0055DA?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
[![API Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)]()
[![API Version](https://img.shields.io/badge/Version-3.0.0-blue?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-Commercial-orange?style=for-the-badge)]()

---

## 📌 What is this?

If you're building cosmetic apps, formulation tools, or compliance systems for global markets, you've probably struggled with:

- Korean government sites only in Korean
- Regulation data scattered across multiple countries' agencies
- PDF documents instead of structured data
- No single API for cross-country regulatory comparison

**This API solves all of that.**

We've compiled and translated cosmetic ingredient data from official government sources:

| Source | Description | Data |
|--------|-------------|------|
| **KCIA** | Korea Cosmetic Industry Association | 21,796 ingredient names, CAS/EC numbers, purposes |
| **MFDS** | Ministry of Food and Drug Safety | 30,960 regulation records across 10 countries |

### 🌍 Countries Covered

| Country | Regulation Records |
|---------|-------------------|
| EU | 5,301 |
| ASEAN | 4,843 |
| China | 4,145 |
| South Korea | 4,046 |
| Brazil | 4,022 |
| Argentina | 4,022 |
| Taiwan | 2,137 |
| Canada | 1,947 |
| Japan | 386 |
| USA | 111 |

---

## ✨ Features

### 🔍 Multiple Search Methods
- **INCI Name Search** — International standard ingredient names
- **CAS Number Search** — Chemical Abstracts Service registry numbers
- **Korean Name Search** — Native Korean ingredient names (한글명)
- **Partial Text Search** — Find ingredients containing your query (PRO+)

### 🌍 Country-Specific Regulation Data (NEW in v3.0)
- **Prohibited / Restricted status** per country
- **Restriction conditions** — concentration limits, product type restrictions, usage warnings
- **Official notice ingredient names** per country's regulatory body
- **Filter by country** — get only the regulations you need

### 📋 Comprehensive Ingredient Fields
- INCI names (International Nomenclature of Cosmetic Ingredients)
- CAS numbers & EC numbers
- Korean names (한글명)
- Cosmetic purposes/functions
- Regulatory status (Prohibited / Restricted / Not Listed)
- Restriction limits and conditions
- MFDS classification
- Origin definitions and regulatory notes

### ⚡ Developer-Friendly
- RESTful JSON API
- Fast response times (<50ms average)
- Pagination support
- Tiered access for different needs
- Both `q` and `query` parameter names supported

---

## 🆚 Why This API?

### Not Another "Safety Score" API

Many cosmetic APIs focus on consumer-facing hazard scores and AI-generated safety ratings.
**This API is different.**

We provide **official regulatory data** that businesses actually need:

| Need | Consumer APIs | This API |
|------|---------------|----------|
| "Can I legally sell this in Korea?" | ❌ | ✅ |
| "Is this ingredient banned in the EU?" | ❌ | ✅ |
| "What's the max concentration allowed in China?" | ❌ | ✅ |
| "How do regulations differ across countries?" | ❌ | ✅ |
| "What are the MFDS restrictions?" | ❌ | ✅ |

### Built for Professionals

- ✅ Cosmetic formulators checking multi-country compliance
- ✅ Regulatory consultants auditing products for global markets
- ✅ Manufacturers preparing for Korea / EU / China market entry
- ✅ Export companies verifying ingredient legality across regions
- ✅ Beauty app developers building ingredient scanners

### Official Government Sources

No AI guesswork. No estimated scores. Direct from:
- **MFDS** (Ministry of Food and Drug Safety) — Korea's FDA equivalent
- **KCIA** (Korea Cosmetic Industry Association) — Industry standard names
- **CosIng-verified** — EU regulation data cross-checked against EU official database (89.4% match rate, 99.2% type accuracy)

---

## 🚀 Quick Start

### Get your API Key
1. Sign up at [RapidAPI](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
2. Subscribe to a plan (Free tier available)
3. Copy your API key

### Python
```python
import requests

headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "k-beauty-cosmetic-ingredients.p.rapidapi.com"
}

# Search by INCI name
response = requests.get(
    "https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/inci",
    headers=headers,
    params={"q": "retinol"}
)
print(response.json())

# Get country-specific regulations (PRO+)
response = requests.get(
    "https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/9/regulations",
    headers=headers,
    params={"country": "EU"}
)
print(response.json())
```

### JavaScript (fetch)
```javascript
const headers = {
  'X-RapidAPI-Key': 'YOUR_API_KEY',
  'X-RapidAPI-Host': 'k-beauty-cosmetic-ingredients.p.rapidapi.com'
};

// Search by INCI name
const search = await fetch(
  'https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/inci?q=retinol',
  { headers }
);
console.log(await search.json());

// Get country-specific regulations (PRO+)
const regs = await fetch(
  'https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/9/regulations?country=EU',
  { headers }
);
console.log(await regs.json());
```

### cURL
```bash
# Search by INCI name
curl "https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/inci?q=retinol" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: k-beauty-cosmetic-ingredients.p.rapidapi.com"

# Get country-specific regulations (PRO+)
curl "https://k-beauty-cosmetic-ingredients.p.rapidapi.com/v1/ingredient/9/regulations?country=EU" \
  -H "X-RapidAPI-Key: YOUR_API_KEY" \
  -H "X-RapidAPI-Host: k-beauty-cosmetic-ingredients.p.rapidapi.com"
```

### Example Responses

**Ingredient Search:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "code": 5489,
      "inci_name": "Retinol",
      "kr_name": "레티놀",
      "cas_numbers": "11103-57-4, 68-26-8",
      "purposes": "피부컨디셔닝제(기타)",
      "regulation_status": "Restricted"
    }
  ]
}
```

**Regulation Lookup:**
```json
{
  "success": true,
  "ingredient": {
    "code": 9,
    "kr_name": "리날룰",
    "inci_name": "Linalool"
  },
  "count": 1,
  "available_countries": ["한국", "EU"],
  "data": [
    {
      "country": "EU",
      "regulate_type": "제한",
      "notice_ingr_name": "1,6-Octadien-3-ol, 3,7-dimethyl-",
      "proviso": null,
      "limit_condition": null,
      "source_type": "limit"
    }
  ]
}
```

---

## 📡 API Endpoints

### Search Endpoints

| Endpoint | Method | Description | Tiers |
|----------|--------|-------------|-------|
| `/v1/ingredient/inci?q=` | GET | Search by INCI name (starts with) | All |
| `/v1/ingredient/cas?q=` | GET | Search by CAS number (starts with) | All |
| `/v1/ingredient/kr?q=` | GET | Search by Korean name (starts with) | All |
| `/v1/ingredient/search?q=&field=` | GET | Partial text search (contains) | PRO+ |
| `/v1/ingredient/status?s=&page=` | GET | List by regulatory status | All |
| `/v1/ingredient/{code}` | GET | Get single ingredient by code | All |
| `/v1/ingredient/{code}/regulations` | GET | Get country-specific regulations | PRO+ |

### Utility Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/stats` | GET | Database statistics |
| `/health` | GET | Health check |

### Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `q` or `query` | Search query (min 2 chars) | `q=retinol` |
| `field` | Search field for `/search` | `field=inci`, `field=kr`, `field=cas`, `field=all` |
| `s` | Regulatory status for `/status` | `s=Prohibited`, `s=Restricted` |
| `country` | Country filter for `/regulations` | `country=EU`, `country=한국` |
| `page` | Page number for pagination | `page=1` |

---

## 💰 Pricing

| Feature | BASIC (Free) | PRO ($29/mo) | ULTRA ($79/mo) | MEGA ($199/mo) |
|---------|--------------|--------------|----------------|----------------|
| **Monthly Requests** | 100 | 2,000 | 5,000 | 15,000 |
| **Results per Request** | 10 | 30 | 50 | 50 |
| **Exact Search** | ✅ | ✅ | ✅ | ✅ |
| **Partial Search** | ❌ | ✅ | ✅ | ✅ |
| **Core Fields** | ✅ | ✅ | ✅ | ✅ |
| **Restriction Limits** | ❌ | ✅ | ✅ | ✅ |
| **Regulation Countries** | ❌ | 🇰🇷🇪🇺 (2) | +🇨🇳🇺🇸🇯🇵 ASEAN (6) | All 10 |
| **Detailed Conditions** | ❌ | ❌ | ✅ | ✅ |
| **Regulatory Notes** | ❌ | ❌ | ✅ | ✅ |
| **Origin Definitions** | ❌ | ❌ | ✅ | ✅ |

---

## 💡 Use Cases

### 🧪 Cosmetic Formulators
Check ingredient regulatory status across multiple countries before formulating. Instantly verify if an ingredient is prohibited in the EU, restricted in China, or requires specific concentration limits in Korea.

### 📋 Regulatory Consultants
Speed up multi-country compliance audits with instant access to regulation data for 10 countries. No more manual searches through different government sites in different languages.

### 🏭 Contract Manufacturers
Validate customer formulations against regulations in target export markets. Provide compliance reports covering Korea, EU, China, ASEAN, and more.

### 📱 K-Beauty App Developers
Build ingredient scanner apps with real regulatory data, not just safety scores. Show users which countries restrict each ingredient.

### 🔬 Research & Development
Explore ingredient options filtered by regulatory status across countries. Find alternatives that are compliant in all your target markets.

---

## 📊 Database Statistics

| Metric | Value |
|--------|-------|
| Total Ingredients | 21,796 |
| Regulation Records | 30,960 |
| Countries Covered | 10 |
| Prohibited Ingredients | 172 |
| Restricted Ingredients | 1,046 |
| Not Listed | 20,301 |
| Data Sources | KCIA, MFDS |
| Languages | English, Korean |
| Update Frequency | Monthly |
| API Version | 3.0.0 |

---

## 🔗 Links

- **API on RapidAPI:** [K-Beauty Cosmetic Ingredients](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
- **Dev.to Blog:** [I Built an API for 21,000+ Korean Cosmetic Ingredients](https://dev.to/tagg_dev/i-built-an-api-for-21000-korean-cosmetic-ingredients-heres-why-5bao)
- **Support:** Contact via RapidAPI messaging

---

## ⚠️ Disclaimer

This API provides data for **reference purposes only**. It is not legal or regulatory advice.

- Data is sourced from KCIA and MFDS (Korean government agencies)
- International regulation data is provided as reference and may not reflect the latest updates from each country's regulatory body
- Regulatory classification may vary by product type and usage context
- Always verify with official regulatory publications before making compliance decisions
- The provider is not liable for errors or damages arising from use of this data

---

## 📄 Terms of Use

1. API access is for your own applications and services
2. Do not resell or redistribute raw data
3. Respect rate limits
4. API abuse may result in access termination

---

## 🏷️ Keywords

`k-beauty` `Korean-cosmetics` `cosmetic-ingredients` `cosmetic-regulations` `inci` `cas-number` `skincare` `beauty-api` `ingredient-database` `cosmetic-compliance` `kcia` `mfds` `eu-cosmetics` `cosmetic-formulation` `regulatory-data` `global-cosmetic-regulation` `ingredient-safety` `cosmetic-restriction`

---

<p align="center">
  <b>Built for developers who build for beauty 💄</b>
</p>

<p align="center">
  <a href="https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients">
    <img src="https://img.shields.io/badge/Get%20API%20Key-RapidAPI-0055DA?style=for-the-badge&logo=rapidapi" alt="Get API Key">
  </a>
</p>
