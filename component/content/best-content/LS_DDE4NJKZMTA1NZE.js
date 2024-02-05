const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_AZIZNTQ5MZKXNZA } = require("../intro-content/LS_AZIZNTQ5MZKXNZA")
const { LS_CDIWMTG0NZCXMTE } = require("./LS_CDIWMTG0NZCXMTE")
const { LS_CTIZNDAXNTK1NTC } = require("./LS_CTIZNDAXNTK1NTC")


const LS_DDE4NJKZMTA1NZE = ({ current, categoryId, authorId, bookId, name, href }) => {
    var HERE = {}

    HERE.PROPS = {
        PROPSDATA: ({ data }) => {
            return {
                content_info: data.content_info,
                author_info: data.author_info,
                book_info: data.book_info,
                category_info: data.category_info
            }
        },
        PROPERTIES: {
            current: current,
            categoryId: categoryId,
            authorId: authorId,
            bookId: bookId,
            name: name,
            href: href
        }
    }

    HERE.CATEGORY = ({ data }) => {
        try {

            const props = HERE.PROPS.PROPSDATA({ data: data })

            var category = String()

            if (THIS.CHECK.IS_NET_ARRAY({ array: props.category_info })) {

                const properties = () => {
                    return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.CATEGORY.PROPERTIES
                }

                props.category_info.forEach((element, number) => {

                    const link = THIS.METHOD.PATH.CREATE_LINK({
                        content: element[properties().NAME],
                        detect: THIS.CONFIG_PROPERTIES().PATH.DETECT.CATEGORY,
                        id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: element[properties().ID] })
                    })

                    category = category + (
                        `
                        <a href="${link}" style="color: ${element[properties().INSIDE_COLOR]}; background: ${element[properties().BACKGROUND_COLOR]}" class="ls_ade4njk2njmznji">${element[properties().NAME]}</a>
                    `
                    )
                })

            }

            return (
                `
                <div class="ls_dze4njk2mzk0ntc">
                    <div class="ls_ede4njk2ndk5nzc">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                    </div>

                    <div class="ls_yte4njk2ntgzmjk">
                        ${category}
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }
    HERE.DETAIL_AUTHOR = ({ data }) => {
        try {
            const props = HERE.PROPS.PROPSDATA({ data: data })

            const properties = () => {
                return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.AUTHOR.PROPERTIES
            }

            const link_author = THIS.METHOD.PATH.CREATE_LINK({
                content: props.author_info[properties().LABEL],
                detect: THIS.CONFIG_PROPERTIES().PATH.DETECT.AUTHOR,
                id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: props.author_info[properties().ID] })
            })

            return (
                `
                <div class="ls_bte4njk3mtg4mta">
                    <div class="ls_cte4njk3mzmxnjq">
                        <img no-src="${props.author_info[properties().IMAGE_URL]}" class="ls_aje4njk3ndqwmzu"></img>
                    </div>
                    <div class="ls_aze4njk3ntewmta">
                        <a href="${link_author}" class="ls_aze4njk3ntk3mji">Hồ sơ</a>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.DETAIL_POST = ({ data }) => {
        try {

            const props = HERE.PROPS.PROPSDATA({ data: data })

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

            return (
                `
                <div class="ls_yte4njk4ndg4mji">
                    <div class="ls_yjixmjc2ody1nta">
                        <a href="${link_read}" class="ls_aze4njk4nja1njq">${title}</a>
                        <div class="ls_ade4njk4nti3nde">
                            <a href="${link_author}" class="ls_cze4nze2nje4odi">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"></path></svg>
                                <span class="ls_yze4nze2nzi0mju">${props.author_info[properties_author().LABEL]}</span>
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

                    <div class="ls_zzixmjc2otu5mja">
                        <img class="ls_zdixmjc3mdkzndy" no-src="${props.content_info[properties_post().IMAGE_URL]}"></img>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)

        }
    }

    HERE.TITLE_BEST_CONTENT = () => {
        try {
            const props = HERE.PROPS.PROPERTIES

            var name = "Mới nhất"

            if(props.name){
                name = props.name
            }

            return (
                `
                <div class="ls_ytiznji3nzawmdg">
                    <span class="ls_aze4nju5ndy3mtq">
                        ${name}
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

                var best_content = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()
                var paper_counter = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()


                const posive = () => {

                    const title = HERE.TITLE_BEST_CONTENT()


                    const content_best = (
                        `
                        <div class="ls_ctm0mjezndyzmzg">
                            ${title + best_content.content}
                        </div>
                        `
                    )


                    if (best_content.status && paper_counter.status) {
                        _success(content_best + paper_counter.content)
                    }
                }

                const props = HERE.PROPS.PROPERTIES

                var current = props.current

                if (!current) {
                    current = THIS.CONFIG_DEFAULT().PAPER.DEFAULT_ACTIVE_PAPER
                }

                LS_CDIWMTG0NZCXMTE({
                    current: props.current,
                    authorId: props.authorId,
                    categoryId: props.categoryId,
                    bookId: props.bookId
                }).GET_BEST_DATA().then(info => {
                    try {
                        var content = String()
                        if (Array.isArray(info) && THIS.CHECK.IS_NET_ARRAY({ array: info })) {
                            info.forEach(element => {
                                content = content + (
                                    `
                                    <div class="ls_yze4njk5odywnza">
                                        ${HERE.CATEGORY({ data: element })}
                                        <div class="ls_cte4njk5odk5ntc">
                                            ${HERE.DETAIL_AUTHOR({ data: element })}
                                            ${HERE.DETAIL_POST({ data: element })}
                                        </div>
                                    </div>
                                    `
                                )
                            })
                        }

                        const content_best = (
                            `
                            <div class="ls_edm0mje5nziwodk">
                                ${content}
                            </div>
                            `
                        )

                       

                        best_content = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: content_best })
                        posive()
                    } catch (error) {
                        best_content = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                        posive()
                    }
                }).catch(error => {
                    best_content = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                    posive()
                })


                LS_CTIZNDAXNTK1NTC({
                    current: props.current,
                    authorId: props.authorId,
                    categoryId: props.categoryId,
                    bookId: props.bookId,
                    href: props.href
                }).CREATE_PAPER_COUNTER().then(info => {
                    try {
                        paper_counter = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: info })
                        posive()
                    } catch (error) {
                        paper_counter = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                        posive()
                    }
                }).catch(error => {
                    paper_counter = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: error })
                    posive()
                })

            } catch (error) {
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_DDE4NJKZMTA1NZE = LS_DDE4NJKZMTA1NZE
