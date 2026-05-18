const fetch = require("undici");

const headers = {
    "Sparky-Api-Key": process.env.SPARKY_API_KEY,
    "Accept": "application/json"

}

const API = "https://api.aswinsparky.qzz.io";

async function terabox(url) {
    const res = await fetch(`${API}/api/downloader/terabox?url=${url}`, { headers });
    const data = await res.json();
    return data;
}

async function instagram(url) {
    const res = await fetch(`${API}/api/downloader/instagram?url=${url}`, { headers });
    const data = await res.json();
    return data;
}

async function spotify(url) {
    const res = await fetch(`${API}/api/downloader/spotify?url=${url}`, { headers });
    const data = await res.json();
    return data;
}

async function tiktok(url) {
    const res = await fetch(`${API}/api/downloader/tiktok?url=${url}`, { headers });
    const data = await res.json();
    return data;
}

async function facebook(url) {
    const res = await fetch(`${API}/api/downloader/facebook?url=${url}`, { headers });
    const data = await res.json();
    return data;
}

module.exports = {
    terabox,
    instagram,
    spotify,
    tiktok,
    facebook
}