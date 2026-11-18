// src/seed.js - reset the evergreen database to the eight known quotes (provided).
// Run with: npm run seed
// The stored premiums are historical: they were quoted under an older rate
// table, so they do not match what calculatePremium returns for the same
// inputs today. That is normal for saved quotes; the API computes premiums
// only for NEW quotes.
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { Quote } from "./Quote.js";

await connectDB();
await Quote.deleteMany({});

await Quote.insertMany([
  { _id: "q1", type: "auto", age: 41, coverageAmount: 50000, monthlyPremium: 96.0, tags: ["renewal"] },
  { _id: "q2", type: "home", age: 52, coverageAmount: 250000, monthlyPremium: 375.0, tags: ["new"] },
  { _id: "q3", type: "life", age: 29, coverageAmount: 100000, monthlyPremium: 84.0, tags: ["new"] },
  { _id: "q4", type: "auto", age: 23, coverageAmount: 30000, monthlyPremium: 100.8, tags: ["young-driver"] },
  { _id: "q5", type: "home", age: 38, coverageAmount: 180000, monthlyPremium: 248.4, tags: ["renewal", "bundle"] },
  { _id: "q6", type: "auto", age: 67, coverageAmount: 40000, monthlyPremium: 96.0, tags: ["senior"] },
  { _id: "q7", type: "life", age: 35, coverageAmount: 250000, monthlyPremium: 210.0, tags: ["new", "bundle"] },
  { _id: "q8", type: "auto", age: 72, coverageAmount: 45000, monthlyPremium: 108.0, tags: ["renewal", "senior"] },
]);

const count = await Quote.countDocuments();
console.log(`Seeded ${count} quotes into the 'quotes' collection.`);
await mongoose.disconnect();
