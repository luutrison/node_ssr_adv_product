const LS_ATE4MJG3ODI1MJE = () => {
    return {
        ALL_RELEASE: ({content, release}) => {
            content = content.replace(/@{version}/g, release)
            return content
        },
        ALL_EQUAL: ({content, replace}) => {
            return String(content).replace(/=/g, replace)
        },
        DOUBLE_RIGHT_SLASH: ({path}) => {
            return String(path).replace(/\/+\//g, "/").replace(/:\//g, "://")
        }
    }
}

module.exports.LS_ATE4MJG3ODI1MJE = LS_ATE4MJG3ODI1MJE