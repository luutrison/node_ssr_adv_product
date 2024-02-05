const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_CTIWOTU4MTYZNDM } = require("../other/LS_CTIWOTU4MTYZNDM")
const { LS_ZDIYMDC4NTQ4MTU } = require("../other/LS_DJIYMDKZMTUXNDE/LS_ZDIYMDC4NTQ4MTU")

//INFO

const LS_CDIWMTG0NZCXMTE = ({ current, categoryId, bookId, authorId }) => {
    const IS = {}

    HERE.METHOD = LS_CTIWOTU4MTYZNDM

    HERE.PROPS = {
        PROPERTIES: {
            current: current,
            categoryId: categoryId,
            bookId: bookId,
            authorId: authorId
        }
    }


    HERE.GET_BEST_DATA = () => {
        return new Promise((_success, _error) => {
            try {

                const props = HERE.PROPS.PROPERTIES

                const DB_CONTENT_INFO = MONGODB().COLLECTION.CONTENT_INFO()

                var start = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO

                const current_number = Number.parseInt(props.current)

                if (current_number > THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE) {
                    start = (THIS.CONFIG_DEFAULT().PAPER.MAX_ITEM_BEST_UNIT * (current_number - THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE))
                }

                const memory_properties = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES
                }

                const db_collection = () => {
                    return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION
                }

                var KEY_NAME_CONTENT_INFO = String()

                const MEMORY_CONTENT_INFO = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CONTENT_INFO })

                var query_content = []

                if (props.authorId) {
                    query_content.push({
                        "$match": {
                            authorId: MONGODB().METHOD.ID_TO_OBJECT({ id: props.authorId })
                        }
                    })

                    KEY_NAME_CONTENT_INFO = KEY_NAME_CONTENT_INFO
                        + props.authorId
                        + memory_properties().BEST_CONTENT_ON_AUTHOR
                        + String(props.current)

                }
                if (props.categoryId) {
                    query_content.push({
                        "$match": {
                            category: { "$in": [MONGODB().METHOD.ID_TO_OBJECT({ id: props.categoryId })] }
                        }
                    })

                    KEY_NAME_CONTENT_INFO = KEY_NAME_CONTENT_INFO
                        + props.categoryId
                        + memory_properties().BEST_CONTENT_ON_CATEGORY
                        + String(props.current)
                }
                if (props.bookId) {
                    query_content.push({
                        "$match": {
                            bookId: MONGODB().METHOD.ID_TO_OBJECT({ id: props.bookId })
                        }
                    })

                    KEY_NAME_CONTENT_INFO = KEY_NAME_CONTENT_INFO
                        + props.bookId
                        + memory_properties().BEST_CONTENT_ON_BOOK
                        + String(props.current)
                }

                if (!props.categoryId && !props.bookId && !props.authorId) {
                    KEY_NAME_CONTENT_INFO = KEY_NAME_CONTENT_INFO
                        + memory_properties().BEST_CONTENT_ON_PAGES
                        + String(props.current)
                }

                const current_best_content = () => {
                    return MEMORY_CONTENT_INFO.GET({ name: KEY_NAME_CONTENT_INFO })
                }

                const TIME_DEFAULT = THIS.CONFIG_DEFAULT().PAPER.DEFAULT_MEMORY_MINUTE


                var arrayBestContent = current_best_content()

                var sudan_array = []
                var susan_array = []


                const turn_back = ({ arrayName }) => {
                    LS_ZDIYMDC4NTQ4MTU().CONTENT_FROM_ARRAY_NAME({ arrayName: arrayName }).then(res_content_data => {
                        try {
                            _success(res_content_data)
                        } catch (error) {
                            _error(error)
                        }
                    }).catch(error => {
                        _error(error)
                    })
                }

                const continute = ({ arrayContent, arrayName }) => {

                    if (Array.isArray(arrayContent)) {
                        arrayContent.forEach((element, number) => {
                            const author_element = element[DB_CONTENT_INFO.PROPERTIES.AUTHOR_ID]
                            const memname = THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.AUTHOR + author_element

                            if (!susan_array.find(name => name == memname)) {
                                susan_array.push(memname)
                                sudan_array.push(
                                    () => {
                                        return HERE.METHOD().GET_AUTHOR({ objectId: author_element })
                                    }
                                )
                            }

                            const category_element = element[DB_CONTENT_INFO.PROPERTIES.CATEGORY]

                            if (category_element) {
                                Array.from(category_element).forEach(element => {
                                    const cate_id = element
                                    const memname = THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.CATEGORY + cate_id

                                    if (!susan_array.find(name => name == memname)) {
                                        susan_array.push(memname)
                                        sudan_array.push(
                                            () => {
                                                return HERE.METHOD().GET_CATEGORY({ objectId: cate_id })
                                            })
                                    }

                                })
                            }

                            const books_element = element[DB_CONTENT_INFO.PROPERTIES.BOOK_ID]

                            if (books_element) {
                                const book_id = books_element
                                const memname = THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.BOOK + book_id

                                if (!susan_array.find(name => name == memname)) {
                                    susan_array.push(memname)
                                    sudan_array.push(
                                        () => {
                                            return HERE.METHOD().GET_BOOK({ objectId: book_id })
                                        }
                                    )
                                }
                            }

                            if (THIS.CHECK.MATH_TRUE_ARRAY({ array: arrayContent, compare: number })) {

                                THIS.TASK.WAIT({
                                    arrayTask: sudan_array,
                                    callBack: () => {
                                        turn_back({ arrayName: arrayName })
                                    }
                                })
                            }
                        })
                    }
                    else {
                        _error(arrayContent)
                    }
                }

                if (!arrayBestContent) {

                    const INFO = DB_CONTENT_INFO.INFO()


                    INFO.COLLECTION.aggregate(query_content)
                        .limit(THIS.CONFIG_DEFAULT().PAPER.MAX_ITEM_BEST_UNIT)
                        .skip(start)
                        .sort({ dateCreate: -1 })
                        .toArray().then(content_info_data => {
                            try {
                                var array_name = []

                                const TIME = THIS.METHOD.TIME.MINUTE_TO_SECOND_FROM_NOW({ minute: TIME_DEFAULT })

                                if (Array.isArray(content_info_data)) {
                                    content_info_data.forEach(element => {
                                        const name = memory_properties().CONTENT_INFO
                                            + MONGODB().METHOD.OBJECT_TO_ID({ objectId: element[db_collection().CONTENT_INFO.PROPERTIES.ID] })

                                        MEMORY_CONTENT_INFO.SET({
                                            name: name,
                                            data: element,
                                            absoluteTime: TIME
                                        })

                                        array_name.push(name)
                                    })

                                }

                                MEMORY_CONTENT_INFO.SET({
                                    name: KEY_NAME_CONTENT_INFO,
                                    data: array_name,
                                    absoluteTime: TIME
                                })
                                INFO.CLIENT.close()
                                continute({ arrayContent: content_info_data, arrayName: array_name })

                            } catch (error) {
                                INFO.CLIENT.close()
                                THIS.EX.ERROR(error)
                            }
                        }).catch(error => {
                            INFO.CLIENT.close()
                            _error(error)
                        })
                }
                else {
                    turn_back({ arrayName: arrayBestContent })
                }
            } catch (error) {
                _error(error)
            }
        })

    }

    return HERE
}

module.exports.LS_CDIWMTG0NZCXMTE = LS_CDIWMTG0NZCXMTE