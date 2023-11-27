var clickCount = 0;
var isGameOver = false; // Flag to track if the game is over

// Initialize counters
var naturalCount = 0;
var syntheticCount = 0;

function func1() {
    alert("The goal of the game is to fill the natural count to 3 before the synthetic reaches 3 Shortcut Hint: Teslas 3-6-9 Theory");
}

function playAGame() {
    if (isGameOver) {
        return; // Stop the game if it's over
    }

    clickCount++;

    var random1 = Math.ceil(Math.random() * 10);
    var random2 = Math.ceil(Math.random() * 10);
    var random3 = Math.ceil(Math.random() * 10);

    document.getElementById("rand1").innerHTML = "First = " + random1;
    document.getElementById("rand2").innerHTML = "Second = " + random2;
    document.getElementById("rand3").innerHTML = "Third = " + random3;

    average(random1, random2, random3); // Call the average function
}

function average(num1, num2, num3) {
    var sum = num1 + num2 + num3;

    if (sum === 18 && (num1 === 3 || num1 === 6 || num1 === 9 || 
        num2 === 3 || num2 === 6 || num2 === 9 || 
        num3 === 3 || num3 === 6 || num3 === 9)) {
        document.getElementById("average").innerHTML = "Natural";
        naturalCount++;  // Increment Natural count
        updateCounters();  // Update the display
    } else if (sum === 14 && (num1 === 2 || num1 === 4 || num1 === 8 ||
               num2 === 2 || num2 === 4 || num2 === 8 ||
               num3 === 2 || num3 === 4 || num3 === 8)) {
        document.getElementById("average").innerHTML = "Synthetic";
        syntheticCount++;  // Increment Synthetic count
        updateCounters();  // Update the display
    } else {
        document.getElementById("average").innerHTML = "Balanced but not pure, keep clicking so we can get a better reading";
    }

    // Check if the game should end
    if (naturalCount >= 3) {
        isGameOver = true;
        document.getElementById("average").innerHTML = "Congrats, you are a winner! - Game Over!";
    } else if (syntheticCount >= 3) {
        isGameOver = true;
        document.getElementById("average").innerHTML = "You are not a winner. Game Over.";
    }
}

function checkShortcutAnswer() {
    var answer = document.getElementById("shortcutInput").value;
    
    if (answer === "18") {
        alert("Winner winner chicken dinner!");
        naturalCount = 3;
        updateCounters();
        document.getElementById("average").innerHTML = "Congrats, you are a winner! - Game Over!";
        isGameOver = true;
    } else {
        alert("Incorrect answer. Try again!");
    }
}

// Function to update counters on the page
function updateCounters() {
    document.getElementById("naturalCount").innerHTML = naturalCount;
    document.getElementById("syntheticCount").innerHTML = syntheticCount;
}