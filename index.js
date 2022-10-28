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

/**
 * @api {delete} /delete-locataire
 * @apiName DeleteLocataire
 * @apiGroup delete
 */
server.delete('/delete-locataire',(req,res) =>{
  console.log('test');
  if(locataire.has(req.body.id)){
    locataire.delete(req.body.id);
  }
})

/**
 * @api {put} /update-locataire
 * @apiName UpdateLocataire
 * @apiGroup update
 * @apiSuccess {String} nom du locataire.
 * @apiSuccess {String} prénom du locataire
 */
server.put('/update-locataire',(req,res) =>{
  console.log('test');
  if(locataire.has(req.body.id)){
    obj = {
      nom : req.body.nom,
      prenom : req.body.prenom,
      profession : req.body.profession,
      revenu : req.body.revenu
    }
    locataire.set(req.body.id,obj);
  }
})

/**
 * @api {post} /add-locataire
 * @apiName AddLocataire
 * @apiGroup add
 * @apiSuccess {String} nom du locataire.
 * @apiSuccess {String} prénom du locataire
 */
server.post('/add-locataire',(req,res) =>{
  obj = {
    nom : req.body.nom,
    prenom : req.body.prenom,
    profession : req.body.profession,
    revenu : req.body.revenu
  }
  locataire.set(req.body.id,obj);
})

/**
 * @api {delete} /suppression
 * @apiName DeleteMaison
 * @apiGroup delete
 */
server.delete('/suppression',(req,res) =>{
  console.log('test');
  if(maison.has(req.body.id)){
    maison.delete(req.body.id);
  }
})

/**
 * @api {put} /modification
 * @apiName UpdateMaison
 * @apiGroup update
 * @apiSuccess {String} adresse de la maison.
 * @apiSuccess {double} prix de la maison
 */
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

/**
 * @api {post} /add
 * @apiName AddMaison
 * @apiGroup add
 * @apiSuccess {String} adresse de la maison.
 * @apiSuccess {double} prix de la maison
 */
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