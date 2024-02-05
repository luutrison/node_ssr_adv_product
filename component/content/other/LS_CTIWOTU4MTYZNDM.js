const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")

const LS_CTIWOTU4MTYZNDM = () => {
    var HERE = {}


    const memory_config = () => {
        return THIS.CONFIG_PROPERTIES().MEMORY
    }


    const TIME_DEFAULT = THIS.CONFIG_DEFAULT().PAPER.DEFAULT_MEMORY_MINUTE


    HERE.GET_AUTHOR = ({ objectId }) => {
        return new Promise((_success, _error) => {
            try {

                const DB_AUTHOR = MONGODB().COLLECTION.AUTHOR()
                const MEMORY_AUTHOR = THIS.MEMORY({ name: memory_config().COLLECTION.AUTHOR })

                const memoname = memory_config().PROPERTIES.AUTHOR + MONGODB().METHOD.OBJECT_TO_ID({ objectId: objectId })
                const memory_content = MEMORY_AUTHOR.GET({ name: memoname })

                if (memory_content) {
                    _success(memory_content)
                }
                else {
                    const INFO = DB_AUTHOR.INFO()
                    INFO.COLLECTION.findOne({ _id: objectId }).then(data => {
                        try {
                            MEMORY_AUTHOR.SET({
                                name: memoname,
                                data: data,
                                absoluteTime: THIS.METHOD.TIME.MINUTE_TO_SECOND_FROM_NOW({ minute: TIME_DEFAULT })
                            })
                            INFO.CLIENT.close()
                            _success(data)
                        } catch (error) {
                            INFO.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO.CLIENT.close()
                        _error(error)
                    })
                }
            } catch (error) {
                _error(error)
            }
        })
    }

    HERE.GET_CATEGORY = ({ objectId }) => {
        return new Promise((_success, _error) => {
            try {
                const DB_CATEGORY = MONGODB().COLLECTION.CATEGORY()
                const MEMORY_CATEGORY = THIS.MEMORY({ name: memory_config().COLLECTION.CATEGORY })

                const memoname = memory_config().PROPERTIES.CATEGORY + MONGODB().METHOD.OBJECT_TO_ID({ objectId: objectId })
                const memory_content = MEMORY_CATEGORY.GET({ name: memoname })

                if (memory_content) {
                    _success(memory_content)
                }
                else {
                    const INFO = DB_CATEGORY.INFO()
                    INFO.COLLECTION.findOne({ _id: objectId }).then(data => {
                        try {
                            MEMORY_CATEGORY.SET({
                                name: memoname,
                                data: data
                            })
                            INFO.CLIENT.close()
                            _success(data)
                        } catch (error) {
                            INFO.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO.CLIENT.close()
                        _error(error)
                    })
                }
            } catch (error) {
                _error(error)
            }
        })
    }

    HERE.GET_BOOK = ({ objectId }) => {
        return new Promise((_success, _error) => {
            try {
                const DB_BOOK = MONGODB().COLLECTION.BOOK()
                const MEMORY_BOOK = THIS.MEMORY({ name: memory_config().COLLECTION.BOOK })

                const memoname = memory_config().PROPERTIES.BOOK + MONGODB().METHOD.OBJECT_TO_ID({ objectId: objectId })
                const memory_content = MEMORY_BOOK.GET({ name: memoname })

                if (memory_content) {
                    _success(memory_content)
                } else {
                    const INFO = DB_BOOK.INFO()
                    INFO.COLLECTION.findOne({ _id: objectId }).then(data => {
                        try {
                            MEMORY_BOOK.SET({
                                name: memoname,
                                data: data,
                                absoluteTime: THIS.METHOD.TIME.MINUTE_TO_SECOND_FROM_NOW({ minute: TIME_DEFAULT })
                            })
                            INFO.CLIENT.close()
                            _success(data)
                        } catch (error) {
                            INFO.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO.CLIENT.close()
                        _error(error)
                    })
                }
            } catch (error) {
                _error(error)
            }
        })
    }

    HERE.GET_CONTENT_DETAIL = ({ id }) => {
        return new Promise((_success, _error) => {
            try {
                const DB_CONTENT_DETAIL = MONGODB().COLLECTION.CONTENT_DETAIL()
                const MEMORY_CONTENT_DETAIL = THIS.MEMORY({ name: memory_config().COLLECTION.CONTENT_DETAIL })

                const memoname = memory_config().PROPERTIES.CONTENT_DETAIL + id
                const memory_content = MEMORY_CONTENT_DETAIL.GET({ name: memoname })

                if (memory_content) {
                    _success(memory_content)
                } else {
                    const INFO = DB_CONTENT_DETAIL.INFO()
                    INFO.COLLECTION.findOne({ _id: MONGODB().METHOD.ID_TO_OBJECT({ id: id }) }).then(data => {
                        try {
                            MEMORY_CONTENT_DETAIL.SET({
                                name: memoname,
                                data: data,
                                absoluteTime: THIS.METHOD.TIME.MINUTE_TO_SECOND_FROM_NOW({ minute: TIME_DEFAULT })
                            })
                            INFO.CLIENT.close()
                            _success(data)
                        } catch (error) {
                            INFO.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO.CLIENT.close()
                        _error(error)
                    })
                }
            } catch (error) {
                _error(error)
            }
        })

    }

    HERE.GET_CONTENT_INFO = ({ id }) => {
        return new Promise((_success, _error) => {
            try {
                const DB_CONTENT_INFO = MONGODB().COLLECTION.CONTENT_INFO()
                const MEMORY_CONTENT_INFO = THIS.MEMORY({ name: memory_config().COLLECTION.CONTENT_INFO })

                const memoname = memory_config().PROPERTIES.CONTENT_INFO + id
                const memory_content = MEMORY_CONTENT_INFO.GET({ name: memoname })

                if (memory_content) {
                    _success(memory_content)
                } else {
                    const INFO = DB_CONTENT_INFO.INFO()
                    INFO.COLLECTION.findOne({ _id: MONGODB().METHOD.ID_TO_OBJECT({ id: id }) }).then(data => {
                        try {
                            MEMORY_CONTENT_INFO.SET({
                                name: memoname,
                                data: data,
                                absoluteTime: THIS.METHOD.TIME.MINUTE_TO_SECOND_FROM_NOW({ minute: TIME_DEFAULT })
                            })
                            INFO.CLIENT.close()
                            _success(data)
                        } catch (error) {
                            INFO.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO.CLIENT.close()
                        _error(error)
                    })
                }
            } catch (error) {
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_CTIWOTU4MTYZNDM = LS_CTIWOTU4MTYZNDM