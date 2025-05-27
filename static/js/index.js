let url = "https://api.chucknorris.io/jokes/random";
let risorsa;


let choose = document.getElementById("scelta");
choose.addEventListener("change", function(e) {
    let valore =  e.currentTarget.selectedOptions[0].value

    console.log(valore, !!valore)

    url = "https://api.chucknorris.io/jokes/random" + (valore ? "?category=" + valore : "");


});


let btn = document.querySelector("#generate")
btn.addEventListener("click", function (e) {
    e.preventDefault()
    console.log(url)
    risorsa = fetch(url).then(
        function (resp) {
            console.log(risorsa)
            console.log(resp)

            return resp.json()
        }
    ).then(
        function (data) {
            document.querySelector("#jokes").innerHTML = "\' " + data.value + "\'";
        }
    ).catch(
        function (err) {
            console.log(err)
        }
    )

    console.log(risorsa)
    
})

        