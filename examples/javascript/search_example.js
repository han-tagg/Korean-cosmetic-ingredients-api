/**
 * K-Beauty Cosmetic Ingredients API - JavaScript Examples
 * ========================================================
 * 
 * Prerequisites:
 *     Node.js 18+ (native fetch support)
 * 
 * Usage:
 *     1. Replace 'YOUR_API_KEY' with your RapidAPI key
 *     2. Run: node search_example.js
 * 
 * Get your API key at:
 *     https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients
 */

// ============================================================
// Configuration
// ============================================================

const API_KEY = 'YOUR_API_KEY'; // Replace with your RapidAPI key
const BASE_URL = 'https://k-beauty-cosmetic-ingredients.p.rapidapi.com';

const HEADERS = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'k-beauty-cosmetic-ingredients.p.rapidapi.com'
};


// ============================================================
// Helper Functions
// ============================================================

/**
 * Make API request and return JSON response
 */
async function makeRequest(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url, { headers: HEADERS });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}


/**
 * Pretty print API response
 */
function printResults(data, title = 'Results') {
  console.log('\n' + '='.repeat(60));
  console.log(` ${title}`);
  console.log('='.repeat(60));

  if (data && data.success) {
    console.log(`Found: ${data.count || 0} ingredients\n`);

    (data.data || []).forEach(item => {
      console.log(`  INCI: ${item.inci_name || 'N/A'}`);
      console.log(`  Korean: ${item.kr_name || 'N/A'}`);
      console.log(`  CAS: ${item.cas_numbers || 'N/A'}`);
      console.log(`  Status: ${item.regulation_status || 'N/A'}`);
      console.log(`  Purpose: ${(item.purposes || 'N/A').substring(0, 50)}...`);
      console.log('-'.repeat(40));
    });
  } else {
    console.log('No results or error occurred.');
  }
}


// ============================================================
// Example 1: Search by INCI Name
// ============================================================

async function searchByInci(query) {
  console.log(`\n🔍 Searching INCI name: '${query}'`);
  const data = await makeRequest('/v1/ingredient/inci', { q: query });
  printResults(data, `INCI Search: ${query}`);
  return data;
}


// ============================================================
// Example 2: Search by CAS Number
// ============================================================

async function searchByCas(query) {
  console.log(`\n🔍 Searching CAS number: '${query}'`);
  const data = await makeRequest('/v1/ingredient/cas', { q: query });
  printResults(data, `CAS Search: ${query}`);
  return data;
}


// ============================================================
// Example 3: Search by Korean Name
// ============================================================

async function searchByKorean(query) {
  console.log(`\n🔍 Searching Korean name: '${query}'`);
  const data = await makeRequest('/v1/ingredient/kr', { q: query });
  printResults(data, `Korean Search: ${query}`);
  return data;
}


// ============================================================
// Example 4: Partial Text Search (PRO/ULTRA/MEGA only)
// ============================================================

async function searchPartial(query, field = 'all') {
  console.log(`\n🔍 Partial search: '${query}' in field: '${field}'`);
  const data = await makeRequest('/v1/ingredient/search', { q: query, field: field });
  printResults(data, `Partial Search: ${query}`);
  return data;
}


// ============================================================
// Example 5: List by Regulatory Status
// ============================================================

async function listByStatus(status, page = 1) {
  console.log(`\n📋 Listing status: '${status}' (page ${page})`);
  const data = await makeRequest('/v1/ingredient/status', { s: status, page: page });

  if (data && data.success) {
    console.log('\n' + '='.repeat(60));
    console.log(` Status: ${status} (Page ${page}/${data.total_pages || 1})`);
    console.log('='.repeat(60));
    console.log(`Total items: ${data.total_items || 0}`);
    console.log(`Showing: ${data.count || 0} items\n`);
    (data.data || []).forEach(item => {
      console.log(`  • ${item.inci_name || 'N/A'} (${item.kr_name || 'N/A'})`);
    });
  }
  return data;
}


// ============================================================
// Example 6: Get Single Ingredient
// ============================================================

async function getIngredient(code) {
  console.log(`\n📄 Getting ingredient: ${code}`);
  const data = await makeRequest(`/v1/ingredient/${code}`);

  if (data && data.success) {
    const item = data.data || {};
    console.log('\n' + '='.repeat(60));
    console.log(` Ingredient Details: ${code}`);
    console.log('='.repeat(60));
    console.log(`  INCI Name: ${item.inci_name || 'N/A'}`);
    console.log(`  Korean Name: ${item.kr_name || 'N/A'}`);
    console.log(`  CAS Numbers: ${item.cas_numbers || 'N/A'}`);
    console.log(`  EC Numbers: ${item.ec_numbers || 'N/A'}`);
    console.log(`  Purposes: ${item.purposes || 'N/A'}`);
    console.log(`  Status: ${item.regulation_status || 'N/A'}`);
  }
  return data;
}


