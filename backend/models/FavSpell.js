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
        const res = await db.query(
            `SELECT 
            spell_id as "spellId"
             FROM user_spells
        WHERE username = $1`,
            [username]
        );
        return res.rows.map((f) => f.spellId)
    }

    static async add(username, spellId) {
        /**Adds username and spell_id to 
         * the favorites list
         */
        return await db.query(`
        INSERT INTO user_Spells
        (username, spell_id)
        VALUES
        ($1, $2)
        `, [username, spellId]);
    }

    static async delete(username, spellId) {
        /**Come on now...
         * The function is titled delete
         * Really?
         */
        const res = await db.query(
            `DELETE FROM
            user_spells 
            WHERE username = $1
            AND spell_id =$2
            RETURNING spell_id AS "spellId"`,
            [username, spellId]
        )
        return res.rows.length > 0 ? 'deleted' : -1;
    }
}

module.exports = FavSpell;