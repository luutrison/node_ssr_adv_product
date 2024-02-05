const { THIS } = require("../../method/LS_ZZE4NDI2MZIWNTQ")
const { LS_ZZI5NTK3MDK1MZA } = require("./LS_ZZI5NTK3MDK1MZA")

const LS_ZTI5NTK1ODG2MTA = () => {
    var HERE = {}

    HERE.SPECIAL = ({ content }) => {
        try {

            const favicon = THIS.CURRENT.GET_CONFIG().STATIC_PATH + "/content/img/logo_v4.png"


            var content_special = String()

            if (Array.isArray(content)) {

                const special = content.pop()

                if (special.detail && Array.isArray(special.detail)) {
                    special.detail.forEach(element => {

                        if (element.display) {
                            content_special = content_special + (
                                `
                                <a href="${element.url}">${element.name}</a>
                                `
                            )
                        }

                    })
                }

            }

            return (
                `
                <div class="ls_aji5nju2otiwmte">
                    <a href="/" class="ls_zti5nju2otywmdq">
                        <img src="${favicon}"></img>
                        <span>Bloger</span>
                    </a>

                    <div class="ls_zzi5nju3mdiwnti">
                        ${content_special}
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.FOOTER_INFO = ({ content }) => {
        try {
            if (Array.isArray(content)) {
                var info_footer = String()

                content.forEach(element => {
                    const detail = element.detail
                    const dumpart = element.dumpart
                    if (dumpart) {
                        if (dumpart.showFooter) {
                            if (detail && Array.isArray(detail)) {
                                var component_footer = String()
                                detail.forEach(content_detail => {
                                    component_footer = component_footer + (
                                        `
                                        <a href="${content_detail.url}">${content_detail.name}</a>
                                        `
                                    )
                                })

                                const name_component = dumpart.name ? dumpart.name : String()

                                info_footer = info_footer + (
                                    `
                                    <div class="ls_aji5nju2otiwmte">
                                        <span class="ls_zjmwmzkwnja5mzu">${name_component}</span>
                                        <div class="ls_zzi5nju3mdiwnti">
                                            ${component_footer}
                                        </div>
                                    </div>
                                    `
                                )
                            }
                        }
                    }
                })

                return info_footer
            }
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.OTHER_INFO_FOOTER = () => {
        try {

        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.FOOTER = ({ content, special, other }) => {
        try {

            const special_element = HERE.SPECIAL({ content: special })
            const content_element = HERE.FOOTER_INFO({ content: content })

            const name_other = THIS.CONFIG_PROPERTIES().MONGODB.OTHER.NAME

            var more_info = String()
            var social_info = String()

            if (Array.isArray(other)) {
                const address = other.find(item => item.label == name_other.ADDRESS)
                const map = other.find(item => item.label == name_other.MAP)
                const social = other.find(item => item.label == name_other.SOCIAL)

                const addr = address.content ? address.content : String()
                const map_link = map.content && map.content.link ? map.content.link : String()
                const map_image_src = map.content && map.content.image_src ? map.content.image_src : String()

                const arrSocial = social.content ? social.content : []

                if (Array.isArray(arrSocial)) {
                    arrSocial.forEach(content => {
                        const icon = content.icon ? content.icon : String()
                        const name = content.name ? content.name : String()
                        const url = content.url ? content.url : String()


                        social_info = social_info + (
                            `
                            <a href="${url}" class="ls_bjmwndyxotyymjk">
                                ${icon}
                            </a>
                            `
                        )
                    })
                }

                more_info = more_info + (
                    `
                    <div class="ls_aji5nju2otiwmte">
                        <span class="ls_zjmwmzkwnja5mzu">Thông tin</span>
                        <div class="ls_zzi5nju3mdiwnti">
                            <div class="ls_edmwnduznzg3nzq">
                                <div class="ls_etmwnduzotg4nzc">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 6.882-7-3.5v13.236l7 3.5 6-3 7 3.5V7.382l-7-3.5-6 3zM15 15l-6 3V9l6-3v9z"></path></svg>
                                    <span>Địa chỉ:</span>
                                </div>

                                <span>${addr}</span>
                            </div>

                            <div class="ls_edmwnduznzg3nzq">
                                <div class="ls_etmwnduzotg4nzc">
                                    <a href="${map_link}" target="_blank" class="ls_bdmwndc3ndy2ntk">
                                        <img src="${map_image_src}" alt="Map"></img>
                                        <span class="ls_ztmwntezmtczmte">
                                            <span>Xem bản đồ</span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466Z"></path></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                )
            }


            return (
                `
                <footer>
                    <div class="ls_etmwmjkyota2oty">
                        <div class="ls_zdi5nju3nde1njm">
                            ${special_element}

                            ${content_element}

                            ${more_info}
                            
                        </div>
                        
                    </div>

                    <div class="ls_cti5nju3otc1njm">
                            <div class="ls_cdmwndgymju4mjy">
                                Bloger@${new Date().getFullYear()}
                            </div>
                            <div class="ls_zdmwndgzmdiyntg">
                            ${social_info}
                            </div>
                        </div>

                </footer>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.ELEMENT = () => {
        return new Promise((_success, _error) => {
            try {

                var other_info = []
                var normal_info = []
                var count = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO



                const posive = () => {
                    if (count == THIS.CONFIG_DEFAULT().NORMAL.NUMBER_TWO) {
                        if (Array.isArray(normal_info)) {
                            var special = []
                            var content = []

                            normal_info.forEach(element => {
                                if (element.dumpart.special) {
                                    special.push(element)
                                } else {
                                    content.push(element)
                                }
                            })

                            const footer = HERE.FOOTER({ content: content, special: special, other: other_info })
                            _success(footer)
                        }
                    }
                }


                LS_ZZI5NTK3MDK1MZA().GET_OTHER_INFO().then(_info => {
                    try {
                        other_info = _info
                        count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                        posive()
                    } catch (error) {
                        _error(error)
                    }
                }).catch(error => {
                    _error(error)
                })



                LS_ZZI5NTK3MDK1MZA().GET_INFO_DUMPART().then(_info => {
                    try {
                        normal_info = _info
                        count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                        posive()
                    } catch (error) {
                        _error(error)
                    }
                }).catch(error => {
                    _error(error)
                })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        })


    }

    return HERE
}

module.exports.LS_ZTI5NTK1ODG2MTA = LS_ZTI5NTK1ODG2MTA