// ============================================================
// Example 7: Get Database Statistics
// ============================================================

async function getStats() {
  console.log('\n📊 Getting database statistics...');
  const data = await makeRequest('/v1/stats');

  if (data && data.success) {
    const stats = data.data || {};
    console.log('\n' + '='.repeat(60));
    console.log(' Database Statistics');
    console.log('='.repeat(60));
    console.log(`  Total Ingredients: ${(stats.total_ingredients || 0).toLocaleString()}`);
    console.log('\n  By Regulatory Status:');
    Object.entries(stats.by_status || {}).forEach(([status, count]) => {
      console.log(`    • ${status}: ${count.toLocaleString()}`);
    });
  }
  return data;
}


// ============================================================
// Example 8: Health Check
// ============================================================

async function healthCheck() {
  console.log('\n❤️ Checking API health...');
  const data = await makeRequest('/health');

  if (data) {
    console.log(`  Status: ${data.status || 'unknown'}`);
    console.log(`  Version: ${data.version || 'unknown'}`);
  }
  return data;
}


// ============================================================
// Example 9: Get Ingredient Regulations (PRO/ULTRA/MEGA)
// ============================================================

/**
 * Get country-specific regulation data for an ingredient.
 * Requires PRO, ULTRA, or MEGA tier.
 * 
 * Country access by tier:
 *   PRO:   한국, EU
 *   ULTRA: + 중국, 미국, 일본, 아세안
 *   MEGA:  All 10 countries
 * 
 * @param {number} code - Ingredient code (e.g., 9)
 * @param {string|null} country - Optional country filter (e.g., 'EU', '한국')
 */
async function getRegulations(code, country = null) {
  const label = country ? ` (country: ${country})` : '';
  console.log(`\n🌍 Getting regulations for ingredient ${code}${label}`);
  
  const params = country ? { country } : {};
  const data = await makeRequest(`/v1/ingredient/${code}/regulations`, params);

  if (data && data.success) {
    const ingredient = data.ingredient || {};
    console.log('\n' + '='.repeat(60));
    console.log(` Regulations: ${ingredient.inci_name || 'N/A'} (${ingredient.kr_name || 'N/A'})`);
    console.log('='.repeat(60));
    console.log(`  Available countries: ${JSON.stringify(data.available_countries)}`);
    console.log(`  Regulation records: ${data.count || 0}\n`);

    (data.data || []).forEach(reg => {
      console.log(`  Country: ${reg.country || 'N/A'}`);
      console.log(`  Type: ${reg.regulate_type || 'N/A'}`);
      console.log(`  Name: ${reg.notice_ingr_name || 'N/A'}`);
      if (reg.limit_condition) {
        console.log(`  Conditions: ${reg.limit_condition.substring(0, 100)}...`);
      }
      console.log('-'.repeat(40));
    });
  } else {
    console.log('No regulation data found (PRO or higher tier required).');
  }
  return data;
}


// ============================================================
// Main - Run Examples
// ============================================================

async function main() {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║  K-Beauty Cosmetic Ingredients API - JavaScript Examples  ║
║  API Version: 3.0.0                                       ║
╚═══════════════════════════════════════════════════════════╝
  `);

  if (API_KEY === 'YOUR_API_KEY') {
    console.log("⚠️  Please replace 'YOUR_API_KEY' with your actual RapidAPI key!");
    console.log('   Get your key at: https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients');
    console.log();
    process.exit(1);
  }

  // All tiers
  await healthCheck();
  await getStats();
  await searchByInci('retinol');
  await searchByInci('niacin');
  await searchByCas('68-26-8');
  await searchByKorean('레티놀');
  await listByStatus('Prohibited', 1);
  await getIngredient(9);

  // PRO/ULTRA/MEGA tier examples:
  // Uncomment below if you have PRO or higher tier
  
  // await searchPartial('extract', 'inci');
  // await getRegulations(9);                   // All available countries
  // await getRegulations(9, 'EU');             // EU regulations only
  // await getRegulations(9, '한국');            // Korea regulations only

  console.log('\n✅ Examples completed!');
}

main().catch(console.error);
