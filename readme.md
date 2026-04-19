# ⚡ @aswinsparky/api

[![npm version](https://img.shields.io/npm/v/@aswinsparky/api.svg?style=flat-square)](https://www.npmjs.com/package/@aswinsparky/api)
[![license](https://img.shields.io/npm/l/@aswinsparky/api.svg?style=flat-square)](https://github.com/aswinsparky/api/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/@aswinsparky/api.svg?style=flat-square)](https://www.npmjs.com/package/@aswinsparky/api)

A simple and efficient Node.js wrapper for the **Aswin Sparky API**. Easily download media from various platforms including Terabox, Instagram, Spotify, TikTok, and Facebook.

---

## 🚀 Features

- 📦 **Lightweight**: Minimal dependencies.
- ⚡ **Simple API**: Easy-to-use asynchronous functions.
- 🛠️ **Multi-platform**: Support for popular media platforms.
- 🔒 **Secure**: Uses environment variables for API key management.

---

## 📥 Installation

Install the package via npm:

```bash
npm install @aswinsparky/api
```

---

## ⚙️ Configuration

To use this package, you need an API key from [Aswin Sparky API](https://api.aswinsparky.qzz.io). You must set this key as an environment variable.

### Using `.env` file:
Create a `.env` file in your project root:

```env
SPARKY_API_KEY=your_api_key_here
```

Then, make sure to load it in your application (e.g., using `dotenv`):

```javascript
require('dotenv').config();
const sparky = require('@aswinsparky/api');
```

---

## 📖 Usage Example

```javascript
const sparky = require('@aswinsparky/api');

async function downloadMedia() {
    try {
        // Download from Instagram
        const igData = await sparky.instagram('https://www.instagram.com/p/reel_url/');
        console.log('Instagram Data:', igData);

        // Download from TikTok
        const ttData = await sparky.tiktok('https://www.tiktok.com/@user/video/id');
        console.log('TikTok Data:', ttData);

        // Download from Spotify
        const spData = await sparky.spotify('https://open.spotify.com/track/id');
        console.log('Spotify Data:', spData);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

downloadMedia();
```

---

## 🛠️ Supported Methods

| Method | Description | Parameters |
| :--- | :--- | :--- |
| `instagram(url)` | Get media info/download link for Instagram posts/reels. | `url` (String) |
| `tiktok(url)` | Download TikTok videos (with/without watermark). | `url` (String) |
| `spotify(url)` | Fetch Spotify track information and download links. | `url` (String) |
| `terabox(url)` | Fetch download links for Terabox files. | `url` (String) |
| `facebook(url)` | Download Facebook videos. | `url` (String) |

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

---

Developed with ❤️ by [Aswin Sparky](https://github.com/A-S-W-I-N-S-P-A-R-K-Y)
