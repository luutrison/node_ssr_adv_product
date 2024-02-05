const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { ROUTER_LS_YTE4MTK0NDQZMTY } = require("../../../route/ROUTER_LS_YTE4MTK0NDQZMTY")

const NOT_FOUND_LS_ATMZMDCZNTA4NZU = () => {
    ROUTER_LS_YTE4MTK0NDQZMTY.all("*", (req, res) => {
        try {
            res.send("not_found").end()
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    })
}

module.exports.NOT_FOUND_LS_ATMZMDCZNTA4NZU = NOT_FOUND_LS_ATMZMDCZNTA4NZU