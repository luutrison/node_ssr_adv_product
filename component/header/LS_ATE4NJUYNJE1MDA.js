const { THIS } = require("../../method/LS_ZZE4NDI2MZIWNTQ")
const { LS_CZMZMDMYNZAYMZA } = require("./LS_CZMZMDMYNZAYMZA")

const LS_ATE4NJUYNJE1MDA = () => {
    var HERE = {}

    HERE.LEFT_SIDE = () => {
        try {

            const demoLogo = "http://localhost:20000/content/img/logo_v4.png"

            var demoName = String()

            if (true) {
                demoName = (
                    `
                    <span class="ls_azmwntawodi0mda">BLOGER</span>
                    `
                )
            }

            return (
                `
                <a class="ls_eje4nju0mjg3ntg" href="/">
                    <img src="${demoLogo}" alt="logo"></img>
                    ${demoName}
                </a>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error, __filename)
        }
    }

    HERE.CATEGORY = ({ content }) => {
        try {

            var category_info = String()

            const current_content = content.content

            if (current_content && Array.isArray(current_content)) {
                current_content.forEach(element => {

                    const name = element.name && String(element.name).trim() != String() ? element.name : false
                    const href = element.href && String(element.href).trim() != String() ? element.href : false

                    if (name && href) {
                        category_info = category_info + (
                            `
                            <a href="${href}">${name}</a>
                            `
                        )
                    }
                })
            }

            return (
                `
                <div class="ls_yte4nju0mtm2nzg">
                    ${category_info}
                </div>

                `
            )
        } catch (error) {
            THIS.EX.ERROR(error, __filename)
        }
    }

    HERE.ELEMENT = () => {

        return new Promise((_success, _error) => {
            try {

                LS_CZMZMDMYNZAYMZA().GET_HEADER_CATEGORY().then(_info => {
                    _success(
                        `
                        <header>
                            <div class="ls_bzixmdu1oda2odq">
                                <div class="ls_zzmzmtu1mjkynji">
                                    ${HERE.LEFT_SIDE()}
                                    ${HERE.CATEGORY({ content: _info })}
                                </div>
                                <div class="ls_etmzmtu1mzcwmtq">
                                    <form class="ls_bzmzmtu0odyxote">
                                        <div class="ls_ctmzmtu0otq4ndy">
                                            <div class="ls_dzmzmtu1mdmyndy">
                                                <input placeholder="Tìm kiếm"></input>
                                            </div>
                                        </div>
                                        <button type="submit" class="ls_btmzmtu1mtq5mzq">
                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </header>
                        `
                    )
                }).catch(error => {
                    _error(error)
                })

            } catch (error) {
                THIS.EX.ERROR(error, __filename)
            }
        })
    }

    return HERE
}

module.exports.LS_ATE4NJUYNJE1MDA = LS_ATE4NJUYNJE1MDA