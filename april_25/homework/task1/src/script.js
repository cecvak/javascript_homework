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
            },
            ];

//     for(let item of playList) {
//     console.log(`Artist: ${item.author}, Song: ${item.song}.`);
// }

function makeList() {

        for(let array of playList) {
        let artist = array.author;
        let song = array.song;

        artist = artist.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

        song = song.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

        let item = document.createElement('li');
        item.innerText = `${artist} - ${song}`;
        let ol = document.getElementsByTagName('ol')[0];
        ol.appendChild(item);
        // console.log(item);
    }
}

makeList(playList);

