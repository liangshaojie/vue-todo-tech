const Router = require('koa-router')

const userRouter = new Router({prefix: '/user'})

userRouter.post('/login', async ctx => {
    const user = ctx.request.body
    if (user.username === 'lsj' && user.password === '123456') {
        ctx.session.user = {
            username:'lsj'
        }
        ctx.body = {
            success:true,
            data:{
                username:'lsj'
            }
        }
    }else{
        ctx.status = 400
        ctx.body = {
            success:false,
            message:'username or password error'
        }
    }
})

module.exports = userRouter
