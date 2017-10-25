/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



let openList = [];

const deck = $('.deck');

const showCard = function() {
    if ($(this).hasClass('match') === false) {
        $(this).toggleClass('open show');
        openList.push(this);
    }
};

const matched = function() {
    $(this).toggleClass('match');
};

//const opened = function() {
//    openList.push($(this).children()[0]);
//}

deck.on('click', 'li', function () {
    showCard.call(this);
    console.log(openList);
    if (openList.length === 2) {
        if (openList[0].getElementsByClassName('fa')[0].classList[1] === openList[1].getElementsByClassName('fa')[0].classList[1]) {
            $(openList[0]).toggleClass('match open show');
            $(openList[1]).toggleClass('match open show');
        } else {
            $(openList[0]).toggleClass('open show');
            $(openList[1]).toggleClass('open show');
        }
        openList.splice(0);
    }

//    if (openList[0] === openList[1]) {
//        console.log(openList);
//    }
//    opened.call(this);
});

//do not toggle if not match already!!!!!~~~~


//    openList.push($(this).children('i')[0]);
//    console.log(openList);
//    if (openList[0] === openList[1]) {
//        $('.deck').children('li').toggleClass('match');




//let classes = document.getElementsByClassName('fa')[0].classList[1];
//console.log(classes);

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
