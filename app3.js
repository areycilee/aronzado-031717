$('#app3').html(`
	<center>
	 <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

</center>
 
	`);

//$('#app').html(`
//	<div class="loader"></div>
//	`);

setTimeout(function(){
x();
},3000);


function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt1988591"
}).done(function(res){
	console.log(res);


let html = `

  <h1>${res.Title}</h1>
  <h3>${res.Plot}</h3>
  <img src="${res.Poster}" />

`;

$('#app3').html(html);
});
}