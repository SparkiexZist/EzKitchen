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

function orderPage()
{
    location.replace("Order.html");
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
    var count = 0;
    var status = 0;
    var input = document.getElementById("searchBar");
    var lst = input.value.split(",");
    var nodes = document.getElementsByClassName('card1');

    for (i = 0; i < nodes.length; i++)
    {
        count = 0;
        for (j = 0; j < lst.length; j++) 
    {
     if(nodes[i].innerText.toLowerCase().search(lst[j].toLowerCase())!= -1)
         {
             count+=1;
         }
    if(count == lst.length)
                 {
                     nodes[i].style.display = "block";
                 }
             else
                 {
                     nodes[i].style.display = "none";
                 }
//                {
//                    nodes[i].style.display = "block";
//                }
//            else
//                {
//                    nodes[i].style.display = "none"; 
//                }
        }
    }
}

function calculatePrice(myform){
    
  var inpf = document.getElementById("firstMul").value;
  var inps = document.getElementById("secondMul").value;
  var inpt = document.getElementById("thirdMul").value;
  var inptfo = document.getElementById("forthMul").value;
  var inptfif = document.getElementById("fifthMul").value;
  var inpsixth = document.getElementById("sixthMul").value;
  var inpseventh = document.getElementById("seventhMul").value;
  var inpeight = document.getElementById("eightMul").value;

  //Get selected data  
  var elt = document.getElementById("first");
  var memory = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("second");
  var hdd = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("third");
  var network = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("forth");
  var forth_network = elt.options[elt.selectedIndex].value;

  var elt = document.getElementById("fifth");
  var fifth = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("sixth");
  var sixth = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("seventh");
  var seventh = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("eight");
  var eight = elt.options[elt.selectedIndex].value;
//  var first_mul = document.getElementById("firstMul").value;
    
//  convert data to integers
  memory = parseFloat(memory);
  hdd = parseFloat(hdd);
  network = parseFloat(network);
  forth_network = parseFloat(forth_network);
  fifth = parseFloat(fifth);
  sixth = parseFloat(sixth);
  seventh = parseFloat(seventh);
  eight = parseFloat(eight);
    
  //calculate total value  
  var total = (memory*inpf)+(hdd*inps)+(network*inpt)+(forth_network*inptfo)+(fifth*inptfif)+(sixth*inpsixth)+(seventh*inpseventh)+(eight*inpeight);
    
  //print value to  PicExtPrice 
  document.getElementById("PicExtPrice").value=total.toFixed(2);

}