import { body } from "express-validator";

export const createForumSchema = [
    body('title')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
    body('content')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
    body('image')
        .isURL().withMessage('Debe ser URL')
        .notEmpty().withMessage('No debe ser vacío'),
]

export const editForumSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
    body('content')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
    body('image')
        .optional()
        .isURL().withMessage('Debe ser URL')
        .notEmpty().withMessage('No debe ser vacío'),
]