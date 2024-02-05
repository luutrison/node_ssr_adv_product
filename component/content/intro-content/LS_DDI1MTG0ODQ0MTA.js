const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")

const LS_DDI1MTG0ODQ0MTA = () => {
    var HERE = {}

    HERE.GET_INTRO_BEST_CONTENT = () => {
        return new Promise((_success, _error) => {
            try {
                const CO_INTRODUCE_DETAIL = MONGODB().COLLECTION.INTRODUCE_DETAIL()
                const CO_INTRODUCE = MONGODB().COLLECTION.INTRODUCE()

                const MEMORY_NO_MAIN = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.NO_MAIN_OR_THEME })

                const INFO_DETAIL = CO_INTRODUCE_DETAIL.INFO()

                const step_two = ({ memory_detail }) => {
                    if (Array.isArray(memory_detail)) {
                        const top_introduce = memory_detail
                            .find(z => z[CO_INTRODUCE_DETAIL.PROPERTIES.NUMBER] == THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE)

                        if (top_introduce) {

                            const top_introduce_id = top_introduce[CO_INTRODUCE_DETAIL.PROPERTIES.ID]
                            const mem_name = THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.INTRODUCE
                                + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                            const mem_introduce = MEMORY_NO_MAIN.GET({ name: mem_name })

                            if (mem_introduce) {
                                _success(mem_introduce)
                            } else {
                                const INFO_INTRODUCE = CO_INTRODUCE.INFO()
                                INFO_INTRODUCE.COLLECTION.findOne({ categoryId: top_introduce_id })
                                    .then(intro_data => {
                                        try {
                                            MEMORY_NO_MAIN.SET({
                                                name: mem_name,
                                                data: intro_data
                                            })
                                            INFO_INTRODUCE.CLIENT.close()
                                            _success(intro_data)
                                        } catch (error) {
                                            INFO_INTRODUCE.CLIENT.close()
                                            _error(error)
                                        }
                                    }).catch(error => {
                                        INFO_INTRODUCE.CLIENT.close()
                                        _error(error)
                                    })
                            }

                        }
                        else {
                            _error(top_introduce)
                        }
                    }
                    else {
                        _error(memory_detail)
                    }
                }

                const memory_detail_introduce = MEMORY_NO_MAIN.GET({ name: THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.INTRODUCE_DETAIL_INFO })

                if (memory_detail_introduce) {
                    step_two({ memory_detail: memory_detail_introduce })
                } else {
                    INFO_DETAIL.COLLECTION.find({}).toArray().then(info_detail => {
                        try {
                            MEMORY_NO_MAIN.SET({
                                name: THIS.CONFIG_PROPERTIES().MEMORY.PROPERTIES.INTRODUCE_DETAIL_INFO,
                                data: info_detail
                            })
                            INFO_DETAIL.CLIENT.close()
                            step_two({ memory_detail: info_detail })
                        } catch (error) {
                            INFO_DETAIL.CLIENT.close()
                            _error(error)
                        }
                    }).catch(error => {
                        INFO_DETAIL.CLIENT.close()
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

module.exports.LS_DDI1MTG0ODQ0MTA = LS_DDI1MTG0ODQ0MTA