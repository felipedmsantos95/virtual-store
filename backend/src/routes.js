const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const ProductController = require('./controllers/ProductController')

const routes = express.Router()

//To list products
routes.get('/products', ProductController.index)

//To create new product
routes.post('/products',  celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        value: Joi.number().required(),
        description: Joi.string().required(),
    })
}), ProductController.create)

//To edit product
routes.put('/products/:id', celebrate({
    
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        value: Joi.number().required(),
        description: Joi.string().required(),
    }),

    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })

}), ProductController.edit)

//To remove a product
routes.delete('/products/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), ProductController.delete)

 
module.exports = routes