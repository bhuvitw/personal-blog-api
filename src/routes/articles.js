// CRUD for blog posts

export default async function articleRoute(fastify){
    fastify.get('/', async (request, reply) => {
        // write code here
        // think about how to add filter/ tags
    })

    fastify.get('/:id', async (request, reply) => {
        const {id} = request.params;
        // write your code here
    })

    fastify.post('/', async(request, reply) => {
        // write your code here
    })

    fastify.delete('/:id', async (request, reply) =>{
        const { id }  = request.params;
        // write your code here
    })

    fastify.patch('/:id', async (request, reply) => {
        const { id } = request.params;
    })
}