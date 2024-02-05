const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_AZIWODK5NTA3MJQ } = require("./LS_AZIWODK5NTA3MJQ")

const LS_YTIWODK1MTQ3MDM = () => {
    var HERE = {}

    HERE.PROPS = {
        props_data: ({ data }) => {
            return {
                content_info: data.content_info,
                author_info: data.author_info,
                book_info: data.book_info,
                category_info: data.category_info
            }
        }
    }

    HERE.CONTENT_INFO = ({ data, isSpecial }) => {
        try {
            const props = HERE.PROPS.props_data({ data: data })

            const properties_post = () => {
                return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.CONTENT_INFO.PROPERTIES
            }

            const properties_author = () => {
                return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.AUTHOR.PROPERTIES
            }

            const properties_book = () => {
                return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.BOOK.PROPERTIES
            }

            const title = props.content_info[properties_post().TITLE]

            const link_read = THIS.METHOD.PATH.CREATE_LINK({
                content: title,
                detect: THIS.CONFIG_PROPERTIES().PATH.DETECT.READ,
                id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: props.content_info[properties_post().ID] })
            })

            const link_book = THIS.METHOD.PATH.CREATE_LINK({
                content: props.author_info[properties_book().NAME],
                detect: THIS.CONFIG_PROPERTIES().PATH.DETECT.BOOK,
                id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: props.book_info[properties_book().ID] })
            })

            const link_author = THIS.METHOD.PATH.CREATE_LINK({
                content: props.author_info[properties_author().LABEL],
                detect: THIS.CONFIG_PROPERTIES().PATH.DETECT.AUTHOR,
                id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: props.author_info[properties_author().ID] })
            })

            const date = new Date(props.content_info[properties_post().DATE_CREATE])

            const dateFormat = THIS.METHOD.TIME.DATE_FORMAT({
                component: [date.getDate(), date.getMonth(), date.getFullYear()],
                detect: THIS.CONFIG_DEFAULT().NORMAL.RIGHT_SLASH_SYMBOL
            })

            var title_content = String()

            if (isSpecial) {
                title_content = (
                    `
                    <div class="ls_yzixmdiwnjc2odk">
                        <div class="ls_zzixmdi3mzcxnzy">
                        <a href="${link_read}">${title}</a>
                        
                        </div>
                        <div class="ls_zzixmdiwnzqymte">
                            <img class="ls_ytixmdiwntqyntc ls_edixmduwmzu3nja" no-src="${props.content_info[properties_post().IMAGE_URL]}"></img>
                        </div>

                    </div>
                    `
                )
            }
            else {
                title_content = (
                    `
                    <div class="ls_ddixmdqwote0nty">
                        <a href="${link_read}" class="ls_zdixmdqzmjayota">${title}</a>
                    </div>
                `
                )
            }


            return (
                `
                <div class="ls_yze4njk5odywnza">
                    <div class="ls_ytixmdq0mtkzodc">
                        ${title_content}
                        <div class="ls_yjixmdi1ntq0otq">
                            <div class="ls_yzixmdm3ndy5ndi">
                                <div class="ls_ade4njk4nti3nde">
                                    <a href="${link_author}" class="ls_cze4nze2nje4odi">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"></path></svg>
                                        <span class="ls_yze4nze2nzi0mju">${props.author_info[properties_author().NAME]}</span>
                                    </a>
                                    <div class="ls_cze4nze2nje4odi">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                                        <span class="ls_yze4nze2nzi0mju">${dateFormat}</span>
                                    </div>
                                </div>
                                <div class="ls_zze4njk4njuxnju">
                                    <a href="${link_book}" class="ls_cze4nze2nje4odi">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"></path><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path></svg>
                                        <span class="ls_yze4nze2nzi0mju">Toàn tập</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.TITLE = () => {
        try {
            return (
                `
                <div class="ls_ytiznji3nzawmdg">
                <span class="ls_aze4nju5ndy3mtq">
                    Hay nhất
                </span>
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
                LS_AZIWODK5NTA3MJQ().GET_HOT_DATA().then(data => {

                    try {
                        var hot_content = String()

                        if (Array.isArray(data)) {
                            data.forEach((element, number) => {
                                if (number == THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO) {
                                    hot_content = hot_content + HERE.CONTENT_INFO({ data: element, isSpecial: true })
                                }
                                else {
                                    hot_content = hot_content + HERE.CONTENT_INFO({ data: element, isSpecial: false })
                                }
                            })
                        }

                        const title = HERE.TITLE()

                        const content_hot = (
                            `
                            <div class="ls_ajm0nja1odq0mzi">
                                ${hot_content}
                            </div>
                            `
                        )

                        _success(title + content_hot)

                    } catch (error) {
                        _error(error)
                    }
                }).catch(error => {
                    _error(error)
                })
            } catch (error) {
                THIS.EX.ERROR(error)
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_YTIWODK1MTQ3MDM = LS_YTIWODK1MTQ3MDM