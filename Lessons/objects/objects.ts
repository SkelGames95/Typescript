// How to describe objects in ts:

// 1 - Objects:

const country: { code:string; population:number; } = {
    code: "NZ",
    population: 5_135_300,
};


// 2 - Interfaces:

interface Country {
    name:string;
    code:string;
    population:number;
}

const country2:Country = {
    name: "Italy",
    code: "IT",
    population: 60_000_000
}


// 3 - Type Alias:


type Videogame = {
    title:string;
    genre:string;
    allowedPlayers:number;
    softwareHouse:string;
    publisher:string;
    onSale:boolean;
}

const pokkénTournament:Videogame = {
    title: "Pokkén Tournament",
    genre: "Fighting",
    allowedPlayers: 2,
    softwareHouse: "BandaiNamco",
    publisher: "Nintendo",
    onSale: true,
}