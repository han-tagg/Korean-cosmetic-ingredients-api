/**
 * K-Beauty Cosmetic Ingredients API - JavaScript Examples
 * ========================================================
 * 
 * Prerequisites:
 *     npm install node-fetch (for Node.js < 18)
 *     or use native fetch in Node.js 18+
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

/**
 * Search ingredients by INCI name (starts with match).
 * Available for all tiers.
 */
async function searchByInci(query) {
  console.log(`\n🔍 Searching INCI name: '${query}'`);
  
  const data = await makeRequest('/v1/ingredient/inci', { q: query });
  printResults(data, `INCI Search: ${query}`);
  
  return data;
}


// ============================================================
// Example 2: Search by CAS Number
// ============================================================

/**
 * Search ingredients by CAS registry number.
 * Available for all tiers.
 */
async function searchByCas(query) {
  console.log(`\n🔍 Searching CAS number: '${query}'`);
  
  const data = await makeRequest('/v1/ingredient/cas', { q: query });
  printResults(data, `CAS Search: ${query}`);
  
  return data;
}


// ============================================================
// Example 3: Search by Korean Name
// ============================================================

/**
 * Search ingredients by Korean name.
 * Available for all tiers.
 */
async function searchByKorean(query) {
  console.log(`\n🔍 Searching Korean name: '${query}'`);
  
  const data = await makeRequest('/v1/ingredient/kr', { q: query });
  printResults(data, `Korean Search: ${query}`);
  
  return data;
}


// ============================================================
// Example 4: Partial Text Search (PRO/ULTRA only)
// ============================================================

/**
 * Search ingredients containing query anywhere.
 * Requires PRO or ULTRA tier.
 * 
 * @param {string} query - Search text (min 3 characters)
 * @param {string} field - 'inci', 'kr', 'cas', or 'all'
 */
async function searchPartial(query, field = 'all') {
  console.log(`\n🔍 Partial search: '${query}' in field: '${field}'`);
  
  const data = await makeRequest('/v1/ingredient/search', { q: query, field: field });
  printResults(data, `Partial Search: ${query}`);
  
  return data;
}


// ============================================================
// Example 5: List by Regulatory Status
// ============================================================

/**
 * List ingredients by regulatory status.
 * 
 * @param {string} status - 'Prohibited', 'Restricted', 'Restricted / Prohibited', or 'Not Listed'
 * @param {number} page - Page number
 */
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

/**
 * Get detailed info for a specific ingredient.
 * 
 * @param {string} code - Ingredient code (e.g., 'KC-00001')
 */
async function getIngredient(code) {
  console.log(`\n📄 Getting ingredient: '${code}'`);
  
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

/**
 * Get database statistics.
 */
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

/**
 * Check if API is operational.
 */
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
// Main - Run Examples
// ============================================================

async function main() {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║  K-Beauty Cosmetic Ingredients API - JavaScript Examples  ║
╚═══════════════════════════════════════════════════════════╝
  `);

  // Check API key
  if (API_KEY === 'YOUR_API_KEY') {
    console.log("⚠️  Please replace 'YOUR_API_KEY' with your actual RapidAPI key!");
    console.log('   Get your key at: https://rapidapi.com/han8212/api/k-beauty-cosmetic-ingredients');
    console.log();
    process.exit(1);
  }

  // Run examples
  await healthCheck();
  await getStats();

  await searchByInci('retinol');
  await searchByInci('niacin');

  await searchByCas('68-26-8');

  await searchByKorean('레티놀');

  await listByStatus('Prohibited', 1);

  // Uncomment below for PRO/ULTRA tier examples:
  // console.log('\n--- PRO/ULTRA Tier Examples ---');
  // await searchPartial('extract', 'inci');
  // await getIngredient(9);

  console.log('\n✅ Examples completed!');
}


// Run main function
main().catch(console.error);
