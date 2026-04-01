"""
K-Beauty Cosmetic Ingredients API - Python Examples
====================================================

Prerequisites:
    pip install requests

Usage:
    1. Replace 'YOUR_API_KEY' with your RapidAPI key
    2. Run: python search_example.py

Get your API key at:
    https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients
"""

import requests
import json

# ============================================================
# Configuration
# ============================================================

API_KEY = "YOUR_API_KEY"  # Replace with your RapidAPI key
BASE_URL = "https://k-beauty-cosmetic-ingredients.p.rapidapi.com"

HEADERS = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "k-beauty-cosmetic-ingredients.p.rapidapi.com"
}


# ============================================================
# Helper Functions
# ============================================================

def make_request(endpoint: str, params: dict = None) -> dict:
    """Make API request and return JSON response."""
    url = f"{BASE_URL}{endpoint}"
    
    try:
        response = requests.get(url, headers=HEADERS, params=params, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None


def print_results(data: dict, title: str = "Results"):
    """Pretty print API response."""
    print(f"\n{'='*60}")
    print(f" {title}")
    print(f"{'='*60}")
    
    if data and data.get("success"):
        print(f"Found: {data.get('count', 0)} ingredients\n")
        
        for item in data.get("data", []):
            print(f"  INCI: {item.get('inci_name', 'N/A')}")
            print(f"  Korean: {item.get('kr_name', 'N/A')}")
            print(f"  CAS: {item.get('cas_numbers', 'N/A')}")
            print(f"  Status: {item.get('regulation_status', 'N/A')}")
            print(f"  Purpose: {item.get('purposes', 'N/A')[:50]}...")
            print("-" * 40)
    else:
        print("No results or error occurred.")


# ============================================================
# Example 1: Search by INCI Name
# ============================================================

def search_by_inci(query: str):
    """
    Search ingredients by INCI name (starts with match).
    Available for all tiers.
    """
    print(f"\n🔍 Searching INCI name: '{query}'")
    
    data = make_request("/v1/ingredient/inci", {"q": query})
    print_results(data, f"INCI Search: {query}")
    
    return data


# ============================================================
# Example 2: Search by CAS Number
# ============================================================

def search_by_cas(query: str):
    """
    Search ingredients by CAS registry number.
    Available for all tiers.
    """
    print(f"\n🔍 Searching CAS number: '{query}'")
    
    data = make_request("/v1/ingredient/cas", {"q": query})
    print_results(data, f"CAS Search: {query}")
    
    return data


# ============================================================
# Example 3: Search by Korean Name
# ============================================================

def search_by_korean(query: str):
    """
    Search ingredients by Korean name.
    Available for all tiers.
    """
    print(f"\n🔍 Searching Korean name: '{query}'")
    
    data = make_request("/v1/ingredient/kr", {"q": query})
    print_results(data, f"Korean Search: {query}")
    
    return data


# ============================================================
# Example 4: Partial Text Search (PRO/ULTRA only)
# ============================================================

def search_partial(query: str, field: str = "all"):
    """
    Search ingredients containing query anywhere.
    Requires PRO or ULTRA tier.
    
    Args:
        query: Search text (min 3 characters)
        field: 'inci', 'kr', 'cas', or 'all'
    """
    print(f"\n🔍 Partial search: '{query}' in field: '{field}'")
    
    data = make_request("/v1/ingredient/search", {"q": query, "field": field})
    print_results(data, f"Partial Search: {query}")
    
    return data


# ============================================================
# Example 5: List by Regulatory Status
# ============================================================

def list_by_status(status: str, page: int = 1):
    """
    List ingredients by regulatory status.
    
    Args:
        status: 'Prohibited', 'Restricted', 'Restricted / Prohibited', or 'Not Listed'
        page: Page number
    """
    print(f"\n📋 Listing status: '{status}' (page {page})")
    
    data = make_request("/v1/ingredient/status", {"s": status, "page": page})
    
    if data and data.get("success"):
        print(f"\n{'='*60}")
        print(f" Status: {status} (Page {page}/{data.get('total_pages', 1)})")
        print(f"{'='*60}")
        print(f"Total items: {data.get('total_items', 0)}")
        print(f"Showing: {data.get('count', 0)} items\n")
        
        for item in data.get("data", []):
            print(f"  • {item.get('inci_name', 'N/A')} ({item.get('kr_name', 'N/A')})")
    
    return data


# ============================================================
# Example 6: Get Single Ingredient
# ============================================================

def get_ingredient(code: str):
    """
    Get detailed info for a specific ingredient.
    
    Args:
        code: Ingredient code (e.g., 'KC-00001')
    """
    print(f"\n📄 Getting ingredient: '{code}'")
    
    data = make_request(f"/v1/ingredient/{code}")
    
    if data and data.get("success"):
        item = data.get("data", {})
        print(f"\n{'='*60}")
        print(f" Ingredient Details: {code}")
        print(f"{'='*60}")
        print(f"  INCI Name: {item.get('inci_name', 'N/A')}")
        print(f"  Korean Name: {item.get('kr_name', 'N/A')}")
        print(f"  CAS Numbers: {item.get('cas_numbers', 'N/A')}")
        print(f"  EC Numbers: {item.get('ec_numbers', 'N/A')}")
        print(f"  Purposes: {item.get('purposes', 'N/A')}")
        print(f"  Status: {item.get('regulation_status', 'N/A')}")
    
    return data


# ============================================================
# Example 7: Get Database Statistics
# ============================================================

def get_stats():
    """Get database statistics."""
    print("\n📊 Getting database statistics...")
    
    data = make_request("/v1/stats")
    
    if data and data.get("success"):
        stats = data.get("data", {})
        print(f"\n{'='*60}")
        print(f" Database Statistics")
        print(f"{'='*60}")
        print(f"  Total Ingredients: {stats.get('total_ingredients', 0):,}")
        print(f"\n  By Regulatory Status:")
        
        for status, count in stats.get("by_status", {}).items():
            print(f"    • {status}: {count:,}")
    
    return data


# ============================================================
# Example 8: Health Check
# ============================================================

def health_check():
    """Check if API is operational."""
    print("\n❤️ Checking API health...")
    
    data = make_request("/health")
    
    if data:
        print(f"  Status: {data.get('status', 'unknown')}")
        print(f"  Version: {data.get('version', 'unknown')}")
    
    return data


# ============================================================
# Main - Run Examples
# ============================================================

if __name__ == "__main__":
    print("""
╔═══════════════════════════════════════════════════════════╗
║   K-Beauty Cosmetic Ingredients API - Python Examples     ║
╚═══════════════════════════════════════════════════════════╝
    """)
    
    # Check API key
    if API_KEY == "YOUR_API_KEY":
        print("⚠️  Please replace 'YOUR_API_KEY' with your actual RapidAPI key!")
        print("   Get your key at: https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients")
        print()
        exit(1)
    
    # Run examples
    health_check()
    get_stats()
    
    search_by_inci("retinol")
    search_by_inci("niacin")
    
    search_by_cas("68-26-8")
    
    search_by_korean("레티놀")
    
    list_by_status("Prohibited", page=1)
    
    # Uncomment below for PRO/ULTRA tier examples:
    # search_partial("acid", field="inci")
    # get_ingredient("KC-00001")
    
    print("\n✅ Examples completed!")
