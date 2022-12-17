import { heroes } from "../data/heroes";

export const getHeroByName = (name = '') => {

    name = name.trim().toUpperCase();
    if(name.length === 0) return [];

    return (heroes.filter(hero => hero.superhero.toUpperCase().includes(name)));
}