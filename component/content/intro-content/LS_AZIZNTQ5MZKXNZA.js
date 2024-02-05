const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { LS_DDI1MTG0ODQ0MTA } = require("./LS_DDI1MTG0ODQ0MTA")




const LS_AZIZNTQ5MZKXNZA = () => {
    var HERE = {}

    HERE.INTRO_CONTENT = () => {

        return new Promise((_success, _error) => {
            try {

                LS_DDI1MTG0ODQ0MTA().GET_INTRO_BEST_CONTENT().then(intro_info => {
                    try {

                        const cssUrl = intro_info.cssUrl ? intro_info.cssUrl : String()
                        const scriptUrl = intro_info.scriptUrl ? intro_info.scriptUrl : String()
                        const fonts = intro_info.fonts

                        var fontPlace = String()

                        if (Array.isArray(fonts)) {
                            fonts.forEach((element, number) => {
                                if (THIS.CHECK.MATH_TRUE_ARRAY({ array: fonts, compare: number })) {
                                    fontPlace = fontPlace + element
                                }
                                else {
                                    fontPlace = fontPlace + element + THIS.CONFIG_DEFAULT().NORMAL.LINE_SYMBOL

                                }
                            })
                        }

                        const contenter = THIS.HTML.CREATE_AFTER_GET({
                            class_name_main: "ls_djizntuymti3mde",
                            class_name_content: "ls_yzi1mjg1nda5odg",
                            content: intro_info.content,
                            css: cssUrl,
                            font: fontPlace,
                            script: scriptUrl
                        })

                        _success(contenter)

                    } catch (error) {
                        _error(error)
                    }
                }).catch(error => {
                    _error(error)
                })

            } catch (error) {
                _error(error)
            }
        })

    }

    return HERE
}

module.exports.LS_AZIZNTQ5MZKXNZA = LS_AZIZNTQ5MZKXNZA