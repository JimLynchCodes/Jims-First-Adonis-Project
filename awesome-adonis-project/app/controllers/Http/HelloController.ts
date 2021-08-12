// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HelloController {

    getRandom1to100(): number {
        return 1 + Math.floor(Math.random() * 100);
    }

}
