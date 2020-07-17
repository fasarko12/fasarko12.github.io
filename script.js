var Accueil = {template: `<div class='row'><div class='col-12' id='im1'><h1>Voici la page d'accueil !</h1><div><p class='test1 text-white' id='test2'>Bienvenue sur le site de ghibili</p></div></div></div>`};

var Films = {template: `<div class='row'><div class='col-12' id='impage2'><h1>Voici la liste des films </h1><div><div id="carouselControls" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
<li data-target="#carouselControls" data-slide-to="0" class="active"></li>
<li data-target="#carouselControls" data-slide-to="1"></li>
<li data-target="#carouselControls" data-slide-to="2"></li>
<li data-target="#carouselControls" data-slide-to="3"></li>
</ol>
<div class="carousel-inner">
<div class="carousel-item active">
<img src="https://cdn.vox-cdn.com/thumbor/5364gGIgz0Da9Fr_kRPjXxVNbtM=/0x0:2144x1160/1200x800/filters:focal(901x409:1243x751)/cdn.vox-cdn.com/uploads/chorus_image/image/49806857/marnie_hires_6.0.0.jpg" class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">
<h5>finally breaking into the mainstream</h5>
<p>Fait par le sutdio ghibli</p>
</div>
</div>
<div class="carousel-item">
<img src="https://www.cinemas-utopia.org/admin/films_img/img52/5283.jpeg"class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">
<h5 style>Porco Rosso</h5>
<p>Fait par le sutdio ghibli</p>
</div>
</div>
<div class="carousel-item">
<img src="https://www.lab111.nl/wp-content/uploads/2018/05/Studio-Ghibli-Website-Banner.jpg"class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">
<h5>Le royaume des chats</h5>
<p style="color: black;">Fait par le sutdio ghibli</p>
</div>
</div>
<div class="carousel-item">
<img src="https://www.lemagducine.fr/wp-content/uploads/2020/03/porco-rosso-studio-ghibli-miyazaki.jpg"class="d-block w-100" alt="...">
<div class="carousel-caption d-none d-md-block">
<h5 style>Porco Rosso</h5>
<p>Fait par le sutdio ghibli</p>
</div>
</div>
</div>
<a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a></div>
<p v-for="film in films" :key="film.title"> {{film.title}}</p></div></div>`,
data: function(){
return {films: []}},
created: function(){
fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => {return response.json()})
.then((data) => {this.films = data })
.then((data) => {console.log(data)})
.catch((error) => { console.log(error)});

} 
};

var Personnages ={
template:`<div><h1>Voici la liste des films</h1>
<p v-for="personne in people":key="people.title">{{people.name}}</p></div>`,
data: function(){
return {people: []}},
created: function(){
fetch("ttps://ghibliapi.herokuapp.com/people")
.then((response) => {return response.json()})
.then((data) => {this.people = data })
.then((data) => {console.log(data)})
.catch((error) => { console.log(error)});
} 
};

var Contact ={template:`<div><h1>Voici la page de contact</h1><p><form>
<label for="nom">Nom : </label>
<input id="nom" type="nom" class="form-control">
<label for="texte">Text : </label>
<textarea id="textarea" class="form-control">Un peu de texte ici</textarea>
<label for="select">Select : </label>
<select id="select" class="form-control">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
<button>Envoyer</button>
</form></p></div>`};

routes= [
{path:"/accueil",component: Accueil},
{path:"/films",component: Films},
{path:"/contact",component: Contact},
];
var router = new VueRouter({routes});

var app = new Vue({router}).$mount("#app");