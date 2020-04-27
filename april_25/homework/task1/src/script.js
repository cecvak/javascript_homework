// 1. Create an HTML page that displays an ordered list of tracks to the webpage using Document Object Model API.


let playList = [
            {
             author: "LED ZEPPELIN",
             song:"STAIRWAY TO HEAVEN"
            },
            {
             author: "QUEEN",
             song:"BOHEMIAN RHAPSODY"
            },
            {
             author: "LYNYRD SKYNYRD",
             song:"FREE BIRD"
            },
            {
             author: "DEEP PURPLE",
             song:"SMOKE ON THE WATER"
            },
            {
             author: "JIMI HENDRIX",
             song:"ALL ALONG THE WATCHTOWER"
            },
            {
             author: "AC/DC",
             song:"BACK IN BLACK"
            },
            {
             author: "QUEEN",
             song:"WE WILL ROCK YOU"
            },
            {
             author: "METALLICA",
             song:"ENTER SANDMAN"
            }
            ];

    for(let item of playList) {
    console.log(`Artist: ${item.author}, Song: ${item.song}.`);
    // document.write(`<p>Artist: ${item.author}, Song: ${item.song}.</p>`);
}

function makeList(array) {

        for(let array of playList) {
        let artist = array.author;
        let song = array.song;
        let artist2 = artist;
        artist2 = artist2.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

        let song2 = song;
        song2 = song2.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        let item = document.createElement('li');
        item.innerText = `${artist2} - ${song2}`;
        let ol = document.getElementsByTagName('ol')[0];
        ol.appendChild(item);
        console.log(item);
    }
}

makeList(playList);

