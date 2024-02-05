const { THIS } = require("../../method/LS_ZZE4NDI2MZIWNTQ")
const { LS_AZIZNTQ5MZKXNZA } = require("../content/intro-content/LS_AZIZNTQ5MZKXNZA")

const LS_BJE4NDQ4MJQ0OTY = ({ one, two, options, intro }) => {

    var HERE = {}

    HERE.PROPS = {
        PROPERTIES: {
            one: one,
            two: two,
            options: options,
            intro: intro
        }
    }

    HERE.ONE_BLOG = ({ content }) => {
        try {

            const place = HERE.PROPS.PROPERTIES.one.place

            const placer = place ? place : String()

            var placerContent = (
                `
                <div class="ls_aze4nju5ndy3mtq">
                    ${placer}
                </div>
                `
            )

            if (THIS.CHECK.IS_DEFAULT_OR_EMPRY({ content: placer })) {
                placerContent = String()
            }

            return (
                `
                <div class="ls_bze4njq4mzmznza">
                    ${placerContent}
                    <div class="ls_dte4njq5ndyyndi">${content}</div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error, __filename)
        }

    }

    HERE.TWO_BLOG = ({ content }) => {
        try {
            const place = HERE.PROPS.PROPERTIES.two.place

            const placer = place ? place : String()

            var placerContent = (
                `
                <div class="ls_aze4nju5ndy3mtq">
                    ${placer}
                </div>
                `
            )

            if (THIS.CHECK.IS_DEFAULT_OR_EMPRY({ content: placer })) {
                placerContent = String()
            }

            return (
                `
                <div class="ls_cte4njq5ndk3nji">
                    ${placerContent}
                    <div class="ls_ade4njq5ntiznjm">
                        <div class="ls_edi2mduxnjk3nzu">
                            ${content}
                        </div>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error, __filename)
        }
    }

    HERE.CONTENT = ({ intro, options }) => {
        try {

            const intror = (
                `
                <div class="ls_ytm0mjq1mzyzmjc">
                    ${intro}
                </div>
            `
            )


            intro = intro ? intror : String()
            const props = HERE.PROPS.PROPERTIES

            const class_margin = props.intro ? String() : "ls_etm0mju1njm1ota"


            return (
                `
                <div class="ls_azm0mjixnjgzmzc">
                    ${intro}
                    <div class="ls_cte4njuxndcwodq ${class_margin}">
                        <div class="ls_zje4njg5odg1mtm">
                            <div class="ls_adizntyzmdm3mti">
                                ${options}
                            </div>
                            ${HERE.ONE_BLOG({ content: HERE.PROPS.PROPERTIES.one.content })}
                            ${HERE.TWO_BLOG({ content: HERE.PROPS.PROPERTIES.two.content })}
                        </div>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }


    HERE.ELEMENT = () => {

        return new Promise((_success, _error) => {
            try {
                const props = HERE.PROPS.PROPERTIES

                const options = props.options ? props.options : String()

                if (props.intro) {
                    LS_AZIZNTQ5MZKXNZA().INTRO_CONTENT().then(_intro_info => {
                        try {
                            _success(HERE.CONTENT({options: options, intro: _intro_info}))
                        } catch (error) {
                            _error(error)
                        }
                    }).catch(error => {
                        _error(error)
                    })
                } else {
                    _success(HERE.CONTENT({options: options}))
                }




            } catch (error) {
                THIS.EX.ERROR(error, __filename)
            }
        })
    }

    return HERE
}

module.exports.LS_BJE4NDQ4MJQ0OTY = LS_BJE4NDQ4MJQ0OTY