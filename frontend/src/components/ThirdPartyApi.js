
import axios from "axios";
const BASE_URL = 'https://www.dnd5eapi.co'

class ThirdPartyApi {
    // GETS ALL SPELLS PULLED AND MAPPED WITH ALL INFORMATION
    static async getAllSpells() {
        const spellsIdx = await (axios.get(`${BASE_URL}/api/spells`).then((res) =>
            res.data));
        return Promise.all(
            spellsIdx.results.map((index) =>
                axios.get(BASE_URL + index.url).then((res) => res.data))
        )
    }

    // GETS ALL SPELLS A SPECIFIC CLASS CAN USE PULLED AND MAPPED
    static async getClassSpells(classes) {
        const classSpells = await (axios.get(`${BASE_URL}/api/classes/${classes}spells`)
            .then((res) => res.data));
        return Promise.all(
            classSpells.results.map((index) =>
                axios.get(BASE_URL + index.url).then((res) => res.data))
        )
    }
}

export default ThirdPartyApi;