const { LS_ZTI5NTK1ODG2MTA } = require("../component/footer/LS_ZTI5NTK1ODG2MTA")
const { LS_ATE4NJUYNJE1MDA } = require("../component/header/LS_ATE4NJUYNJE1MDA")
const { LS_ZDE4MJC5NDC0MDI } = require("../config/current/LS_ZDE4MJC5NDC0MDI")
const { THIS } = require("../method/LS_ZZE4NDI2MZIWNTQ")

const LS_YTE4MTKZMZKYMJI = ({ content }) => {

    var HERE = {}

    HERE.PROPS = {
        PROPERTIES: {
            content: content
        }
    }

    HERE.FOOTER = () => {
    }

    HERE.ELEMENT = () => {

        return new Promise((_success, _error) => {
            try {

                var footer = String()
                var header = String()
                var count = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO

                const posive = () => {

                    if (count == THIS.CONFIG_DEFAULT().NORMAL.NUMBER_TWO) {
                        const SCRIPT = LS_ZDE4MJC5NDC0MDI().STATIC.SCRIPT
                        const CSS = LS_ZDE4MJC5NDC0MDI().STATIC.CSS

                        const props = HERE.PROPS.PROPERTIES

                        const content_css = THIS.HTML.GENERATE_CSS_TAG({ cssArray: CSS }) + THIS.HTML.GENERATE_PLACE_CSS()

                        const favicon = THIS.CURRENT.GET_CONFIG().STATIC_PATH + THIS.CONFIG_SYSTEM().PATH.FAVICON

                        const HEAD_TAG = THIS.CONFIG_DEFAULT().TAG.CREATE_TAG.HEAD({
                            content: content_css,
                            options: {
                                title: "Bloger",
                                favicon: favicon
                            }
                        })

                        const content_script = THIS.HTML.GENERATE_SCRIPT_TAG({ scriptArray: SCRIPT }) + THIS.HTML.GENERATE_PLACE_SCRIPT()


                        const BODY_TAG = THIS.CONFIG_DEFAULT().TAG.CREATE_TAG.BODY({
                            script: content_script,
                            content: header + props.content + footer
                        })

                        const HTML_TAG = THIS.CONFIG_DEFAULT().TAG.CREATE_TAG.HTML({
                            content: HEAD_TAG + BODY_TAG
                        })

                        _success(HTML_TAG)
                    }
                }

                LS_ATE4NJUYNJE1MDA().ELEMENT().then(_info => {
                    count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                    header = _info
                    posive()
                }).catch(error => {
                    _error(error)
                })

                LS_ZTI5NTK1ODG2MTA().ELEMENT().then(footer_content => {
                    try {
                        count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                        footer = footer_content
                        posive()
                    } catch (error) {
                        _error(error)
                    }

                }).catch(error => {
                    _error(error)
                })


            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        })
    }

    return HERE
}

module.exports.LS_YTE4MTKZMZKYMJI = LS_YTE4MTKZMZKYMJI

