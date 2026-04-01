#!/bin/bash

# ============================================================
# K-Beauty Cosmetic Ingredients API - cURL Examples
# ============================================================
#
# Prerequisites:
#     - curl installed
#     - Replace YOUR_API_KEY with your RapidAPI key
#
# Usage:
#     chmod +x examples.sh
#     ./examples.sh
#
# Get your API key at:
#     https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients
# ============================================================

API_KEY="YOUR_API_KEY"
BASE_URL="https://k-beauty-cosmetic-ingredients.p.rapidapi.com"
HOST="k-beauty-cosmetic-ingredients.p.rapidapi.com"

# Check if API key is set
if [ "$API_KEY" == "YOUR_API_KEY" ]; then
    echo "⚠️  Please replace 'YOUR_API_KEY' with your actual RapidAPI key!"
    echo "   Get your key at: https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients"
    exit 1
fi

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║    K-Beauty Cosmetic Ingredients API - cURL Examples      ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""


# ============================================================
# Example 1: Health Check
# ============================================================

echo "❤️  Health Check"
echo "============================================================"

curl -s -X GET "${BASE_URL}/health" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Example 2: Get Database Statistics
# ============================================================

echo "📊 Database Statistics"
echo "============================================================"

curl -s -X GET "${BASE_URL}/v1/stats" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Example 3: Search by INCI Name
# ============================================================

echo "🔍 Search by INCI Name: 'retinol'"
echo "============================================================"

curl -s -X GET "${BASE_URL}/v1/ingredient/inci?q=retinol" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Example 4: Search by CAS Number
# ============================================================

echo "🔍 Search by CAS Number: '68-26-8'"
echo "============================================================"

curl -s -X GET "${BASE_URL}/v1/ingredient/cas?q=68-26-8" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Example 5: Search by Korean Name
# ============================================================

echo "🔍 Search by Korean Name: '레티놀'"
echo "============================================================"

curl -s -X GET "${BASE_URL}/v1/ingredient/kr?q=레티놀" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Example 6: List Prohibited Ingredients
# ============================================================

echo "📋 List Prohibited Ingredients (page 1)"
echo "============================================================"

curl -s -X GET "${BASE_URL}/v1/ingredient/status?s=Prohibited&page=1" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Example 7: Partial Search (PRO/ULTRA only)
# ============================================================

echo "🔍 Partial Search: 'extract' in INCI field (PRO/ULTRA only)"
echo "============================================================"

curl -s -X GET "${BASE_URL}/v1/ingredient/search?q=extract&field=inci" \
  -H "X-RapidAPI-Key: ${API_KEY}" \
  -H "X-RapidAPI-Host: ${HOST}" | python3 -m json.tool

echo ""
echo ""


# ============================================================
# Quick Reference - Copy & Paste Commands
# ============================================================

echo "============================================================"
echo "📝 Quick Reference - Copy & Paste Commands"
echo "============================================================"
echo ""
echo "# Search by INCI name"
echo "curl -X GET '${BASE_URL}/v1/ingredient/inci?q=niacinamide' \\"
echo "  -H 'X-RapidAPI-Key: YOUR_API_KEY' \\"
echo "  -H 'X-RapidAPI-Host: ${HOST}'"
echo ""
echo "# Search by CAS number"
echo "curl -X GET '${BASE_URL}/v1/ingredient/cas?q=98-92-0' \\"
echo "  -H 'X-RapidAPI-Key: YOUR_API_KEY' \\"
echo "  -H 'X-RapidAPI-Host: ${HOST}'"
echo ""
echo "# List restricted ingredients"
echo "curl -X GET '${BASE_URL}/v1/ingredient/status?s=Restricted&page=1' \\"
echo "  -H 'X-RapidAPI-Key: YOUR_API_KEY' \\"
echo "  -H 'X-RapidAPI-Host: ${HOST}'"
echo ""
echo "✅ Examples completed!"
