const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET', "https://restcountries.com/v3.1/name/nepal");
// request.open('GET', "https://restcountries.eu/rest/v2/name/nepal"); //error

request.send();

//to get the response
request.addEventListener('load',function(){
    // console.l+og(this.responseText);
    const[data] = JSON.parse(this.responseText);
    // console.log(data.capital);
    const htmlData =
     `
     
<div id="card">
<article class="card">
    <div class="card-body">
       
        <img src="${data.coatOfArms}" alt="" class="card-body-img"/>
        
        <h1 class="card-body-text"> Country : ${data.altSpellings} </h1>
        <p class="card-body-text"> capital : ${data.capital} </p>

    </div>
    <div class="card-footer">
        <div class="card-footer-social">
            <h3>${data.region}</h3>
            <p>Region</p>
        </div>
        <div class="card-footer-social">
            <h3>${data.population}</h3>
            <p>Population</p>
        </div>

        <div class="card-footer-social">
            <h3>${data.timezones}</h3>
            <p>Time Zone</p>
        </div>
    </div>
</article>
</div>
`;

container.insertAdjacentHTML("beforebegin", htmlData)


} )