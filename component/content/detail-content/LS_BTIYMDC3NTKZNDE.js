const { THIS } = require("../../../method/LS_ZZE4NDI2MZIWNTQ")
const { MONGODB } = require("../../../mongoDB/MONGODB")
const { LS_ETIYMDI2OTQ4ODY } = require("./LS_ETIYMDI2OTQ4ODY")

const LS_BTIYMDC3NTKZNDE = ({ id }) => {
    var HERE = {}

    HERE.PROPERTIES = {
        COLLECTION: () => {
            return THIS.CONFIG_PROPERTIES().MONGODB.COLLECTION
        },
        AUTHOR: () => {
            return HERE.PROPERTIES.COLLECTION().AUTHOR.PROPERTIES
        },
        CONTENT_DETAIL: () => {
            return HERE.PROPERTIES.COLLECTION().CONTENT_DETAIL.PROPERTIES
        },
        CONTENT_INFO: () => {
            return HERE.PROPERTIES.COLLECTION().CONTENT_INFO.PROPERTIES
        }
    }

    HERE.PROPS = {
        properties: {
            id: id
        }
    }

    HERE.INFO_AUTHOR = ({ authorInfo }) => {
        try {

            const label = authorInfo[HERE.PROPERTIES.AUTHOR().LABEL]
            const name = authorInfo[HERE.PROPERTIES.AUTHOR().NAME]
            const image = authorInfo[HERE.PROPERTIES.AUTHOR().IMAGE_URL]

            const link_author = THIS.METHOD.PATH.CREATE_LINK({
                content: label,
                detect: THIS.CONFIG_PROPERTIES().PATH.DETECT.AUTHOR,
                id: MONGODB().METHOD.OBJECT_TO_ID({ objectId: authorInfo[HERE.PROPERTIES.AUTHOR().ID] })
            })

            return (
                `
                <div class="ls_dziymtazmjc0mdg">
                    <a class="ls_zjiymty0mzawmtu" href="${link_author}">
                        <div class="ls_dziymty0otcznzy">
                            <img class="ls_aje4njk3ndqwmzu" no-src="${image}" />
                        </div>
                        <div class="ls_yjiymtazmzc5njc">
                            <div class="ls_zdiymtazndmxmdu">
                                <span>
                                    ${name}
                                </span>
                            </div>
                            <div class="ls_zdiymtazndmxmdu">
                                <span class="ls_atiymtm5mdkxode">(${label})</span>
                            </div>
                        </div>
                    </a>

                    <div class="ls_etiymtazntcxmzc">

                        <button class="ls_atiymtaznzi3ntq">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z" fill="currentColor"></path></svg>
                        </button>
                        <button class="ls_zjiymta0mdi0mdg">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM7.10052 10V12H15.1005V10L7.10052 10Z" fill="currentColor"></path></svg>
                        </button>

                        <button class="ls_atiymta0mtezotm">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"></path><circle cx="18" cy="11.5" r="1"></circle></svg>
                        </button>
                        <button class="ls_zdiymta0mtk3odq">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z"></path></svg>
                        </button>

                        <button class="ls_atiymtaznzi3ntq">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                        </button>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.CONTENT_DETAIL = ({ contentInfo, contentDetail }) => {
        try {
            const content_info = HERE.PROPERTIES.CONTENT_INFO()
            const content_detail = HERE.PROPERTIES.CONTENT_DETAIL()

            const title = contentInfo[content_info.TITLE]
            const short = contentInfo[content_info.SHORT]
           
            const dateCreate = contentDetail[content_detail.DATE_CREATE]
            const introImage = contentInfo[content_info.INTRO_IMAGE_URL]

            const content = THIS.HTML.CREATE_AFTER_GET({
                content: contentDetail[content_detail.CONTENT]
            })

            return (
                `
                <div class="ls_bti1otu5ndi3mju">
                    <div class="ls_cdi1otu2otawmjc">
                        <div class="ls_cjiynzi2njuymzg">
                            <img class="ls_edixmduwmzu3nja" no-src="${introImage}"></img>
                        </div>

                        <h1>${title}</h1>
                        <p class="ls_dtiynze1otc3mdk">${short}</p>

                        <div>${content}</div>
                    </div>
                </div>
                `
            )
        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }

    HERE.ELEMENT = () => {

        return new Promise((_success, _error) => {
            try {
                const props = HERE.PROPS.properties

                LS_ETIYMDI2OTQ4ODY({ id: props.id }).GET_DETAIL_CONTENT().then(info => {
                    try {
                        const placer = HERE.INFO_AUTHOR({ authorInfo: info.author })

                        const contener = HERE.CONTENT_DETAIL({ contentDetail: info.content_detail, contentInfo: info.content_info })

                        const infomer = {
                            content: contener,
                            place: placer
                        }
                        _success(infomer)
                    } catch (error) {
                        _error(error)
                    }

                }).catch(error => {
                    _error(error)

                })
            } catch (error) {
                _error(error)
            }
        })
    }
    return HERE
}

module.exports.LS_BTIYMDC3NTKZNDE = LS_BTIYMDC3NTKZNDE
