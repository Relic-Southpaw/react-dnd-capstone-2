const db = require('../db')
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
} = require('../expressError');

class FavSpell {
    static async get(username) {
        /** Pulls all favorite spells by user
         * So we can populate the favorites list of user
         * on profile page
         */
        return await db.query(
            `SELECT * FROM user_spells
        WHERE username = $1`,
            [username]
        );
    }

    static async add(username, spellId) {
        /**Adds username and spell_id to 
         * the favorites list
         */
        return await db.query(`
        INSERT INTO user_Spells
        VALUES username = $1, 
        spell_id = $2
        `, [username, spellId]);
    }

    static async delete(username, spellId) {
        /**Come on now...
         * The function is titled delete
         * Really?
         */
        return await db.query(
            `DELETE FROM
            user_spells WHERE username = $1
            AND spell_id =$2`,
            [username, spellId]
        )
    }
}

module.exports = FavSpell;