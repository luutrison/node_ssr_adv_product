const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_CTIWOTU4MTYZNDM } = require("../other/LS_CTIWOTU4MTYZNDM")
const { LS_ZDIYMDC4NTQ4MTU } = require("../other/LS_DJIYMDKZMTUXNDE/LS_ZDIYMDC4NTQ4MTU")

//INFO

const LS_AZIWODK5NTA3MJQ = () => {
    var HERE = {}

    HERE.METHOD = LS_CTIWOTU4MTYZNDM

    HERE.GET_HOT_DATA = () => {

        return new Promise((_success, _error) => {
            try {

                const DB_CONTENT_INFO = MONGODB().COLLECTION.CONTENT_INFO()

                const memory_config = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY
                }

                const db_collection = () => {
                    return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION
                }

                const MEMORY_CONTENT_INFO = THIS.MEMORY({ name: memory_config().COLLECTION.CONTENT_INFO })

                const TIME_DEFAULT = THIS.CONFIG_DEFAULT().PAPER.DEFAULT_MEMORY_MINUTE
                var hot_content = MEMORY_CONTENT_INFO.GET({ name: memory_config().PROPERTIES.HOT_CONTENT })

                const step_one = () => {
                    if (!hot_content) {
                        const INFO = DB_CONTENT_INFO.INFO()
                        INFO.COLLECTION.find({ hot: true }).sort({ dateCreate: -1 })
                            .limit(THIS.CONFIG_DEFAULT().PAPER.MAX_ITEM_HOT_UNIT)
                            .toArray().then(data => {
                                try {
                                    var content_name = []
                                    var TIME = THIS.METHOD.TIME.MINUTE_TO_SECOND_FROM_NOW({ minute: TIME_DEFAULT })

                                    if (Array.isArray(data)) {
                                        data.forEach(element => {
                                            const name = memory_config().PROPERTIES.CONTENT_INFO
                                                + MONGODB().METHOD.OBJECT_TO_ID({ objectId: element[db_collection().CONTENT_INFO.PROPERTIES.ID] })

                                            MEMORY_CONTENT_INFO.SET({
                                                name: name,
                                                data: element,
                                                absoluteTime: TIME
                                            })

                                            content_name.push(name)
                                        })
                                    }

                                    if (Array.isArray(data) && THIS.CHECK.IS_NET_ARRAY({ array: data })) {
                                        MEMORY_CONTENT_INFO.SET({
                                            name: memory_config().PROPERTIES.HOT_CONTENT,
                                            data: content_name,
                                            absoluteTime: TIME
                                        })
                                    }

                                    INFO.CLIENT.close()
                                    step_two({ content: data, content_name: content_name })
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
                        step_three({ content_name: hot_content })
                    }
                }

                var array_task = []
                var array_susan = []

                const step_two = ({ content, content_name }) => {

                    const get_author = ({ element }) => {
                        const id = element[DB_CONTENT_INFO.PROPERTIES.AUTHOR_ID]
                        const memname = memory_config().PROPERTIES.AUTHOR + MONGODB().METHOD.OBJECT_TO_ID({ objectId: id })

                        if (!array_susan.find(name => name == memname)) {
                            array_susan.push(memname)
                            array_task.push(
                                () => {
                                    return HERE.METHOD().GET_AUTHOR({ objectId: id })
                                }
                            )
                        }
                    }

                    const get_book = ({ element }) => {
                        const id = element[DB_CONTENT_INFO.PROPERTIES.BOOK_ID]
                        const memname = memory_config().PROPERTIES.BOOK + MONGODB().METHOD.OBJECT_TO_ID({ objectId: id })

                        if (!array_susan.find(name => name == memname)) {
                            array_susan.push(memname)
                            array_task.push(
                                () => {
                                    return HERE.METHOD().GET_BOOK({ objectId: id })
                                }
                            )
                        }
                    }

                    const get_category = ({ element }) => {
                        const array = element[DB_CONTENT_INFO.PROPERTIES.CATEGORY]
                        if (Array.isArray(array) && THIS.CHECK.IS_NET_ARRAY({ array: array })) {
                            array.forEach(object => {
                                const id = object
                                const memname = memory_config().PROPERTIES.CATEGORY + MONGODB().METHOD.OBJECT_TO_ID({ objectId: id })
                                if (!array_susan.find(name => name == memname)) {
                                    array_susan.push(memname)
                                    array_task.push(
                                        () => {
                                            return HERE.METHOD().GET_CATEGORY({ objectId: id })
                                        }
                                    )
                                }
                            })
                        }
                    }



                    if (Array.isArray(content)) {
                        content.forEach((element, number) => {
                            get_author({ element: element })
                            get_book({ element: element })
                            get_category({ element: element })

                            if (THIS.CHECK.MATH_TRUE_ARRAY({ array: content, compare: number })) {
                                THIS.TASK.WAIT({
                                    arrayTask: array_task,
                                    callBack: () => {
                                        step_three({ content_name: content_name })
                                    }
                                })
                            }
                        })
                    }
                }


                const step_three = ({ content_name }) => {
                    LS_ZDIYMDC4NTQ4MTU().CONTENT_FROM_ARRAY_NAME({arrayName: content_name}).then(res_content_data => {
                        try {
                            _success(res_content_data)
                        } catch (error) {
                            _error(error)
                        }
                    }).catch(error => {
                        _error(error)
                    })
                }

                step_one()

            } catch (error) {
                _error(error)
            }
        })


    }

    return HERE
}

module.exports.LS_AZIWODK5NTA3MJQ = LS_AZIWODK5NTA3MJQ