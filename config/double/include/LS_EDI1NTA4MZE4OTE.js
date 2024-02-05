const LS_EDI1NTA4MZE4OTE = () => {
    return {
        CREATE: {
            AFTER_GET: ({ class_name_main, class_name_content, content, css, script, font, number }) => {
                return (
                    `
                    <div class="${class_name_main}" number="${number}" place-after>
                        <div hidden place-name="content_ls_eji1ntc2njm1ntm">
                            <div place-name="content_ls_ddi1ndezotkzndu">${content}</div>
                            <div place-name="css_ls_ddi1ndezotkzndu">${css}</div>
                            <div place-name="font_ls_ddi1ndezotkzndu">${font}</div>
                            <div place-name="script_ls_ddi1ndezotkzndu">${script}</div>
                        </div>

                        <div class="${class_name_content}" place-name="content_ls_eji1nde1nza0ndq" hidden></div>
                    </div>
                    `
                )
            }
        },
        HTML: {
            REDUCE: ({content}) => {
                return String(content).replace(/<section>/g, "<div>").replace(/<\/section>/g, "</div>")
            }
        }
    }
}

module.exports.LS_EDI1NTA4MZE4OTE = LS_EDI1NTA4MZE4OTE