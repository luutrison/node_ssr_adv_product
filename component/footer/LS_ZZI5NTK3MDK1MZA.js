const { THIS } = require("../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../mongoDB/MONGODB")

const LS_ZZI5NTK3MDK1MZA = () => {
    var HERE = {}

    HERE.PROPS = {
        PROPERTIES: {

        }
    }

    HERE.GET_INFO_DUMPART = () => {
        return new Promise((_success, _error) => {
            try {
                const CO_DUMPART = MONGODB().COLLECTION.DUMPART()
                const CO_DUMPART_DETAIL = MONGODB().COLLECTION.DUMPART_DETAIL()

                const MEMORY_INFO = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CONTENT_INFO })

                const memory = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY
                }

                const memory_content = () => {
                    return MEMORY_INFO.GET({ name: memory().PROPERTIES.DUMPART_INFO })
                }

                const step_two = ({ dumpart }) => {
                    if (Array.isArray(dumpart)) {

                        var dumpartDetail = []
                        var count = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO

                        const posive = () => {
                            if (count == THIS.EX.ARRAY_FROM_ONE({ array: dumpart })) {
                                _success(dumpartDetail)
                            }
                        }

                        dumpart.forEach(element => {
                            const mem_name = memory().PROPERTIES.DUMPART_ITEMS + MONGODB().METHOD.OBJECT_TO_ID({ objectId: element._id })

                            const items = MEMORY_INFO.GET({ name: mem_name })

                            if (items) {
                                count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                                dumpartDetail.push({
                                    dumpart: element,
                                    detail: items
                                })
                                posive()
                            }
                            else {
                                const INFO = CO_DUMPART_DETAIL.INFO()

                                INFO.COLLECTION.find({
                                    dumpartId:

                                        element._id
                                }).toArray().then(detail_info => {
                                    try {

                                        MEMORY_INFO.SET({
                                            name: mem_name,
                                            data: detail_info
                                        })
                                        dumpartDetail.push({
                                            dumpart: element,
                                            detail: detail_info
                                        })
                                        count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                                        posive()
                                    } catch (error) {
                                        _error(error)
                                        INFO.CLIENT.close()
                                    }
                                }).catch(error => {
                                    _error(error)
                                    INFO.CLIENT.close()
                                })
                            }
                        })

                    }
                }

                if (!memory_content()) {
                    const INFO = CO_DUMPART.INFO()
                    INFO.COLLECTION.find({}).toArray().then(dumpart_info => {
                        try {
                            MEMORY_INFO.SET({
                                name: memory().PROPERTIES.DUMPART_INFO,
                                data: dumpart_info
                            })

                            step_two({ dumpart: dumpart_info })
                            INFO.CLIENT.close()
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
                    step_two({ dumpart: memory_content() })
                }
            } catch (error) {
                _error(error)
            }
        })
    }

    HERE.GET_OTHER_INFO = () => {
        return new Promise((_success, _error) => {
            try {
                const CO_OTHER = MONGODB().COLLECTION.OTHER_INFO()
                const MEMORY_INFO = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CONTENT_INFO })

                const memory = () => {
                    return THIS.CONFIG_PROPERTIES().MEMORY
                }

                const memory_content = () => {
                    return MEMORY_INFO.GET({ name: memory().PROPERTIES.OTHER_FOOTER_INFO })
                }

                const step_two = ({ content }) => {
                    if(content && Array.isArray(content)){
                        _success(content)
                    }
                }

                if (!memory_content()) {
                    const INFO = CO_OTHER.INFO()

                    INFO.COLLECTION.aggregate([
                        {
                            "$match": {
                                label: { "$in": THIS.CONFIG_DEFAULT().QUERY.QUERY.FOOTER_OTHER_INFO }
                            }
                        }
                    ]).toArray().then(footer_data => {
                        try {
                            MEMORY_INFO.SET({
                                name: memory().PROPERTIES.OTHER_FOOTER_INFO,
                                data: footer_data
                            })
                            INFO.CLIENT.close()
                            step_two({content: footer_data})
                        } catch (error) {
                            _error(error)
                            INFO.CLIENT.close()
                        }
                    }).catch(error => {
                        _error(error)
                        INFO.CLIENT.close()
                    })
                }
                else {
                    step_two({ content: memory_content() })
                }

            } catch (error) {
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_ZZI5NTK3MDK1MZA = LS_ZZI5NTK3MDK1MZA