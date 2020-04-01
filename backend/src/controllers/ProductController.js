const connection = require('../database/connection')

module.exports = {

	async index(request, response) {

		const {page = 1} = request.query

		const [count] =  await connection('products')
							 .count()

		const products = await connection('products')
								.limit(5)
								.offset((page - 1) * 5)
								.select(['products.*'])

		response.header('X-Total-Count', count['count(*)'])
		
		return response.json(products)
	},



	async create(request, response) {
		const { title, description, value } = request.body

		const [id] = await connection('products').insert({
			title,
			description,
			value,
		}) 

		return response.json({ id })
	},

	async edit(request, response) {

		const { id } = request.params
		const { title, description, value } = request.body

		const product = await connection('products')
								.where('id', id)
								.update({
									title,
									description,
									value,
								})

		if(!product)
			return response.status(400).json({error: "Não existe um produto com o id informado."})
		
		return response.json({ id })


	},

	async delete(request, response) {
		const { id } = request.params

		const product = await connection('products')
								.where('id', id)
								.first()

		if(!product)
			return response.status(400).json({error: "Não existe um produto com o id informado."})

		
		await connection('products').where('id', id).delete()
		return response.status(204).send()

	}
}