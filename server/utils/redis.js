import { createClient } from "redis"

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 11634,
    },
})

const connectRedis = async () => {

    client.on("error", (err) => console.log("Redis Client Error", err))

    await client.connect()
}

export  {
    connectRedis,
    client
}