var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

var isPuzzleCompleted = false;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";

            // DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); // click on image to drag
            tile.addEventListener("dragover", dragOver);   // drag an image
            tile.addEventListener("dragenter", dragEnter); // dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); // dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       // drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      // after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    // pieces
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); // put "1" to "9" into the array (puzzle images names)
    }
    pieces.push(""); // Add an empty string for the blank space.
    pieces.reverse();

    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        // swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = pieces[i] ? "./images/" + pieces[i] + ".jpg" : "./images/blank.jpg";

        // DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); // click on image to drag
        tile.addEventListener("dragover", dragOver);   // drag an image
        tile.addEventListener("dragenter", dragEnter); // dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); // dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       // drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      // after you completed dragDrop

        document.getElementById("pieces").append(tile);
    }

    // Add event listener for the "Complete" button.
    const completeButton = document.querySelector(".btn.btn-primary");
    completeButton.addEventListener("click", function() {
        if (isPuzzleCompleted) {
            displayCoupon();
        } else {
            alert("Congratulations! You've completed the puzzle. Here's your coupon code: IPHONE15");
        }
    });
}

// DRAG TILES
function dragStart() {
    currTile = this; // this refers to the image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //
}

function checkPuzzleCompletion() {
    const board = document.getElementById("board");
    const children = board.children;
    for (let i = 0; i < children.length; i++) {
        const pieceNumber = children[i].src.split("/").pop().split(".")[0];
        if (pieceNumber !== pieces[i]) {
            return false;
        }
    }
    return true;
}

function displayCoupon() {
    // Customize this part to show a coupon or perform any desired action.
    alert("Congratulations! You've completed the puzzle. Here's your coupon code: ABC123");
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    if (checkPuzzleCompletion()) {
        isPuzzleCompleted = true;
    }

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
