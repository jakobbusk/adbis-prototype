// Express server setup
import express from 'express';
import path from 'path';
import Database from 'better-sqlite3';
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.json());

// Set cors headers to allow requests from localhost:5173 (Vue frontend)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Database her SQLITE (better-sqlite3)
const options = {
  verbose: console.log,
  timeout: 5000,
  // Enable Write-Ahead Logging (WAL) mode
  wal: true
};
const db = new Database('database.db', options);

//create Timeline table in database.db
db.prepare(`
    CREATE TABLE IF NOT EXISTS Timeline (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bookingId INTEGER NOT NULL,
        message TEXT NOT NULL,
        type TEXT NOT NULL,
        sender TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`).run();


// API routes her
//get all timeline entires from the past 7 days
app.get('/api/timeline/recent', (req, res) => {
    const stmt = db.prepare(`
        SELECT * FROM Timeline WHERE createdAt >= datetime('now', '-7 days') ORDER BY createdAt DESC
    `);
    const recentEntries = stmt.all();
    res.status(200).json(recentEntries);
});
//get all timeline entries for a specific bookingId
app.get('/api/timeline/:bookingId', (req, res) => {
    const { bookingId } = req.params;
    const stmt = db.prepare(`
        SELECT * FROM Timeline WHERE bookingId = ? ORDER BY createdAt DESC
    `);
    const timelineEntries = stmt.all(bookingId);
    res.status(200).json(timelineEntries);
});
//post to add a new timeline entry
app.post('/api/timeline/:bookingId', (req, res) => {
    const { bookingId } = req.params;
    const { message, type, sender } = req.body;
    const stmt = db.prepare(`
        INSERT INTO Timeline (bookingId, message, type, sender)
        VALUES (?, ?, ?, ?)
    `);
    stmt.run(bookingId, message, type, sender);
    res.status(201).json({ success: true });
});

// Kun kør en gang hvis table er tom, for at tilføje mockdata
const count = db.prepare('SELECT COUNT(*) AS count FROM Timeline').get().count;
if (count === 0) {

//add mockdata to Timeline table
//bookingId: 1, message: 'Koordineret i telefon, at forwarder sørger for temp. sensor', type: 'comment', sender: 'John Doe', createdAt: '2026-04-01 09:45:00'
db.prepare(`
    INSERT INTO Timeline (bookingId, message, type, sender, createdAt)
    VALUES ('1', 'Koordineret i telefon, at forwarder sørger for temp. sensor', 'comment', 'John Doe', '2026-04-02 09:45:00')
`).run();
//bookingId: 1, message: 'In transit', type: 'notification', sender: 'DHL', createdAt: '2026-04-01 10:00:00'
db.prepare(`
    INSERT INTO Timeline (bookingId, message, type, sender, createdAt)
    VALUES ('1', 'In transit', 'notification', 'DHL', '2026-04-20 10:00:00')
`).run();
//bookingId: 1, message: 'Out for delivery', type: 'notification', sender: 'DHL', createdAt: '2026-04-02 12:30:00'
db.prepare(`
    INSERT INTO Timeline (bookingId, message, type, sender, createdAt)
    VALUES ('1', 'Out for delivery', 'notification', 'DHL', '2026-04-26 10:30:00')
`).run();
}