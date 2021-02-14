let check = 0;
function searchClick()
{
    var input = document.getElementById("searchBarFirst").value;
    console.log(input);
}

function recipePage() {
    location.replace("Recipe.html");
}

function mainPage() {
    location.replace("index.html");
}
function cookbookPage()
{
    location.replace("CookBook.html");
}

function hidDiv() {
    var x = document.getElementById("card-1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function searchFilter() {
    //    /// Ingredient input ///
    //  var array_name = ["France"]; 
    //    /// Ingredient input ///
    var input = document.getElementById("searchBar");
    var lst = input.value.split(",");
    var nodes = document.getElementsByClassName('card1');

    for (i = 0; i < nodes.length; i++) {
        for (j = 0; j < lst.length; j++) {
            if (nodes[i].innerText.toLowerCase().includes(lst[j].toLowerCase())) {
                nodes[i].style.display = "block";
            } else {
                nodes[i].style.display = "none";
            }
        }
    }
}
