document.getElementById("mainTitle").innerText = "FUNNY VIDEOGAME";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;

let tempTimeOut;

//Main character
const mainCharacter = document.getElementById("mainCharacter");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

//inventory
let inventory = [];
const inventoryList = document.getElementById("inventoryList");
let EndedGame = 0

gameWindow.onclick = function (e) {
    if (counterSpeech.style.opacity == 0 && mainCharacterSpeech.style.opacity == 0 && EndedGame == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);

        switch (e.target.id) {
            case "Statue":
                if(!checkItem("Letter N") && !checkItem("Compass"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "Hello Statue.")
                    counterPortrait.style.opacity = 1;
                    setTimeout(showMessage, 2 * sec, counterSpeech, counterAudio, "Hello person.");
                    setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "Why does a statue talk?");
                    setTimeout(showMessage, 6 * sec, counterSpeech, counterAudio, "why do you ask questions to statues?");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Can i have the letter you are holding?");
                    setTimeout(showMessage, 10 * sec, counterSpeech, counterAudio, "Only if you return it later.");
                    setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "Will do.");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 14 * sec);
                    setTimeout(getItem, 14 * sec, "Letter N", "L1");
                }
                else if(checkItem("Compass") && checkItem("Letter N"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "Hello again statue.")
                    counterPortrait.style.opacity = 1;
                    setTimeout(showMessage, 2 * sec, counterSpeech, counterAudio, "Hello again person.");
                    setTimeout(showMessage, 4.1 * sec, counterSpeech, counterAudio, "Are you going to return my letter?");
                    setTimeout(showMessage, 6.1 * sec, mainCharacterSpeech, characterAudio, "Yes, here it is.");
                    setTimeout(showMessage, 8.1 * sec, counterSpeech, counterAudio, "Thank you.");
                    setTimeout(showMessage, 10.1 * sec, mainCharacterSpeech, characterAudio, "Goodbye.");
                    setTimeout(function () { counterPortrait.style.opacity = 0; }, 12 * sec);
                    setTimeout(removeItem, 12.1 * sec, "Letter N", "L1");
                }
                else
                {
                    R = Math.random();

                    if(R <= 0.25)
                    {
                        showMessage(mainCharacterSpeech, characterAudio, "Question.")
                        counterPortrait.style.opacity = 1;
                        setTimeout(showMessage, 2 * sec, counterSpeech, counterAudio, "What is your question?.");
                        setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "What does a statue eat?");
                        setTimeout(showMessage, 6 * sec, counterSpeech, counterAudio, "Rocks.");
                        setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Really?");
                        setTimeout(showMessage, 10 * sec, counterSpeech, counterAudio, "No, statues don't eat.");
                        setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "oh, alright then.");
                        setTimeout(function () { counterPortrait.style.opacity = 0; }, 14 * sec);
                    }
                    else if(R > 0.25 && R <= 0.5)
                    {
                        showMessage(mainCharacterSpeech, characterAudio, "I have a question.")
                        counterPortrait.style.opacity = 1;
                        setTimeout(showMessage, 2 * sec, counterSpeech, counterAudio, "What is your question?.");
                        setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "What do you do all day?");
                        setTimeout(showMessage, 6 * sec, counterSpeech, counterAudio, "I read the letter you borrowed.");
                        setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "What does it say?");
                        setTimeout(showMessage, 10 * sec, counterSpeech, counterAudio, "N.");
                        setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "Enlightening.");
                        setTimeout(function () { counterPortrait.style.opacity = 0; }, 14 * sec);
                    }
                    else if(R > 0.5 && R <= 0.75)
                    {
                        showMessage(mainCharacterSpeech, characterAudio, "Can i ask something?")
                        counterPortrait.style.opacity = 1;
                        setTimeout(showMessage, 2 * sec, counterSpeech, counterAudio, "What is the problem?");
                        setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "Why does no one live here?");
                        setTimeout(showMessage, 6 * sec, counterSpeech, counterAudio, "Because they left.");
                        setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Why is that?");
                        setTimeout(showMessage, 10 * sec, counterSpeech, counterAudio, "They are on a business trip.");
                        setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "Alright then.");
                        setTimeout(function () { counterPortrait.style.opacity = 0; }, 14 * sec);
                    }
                    else if(R > 0.75)
                    {
                        showMessage(mainCharacterSpeech, characterAudio, "Hello again statue.")
                        counterPortrait.style.opacity = 1;
                        setTimeout(showMessage, 2 * sec, counterSpeech, counterAudio, "Hello again person.");
                        setTimeout(showMessage, 4 * sec, mainCharacterSpeech, characterAudio, "Why does someone own a talking statue?");
                        setTimeout(showMessage, 6 * sec, counterSpeech, counterAudio, "I don't know.");
                        setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "guess we'll never know");
                        setTimeout(showMessage, 10 * sec, counterSpeech, counterAudio, "Are you going to return the letter?");
                        setTimeout(showMessage, 12 * sec, mainCharacterSpeech, characterAudio, "No, i still need it for something.");
                        setTimeout(function () { counterPortrait.style.opacity = 0; }, 14 * sec);
                    }
                }
            break;
            case "RedBrick":
                showMessage(mainCharacterSpeech, characterAudio, "I found a brick, I could use this to smash stuff.")
                getItem("Red Brick", "brick")
                break;
            case "Vase1":
                if(checkItem("Red Brick")) 
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I broke the vase and found nothing.<br>these shards look useful so i'll take one")
                    getItem("Sharp Shard", "Shard")
                }
                else 
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I could break this if a brick or something")
                }
                break;
            case "Vase2":
                if(checkItem("Red Brick") && !checkItem("Shovel") && !checkItem("Bronze Key")) 
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I broke the vase and found a key. <br>If it were a gold key i would sell it")
                    getItem("Bronze Key", "key")
                }
                else if(checkItem("Shovel") || checkItem("Bronze Key"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I'm pretty sure I broke this, i guess it has auto repair or something fancy")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I should break this, there is something shiny inside.")
                }
                break;
            case "Door":
                if(checkItem("Shovel") && !checkItem("Bronze Key"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "Not going there again, that spider looked pissed off.")
                }
                else if(checkItem("Bronze Key"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "There is a shovel in here, and a spider. <br>And the key broke.")
                    getItem("Shovel", "Shovel")
                    removeItem("Bronze Key", "key")
                }
                else 
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I think a key is needed for this key door.")
                }
                break;
            case "Pillar":
                if(checkItem("Letter E"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I already have the letter that was here")
                }
                else if(checkItem("Sharp Shard"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I could remove the letter with the shard. <br>Or not, it already fell down")
                    getItem("Letter E", "L2")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "There is a letter sticking out,<br>if I had something sharp I could get it")
                }
                break;
            case "grave":
                if(checkItem("Bone") || checkItem("Torch"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "If anyone asks, i didn't touch this grave.")
                }
                else if(checkItem("Shovel") && !checkItem("Torch"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I defiled a grave and found a bone.<br>lets say its from a chicken for now.")
                    getItem("Bone", "Bone")

                    if(checkItem("Rope"))
                    {
                        setTimeout(showMessage, 2 * sec, mainCharacterSpeech, characterAudio, "I can craft a torch now");
                        removeItem("Rope", "Rope")
                        removeItem("Bone", "Bone")
                        getItem("Torch", "Torch")
                    }
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "This grave stone is bigger.<br>Probably because of the long name.")
                }
                break;      
            case "Pipe":
                if(checkItem("Bone") || checkItem("Torch"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I found a letter, if only i could read.")
                    getItem("Letter S", "L3")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "There is something shiny stuck to the inside.<br>I'll need some sort of stick to reach it.")
                }
                break;
            case "Barrel":
                if(checkItem("Sharp Shard") && !checkItem("Torch"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I cut some rope from the barrel, it doesn't look very strong.")
                    getItem("Rope", "Rope")

                    if(checkItem("Bone"))
                    {
                        setTimeout(showMessage, 2 * sec, mainCharacterSpeech, characterAudio, "I can craft a torch now");
                        removeItem("Rope", "Rope")
                        removeItem("Bone", "Bone")
                        getItem("Torch", "Torch")
                    }
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "There is some rope sticking out of this barrel.<br>If i had something sharp i could cut it.")
                }
                break;
            case "LargeGrave":
                if(checkItem("Letter W"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I already stole this persons stuff")
                }
                else if(checkItem("Torch") && checkItem("Gold Nugget"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "i'll melt the gold into the slot on the cover.")
                    setTimeout(showMessage, 2 * sec, mainCharacterSpeech, characterAudio, "The lock opened, there is another letter inside");
                    getItem("Letter W", "L4")
                    getItem("Gold Cross", "Gold Cross")
                    removeItem("Gold Nugget", "Gold")
                }
                else if(checkItem("Torch") && !checkItem("Gold Nugget"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I don't have anything to put on the cover")
                }
                else if(!checkItem("Torch") && checkItem("Gold Nugget"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I have something to fill the slot on the cover.<br>But i don't have the tools for it")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "Its a large forever box.<br>The cross on the cover is missing")
                }
                break;
            case "LargeRock":
                if(checkItem("Shovel") && !checkItem("Letter W") && !checkItem("Gold Nugget"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I cut the gold nugget of the rock, I'm rich now")
                    getItem("Gold Nugget", "Gold")
                }
                else if(checkItem("Letter W") || checkItem("Gold Nugget"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "There sadly isn't more gold.")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "There is some gold sticking out of this rock.<br>If only i had a tool for digging")
                }
                break;
            case "EndBlock":
                if(checkItem("Compass") && !checkItem("Letter N"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "Now that I have a compass I can leave this place.")
                    setTimeout(EndGame, 2 * sec);
                }
                else if(checkItem("Compass") && checkItem("Letter N"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I should first return the letter to the statue.")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I don't have a compass, I shouldn't leave here.")
                }
                break;
            case "DirectionBlock":
                if(checkItem("Letter N") && checkItem("Letter E") && checkItem("Letter S") && checkItem("Letter W") && !checkItem("Compass"))
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I can craft a compass using this thing on the floor.")
                    getItem("Compass", "Compass")
                }
                else
                {
                    showMessage(mainCharacterSpeech, characterAudio, "I could craft a compass using this thing.<br>But i don't have the materials for it")
                }
                break;
            default:
                // do something when it doesn't have a case
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
    }
}

function showMessage(targetBalloon, TargetAudio, message) {
    TargetAudio.currentTime = 0.5;
    TargetAudio.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 2 * sec, targetBalloon, TargetAudio);
}

function hideMessage(targetBalloon, TargetAudio) {
    TargetAudio.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }

}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    //Make a list item from scratch and store it in a variable
    let listItem = document.createElement("li");

    //Give List Item an ID name
    listItem.id = itemId;

    //fill that list item with value of inputfield
    listItem.appendChild(document.createTextNode(itemName));

    //find UL with id todoContainer and attach the list item to it.
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();

}

function EndGame()
{
    document.getElementById("MapImage").src = "img/EndScreen.jpg"
    document.getElementById("dialogBar").style.opacity = 0;
    mainCharacter.style.opacity = 0;
    EndedGame = 1;
}

