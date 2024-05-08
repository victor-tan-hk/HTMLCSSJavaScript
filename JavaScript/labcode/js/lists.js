let categoryNames = [];

let createCatBtn = document.querySelector("#createCatBtn");
let categoryEntry = document.querySelector("#categoryEntry");
let categoryBoxLocation = document.querySelector("#categoryBoxLocation");
let categoryOptions = document.querySelector("#categoryOptions");
let addCategoryStatus = document.querySelector("#addCategoryStatus");

let itemEntry = document.querySelector("#itemEntry");
let addItemBtn = document.querySelector("#addItemBtn");
let addItemStatus = document.querySelector("#addItemStatus");


let createNewCategory = function (categoryName) {
    let newDiv = document.createElement('div');
    newDiv.id = categoryName;
    newDiv.className = 'categoryBox';
    let newParagraph = document.createElement('p');
    newParagraph.className = 'categoryTitle';
    newParagraph.textContent = 'Category : ' + categoryName;
    newDiv.append(newParagraph);
    let newOL = document.createElement('ol');
    newOL.className = 'categoryList';
    newDiv.append(newOL);
    categoryBoxLocation.append(newDiv);
    return newDiv;
};

function itemExistsInCategory(innerOl, newItem) {
    console.log("items inside selected box");
    let children = innerOl.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].textContent === newItem)
            return true;
    }
    return false;

}


createCatBtn.addEventListener('click', function (event) {

    if (categoryNames.indexOf(categoryEntry.value) >= 0) {
        addCategoryStatus.textContent = "That category already exists !";
        setTimeout(function () {
            addCategoryStatus.textContent = '';
        }, 2000);
    } else {
        categoryNames.push(categoryEntry.value);
        console.log(categoryNames);
        createNewCategory(categoryEntry.value);
        const option = new Option(categoryEntry.value, categoryEntry.value);
        categoryOptions.add(option, undefined);
    }
    categoryEntry.value = '';
    categoryEntry.focus();
});


addItemBtn.addEventListener('click', function (event) {

    console.log(itemEntry.value);
    console.log(categoryOptions.value);
    // first check to see whether the category exists


    let selectedBox = document.querySelector("#" + categoryOptions.value);
    console.log(selectedBox);

    let newLi = document.createElement('li');
    newLi.textContent = itemEntry.value;

    let innerOl = selectedBox.querySelector('ol');

    if (itemExistsInCategory(innerOl, itemEntry.value)) {
        addItemStatus.textContent = "That item already exists !";
        setTimeout(function () {
            addItemStatus.textContent = '';
        }, 2000);
    }
    else
        innerOl.appendChild(newLi);

    itemEntry.value = '';
    itemEntry.focus();
});

