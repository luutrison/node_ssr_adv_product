const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { LS_ZDIZMZGZNTIXMZC } = require("../../paper/LS_ZDIZMZGZNTIXMZC")
const { LS_ZDIYMDC4NTQ4MTU } = require("../other/LS_DJIYMDKZMTUXNDE/LS_ZDIYMDC4NTQ4MTU")

const LS_CTIZNDAXNTK1NTC = ({ current, categoryId, authorId, bookId, href }) => {
    var HERE = {}

    HERE.PROP = {
        PROPERTIES: {
            current: current,
            categoryId: categoryId,
            authorId: authorId,
            bookId: bookId,
            href: href
        }
    }

    HERE.CREATE_PAPER_COUNTER = () => {
        return new Promise((_success, _error) => {
            try {

                const props = HERE.PROP.PROPERTIES

                LS_ZDIYMDC4NTQ4MTU().COUNT_BEST_CONTENT({authorId: props.authorId, categoryId: props.categoryId, bookId: props.bookId}).then(count_data => {
                    try {
                        const number = THIS.CONFIG_DEFAULT().PAPER.MAX_ITEM_BEST_UNIT
                        const current = Array.from(count_data).pop()
                        const total = current.count
                        const paper_count = LS_ZDIZMZGZNTIXMZC({
                            total: total,
                            current: props.current,
                            detect: THIS.CONFIG_DEFAULT().PAPER.DETECT_DEFAULT,
                            number: number,
                            url: props.href
                        }).ELEMENT()
                        _success(paper_count)
                    } catch (error) {
                        _error(error)
                    }
                })
            } catch (error) {
                _error(error)
            }
        })
    }

    return HERE
}

module.exports.LS_CTIZNDAXNTK1NTC = LS_CTIZNDAXNTK1NTC