
//INFO_PLACE_CONTENT_ON_READ_ONE

const { THIS } = require("../../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../../mongoDB/MONGODB")

const LS_ZDIYMDC4NTQ4MTU = () => {
    var HERE = {}

    HERE.CONTENT_FROM_ARRAY_NAME = ({ arrayName }) => {
        return new Promise((_success, _error) => {
            try {

                const DB_CONTENT_INFO = MONGODB().COLLECTION.CONTENT_INFO()
                const DB_AUTHOR_INFO = MONGODB().COLLECTION.AUTHOR()
                const DB_BOOK_INFO = MONGODB().COLLECTION.BOOK()
                const DB_CATEGORY_INFO = MONGODB().COLLECTION.CATEGORY()


                const MEMORY_CONTENT_INFO = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CONTENT_INFO })
                const MEMORY_AUTHOR = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.AUTHOR })
                const MEMORY_BOOK = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.BOOK })
                const MEMORY_CATEGORY = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CATEGORY })

                const exceptions = THIS.METHOD.EXCEPTIONS

                const MEMORY = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY
                }

                const db_content_info = () => {
                    return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION.CONTENT_INFO
                }

                var count_step = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO

                var array_author = []
                var array_content_info = []
                var array_category = []
                var array_book = []

                var get_array_author = []
                var get_array_category = []
                var get_array_book = []
                var get_array_content_info = []

                var object_content = []

                const step_four = () => {
                    if (count_step == THIS.CONFIG_DEFAULT().NORMAL.NUMBER_THREE) {
                        array_content_info.forEach(element => {
                            const authorObjectId = element[db_content_info().PROPERTIES.AUTHOR_ID]
                            const bookObjectId = element[db_content_info().PROPERTIES.BOOK_ID]
                            const categoryIdArray = element[db_content_info().PROPERTIES.CATEGORY]

                            const math_author = array_author.find(x => MONGODB().METHOD.OBJECT_TO_ID({ objectId: x._id }) == MONGODB().METHOD.OBJECT_TO_ID({ objectId: authorObjectId }))
                            const math_book = array_book.find(x => MONGODB().METHOD.OBJECT_TO_ID({ objectId: x._id }) == MONGODB().METHOD.OBJECT_TO_ID({ objectId: bookObjectId }))

                            var math_cate_array = []

                            if (Array.isArray(categoryIdArray)) {
                                categoryIdArray.forEach(cate => {
                                    const math_cate = array_category.find(x => MONGODB().METHOD.OBJECT_TO_ID({ objectId: x._id }) == cate)

                                    MEMORY_CATEGORY.SET({
                                        name: MEMORY().PROPERTIES.CATEGORY + cate,
                                        data: math_cate
                                    })

                                    if (math_cate) {
                                        math_cate_array.push(math_cate)
                                    }
                                })
                            }

                            object_content.push({
                                content_info: element,
                                author_info: math_author,
                                book_info: math_book,
                                category_info: math_cate_array
                            })
                        })
                        _success(object_content)
                    }
                }


                const step_three = () => {

                    const INFO_CATEGORY = DB_CATEGORY_INFO.INFO()
                    const INFO_AUTHOR = DB_AUTHOR_INFO.INFO()
                    const INFO_BOOK = DB_BOOK_INFO.INFO()

                    //Get info category

                    if (THIS.CHECK.IS_NET_ARRAY({ array: get_array_category })) {
                        INFO_CATEGORY.COLLECTION.find({
                            _id: {
                                "$in": get_array_category
                            }
                        }).toArray().then(category_info => {
                            try {
                                category_info.forEach(element => {
                                    array_category.push(element)
                                    MEMORY_CATEGORY.SET({
                                        name: MEMORY().PROPERTIES.CATEGORY + MONGODB().METHOD.OBJECT_TO_ID({ objectId: element._id }),
                                        data: element
                                    })
                                })
                                INFO_CATEGORY.CLIENT.close()
                                count_step = count_step + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                                step_four()
                            } catch (error) {
                                INFO_CATEGORY.CLIENT.close()
                                _error(error)
                            }
                        }).catch(error => {
                            INFO_CATEGORY.CLIENT.close()
                            _error(error)
                        })
                    } else {
                        count_step = count_step + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                        step_four()
                    }

                    //Get info author

                    if (THIS.CHECK.IS_NET_ARRAY({ array: get_array_author })) {
                        INFO_AUTHOR.COLLECTION.find({
                            _id: {
                                "$in": get_array_author
                            }
                        }).toArray().then(author_info => {
                            try {
                                author_info.forEach(element => {
                                    MEMORY_AUTHOR.SET({
                                        name: MEMORY().PROPERTIES.AUTHOR + MONGODB().METHOD.OBJECT_TO_ID({ objectId: element._id }),
                                        data: element
                                    })
                                    array_author.push(element)
                                })
                                INFO_AUTHOR.CLIENT.close()
                                count_step = count_step + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                                step_four()
                            } catch (error) {
                                INFO_AUTHOR.CLIENT.close()
                                _error(error)
                            }
                        }).catch(error => {
                            INFO_AUTHOR.CLIENT.close()
                            _error(error)
                        })

                    } else {
                        count_step = count_step + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                        step_four()
                    }


                    //Get info book

                    if (THIS.CHECK.IS_NET_ARRAY({ array: get_array_book })) {
                        INFO_BOOK.COLLECTION.find({
                            _id: {
                                "$in": get_array_book
                            }
                        }).toArray().then(book_info => {
                            try {
                                book_info.forEach(element => {
                                    MEMORY_BOOK.SET({
                                        name: MEMORY().PROPERTIES.BOOK + MONGODB().METHOD.OBJECT_TO_ID({ objectId: element._id }),
                                        data: element
                                    })
                                    array_book.push(element)
                                })
                                INFO_BOOK.CLIENT.close()
                                count_step = count_step + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                                step_four()
                            } catch (error) {
                                INFO_BOOK.CLIENT.close()
                                _error(error)
                            }
                        }).catch(error => {
                            INFO_BOOK.CLIENT.close()
                            _error(error)
                        })

                    } else {
                        count_step = count_step + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                        step_four()
                    }

                }

                var array_push = []

                var array_get = []


                const step_two = () => {
                    array_content_info.forEach(element => {

                        const authorObjectId = element[db_content_info().PROPERTIES.AUTHOR_ID]
                        const bookObjectId = element[db_content_info().PROPERTIES.BOOK_ID]
                        const categoryIdArray = element[db_content_info().PROPERTIES.CATEGORY]

                        const name_author_memory = MEMORY().PROPERTIES.AUTHOR + MONGODB().METHOD.OBJECT_TO_ID({ objectId: authorObjectId })
                        const name_book_memory = MEMORY().PROPERTIES.BOOK + MONGODB().METHOD.OBJECT_TO_ID({ objectId: bookObjectId })


                        const mem_author = MEMORY_AUTHOR.GET({ name: name_author_memory })
                        const mem_book = MEMORY_BOOK.GET({ name: name_book_memory })

                        if (mem_author) {
                            if (!array_push.find(x => x == name_author_memory)) {
                                array_author.push(mem_author)
                                array_push.push(name_author_memory)
                            }
                        }
                        else {
                            if (!array_get.find(x => x == name_author_memory)) {
                                array_get.push(name_author_memory)
                                get_array_author.push(authorObjectId)
                            }
                        }

                        if (mem_book) {
                            if (!array_push.find(x => x == name_book_memory)) {
                                array_book.push(mem_book)
                                array_push.push(name_book_memory)
                            }
                        }
                        else {
                            if (!array_get.find(x => x == name_book_memory)) {
                                get_array_book.push(bookObjectId)
                                array_get.push(name_book_memory)
                            }
                        }

                        if (Array.isArray(categoryIdArray)) {
                            categoryIdArray.forEach(element => {
                                const name_category_memory = MEMORY().PROPERTIES.CATEGORY + element
                                const mem_category = MEMORY_CATEGORY.GET({ name: name_category_memory })

                                if (mem_category) {
                                    if (!array_push.find(x => x == name_category_memory)) {
                                        array_category.push(mem_category)
                                        array_push.push(name_category_memory)
                                    }
                                }
                                else {
                                    if (!array_get.find(x => x == name_category_memory)) {
                                        get_array_category.push(MONGODB().METHOD.ID_TO_OBJECT({ id: element }))
                                        array_get.push(name_category_memory)
                                    }
                                }
                            })
                        }
                    })

                    step_three()
                }


                if (Array.isArray(arrayName)) {

                    arrayName.forEach((element, number) => {
                        const id = String(element).split(THIS.CONFIG_DEFAULT().NORMAL.UNDERLINE_SYMBOL).pop()
                        const memory_item = MEMORY_CONTENT_INFO.GET({ name: element })

                        if (memory_item) {
                            array_content_info.push(memory_item)
                        }
                        else {
                            get_array_content_info.push(MONGODB().METHOD.ID_TO_OBJECT({ id: id }))
                        }

                    })

                    const INFO = DB_CONTENT_INFO.INFO()

                    if (THIS.CHECK.IS_NET_ARRAY({ array: get_array_content_info })) {
                        INFO.COLLECTION.find({
                            _id: {
                                "$in": get_array_content_info
                            }
                        }).toArray().then(info_content => {
                            try {
                                info_content.forEach(content => {
                                    MEMORY_CONTENT_INFO.SET({
                                        name: MEMORY().PROPERTIES.CONTENT_INFO + MONGODB().METHOD.OBJECT_TO_ID({ objectId: content._id }),
                                        data: content
                                    })
                                    array_content_info.push(content)
                                })
                                INFO.CLIENT.close()
                                step_two()
                            } catch (error) {
                                INFO.CLIENT.close()
                                _error(error)
                            }
                        }).catch(error => {
                            INFO.CLIENT.close()
                            _error(error)
                        })
                    }
                    else {
                        step_two()
                    }
                }
                else {
                    _error(arrayName)
                }
            } catch (error) {
                _error(error)
            }
        })
    }

    HERE.COUNT_BEST_CONTENT = ({ authorId, categoryId, bookId }) => {
        return new Promise((_success, _error) => {
            try {
                const DB_CONTENT_INFO = MONGODB().COLLECTION.CONTENT_INFO()

                const iprops = {
                    authorId: authorId,
                    categoryId: categoryId,
                    bookId: bookId
                }


                var name_mem = String()
                var query = []

                const properties = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES
                }

                if (iprops.authorId) {
                    query.push({
                        "$match": {
                            authorId: MONGODB().METHOD.ID_TO_OBJECT({ id: iprops.authorId })
                        }
                    })
                    name_mem = name_mem + properties().COUNT_CONTENT_AUTHOR + iprops.authorId
                }

                if (iprops.categoryId) {
                    query.push({
                        "$match": {
                            category: { "$in": [MONGODB().METHOD.ID_TO_OBJECT({ id: iprops.categoryId })] }
                        }
                    })
                    name_mem = name_mem + properties().COUNT_CONTENT_CATEGORY + iprops.categoryId
                }

                if (iprops.bookId) {
                    query.push({
                        "$match": {
                            bookId: MONGODB().METHOD.ID_TO_OBJECT({ id: iprops.bookId })
                        }
                    })
                    name_mem = name_mem + properties().COUNT_CONTENT_BOOK + iprops.bookId
                }

                if(!iprops.bookId && !iprops.categoryId && !iprops.authorId){
                    name_mem = name_mem + properties().COUNT_CONTENT_INFO
                }

                query.push(
                    {
                        $count: "count"
                    }
                )



              
                const collection = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION
                }
                const MEMORY_PLACE = THIS.MEMORY({ name: collection().CONTENT_INFO })

                const currentCount = MEMORY_PLACE.GET({ name: properties().COUNT_CONTENT_INFO })

                if (!currentCount) {
                    const INFO = DB_CONTENT_INFO.INFO()

                    INFO.COLLECTION.aggregate(query).toArray().then(data_count => {
                        try {
                            MEMORY_PLACE.SET({
                                name: name_mem,
                                data: data_count
                            })
                            INFO.CLIENT.close()
                            _success(data_count)
                        } catch (error) {
                            INFO.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO.CLIENT.close()
                        _error(error)
                    })
                }
                else {
                    _success(currentCount)
                }

            } catch (error) {
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_ZDIYMDC4NTQ4MTU = LS_ZDIYMDC4NTQ4MTU