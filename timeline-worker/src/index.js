import { env } from "cloudflare:workers";
import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

// Middleware
app.use(express.json());

// CORS middleware - updated for your frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://adbis-prototype.pages.dev");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  
  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  
  next();
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Express.js Timeline API running on Cloudflare Workers!" });
});

// API Routes

// Get all timeline entries from the past 7 days
app.get("/api/timeline/recent", async (req, res) => {
  try {
    const { results } = await env.DB.prepare(`
      SELECT * FROM Event 
      WHERE createdAt >= datetime('now', '-7 days') 
      ORDER BY createdAt DESC
    `).all();

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch recent timeline entries" });
  }
});

// Get all timeline entries for a specific bookingId
app.get("/api/timeline/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { results } = await env.DB.prepare(`
      SELECT * FROM Event 
      WHERE bookingId = ? 
      ORDER BY createdAt DESC
    `).bind(bookingId).all();

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch timeline entries" });
  }
});

// Post a new timeline entry
app.post("/api/timeline/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { message, type, sender } = req.body;

    // Validate input
    if (!message || !type || !sender) {
      return res.status(400).json({
        success: false,
        error: "Message, type, and sender are required",
      });
    }

    const result = await env.DB.prepare(`
      INSERT INTO Event (bookingId, message, type, sender, createdAt)
      VALUES (?, ?, ?, ?, datetime('now'))
    `).bind(bookingId, message, type, sender).run();

    res.status(201).json({
      success: true,
      message: "Timeline entry created successfully",
      id: result.meta.last_row_id,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to create timeline entry" });
  }
});

// Express server setup
app.listen(3000);
export default httpServerHandler({ port: 3000 });
