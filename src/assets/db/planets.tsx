export type PlanetInfo = {
    id: number;
    name: string;
    imgUrl: string;
    system: string;
    population: number;
    distance: string;
    description: string;
    price: number;
}

const planets: PlanetInfo[] = [
    {
        "id": 1,
        "name": "Mercury",
        "imgUrl": "./src/assets/img/Mercurio.jpg",
        "system": "Sol",
        "population": 49000,
        "distance": "82.5 Millions of Km",
        "description": "Mercury is the first planet from the Sun and the smallest in the Solar System. It is a terrestrial planet with a heavily cratered surface due to overlapping impact events. These features are well preserved since the planet has no geological activity and an extremely tenuous atmosphere called an exosphere.",
        "price": 1800
    },
    {
        "id": 2,
        "name": "Venus",
        "imgUrl": "./src/assets/img/Venus.jpg",
        "system": "Sol",
        "population": 54000,
        "distance": "39.79 Millions of Km",
        "description": "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth. Orbiting inferiorly (inside of Earth's orbit), it appears in Earth's sky always close to the Sun, as either a morning star or an evening star.",
        "price": 3000
    },
    {
        "id": 3,
        "name": "Mars",
        "imgUrl": "./src/assets/img/Marte.jpg",
        "system": "Sol",
        "population": 589000,
        "distance": "55.65 Millions of Km",
        "description": "Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname the Red Planet. Mars's radius is second smallest among the planets in the Solar System at 3,389.5 km (2,106 mi).",
        "price": 3500
    },
    {
        "id": 4,
        "name": "Jupiter",
        "imgUrl": "./src/assets/img/Jupiter.jpg",
        "system": "Sol",
        "population": 15000,
        "distance": "591.97 Millions of Km",
        "description": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm) with an orbital period of 11.86 years.",
        "price": 6000
    },
    {
        "id": 5,
        "name": "Saturn",
        "imgUrl": "./src/assets/img/Saturno.jpg",
        "system": "Sol",
        "population": 34000,
        "distance": "1204.28 Millions of Km",
        "description": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive.",
        "price": 9500
    },
    {
        "id": 6,
        "name": "Uranus",
        "imgUrl": "./src/assets/img/Urano.jpg",
        "system": "Sol",
        "population": 11000,
        "distance": "2586.88 Millions of Km",
        "description": "Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature of 49 K (−224 °C; −371 °F) out of all Solar System's planets. It has a marked axial tilt of 97.8° with a retrograde rotation rate of 17 hours.",
        "price": 10800
    },
    {
        "id": 7,
        "name": "Neptune",
        "imgUrl": "./src/assets/img/Neptuno.jpg",
        "system": "Sol",
        "population": 15000,
        "distance": "4311.02 Millions of Km",
        "description": "Neptune is the eighth planet from the Sun and the farthest IAU-recognized planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.",
        "price": 14700
    },
    {
        "id": 8,
        "name": "Pluto",
        "imgUrl": "./src/assets/img/Plutón.jpg",
        "system": "Sol",
        "population": 10500,
        "distance": "4293.37 Millions of Km",
        "description": "Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is slightly less massive than Eris. Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets.",
        "price": 18900
    }
]

export default planets