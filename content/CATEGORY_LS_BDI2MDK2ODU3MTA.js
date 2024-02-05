const { LS_YTE4MTKZMZKYMJI } = require("../bounder/LS_YTE4MTKZMZKYMJI")
const { LS_BJE4NDQ4MJQ0OTY } = require("../component/container/LS_BJE4NDQ4MJQ0OTY")
const { LS_DDE4NJKZMTA1NZE } = require("../component/content/best-content/LS_DDE4NJKZMTA1NZE")
const { LS_YTIZNTY3ODE4NJC } = require("../component/content/category/LS_YTIZNTY3ODE4NJC")
const { LS_YTIWODK1MTQ3MDM } = require("../component/content/hot-content/LS_YTIWODK1MTQ3MDM")
const { LS_CTIWOTU4MTYZNDM } = require("../component/content/other/LS_CTIWOTU4MTYZNDM")
const { THIS } = require("../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../mongoDB/MONGODB")
const { ROUTER_LS_YTE4MTK0NDQZMTY } = require("../route/ROUTER_LS_YTE4MTK0NDQZMTY")

const CATEGORY_LS_BDI2MDK2ODU3MTA = () => {
    ROUTER_LS_YTE4MTK0NDQZMTY.get("/:title-category-:id", (req, res) => {
        try {
            const category_id = req.params.id

            const JOBS = THIS.METHOD.EXCEPTIONS.JOBS({
                method: () => {
                    res.redirect(THIS.CONFIG_DEFAULT().PAPER.PATH.HELP)
                }
            })

            const current = req.query.paper ? req.query.paper : THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE

            var content_category = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()
            var hot_content = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()
            var hot_category = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()


            LS_YTIZNTY3ODE4NJC({ active: category_id }).ELEMENT().then(category_info => {
                hot_category = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: category_info })
                posive()
            }).catch(error => {
                hot_category = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                posive()
            })

            const posive = () => {
                if (content_category.status && hot_content.status && hot_category.status) {
                    LS_BJE4NDQ4MJQ0OTY({
                        one: {
                            content: content_category.content,
                        },
                        two: {
                            content: hot_content.content,
                        },
                        intro: true,
                        options: hot_category.content
                    }).ELEMENT().then(_info => {
                        try {
                            LS_YTE4MTKZMZKYMJI({
                                content: _info
                            }).ELEMENT().then(content => {
                                JOBS.DONE()
                                res.send(content).end()
                            }).catch(error => {
                                THIS.EX.SAD(error, res)
                            })
                        } catch (error) {
                            THIS.EX.SAD(error, res)
                        }
                    }).catch(error => {
                        THIS.EX.SAD(error, res)
                    })
                }
            }

            const get_hot_content = () => {
                LS_YTIWODK1MTQ3MDM().ELEMENT().then(content => {
                    hot_content = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: content })
                    posive()
                }).catch(error => {
                    console.log(error)
                    hot_content = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                    posive()
                })
            }


            const get_best_content = ({ info }) => {
                LS_DDE4NJKZMTA1NZE({ current: current, categoryId: category_id, name: info.name, href: req.originalUrl }).ELEMENT().then(content => {
                    content_category = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: content })
                    posive()
                    get_hot_content()
                }).catch(error => {
                    console.log(error)
                    content_category = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                    posive()
                    get_hot_content()
                })
            }


            LS_CTIWOTU4MTYZNDM().GET_CATEGORY({ objectId: MONGODB().METHOD.ID_TO_OBJECT({ id: category_id }) }).then(category_info => {
                get_best_content({ info: category_info })
            })



        } catch (error) {
            THIS.EX.SAD(error, res)
        }
    })
}

module.exports.CATEGORY_LS_BDI2MDK2ODU3MTA = CATEGORY_LS_BDI2MDK2ODU3MTA