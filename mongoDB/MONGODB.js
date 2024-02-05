const { THIS } = require('../method/LS_ZZE4NDI2MZIWNTQ');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const MONGODB = () => {

    var HERE = {}

    const CONNECTION = THIS.CURRENT.GET_CONFIG().MONGODB_URL



    const MONGODB_NAME = () => {
        return THIS.CONFIG_PROPERTIES().MONGODB.NAME
    }

    const MONGODB_COLLECTION = () => {
        return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION
    }


    const BLOGER_DB = () => {
        var current = new MongoClient(CONNECTION, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        return {
            CLIENT: current,
            DB: current.db(MONGODB_NAME().DB_BLOGER)
        }
    }

    HERE.METHOD = {
        ID_TO_OBJECT: ({ id }) => {
            try {
                return new ObjectId(id)
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        OBJECT_TO_ID: ({ objectId }) => {
            try {
                return new ObjectId(objectId).toString()
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    HERE.COLLECTION = {
        CONTENT_INFO : () => {
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().CONTENT_INFO.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().CONTENT_INFO.PROPERTIES
            }
        },
    
        AUTHOR : () => {
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().AUTHOR.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().AUTHOR.PROPERTIES
            }
        },
    
        CATEGORY : () => {
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().CATEGORY.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().CATEGORY.PROPERTIES
            }
        },
    
        CONTENT_DETAIL : () => {
    
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().CONTENT_DETAIL.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().CONTENT_DETAIL.PROPERTIES
            }
        },
    
        BOOK : () => {
    
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().BOOK.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().BOOK.PROPERTIES
            }
        },
        INTRODUCE : () => {
    
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().INTRODUCE.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().INTRODUCE.PROPERTIES
            }
        },
        INTRODUCE_DETAIL : () => {
    
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().INTRODUCE_DETAIL.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().INTRODUCE_DETAIL.PROPERTIES
            }
        },
        DUMPART : () => {
    
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().DUMPART.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().DUMPART.PROPERTIES
            }
        },
        DUMPART_DETAIL : () => {
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().DUMPART_DETAIL.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().DUMPART_DETAIL.PROPERTIES
            }
        },
        OTHER_INFO : () => {
            return {
                INFO: () => {
                    const DB = BLOGER_DB()
                    return {
                        CLIENT: DB.CLIENT,
                        COLLECTION: DB.DB.collection(MONGODB_COLLECTION().OTHER_INFO.NAME),
                    }
                },
                PROPERTIES: MONGODB_COLLECTION().OTHER_INFO.PROPERTIES
            }
        }
    }

    return HERE
}

module.exports.MONGODB = MONGODB