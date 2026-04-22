
const { nanoid } = require('nanoid');
const Url = require('../models/url'); 

async function generateShortUrl(req, res) {
    const { actualurl } = req.body;

    if (!actualurl) {
        return res.status(400).json({ error: "Actual URL is required" });
    }

    const shortUrl = nanoid(7);

    try {
        const newUrl = await Url.create({
            shorter: shortUrl,
            actualurl: actualurl
        });

        return res.status(201).json({
            id: shortUrl,
            data: newUrl
        });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = { generateShortUrl };
