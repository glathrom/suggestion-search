//getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

let suggestions = [
    "Apple",
    "Banana",
    "Peach",
    "Strawberry",
    "Mango",
    "Cantalope",
    "Durango",
    "Eiffel Tower",
    "Fun",
    "Flop",
    "Furry",
    "Great",
    "Good",
    "Grey",
    "Goober"
];

// event listener so that any key release on the search box
inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if( userData ){
        emptyArray  = suggestions.filter((data)=>{
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");

        // function to do the filtering to show selections
        showSuggestions(emptyArray);

        // adds the onclick event to each on of the suggestions and provides the 
        // function reference to modify the user input
        let allList = suggBox.querySelectorAll("li");
        for( let i = 0; i < allList.length; i++ ){
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
    }
}

// function to repalce the user input if the user clicks on a suggestion
function select(element){
    let selectUserData = element.textContent;
    console.log(selectUserData);
    inputBox.value = selectUserData;
}

// filter function to filter the list of possible inputs
function showSuggestions(list){
    let listData;
    if(!list.length){
        let userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';

    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
