const { LS_YTE4MTKZMZKYMJI } = require("../bounder/LS_YTE4MTKZMZKYMJI")
const { LS_BJE4NDQ4MJQ0OTY } = require("../component/container/LS_BJE4NDQ4MJQ0OTY")
const { LS_BTIYMDC3NTKZNDE } = require("../component/content/detail-content/LS_BTIYMDC3NTKZNDE")
const { LS_YTIWODK1MTQ3MDM } = require("../component/content/hot-content/LS_YTIWODK1MTQ3MDM")
const { THIS } = require("../method/LS_ZZE4NDI2MZIWNTQ")
const { ROUTER_LS_YTE4MTK0NDQZMTY } = require("../route/ROUTER_LS_YTE4MTK0NDQZMTY")


//Read
const READ_LS_ETIYMDAYOTK3OTA = () => {
    ROUTER_LS_YTE4MTK0NDQZMTY.get("/:title-read-:id", (req, res) => {
        try {

            const THIS_EX = THIS.METHOD.EXCEPTIONS

            var hot_content = THIS_EX.CREATE_START_CONTENT()
            var detail_content = THIS_EX.CREATE_START_CONTENT()

            const props_detail_content = () => {
                return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.CONTENT_DETAIL.PROPERTIES
            }

            LS_YTIWODK1MTQ3MDM().ELEMENT().then(content => {
                hot_content = THIS_EX.SET_START_CONTENT({ content: content })
                posive()
            }).catch(error => {
                hot_content = THIS_EX.SET_START_CONTENT({ content: error })
                posive()
            })

            const JOBS = THIS.METHOD.EXCEPTIONS.JOBS({
                method: () => {
                    response.redirect(THIS.CONFIG_DEFAULT().PAPER.PATH.HELP)
                }
            })

            const posive = () => {

                if (hot_content.status && detail_content.status) {
                    LS_BJE4NDQ4MJQ0OTY({
                        one: {
                            content: detail_content.content.content,
                            place: detail_content.content.place
                        },
                        two: {
                            content: hot_content.content
                        },
                        intro: false,

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


            LS_BTIYMDC3NTKZNDE({ id: req.params.id }).ELEMENT().then(data => {
                detail_content = THIS_EX.SET_START_CONTENT({ content: data })
                posive()
            }).catch(error => {
                detail_content = THIS_EX.SET_START_CONTENT({ content: error })
                posive()
                THIS.EX.ERROR(error)
            })

        } catch (error) {
            THIS.EX.SAD(error, res)
        }
    })
}

module.exports.READ_LS_ETIYMDAYOTK3OTA = READ_LS_ETIYMDAYOTK3OTA