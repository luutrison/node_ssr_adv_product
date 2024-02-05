const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")

const LS_BJMYMDQ0NZY0MJU = () => {
    const IS = {}

    HERE.PROPS = {
        PROPERTIES: {
        }
    }

    HERE.GET_CATEGORY_PINED = () => {
        return new Promise((_success, _error) => {
            try {
                const CO_CATEGORY = MONGODB().COLLECTION.CATEGORY()
                const MEMORY_INFO = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.CONTENT_INFO })

                const memory_content = () => {
                    return MEMORY_INFO.GET({ name: THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.CATEGORY_PIN })
                }

                const step_two = ({ content }) => {
                    _success(content)
                }

                if (memory_content()) {
                    step_two({ content: memory_content() })
                } else {
                    const INFO = CO_CATEGORY.INFO()
                    INFO.COLLECTION.aggregate([
                        {
                            $match: {
                                pin: true
                            }
                        },
                        {
                            $sort: {
                                order: 1
                            }
                        },
                        {
                            $limit: 5
                        }
                    ]).toArray().then(category_data => {
                        MEMORY_INFO.SET({
                            name: THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.CATEGORY_PIN,
                            data: category_data
                        })
                        step_two({ content: category_data })
                        INFO.CLIENT.close()
                    }).catch(error => {
                        _error(error)
                        INFO.CLIENT.close()
                    })
                }

            } catch (error) {
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_BJMYMDQ0NZY0MJU = LS_BJMYMDQ0NZY0MJU