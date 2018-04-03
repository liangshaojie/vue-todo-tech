const Router = require('koa-router')

const apiRouter = new Router({prefix:'/api'})

const successResponse = (data) => {
    return {
        success: true,
        data
    }
}

apiRouter
    .get('/todos', async (ctx) => {
        console.log(444444444444)
        console.log(ctx.db)
        const todos = await ctx.db.getAllTodos()
        ctx.body = successResponse(todos)
    })
module.exports = apiRouter