'use strict';

/** Routes for favorite spells. */
const express = require('express');
const FavSpell = require('../models/FavSpell')
const { ensureLoggedIn, ensureOwner } = require('../middleware/auth')

const router = new express.Router();

router.get(
    '/:username',
    ensureLoggedIn,
    ensureOwner,
    async function (req, res, next) {
        try {
            const favorites = await FavSpell.get(req.params.username);
            return res.json({ favorites });
        } catch (err) {
            return next(err);
        }
    }
)

router.post(
    '/:username/:spellId',
    ensureLoggedIn,
    ensureOwner,
    async function (req, res, next) {
        try {
            await FavSpell.add(req.params.username, req.params.spellId)
            return res.status(201).json('added')
        } catch (err) {
            return next(err);
        }
    }
)

router.delete(
    `/:username/:spellId`,
    ensureLoggedIn,
    ensureOwner,
    async function (req, res, next) {
        try {
            const result = await FavSpell.delete(req.params.username, req.params.spellId);
            const statusCode = result === -1 ? 204 : 200;
            return res.status(statusCode).json(result)
        } catch (err) {
            return next(err);
        }
    }
)

module.exports = router;