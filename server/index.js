const express = require('express');
const ReactDomServer = require('react-dom/server')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'C:/Users/jayce/Desktop/JC/Code/WillingWorkers_site/WillingWorkersSite-1/build')))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    const reactHtml = ReactDomServer.renderToString(<App />);
    res.send(reactHtml)
});

app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.send('Thanks for contacting us!')
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
