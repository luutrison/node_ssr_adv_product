
const { LS_YTE4MTKZMZKYMJI } = require("../bounder/LS_YTE4MTKZMZKYMJI");
const { LS_BJE4NDQ4MJQ0OTY } = require("../component/container/LS_BJE4NDQ4MJQ0OTY");
const { LS_DDE4NJKZMTA1NZE } = require("../component/content/best-content/LS_DDE4NJKZMTA1NZE");
const { LS_YTIZNTY3ODE4NJC } = require("../component/content/category/LS_YTIZNTY3ODE4NJC");
const { LS_YTIWODK1MTQ3MDM } = require("../component/content/hot-content/LS_YTIWODK1MTQ3MDM");
const { THIS } = require("../method/LS_ZZE4NDI2MZIWNTQ");
const { ROUTER_LS_YTE4MTK0NDQZMTY } = require("../route/ROUTER_LS_YTE4MTK0NDQZMTY");

//Default

const HOME_LS_DZE4MTKZOTIYMDU = () => {
    ROUTER_LS_YTE4MTK0NDQZMTY.get("/", (request, response) => {
        try {
            const JOBS = THIS.METHOD.EXCEPTIONS.JOBS({
                method: () => {
                    response.redirect(THIS.CONFIG_DEFAULT().PAPER.PATH.HELP)
                }
            })

            const current = request.query.paper ? request.query.paper : THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE

            const THIS_EX = THIS.METHOD.EXCEPTIONS

            var best_content = THIS_EX.CREATE_START_CONTENT()
            var hot_content = THIS_EX.CREATE_START_CONTENT()
            var hot_category = THIS_EX.CREATE_START_CONTENT()

            LS_YTIZNTY3ODE4NJC({active: String()}).ELEMENT().then(category_info => {
                hot_category = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: category_info })
                posive()
            }).catch(error => {
                hot_category = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                posive()
            })


            const posive = () => {
                if (best_content.status && hot_content.status && hot_category.status) {

                    LS_BJE4NDQ4MJQ0OTY({
                        one: {
                            content: best_content.content,
                        },
                        two: {
                            content: hot_content.content,
                        },
                        options: hot_category.content,
                        intro: true
                    }).ELEMENT().then(_info => {
                        try{

                            LS_YTE4MTKZMZKYMJI({
                                content: _info
                            }).ELEMENT().then(content => {
                                JOBS.DONE()
                                response.send(content).end()
                            }).catch(error => {
                                THIS.EX.SAD(error, response)
                            })
                        }catch(error){
                            THIS.EX.SAD(error, response)

                        }
                    }).catch(error => {
                        THIS.EX.SAD(error, response)

                    })

                }
            }

            const get_best_content = () => {
                LS_DDE4NJKZMTA1NZE({ current: current , href: request.originalUrl}).ELEMENT().then(content => {
                    best_content = THIS_EX.SET_START_CONTENT({ content: content })
                    get_hot_content()
                    posive()
                }).catch(error => {
                    console.log(error)
                    best_content = THIS_EX.SET_START_CONTENT({ content: error })
                    get_hot_content()
                    posive()
                })
            }

            const get_hot_content = () => {
                LS_YTIWODK1MTQ3MDM().ELEMENT().then(content => {
                    hot_content = THIS_EX.SET_START_CONTENT({ content: content })
                    posive()
                }).catch(error => {
                    hot_content = THIS_EX.SET_START_CONTENT({ content: error })
                    posive()
                })
            }
            get_best_content()

        } catch (error) {
            THIS.EX.SAD(error, response)
        }

    })
}

module.exports.HOME_LS_DZE4MTKZOTIYMDU = HOME_LS_DZE4MTKZOTIYMDU

