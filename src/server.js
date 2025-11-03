import Fastify from 'fastify'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import articleRoute from './routes/articles';
import commentRoute from './routes/comments';
import healthRoute from './routes/health';
import tagsRoute from './routes/tags';
import userRoute from './routes/users';

dotenv.config();

const PORT = process.env.PORT || 3000
const MONGO_URI= process.env.MONGO_URI

const fastify = Fastify({
    logger: true
})

async function main() {
    try{
        await mongoose.connect(`${MONGO_URI}`);
        console.log("MongoDB connected")
    } catch(err){
        console.log("Error: ", err);
        process.exit(1);
    }
}

main();

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.register(articleRoute, {prefix:"/article" })
fastify.register(commentRoute, {prefix:"/comment" })
fastify.register(healthRoute, {prefix: "/health"})
fastify.register(tagsRoute, {prefix: "/tags" })
fastify.register(userRoute, {prefix: "/user"})


fastify.listen({ port: PORT }, (err, address) => {
    if (err){
        fastify.log.error(err)
        process.exit(1)
    }
})