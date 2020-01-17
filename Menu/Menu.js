/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = ['Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out'];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.
  */

//create fucntion
function menuCreator(menuItems) {
  //create elements
  const BurgM = document.createElement('div');
  const BurgUL = document.createElement('ul');
  // create classes
  BurgM.classList.add('menu');
  //append elements
  BurgM.append(BurgUL);

  menuItems.forEach(element => {
    let li = document.createElement('li');
    let link = document.createElement('a');

    link.href = '#';
    link.textContent = element;
    li.append(link);
    BurgUL.append(li);
  });

  return BurgM;
}
let header = document.querySelector('.header');
header.prepend(menuCreator(menuItems));
let menu = document.querySelector('.menu');
header.addEventListener('click', e => {
  if (e.target.classList == 'menu-button') {
    menu.classList.toggle('menu--open');
  }
});

/*
  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
