# K-Beauty API Examples

This folder contains ready-to-run example code for the K-Beauty Cosmetic Ingredients API.

## 📁 Structure

```
examples/
├── python/
│   ├── search_example.py    # Python examples
│   └── requirements.txt     # Python dependencies
├── javascript/
│   ├── search_example.js    # JavaScript/Node.js examples
│   └── package.json         # Node.js configuration
└── curl/
    └── examples.sh          # cURL/Bash examples
```

## 🚀 Quick Start

### Python

```bash
cd examples/python
pip install -r requirements.txt

# Edit search_example.py and replace YOUR_API_KEY
python search_example.py
```

### JavaScript (Node.js 18+)

```bash
cd examples/javascript

# Edit search_example.js and replace YOUR_API_KEY
node search_example.js
```

### cURL / Bash

```bash
cd examples/curl
chmod +x examples.sh

# Edit examples.sh and replace YOUR_API_KEY
./examples.sh
```

## 🔑 Get Your API Key

1. Go to [RapidAPI](https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients)
2. Subscribe to a plan (Free tier available)
3. Copy your API key
4. Replace `YOUR_API_KEY` in the example files

## 📖 What's Included

Each example file demonstrates:

| Function | Description | Tier |
|----------|-------------|------|
| Health Check | Check API status | All |
| Database Stats | Get total counts | All |
| INCI Search | Search by INCI name | All |
| CAS Search | Search by CAS number | All |
| Korean Search | Search by Korean name | All |
| Status List | List by regulatory status | All |
| Partial Search | Contains text search | PRO/ULTRA |
| Get Ingredient | Get single ingredient details | All |

## 📝 License

MIT License - Feel free to use and modify for your projects.
