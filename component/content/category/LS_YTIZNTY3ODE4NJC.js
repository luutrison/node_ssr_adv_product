const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_BJMYMDQ0NZY0MJU } = require("./LS_BJMYMDQ0NZY0MJU")

const LS_YTIZNTY3ODE4NJC = ({active}) => {
    var HERE = {}

    HERE.PROPS = {
        PROPERTIES: {
            active: active
        }
    }

    HERE.ELEMENT = () => {

        return new Promise((_success, _error) => {
            try {

                var category_content = String()

                const props = HERE.PROPS.PROPERTIES

                var active = true


                const image_menu = THIS.CURRENT.PATH_FROM_STATIC({
                    path: "/content/img/ls_yji1mjg2mjywnje.jpg"
                })


                LS_BJMYMDQ0NZY0MJU().GET_CATEGORY_PINED().then(category => {

                    if (Array.isArray(category)) {
                        category.forEach(element => {

                            const id = MONGODB().METHOD.OBJECT_TO_ID({objectId: element._id})

                            var currentActive = false

                            if(id == props.active){
                                currentActive = true
                                active = false
                            }

                            const link = THIS.METHOD.PATH.CREATE_LINK({
                                content: element.name,
                                detect: "category",
                                id: id
                            })
                            category_content = category_content + (
                                `
                                <a href="${link}" active="${currentActive}" >${element.name}</a>
                                `
                            )
                        })
                    }

                    _success(
                        `
                        <div class="ls_ctizntkwmdy4nzq">

                            <div class="ls_bdizntc4mdc4nzu">
                                <div class="ls_ddm0mtg0otywmta">
                                        Tóm tắt
                                </div>
                                
                                <div class="ls_ytm0njq4mdk3mtc">
                                <div class="ls_adizntc4mtixmtc ls_ddizntk0otgxntc">
                                    <a href="/" active="${active}">Tổng hợp</a>
                                </div>
        
                                <div class="ls_zzizntc4mtuznzk">
                                    ${category_content}
                                </div>
        
                                <div class="ls_bjiznjexmdu0ndc">
        
                                    <a href="/" class="ls_yziznjexntcwnde">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>
                                        <span>
                                            Toàn bộ các mục
                                        </span>
                                    </a>
        
                                    <a href="/" class="ls_yziznjexntcwnde">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><polyline points="10 2 10 10 13 7 16 10 16 2"></polyline></svg>
                                        <span>
                                        TOP Tác phẩm
                                        </span>
                                    </a>
        
                                    <a href="/" class="ls_yziznjexntcwnde">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 13v-4a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2.5"></path><path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h5.5"></path><path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path><path d="M16 9h2"></path></svg>
                                        <span>
                                        TOP Tác giả
                                        </span>
                                    </a>
        
                                </div>
                                </div>
        
                            </div>
                        </div>
        
                        `
                    )


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

module.exports.LS_YTIZNTY3ODE4NJC = LS_YTIZNTY3ODE4NJC