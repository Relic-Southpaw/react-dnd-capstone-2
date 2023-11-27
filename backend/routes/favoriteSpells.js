'use strict';

/** Routes for favorite spells. */
const FavSpell = require('../models/FavSpell')
const jsonschema = require('jsonschema');
const express = require('express');
const router = new express.Router();
const { BadRequestError } = require('../expressError');

// router.get(
//     '/:username',
//     ensureLoggedIn,
//     ensureOwner,
//     async function (req, res, next) {
//         try {
//             const { user } = await User.get(req.params.username);
//             return res.json(user);
//         } catch (err) {
//             return next(err);
//         }
//     }
// );

router.get(
    '/:username',
    async function (req, res, next) {
        try {
            const favorites = await FavSpell.get(req.params.username);
            return res.json(favorites);
        } catch (err) {
            return next(err);
        }
    }
)

router.post(
    '/:username/:spellId',
    async function (req, res, next) {
        try {
            await FavSpell.add(req.params.username, req.params.spellId)
            return
        } catch (err) {
            return next(err);
        }
    }
)

router.delete(
    `/:username/:spellId`,
    async function (req, res, next) {
        try {
            await FavSpell.delete(req.params.username, req.params.spellId);
            let uSpell = (req.params.username, req.params.spellId)
            return res.json({ deleted: uSpell })
        } catch (err) {
            return next(err);
        }
    }
)

module.exports = router;