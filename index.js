const Contenedor = require('./contenedor.js');
const contenedor = new Contenedor();

let product = {
  title: 'Globo Terráqueo',                                                                                                                          
	price: 345.67,                                                                                                                                     
	thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
}

contenedor.save(product).then(result => console.log(result)); 
contenedor.getById(1).then(result => console.log(result));
contenedor.getAll().then(result => console.log(result));
contenedor.deleteById(1).then(result => console.log(result));
contenedor.deleteAll().then(result => console.log(result));

