const { THIS } = require("../../method/LS_ZZE4NDI2MZIWNTQ")

const LS_ZDIZMZGZNTIXMZC = ({ total, current, number, url, detect }) => {
    var HERE = {}

    HERE.PROPS = {
        PROPERTIES: {
            total: total,
            current: current,
            url: url,
            detect: detect,
            number: number
        }
    }

    HERE.METHOD = {
        CREATE_URL: ({ number }) => {
            try {

                const props = HERE.PROPS.PROPERTIES
                const path = String(props.url).split(THIS.CONFIG_DEFAULT().NORMAL.REQUEST_SYMBOL)[THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO]
                const currentLink = path
                    + THIS.CONFIG_DEFAULT().NORMAL.REQUEST_SYMBOL
                    + props.detect
                    + THIS.CONFIG_DEFAULT().NORMAL.EQUAL_SYMBOL
                    + number

                return currentLink

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_COUNT_PAPER: () => {
            try {
                const props = HERE.PROPS.PROPERTIES

                const totalCount = (props.total / props.number)
                var roundContent = Math.round(totalCount)
                const normal = THIS.CONFIG_DEFAULT().NORMAL
                if (roundContent - totalCount < normal.NUMBER_ZERO) {
                    roundContent = roundContent + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
                }
                return roundContent
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    HERE.PREV_ELEMENT = () => {
        try {

            const props = HERE.PROPS.PROPERTIES

            var previosNumber = props.current - THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE

            if (previosNumber <= THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ZERO) {
                previosNumber = THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE
            }

            const linkPrevios = HERE.METHOD.CREATE_URL({ number: previosNumber })

            return (
                `
                    <a href="${linkPrevios}" class="ls_yjizmzg4ndaymdk ls_zdizmzg2odexmzq">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
                    </a>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }


    HERE.NEXT_ELEMENT = () => {
        try {
            const props = HERE.PROPS.PROPERTIES
            const countNumber = HERE.METHOD.GET_COUNT_PAPER()

            var nextNumber = props.current + THIS.CONFIG_DEFAULT().NORMAL.NUMBER_ONE

            if (nextNumber > countNumber) {
                nextNumber = countNumber
            }

            const linkNext = HERE.METHOD.CREATE_URL({ number: nextNumber })

            return (
                `
                    <a href="${linkNext}" class="ls_yjizmzg4ndaymdk ls_zdizmzg2odexmzq">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                    </a>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.PAPER_ELEMENT = ({ number, active }) => {
        try {

            const activeClass = active ? "ls_zzizndqwmjk3mzq" : String()
            const currentLink = HERE.METHOD.CREATE_URL({ number: number })

            return (
                `
                <div>
                    <a href="${currentLink}" class="ls_zjizndqwmda5mzu ${activeClass}">${number}</a>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.COUNT_ELEMENT = () => {
        try {

            var roundContent = HERE.METHOD.GET_COUNT_PAPER()
            const normal = THIS.CONFIG_DEFAULT().NORMAL
            const step = THIS.CONFIG_DEFAULT().PAPER.STEP_PAPER

            const props = HERE.PROPS.PROPERTIES

            var count_element = String()

            for (let i = normal.NUMBER_ONE; i <= roundContent; i++) {

                if (i < props.current - step) {
                    count_element = count_element + HERE.PAPER_ELEMENT({ number: i })
                }
                else if (i == props.current) {
                    count_element = count_element + HERE.PAPER_ELEMENT({ number: i, active: true })
                } else if (i <= props.current + step) {
                    count_element = count_element + HERE.PAPER_ELEMENT({ number: i })
                }
            }

            return count_element
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.ELEMENT = () => {
        try {
            var element = String()

            element = element + HERE.PREV_ELEMENT()
            element = element + HERE.COUNT_ELEMENT()
            element = element + HERE.NEXT_ELEMENT()

            return (
                `
                <div class="ls_adiznte4ody1mzg">
                    ${element}
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    return HERE
}

module.exports.LS_ZDIZMZGZNTIXMZC = LS_ZDIZMZGZNTIXMZC