import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mock API route for product analysis
app.get('/api/analyze', (req, res) => {
  const { url } = req.query;
  res.json({
    status: 'success',
    query: url,
    prediction: {
      recommendation: 'WAIT',
      confidenceScore: 96,
      expectedSavings: 15000,
      bestDateToBuy: 'Oct 8, 2026'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'BuyWise AI Intelligence API', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`BuyWise AI Server running on http://localhost:${PORT}`);
});
