const express = require('express');
const cors = require('cors');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(cors());

// redirect the movie path to the backend
app.use('/movie', createProxyMiddleware({
  target: 'http://www.omdbapi.com/',
  changeOrigin: true,
  pathRewrite: {"/movie": ""}
}));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
