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
                    description: "Esta é uma descrição teste do produto",
                    value: "10"
                })

        console.log(response.body)

        expect(response.body).toHaveProperty('id')
    })

    it('shouldn\'t be able to create a new product with string value', async () => {
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto",
                    value: "string"
                })
                .expect(400)

        console.log(response.body)

        
    })

    it('shouldn\'t be able to create a new product with missing params', async () => {
        const response = await request(app)
                .post('/products')
                .send({        
                    title: "Produto Teste",
                    description: "Esta é uma descrição teste do produto"

                })
                .expect(400)

        console.log(response.body)

        
    })

})