const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { ROUTER_LS_YTE4MTK0NDQZMTY } = require("../../../route/ROUTER_LS_YTE4MTK0NDQZMTY")

const FIX_LATE_LS_CDM2NDI0MTY0NZQ = () => {
    ROUTER_LS_YTE4MTK0NDQZMTY.get("/ping-2020-2022-2024-23642942442-03642949450-63642965258", (req, res) => {
        try{
            res.send(THIS.CONFIG_SYSTEM().PARSE.MESSAGE.PING_REWARD)
        }catch(error){
            THIS.EX.SAD(error, res)
        }
    })
}

module.exports.FIX_LATE_LS_CDM2NDI0MTY0NZQ = FIX_LATE_LS_CDM2NDI0MTY0NZQ