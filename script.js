order_price = 0;

type_of_bun = prompt (`What do you want - Hamburger or Cheeseburger, enter please!`);
type_of_bun = type_of_bun ? type_of_bun.trim().toLowerCase() : ``;

if (type_of_bun = 'Hamburger') {
    alert ("Okay, your choice - Hamburger, 10$ from you.");
    console.log (order_price +=10);
} else if (type_of_bun = 'Cheeseburger') {
    alert ("Okay, your choice - Cheeseburger, 15$ from you.");
    console.log (order_price +=15);
}

double_cheese = confirm (`Would you like yet double cheese?`);

if (double_cheese) {
    alert ("Good, and Double cheese, yet 5$ from you.");
    console.log (order_price +=5);
} else {
    alert ("Okay, only bun");
}

potato = confirm (`Would you like potato?`);

if (potato) {
    alert ("Okay, enter choose potato size, please");

    size_potato = prompt (`Choose potato size: small/middle/big`);
    size_potato = size_potato ? size_potato.trim().toLowerCase() : ``;
        switch (size_potato) {
            case 'small':
                alert ("Okay, 10$ from you.");
                console.log (order_price +=10);
                break;
            case 'middle':
                alert ("Okay, 15$ from you.");
                console.log (order_price +=15);
                break;
            case 'big':
                alert ("Okay, 20$ from you.");
                console.log (order_price +=20);
        }     
}

sauce = confirm (`Would you like sauce?`);

if (sauce) {
    alert ("Nice!");

    type_of_sauce = prompt (`Choose sauce: ketchup/mayonnaise`);
    type_of_sauce = type_of_sauce ? type_of_sauce.trim().toLowerCase() : ``;
        switch (type_of_sauce) {
            case 'ketchup':
                alert ("Okay, 10$ from you.");
                console.log (order_price +=10);
                break;
            case 'ketchup':
                alert ("Okay, 10$ from you.");
                console.log (order_price +=10);
                break;
            default:
                alert ("Okay, we will add ketchup to the bun, 10$ from you.");
                console.log (order_price +=10);
                break;       
        }
}

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bun 🍔: ${type_of_bun} </li>
		<li>Potato 🍟: ${size_potato} </li>
		<li>Sauce 🧂: ${type_of_sauce} </li>
	</ul>

	<p>Price: ${order_price} </p>
`);