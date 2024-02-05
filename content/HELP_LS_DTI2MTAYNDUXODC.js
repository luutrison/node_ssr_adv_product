const { LS_ATI2MTAZNJC0NTI } = require("../component/content/help-content/LS_ATI2MTAZNJC0NTI")
const { THIS } = require("../method/LS_ZZE4NDI2MZIWNTQ")
const { ROUTER_LS_YTE4MTK0NDQZMTY } = require("../route/ROUTER_LS_YTE4MTK0NDQZMTY")

const HELP_LS_DTI2MTAYNDUXODC = () => {
    ROUTER_LS_YTE4MTK0NDQZMTY.get("/help", (req, res) => {
        try{
            const content = LS_ATI2MTAZNJC0NTI().ELEMENT()
            res.send(content).end()
        }catch(error){
            THIS.EX.SAD(error, res)
        }
    })

}

module.exports.HELP_LS_DTI2MTAYNDUXODC = HELP_LS_DTI2MTAYNDUXODC