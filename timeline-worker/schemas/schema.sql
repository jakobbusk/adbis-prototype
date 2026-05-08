DROP TABLE IF EXISTS Event;

CREATE TABLE IF NOT EXISTS Event (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bookingId INTEGER NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL,
    sender TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Event (bookingId, message, type, sender, createdAt)
VALUES (1, 'Koordineret i telefon, at forwarder sørger for temp. sensor', 'comment', 'John Doe', '2026-04-02 09:45:00');

INSERT INTO Event (bookingId, message, type, sender, createdAt)
VALUES (1, 'In transit', 'notification', 'DHL', '2026-04-20 10:00:00');

INSERT INTO Event (bookingId, message, type, sender, createdAt)
VALUES (1, 'Out for delivery', 'notification', 'DHL', '2026-04-26 10:30:00');
