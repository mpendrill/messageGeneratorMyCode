// Problem statement

/* For this project, you will build a message generator program.
Every time a user runs a program, they should get a new, randomized output.
You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes.
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.
Take what you know of JavaScript syntax so far to build the program and customize it to your liking. */

/* My Problem - Genre Selector
Every time a user runs this program, it will randomly select a sub-genre for them to listen to (i.e. indie-pop, indie-rock, etc.)

To do this, I will...
1. Create a function to generate a random number between 0 --> num - 1
2. Create an object with some key-value pairs of the genre and corresponding sub-genres
3. Store the sub-genres in an array
4. Iterate over the object
5. Use the object's properties to customize the message being added to Genres
6. Create a function that takes in a property (genre) and formats it properly

*/

const generateRandomNumber (num) => {
    return Math.floor(Math.random() * num);
}

const allGenres = {
    rockMusic: ['indie-rock','pop-rock','funk-rock'],
    popMusic: ['indie-pop','dream-pop','synth-pop'],
    rapMusic: ['hip-hop','r&b','hip-pop']
}

let genres = [];

for (let prop in allGenres) {
    // Generate a random number based on the length of the array in the selected key of the allGenres object
    let genreIndex = generateRandomNumber(allGenres[prop].length)

    //Use the object's properties to customize the message being added to Genres
    switch(prop) {
        case 'rockMusic':
            genres.push(`You should listen to ${allGenres[prop][genreIndex]}`);
        case 'popMusic':
            genres.push(`You should listen to ${allGenres[prop][genreIndex]}`);
        case 'rapMusic':
            genres.push(`You should listen to ${allGenres[prop][genreIndex]}`);
        default:
            genres.push(`Do not listen to music`);
    }
}

function formattedGenre(genreSelection) {
    const formatted = genres.join('\n')
    console.log(formatted);
}

formattedGenre(genre);