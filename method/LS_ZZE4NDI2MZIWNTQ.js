const { CONFIG } = require("../../config")
const { STATUS_LS_YTE4MTKYMDIWMJE } = require("../config/STATUS_LS_YTE4MTKYMDIWMJE")
const { LS_ZDE4MJC5NDC0MDI } = require("../config/current/LS_ZDE4MJC5NDC0MDI")
const { LS_EJE4MJGZNTKWMDK } = require("../config/double/LS_EJE4MJGZNTKWMDK")

const { LS_EDE5NDM5OTY3NTA } = require("../config/properties/LS_EDE5NDM5OTY3NTA")

var PROCESS = require("process")
const { exec, execSync } = require("child_process")
const axios = require("axios")


const THIS = () => {
    var THIS = {}

    THIS.CONFIG_DEFAULT = LS_EJE4MJGZNTKWMDK

    THIS.CONFIG_CURRENT = LS_ZDE4MJC5NDC0MDI

    THIS.CONFIG_SYSTEM_STATUS = STATUS_LS_YTE4MTKYMDIWMJE

    THIS.CONFIG_SYSTEM = CONFIG

    THIS.CONFIG_PROPERTIES = LS_EDE5NDM5OTY3NTA

    THIS.EX = {
        ERROR: (error) => {
            console.log(error)
        },
        NOTE: (content) => {
            console.info(content)
        },
        SAD: (error, response, redirect) => {
            try {
                const CURRENT = THIS.CONFIG_SYSTEM_STATUS().CURRENT
                if (CURRENT == THIS.CONFIG_SYSTEM().BRANCH.LOCAL) {
                    THIS.EX.ERROR(error)
                    response.send(error.stack).end()
                }
                else {
                    if (redirect) {
                        res.redirect(redirect).end()
                    }
                    else {
                        res.redirect(THIS.CONFIG_SYSTEM().PATH.DEFAULT_ERROR_REDIRECT)
                    }
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_OBJECT_FROM_ARRAY_NAME: ({ array, object }) => {
            try {
                if (THIS.CHECK.IS_NET_ARRAY({ array: array }) && object) {
                    var parse = false
                    var current = THIS.CONFIG_DEFAULT().NORMAL.OBJECT_EMPTY
                    const sortArr = THIS.EX.ARRAY_REMOVE_EMPTY({ array: array })
                    sortArr.forEach(element => {
                        if (!parse && object[element]) {
                            current = object[element]
                            parse = THIS.CONFIG_DEFAULT().NORMAL.TRUE
                        }
                        else if (current[element]) {
                            current = current[element]
                        }
                    })

                    return current
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },


        RANDOM: ({ num }) => {
            try {
                const rdm = THIS.CONFIG_DEFAULT().NORMAL.RANDOM_CHARACTOR
                var rst = String()
                for (let i = 0; i < num; i++) {
                    rst = rst + rdm[Math.round(Math.random() * THIS.EX.ARRAY_FROM_ZERO({ array: rdm }))]
                }
                return rst

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        MID: () => {
            try {
                const date = Date.now()
                const name = THIS.CONFIG_DEFAULT().REPLACE.ALL_EQUAL({
                    content: btoa(String(date) + THIS.EX.RANDOM({ num: THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE })),
                    replace: String()
                })
                return name
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        ARRAY_REMOVE_EMPTY: ({ array }) => {
            try {
                if (THIS.CHECK.IS_NET_ARRAY({ array: array })) {
                    var arro = THIS.CONFIG_DEFAULT().NORMAL.ARRAY_EMPTY
                    array.forEach(element => {
                        if (element != String()) {
                            arro.push(element)
                        }
                    });

                    return arro
                }
                else {
                    return THIS.CONFIG_DEFAULT().NORMAL.ARRAY_EMPTY
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        ARRAY_FROM_ZERO: ({ array }) => {
            try {
                if (THIS.CHECK.IS_NET_ARRAY({ array: array })) {
                    return array.length - THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        ARRAY_FROM_ONE: ({ array }) => {
            try {
                if (THIS.CHECK.IS_NET_ARRAY({ array: array })) {
                    return array.length
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.CURRENT = {
        GET_CONFIG: () => {
            try {
                return THIS.CONFIG_CURRENT().CURRENT
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_VERSION: () => {
            try {
                const version = THIS.CONFIG_SYSTEM_STATUS().STATUS.VERSION
                return version
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        PATH_FROM_STATIC: ({ path }) => {
            try {
                const currentPath = THIS.CURRENT.GET_CONFIG().STATIC_PATH + path
                return THIS.CONFIG_DEFAULT().REPLACE.DOUBLE_RIGHT_SLASH({ path: currentPath })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.CHECK = {
        IS_NET_ARRAY: ({ array }) => {
            if (array && array.length > 0) {
                return true
            }
            else {
                return false
            }
        },
        MATH_TRUE_ARRAY: ({ array, compare }) => {
            try {
                if (THIS.EX.ARRAY_FROM_ZERO({ array: array }) == compare) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        MATH_ARRAY: ({ array, compare }) => {
            try {
                if (Array.from(array).length == compare) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        IS_NET_OBJECT: ({ object }) => {
            try {
                if (object) {
                    if (Object.keys(object).length > 0) {
                        return true
                    }
                    else {
                        return false
                    }
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        IS_DEFAULT_OR_EMPRY: ({ content }) => {
            try {
                if (content && String(content).trim() != String()) {
                    return false
                }
                else {
                    return true
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.CONVERT = {
        PATH_AS_EMPTY: ({ arrayPath }) => {
            try {
                const NORMAL = THIS.CONFIG_DEFAULT().NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                while (!isValidPath && THIS.CHECK.IS_NET_ARRAY({ array: arrayPath })) {
                    if (invalidCharacter.find(x => x == arrayPath[THIS.EX.ARRAY_FROM_ZERO({ array: arrayPath })])) {
                        arrayPath.pop()
                    }
                    else {
                        isValidPath = true
                    }
                }

                return arrayPath.join(String())
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        ARRAY_TO_STRING: ({ array }) => {
            try {
                if (THIS.CHECK.IS_NET_ARRAY({ array: array })) {
                    var str = String();
                    array.forEach(element => {
                        str += element;
                    });
                    return str
                }
                else {
                    THIS.EX.ERROR(error)
                    return String()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        PATH_HEAD_EMPTY: ({ arrayPath }) => {
            try {
                const NORMAL = THIS.CONFIG_DEFAULT().NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                while (!isValidPath && THIS.CHECK.IS_NET_ARRAY({ array: arrayPath })) {
                    if (invalidCharacter.find(x => x == arrayPath[THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO])) {
                        arrayPath.shift()
                    }
                    else {
                        isValidPath = true
                    }
                }

                return Array.from(arrayPath).join(String())
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        SPECIAL_CONTENT: ({ content }) => {
            try {
                const version = THIS.CONFIG_SYSTEM_STATUS().STATUS.VERSION
                if (version) {
                    content = THIS.CONFIG_DEFAULT().REPLACE.ALL_RELEASE({ content: content, release: version })
                }

                return content
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        TRIM_STRING: ({ str }) => {
            try {
                if (str) {
                    return String(str).trim()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },
    }

    THIS.HTML = {
        THIS: {
            CREATE_FROM_ARRAY: ({ array }) => {
                try {
                    const normal = THIS.CONFIG_DEFAULT().NORMAL
                    var tags = String()

                    if (Array.isArray(array)) {
                        array.forEach(element => {
                            const tagName = element.tag ? element.tag : String()

                            var properties = String()

                            const props = element.properties

                            if (props) {
                                Object.keys(props).forEach(key => {
                                    properties = properties + key
                                        + normal.EQUAL_SYMBOL + normal.NHAY_SYMBOL_SPECIAL
                                        + String(props[key]) + normal.NHAY_SYMBOL_SPECIAL + normal.SPACE
                                })
                            }

                            tags = tags + normal.LEFT_SARO_SYMBOL + tagName + normal.SPACE
                                + properties + normal.RIGHT_SARO_SYMBOL
                                + normal.LEFT_SARO_SYMBOL + normal.RIGHT_SLASH_SYMBOL + tagName + normal.RIGHT_SARO_SYMBOL
                        })
                    }

                    return tags
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },

        },

        CREATE_AFTER_GET: ({ class_name_main, class_name_content, content, css, script, font }) => {
            try {
                class_name_main = class_name_main ? class_name_main : String()
                class_name_content = class_name_content ? class_name_content : String()
                content = content ? content : String()
                css = css ? css : String()
                script = script ? script : String()
                font = font ? font : String()

                const count = ({ content }) => {
                    if (!THIS.CHECK.IS_DEFAULT_OR_EMPRY({ content: content })) {
                        return String(content).split(THIS.CONFIG_DEFAULT().NORMAL.LINE_SYMBOL).length
                    }
                    else {
                        return THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO
                    }
                }

                const number = count({ content: css }) + count({ content: script }) + count({ content: font })

                return THIS.CONFIG_DEFAULT().ELEMENT.CREATE.AFTER_GET({
                    class_name_content: class_name_content,
                    class_name_main: class_name_main,
                    content: THIS.CONFIG_DEFAULT().ELEMENT.HTML.REDUCE({ content: content }),
                    css: css,
                    script: script,
                    font: font,
                    number: number
                })

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        GENERATE_CSS_TAG: ({ cssArray }) => {
            try {
                const staticPath = THIS.CONVERT.PATH_AS_EMPTY({
                    arrayPath: Array.from(THIS.CONVERT.TRIM_STRING({ str: THIS.CURRENT.GET_CONFIG().STATIC_PATH }))
                })
                var css = String()

                const NORMAL = THIS.CONFIG_DEFAULT().NORMAL
                if (staticPath) {
                    Array.from(cssArray).forEach(element => {

                        const cssPath = THIS.CONVERT.PATH_HEAD_EMPTY({
                            arrayPath: Array.from(THIS.CONVERT.TRIM_STRING({ str: element }))
                        })

                        const path = THIS.CONVERT.SPECIAL_CONTENT(
                            {
                                content: staticPath + THIS.CONFIG_DEFAULT().NORMAL.RIGHT_SLASH_SYMBOL + cssPath
                            }
                        )

                        const tag = NORMAL.LEFT_SARO_SYMBOL + THIS.CONFIG_DEFAULT().TAG.NAME.LINK_NAME + NORMAL.SPACE
                            + THIS.CONFIG_DEFAULT().ATTRIBUTE.NAME_REL + NORMAL.EQUAL_SYMBOL + NORMAL.NHAY_SYMBOL
                            + THIS.CONFIG_DEFAULT().ATTRIBUTE_VALUE.REL_STYLESHEET + NORMAL.NHAY_SYMBOL
                            + NORMAL.SPACE + THIS.CONFIG_DEFAULT().ATTRIBUTE.HREF_NAME + NORMAL.EQUAL_SYMBOL
                            + NORMAL.NHAY_SYMBOL + path + NORMAL.NHAY_SYMBOL + NORMAL.RIGHT_SLASH_SYMBOL + NORMAL.RIGHT_SARO_SYMBOL

                        css = css + tag
                    })
                }

                return css

            } catch (error) { THIS.EX.ERROR(error) }
        },

        GENERATE_SCRIPT_TAG: ({ scriptArray }) => {
            try {
                const staticPath = THIS.CONVERT.PATH_AS_EMPTY({
                    arrayPath: Array.from(THIS.CONVERT.TRIM_STRING({ str: THIS.CURRENT.GET_CONFIG().STATIC_PATH }))
                })

                var script = String()

                const NORMAL = THIS.CONFIG_DEFAULT().NORMAL
                if (staticPath) {
                    Array.from(scriptArray).forEach(element => {

                        const cssPath = THIS.CONVERT.PATH_HEAD_EMPTY({
                            arrayPath: Array.from(THIS.CONVERT.TRIM_STRING({ str: element }))
                        })

                        const path = THIS.CONVERT.SPECIAL_CONTENT(
                            {
                                content: staticPath + THIS.CONFIG_DEFAULT().NORMAL.RIGHT_SLASH_SYMBOL + cssPath
                            }
                        )


                        const tag = NORMAL.LEFT_SARO_SYMBOL + THIS.CONFIG_DEFAULT().TAG.NAME.SCRIPT_NAME + NORMAL.SPACE
                            + THIS.CONFIG_DEFAULT().ATTRIBUTE.SRC_NAME + NORMAL.EQUAL_SYMBOL
                            + NORMAL.NHAY_SYMBOL + path + NORMAL.NHAY_SYMBOL + NORMAL.RIGHT_SARO_SYMBOL
                            + NORMAL.LEFT_SARO_SYMBOL + NORMAL.RIGHT_SLASH_SYMBOL + THIS.CONFIG_DEFAULT().TAG.NAME.SCRIPT_NAME
                            + NORMAL.RIGHT_SARO_SYMBOL

                        script = script + tag
                    })
                }

                return script

            } catch (error) { THIS.EX.ERROR(error) }
        },
        GENERATE_PLACE_CSS: () => {
            try {
                const placeCss = THIS.CONFIG_CURRENT().STATIC.PLACE_CSS
                return THIS.HTML.THIS.CREATE_FROM_ARRAY({ array: placeCss })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GENERATE_PLACE_SCRIPT: () => {
            try {
                const placeCss = THIS.CONFIG_CURRENT().STATIC.PLACE_SCRIPT
                return THIS.HTML.THIS.CREATE_FROM_ARRAY({ array: placeCss })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
    }

    THIS.METHOD = {
        THIS: {
            MAKEUP_NORMAL: ({ content }) => {
                try {
                    return THIS.CONFIG_DEFAULT().CONVERT_METHOD.STRING.MAKEUP_NORMAL({ content: content })
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        TIME: {
            NOW_TO_SECOND: () => {
                try {
                    return Math.round(Date.now() / THIS.CONFIG_DEFAULT().VARIBLE.SECOND_TO_MINI_SECOND)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            SECOND_TO_MINISECOND: ({ second }) => {
                try {
                    return Math.round(second * THIS.CONFIG_DEFAULT().VARIBLE.SECOND_TO_MINI_SECOND)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            MINUTE_TO_SECOND: ({ minute }) => {
                try {
                    return minute * THIS.CONFIG_DEFAULT().VARIBLE.ONE_MINUTE_TO_SECOND
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            MINUTE_TO_SECOND_FROM_NOW: ({ minute }) => {
                try {
                    return (minute * THIS.CONFIG_DEFAULT().VARIBLE.ONE_MINUTE_TO_SECOND) + THIS.METHOD.TIME.NOW_TO_SECOND()
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            DATE_FORMAT: ({ component, detect }) => {
                try {
                    if (Array.isArray(component) && THIS.CHECK.IS_NET_ARRAY({ array: component })) {
                        var format = String()
                        component.forEach((element, number) => {
                            if (THIS.CHECK.MATH_TRUE_ARRAY({ array: component, compare: number })) {
                                format = format + element
                            }
                            else {
                                format = format + element + detect
                            }
                        })
                        return format
                    }
                    else {

                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }

        },
        PATH: {
            CREATE_LINK: ({ content, detect, id }) => {
                try {
                    const posive = String(THIS.METHOD.THIS.MAKEUP_NORMAL({ content: content })).toLowerCase()
                    const dash = THIS.CONFIG_DEFAULT().NORMAL.DASH_SYMBOL
                    const slash = THIS.CONFIG_DEFAULT().NORMAL.RIGHT_SLASH_SYMBOL
                    return slash + posive + dash + detect + dash + id
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        EXCEPTIONS: {
            JOBS: ({ method }) => {
                try {

                    var CURRENT = {}

                    const code = THIS.EX.MID()
                    const MEMORY = THIS.MEMORY({ name: THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.REGISTER_JOBS })

                    MEMORY.SET({ name: code, data: true })

                    const TIME = THIS.METHOD.TIME.SECOND_TO_MINISECOND({ second: THIS.CONFIG_SYSTEM().EXCEPTIONS.MAX_WAIT_TIME_SECOND })
                    const deadline = setTimeout(() => {
                        const success = MEMORY.GET({ name: code })
                        if (success && method) {
                            method()
                            MEMORY.REMOVE({ name: code })
                        }
                    }, TIME)

                    CURRENT.DONE = () => {
                        try {
                            MEMORY.REMOVE({ name: code })
                            clearTimeout(deadline)
                            return CURRENT
                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }
                    }

                    return CURRENT
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            CREATE_START_CONTENT: (content) => {
                try {
                    return {
                        status: false,
                        content: content ? content : String()
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            SET_START_CONTENT: ({ content }) => {
                try {
                    return {
                        status: true,
                        content: content
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            IS_READY_CONTENT: ({ arrayContent }) => {
                try {
                    if (Array.isArray(arrayContent)) {
                        var number = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO
                        arrayContent.forEach((element) => {
                            if (element.status) {
                                number = number + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                            }
                        })

                        if (THIS.CHECK.MATH_ARRAY({ array: arrayContent, compare: number })) {
                            return true
                        }
                        else {
                            return false
                        }
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        CREATE: {
            CSS_CONTENT: ({ url }) => {
                try {
                    if (url) {
                        return THIS.CONFIG_DEFAULT().ATTRIBUTE.CSS_CONTENT
                            + THIS.CONFIG_DEFAULT().NORMAL.EQUAL_SYMBOL
                            + url + THIS.CONFIG_DEFAULT().NORMAL.NHAY_SYMBOL_SPECIAL
                    } else {
                        return String()
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            SCRIPT_CONTENT: ({ url }) => {
                try {
                    if (url) {
                        return THIS.CONFIG_DEFAULT().ATTRIBUTE.SCRIPT_CONTENT
                            + THIS.CONFIG_DEFAULT().NORMAL.EQUAL_SYMBOL
                            + url + THIS.CONFIG_DEFAULT().NORMAL.NHAY_SYMBOL_SPECIAL
                    } else {
                        return String()
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)

                }
            }
        },
        RUN_BY_NAME: {
            NORMAL: ({ name, method }) => {
                try {
                    exec(name, (error, stdout, stderr) => {
                        if (method != undefined) {
                            method(error, stdout, stderr)
                        }
                    })
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            WAIT_TO_FINISH : ({name, method}) => {
                try{
                    execSync(name)
                    if(method != undefined){
                        method()
                    }
                }catch(error){
                    THIS.EX.ERROR(error)
                }
            }
        }
    }

    THIS.READY = {
        THIS: {
            READY_MEMORY: () => {
                try {
                    const NAME_RECORD = THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.COLLECTION_ADDED
                    const LAST_UPDATE = THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.LAST_UPDATE_MEMORY
                    if (!PROCESS[NAME_RECORD]) {
                        PROCESS[NAME_RECORD] = THIS.CONFIG_DEFAULT().NORMAL.ARRAY_EMPTY
                    }
                    if (!PROCESS[LAST_UPDATE]) {
                        PROCESS[LAST_UPDATE] = THIS.METHOD.TIME.NOW_TO_SECOND()
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },

        READY: () => {
            try {
                THIS.READY.THIS.READY_MEMORY()
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.UPDATE = {
        THIS: {
            UPDATE_MEMORY: () => {
                try {
                    const CURRENT_TIME = THIS.METHOD.TIME.NOW_TO_SECOND()
                    const LAST_UPDATE_NAME = THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.LAST_UPDATE_MEMORY
                    const LAST_UPDATE = PROCESS[LAST_UPDATE_NAME]
                    // Case memory
                    const STEP_UPDATE = THIS.METHOD.TIME.MINUTE_TO_SECOND({ minute: THIS.CONFIG_PROPERTIES().MEMORY.CONFIG.MINUTE_UPDATE_MEMORY })
                    const RECORD_MEMORY = PROCESS[THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.COLLECTION_ADDED]

                    if (CURRENT_TIME > LAST_UPDATE + STEP_UPDATE) {
                        Array.from(RECORD_MEMORY).forEach(element => {
                            var NEW_RECORD = {}
                            Object.keys(PROCESS[element]).forEach((key, num) => {
                                const OBJECT = PROCESS[element][key]
                                var IS_EXPIRE = false
                                const S_OBJECT = OBJECT.S
                                const A_OBJECT = OBJECT.A

                                if (S_OBJECT) {
                                    if (Object.keys(S_OBJECT).length > THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO) {
                                        if (S_OBJECT.S & S_OBJECT.S < CURRENT_TIME) {
                                            IS_EXPIRE = true
                                        }
                                    }
                                }
                                if (A_OBJECT && A_OBJECT < CURRENT_TIME) {
                                    IS_EXPIRE = true
                                }

                                if (!IS_EXPIRE) {
                                    NEW_RECORD[key] = PROCESS[element][key]
                                }

                            })

                            PROCESS[element] = NEW_RECORD
                        })
                        PROCESS[LAST_UPDATE_NAME] = CURRENT_TIME
                    }

                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        UPDATE: () => {
            try {
                THIS.UPDATE.THIS.UPDATE_MEMORY()
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.MIDDLE = {
        THIS: {
            CARE: () => {
                try {
                    THIS.UPDATE.UPDATE()
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            STATIC_CARE: (req, res) => {
                try {

                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        WATCH_STATIC: (req, res, continute) => {
            try {
                THIS.MIDDLE.THIS.STATIC_CARE(req, res)

                if (continute) {
                    continute()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        WATCH: (req, res, continute) => {
            try {
                THIS.MIDDLE.THIS.CARE()
                if (continute) {
                    continute()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.TASK = {
        WAIT: ({ arrayTask, callBack }) => {
            try {

                if (Array.isArray(arrayTask) && THIS.CHECK.IS_NET_ARRAY({ array: arrayTask })) {
                    var array_task = Array.from(arrayTask)
                    var count = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO

                    const watch = () => {
                        if (THIS.CHECK.MATH_ARRAY({ array: array_task, compare: count })) {
                            if (callBack) {
                                callBack(count)
                            }
                        }
                    }

                    array_task.forEach(element => {
                        const current = element()
                        if (current && current.then) {

                            const response = () => {
                                count = count + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                                watch()
                            }

                            current.then(result => {
                                response()
                            }).catch(error => {
                                THIS.EX.ERROR(error)
                                response()
                            })
                        }
                    })
                }
                else {
                    callBack()
                }


            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }


    THIS.MEMORY = ({ name }) => {
        var CURRENT = {}

        CURRENT.PROPS = {
            properties: {
                name: name
            }
        }

        CURRENT.THIS = {
            CREATE_SLIDE_TIME: ({ slideTime }) => {
                try {

                    if (slideTime) {
                        const CURRENT = THIS.METHOD.TIME.NOW_TO_SECOND()
                        const SLIDE = CURRENT + slideTime
                        const MEMORY_TIME = {
                            S: SLIDE,
                            T: slideTime
                        }
                        return MEMORY_TIME
                    }
                    else {
                        return THIS.CONFIG_DEFAULT().NORMAL.ARRAY_EMPTY
                    }

                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        }

        CURRENT.CHECK = () => {
            try {
                const MEMORY_NAME = CURRENT.PROPS.properties.name
                if (!PROCESS[MEMORY_NAME]) {
                    PROCESS[MEMORY_NAME] = THIS.CONFIG_DEFAULT().NORMAL.OBJECT_EMPTY
                    var REGISTER = Array.from(PROCESS[THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.COLLECTION_ADDED])
                    const IS_ADDED = REGISTER.find(x => x == MEMORY_NAME)
                    if (!IS_ADDED) {
                        REGISTER.push(MEMORY_NAME)
                        PROCESS[THIS.CONFIG_PROPERTIES().MEMORY.COLLECTION.COLLECTION_ADDED] = REGISTER
                    }
                }
            } catch (error) { THIS.EX.ERROR(error) }
        }

        CURRENT.GET = ({ name }) => {
            try {
                const MEMORY_NAME = CURRENT.PROPS.properties.name
                var CURRENT_MEMORY = PROCESS[MEMORY_NAME][name]
                if (CURRENT_MEMORY) {
                    var MEMORY_CONTENT = CURRENT_MEMORY
                    var SLIDE = MEMORY_CONTENT.S
                    if (Object.keys(SLIDE).length > THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO) {
                        if (SLIDE.T) {
                            const NEW_SLIDE = CURRENT.THIS.CREATE_SLIDE_TIME({ slideTime: SLIDE.T })

                            MEMORY_CONTENT.S = NEW_SLIDE
                        }
                        PROCESS[MEMORY_NAME][name] = MEMORY_CONTENT
                    }

                    return MEMORY_CONTENT.D
                }
                else {
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)

            }
        }

        CURRENT.GET_OR_SET = ({ name, set, callBack }) => {
            try {
                var CURRENT_MEMORY = CURRENT.GET({ name: name })
                if (Object.keys(CURRENT_MEMORY).length > THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO) {
                    if (callBack) {
                        callBack()
                    }
                    return CURRENT_MEMORY
                }
                else {
                    return set()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }

        CURRENT.SET = ({ name, data, slideTime, absoluteTime }) => {
            try {
                const MEMORY_NAME = CURRENT.PROPS.properties.name

                const MEMORY_ITEM = {
                    D: data,
                    S: CURRENT.THIS.CREATE_SLIDE_TIME({ slideTime: slideTime }),
                    A: absoluteTime
                }

                PROCESS[MEMORY_NAME][name] = MEMORY_ITEM
                return MEMORY_ITEM.D
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }

        CURRENT.REMOVE = ({ name }) => {
            try {
                var NEW_MEMORY = THIS.CONFIG_DEFAULT().NORMAL.OBJECT_EMPTY

                const MEMORY_NAME = CURRENT.PROPS.properties.name

                var PROCESS_MEMORY = PROCESS[MEMORY_NAME]

                Object.keys(PROCESS_MEMORY).forEach(key => {
                    if (key != name) {
                        NEW_MEMORY[key] = PROCESS_MEMORY[key]
                    }
                })
                PROCESS[MEMORY_NAME] = NEW_MEMORY
            } catch (error) { THIS.EX.ERROR(error) }
        }
        CURRENT.CHECK()
        return CURRENT
    }

    THIS.AXIOS = () => {
        try{
            var current = new axios.Axios()

            if(axios != undefined){
                current = axios
            }

            return current
        }catch(error){
            THIS.EX.ERROR(error)
        }
    }

    THIS.READY.READY()
    return THIS
}

module.exports.THIS = THIS()