const request = require('supertest')
const app = require('../src/app')
const connection = require('../src/database/connection')

describe('PRODUCT', () => {
    beforeEach(async () =>  {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new product', async () => {
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto.",
                    value: "10"
                })

        
        expect(response.body).toHaveProperty('id')
    })

    it('should be able to create a new product', async () => {
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto.",
                    value: 100
                })

        
        expect(response.body).toHaveProperty('id')
    })

    it('shouldn\'t be able to create a new product with params with invalid data type', async () => {
        const response = await request(app)
                .post('/products')
                .send({        
                    title: 12,
                    description: 3.4,
                    value: "string"
                })
                .expect(400)
    })

    it('shouldn\'t be able to create a new product with missing params', async () => {
        const response = await request(app)
                .post('/products')
                .send({})
                .expect(400)  
    })

    it('should be able to get all products info at database', async () => {
        const response = await request(app)
                .get('/products')
        
        expect(response.body)
    })

    it('should be able to get an specific product info at database', async () => {
        
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto.",
                    value: "10"
                })

        const test = await request(app)
                .get('/product/' + response.body.id)
        
        expect(test.body).toHaveProperty('id')
    })

    it('should\'t be able to get an specific product with invalid param', async () => {
        
        const test = await request(app)
                .get('/product/test' )
        
        expect(400)
    })

    it('should be able to edit a existing product', async () => {
        
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto.",
                    value: "10"
                })


        const put = await request(app)
                .put('/products/' + response.body.id)
                .send({        
                    title: "Produto Teste Alterado",
                    description: "Esta é uma descrição teste do produto alterado.",
                    value: "15"
                })

        const get = await request(app)
                .get('/product/' + response.body.id)
                .send({        
                    title: "Produto Teste Alterado",
                    description: "Esta é uma descrição teste do produto alterado.",
                    value: "15"
                })

        expect({
            title: get.body.title,
            description: get.body.description,
            value: get.body.value
        }).toEqual({
            title: "Produto Teste Alterado",
            description: "Esta é uma descrição teste do produto alterado.",
            value: 15
        })
    })

    it('should\'t be able to edit an specific product with invalid param', async () => {
        
        const test = await request(app)
                .put('/products/test' )
        
        expect(400)
    })

    it('should be able to delete an specific product at database', async () => {
        
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto.",
                    value: "10"
                })

        const test = await request(app)
                .delete('/products/' + response.body.id)
        
        expect(204)
    })

    it('should\'t be able to delete an specific product with invalid param', async () => {
        
        const test = await request(app)
                .delete('/products/test' )
        
        expect(400)
    })


})