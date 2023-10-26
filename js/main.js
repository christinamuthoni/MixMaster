document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.querySelector("#search");
    let drinkForm = document.getElementById("drink-form");
    let cocktails = [];


    input.addEventListener("change", () => {
        const searchTerm = input.value;
        loadTable(searchTerm);
    
    });

drinkForm.addEventListener("submit", tableSubmit => {//invoke the tableSubmit function with the search button.
    tableSubmit.preventDefault();
    const searchTerm = input.value;
    loadTable(searchTerm);

});


/*function loadTable(){
   let completeUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
   //fetch info from the cocktail database
    fetch(completeUrl)
    .then((res) => res.json())
     .then( data => {
        const cocktails = data.drinks;
        displayResults(cocktails);
        
     })

        for(let i=0; i<data.drinks.length; i++){
            let drink = {
                drinkName: data.drinks[i].strDrink,
                drinking: data.drinks[i].strDrinkThumb,
                alcoholic: data.drinks[i].strAlcoholic,
                ingredients: []
            };
            let allIng = Object.values(data.drinks[i].slice(17, 32));
            allIng.forEach((ing) => {
                if(ing !=null && ing != "") drink.ingredients.push(" "+ ing);

            });
            cocktails.push(drink);
            
        }
        deleteRows();
        createRows();
    }
    return cocktails;



function displayResults(cocktails) {
    const tbody = document.querySelector("#cocktail-rows");

    // Clear the existing table rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


    if (cocktails) {
       cocktails.forEach((drink) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${drink.strDrink}</td>
                <td><img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="100" height="100"></td>
               <td>${drink.strAlcoholic}</td>
               <td>${drink.strIngredient1}, ${drink.strIngredient2}, ...</td>
            `;
            tbody.appendChild(row);
          
        });
        //build share and download button
        let card = document.createElement("li");
        card.className = 'card'
        card.innerHTML = `
         <div class = "buttons">
         <div>Share</div>
         <div>Download</div>
         </div>
        `

         //add the card to DOM
         document.querySelector('#extras').appendChild(card)
   }

}

});