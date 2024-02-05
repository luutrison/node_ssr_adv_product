const { THIS } = require("../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../mongoDB/MONGODB")

const LS_CZMZMDMYNZAYMZA = () => {
    var HERE = {}

    HERE.GET_HEADER_CATEGORY = () => {
        return new Promise((_success, _error) => {
            try {
                const DB_OTHER_INFO = MONGODB().COLLECTION.OTHER_INFO()

                const MEMORY_INFO = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CONTENT_INFO })

                const content_current = () => {
                    return MEMORY_INFO.GET({ name: THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.HEADER_CATEGORY })
                }

                const step_two = ({ content }) => {
                    _success(content)
                }

                if (content_current()) {
                    step_two({ content: content_current() })
                }
                else {
                    const INFO = DB_OTHER_INFO.INFO()

                    INFO.COLLECTION.findOne({ label: THIS.CONFIG_PROPERTIES().MONGODB.OTHER.NAME.HEADER_CATEGORY }).then(_info => {
                        MEMORY_INFO.SET(
                            {
                                name: THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.HEADER_CATEGORY,
                                data: _info
                            }
                        )

                        INFO.CLIENT.close()
                        step_two({ content: _info })
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

module.exports.LS_CZMZMDMYNZAYMZA = LS_CZMZMDMYNZAYMZA