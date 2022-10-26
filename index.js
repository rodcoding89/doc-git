const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

server.use(middlewares)

maison = new Map();
locataire = new Map();

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
  console.log('test');
})

server.delete('/delete-locataire',(req,res) =>{
  console.log('test');
  if(locataire.has(req.body.id)){
    locataire.delete(req.body.id);
  }
})

server.delete('/suppression',(req,res) =>{
  console.log('test');
  if(maison.has(req.body.id)){
    maison.delete(req.body.id);
  }
})

server.put('/modification',(req,res) =>{
  console.log('test');
  if(maison.has(req.body.id)){
    obj = {
      adresse : req.body.adresse,
      prix : req.body.prix,
      locataire : req.body.locataire
    }
    maison.set(req.body.locataire,obj);
  }
})

server.post('/add',(req,res) =>{
  obj = {
    adresse : req.body.adresse,
    prix : req.body.prix,
    locataire : req.body.locataire
  }
  maison.set(req.body.locataire,obj);
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})