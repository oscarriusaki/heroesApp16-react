import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher = '') => {
    const hero = ['DC Comics', 'Marvel Comics'];

    if(!hero.includes(publisher)){
        throw new Error(`no her with these publisher ${publisher}`)
    }
    return (heroes.filter(heroe => heroe.publisher+'' === publisher))
}
