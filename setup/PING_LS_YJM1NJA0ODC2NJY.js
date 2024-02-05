const express = require("express")
const { THIS } = require("../method/LS_ZZE4NDI2MZIWNTQ")

const NUMBER = THIS.CONFIG_SYSTEM().NUMBER.CHECK_CRASH

const START = express()

const PING = ({ now }) => {
    const attr = THIS.CONFIG_DEFAULT().ATTRIBUTE
    const normal = THIS.CONFIG_DEFAULT().NORMAL
    const path_ping = attr.HTTP + normal.C_CHAM_SYMBOL + normal.DOUBLE_RIGHT_SLASH_SYMBOL
        + attr.LOCALHOST + normal.C_CHAM_SYMBOL + THIS.CURRENT.GET_CONFIG().NUMBER + THIS.CONFIG_SYSTEM().PATH.PING_CHECK_IS_CRASH
    const time_ping_again = THIS.METHOD.TIME.SECOND_TO_MINISECOND({ second: THIS.CONFIG_SYSTEM().EXCEPTIONS.TIME_CHECK_CRASH_SECOND })


    const contact = () => {

        THIS.METHOD.RUN_BY_NAME.NORMAL({
            name: THIS.CONFIG_SYSTEM().CONTACT.SYSTEM,
            method: (err, dout, derr) => {
                if (err) {
                    THIS.EX.ERROR(err)
                }
                if (derr) {
                    THIS.EX.ERROR(derr)
                }
                if (dout) {
                    THIS.EX.NOTE(dout)
                }
                THIS.EX.NOTE(THIS.CONFIG_DEFAULT().MESSAGE.CRASH_AND_RESTART)
            }
        })
    }

    if (now) {
        THIS.EX.NOTE(THIS.CONFIG_DEFAULT().MESSAGE.START_SYSTEM)
        contact()
    }

    setTimeout(() => {

        THIS.AXIOS().get(path_ping).then(_res => {
            try{
                const parse = _res.data
                if(parse == THIS.CONFIG_SYSTEM().PARSE.MESSAGE.PING_REWARD){
                    PING({ now: false })
                }
                else{
                    if (THIS.CONFIG_SYSTEM().EXCEPTIONS.RESTART_WHEN_CRASH) {
                        contact()
                    }
                }
            }catch(_error){
                THIS.EX.ERROR(_error)
            }
            
        }).catch(_error => {
            if (THIS.CONFIG_SYSTEM().EXCEPTIONS.RESTART_WHEN_CRASH) {
                contact()
            }
            PING({ now: false })
            THIS.EX.ERROR(_error)
        })
    }, time_ping_again)
}

PING({ now: true })

START.listen(NUMBER, () => {
    THIS.EX.NOTE(THIS.CONFIG_DEFAULT().MESSAGE.CURRENT_PING_LISTEN + NUMBER)
})