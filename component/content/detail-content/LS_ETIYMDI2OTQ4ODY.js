const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_CTIWOTU4MTYZNDM } = require("../other/LS_CTIWOTU4MTYZNDM")

//INFO
const LS_ETIYMDI2OTQ4ODY = ({ id }) => {
    var HERE = {}

    HERE.PROPS = {
        properties: {
            id: id
        }
    }

    HERE.GET_DETAIL_CONTENT = () => {
        try {
            const props = HERE.PROPS.properties

            const db_collection = () => {
                return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION
            }

            return new Promise((_success, _error) => {
                try {
                    var content_info = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()
                    var content_detail_info = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()
                    var author_info = THIS.METHOD.EXCEPTIONS.CREATE_START_CONTENT()

                    const posive = () => {
                        if (content_info.status && content_detail_info.status && author_info.status) {
                            const info = {
                                content_info: content_info.content,
                                content_detail: content_detail_info.content,
                                author: author_info.content
                            }
                            _success(info)
                        }
                    }

                    const set_content_info = ({ content }) => {
                        content_info = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: content })
                        posive()
                    }
                    const set_content_detail = ({ content }) => {
                        content_detail_info = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: content })
                        posive()
                    }
                    const set_author_info = ({ content }) => {
                        author_info = THIS.METHOD.EXCEPTIONS.SET_START_CONTENT({ content: content })
                        posive()
                    }


                    LS_CTIWOTU4MTYZNDM().GET_CONTENT_INFO({ id: props.id }).then(data_content_info => {
                        try {
                            const content_detail_id = data_content_info[db_collection().CONTENT_INFO.PROPERTIES.CONTENT_ID]
                            const author_id = data_content_info[db_collection().CONTENT_INFO.PROPERTIES.AUTHOR_ID]

                            set_content_info({ content: data_content_info })

                            LS_CTIWOTU4MTYZNDM()
                                .GET_CONTENT_DETAIL({ id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: content_detail_id }) })
                                .then(data_content_detail => {
                                    try {
                                        set_content_detail({ content: data_content_detail })
                                    } catch (error) {
                                        set_content_detail({ content: error })
                                        _error(error)
                                    }
                                }).catch(error => {
                                    set_content_detail({ content: error })
                                    _error(error)
                                })


                            LS_CTIWOTU4MTYZNDM().GET_AUTHOR({ objectId: author_id }).then(data_author => {
                                try {
                                    set_author_info({ content: data_author })
                                } catch (error) {
                                    set_author_info({ content: error })
                                    _error(error)
                                }
                            }).catch(error => {
                                set_author_info({ content: error })
                                _error(error)
                            })
                        } catch (error) {
                            set_content_info({ content: error })
                            _error(error)
                        }

                    }).catch(error => {
                        set_content_info({ content: error })
                        _error(error)
                    })
                } catch (error) {
                    _error(error)
                }
            })

        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    return HERE
}

module.exports.LS_ETIYMDI2OTQ4ODY = LS_ETIYMDI2OTQ4ODY