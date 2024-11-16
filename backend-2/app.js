const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { getStoredItems, storeItems } = require("./data/items");

const app = express();

// Middleware
app.use(bodyParser.json());

// CORS configuration
const allowedOrigins = [
  "https://myntra-clone-qo8j.vercel.app",
  "https://myntra-clone-cgvu.vercel.app",
];
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Fallback CORS headers if needed
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // For debugging only
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve) => setTimeout(() => resolve(), 2000)); // Simulate delay
  res.json({ items: storedItems });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post("/items", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new item.", item: newItem });
});

// Listen on port 8080
app.listen(8080, () => {
  console.log("Backend server is running on port 8080");
});

// // const path = require("path");


// const express = require('express');
// const cors = require("cors");
// const bodyParser = require('body-parser');

// const { getStoredItems, storeItems } = require('./data/items');

// const app = express();

// app.use(bodyParser.json());
// const cors = require('cors');
// app.use(cors({ origin: 'https://myntra-clone-qo8j.vercel.app/' }));
// //  app.use(express.static(path.join(__dirname, "/myntra-clone/dist")));
// //  app.get("*", (req, res) => {
// //    res.sendFile(path.resolve(__dirname, "myntra-clone","dist", "index.html"));
// //  });



// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.get('/items', async (req, res) => {
//   const storedItems = await getStoredItems();
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
//   res.json({ items: storedItems });
// });

// app.get('/items/:id', async (req, res) => {
//   const storedItems = await getStoredItems();
//   const item = storedItems.find((item) => item.id === req.params.id);
//   res.json({ item });
// });

// app.post('/items', async (req, res) => {
//   const existingItems = await getStoredItems();
//   const itemData = req.body;
//   const newItem = {
//     ...itemData,
//     id: Math.random().toString(),
//   };
//   const updatedItems = [newItem, ...existingItems];
//   await storeItems(updatedItems);
//   res.status(201).json({ message: 'Stored new item.', item: newItem });
// });

// app.listen(8080);

//   // "build":"npm install && npm install --prefix myntra-clone && npm run build --prefix myntra-clone",
//   //   "dev":"node backend-2/app.js"
