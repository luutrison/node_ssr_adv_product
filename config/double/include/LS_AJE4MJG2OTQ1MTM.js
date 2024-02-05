const LS_AJE4MJG2OTQ1MTM = () => {
    return {
        NAME: {
            CSS_NAME: "css",
            HEAD_NAME: "head",
            SCRIPT_NAME: "script",
            BODY_NAME: "body",
            STYLE_NAME: "style",
            LINK_NAME: "link",
        },
        CREATE_TAG: {
            HTML: ({ content }) => {
                return (
                    `
                    <html lang="vi" mode="normal">
                        ${content}
                    </html>
                    `
                )
            },
            HEAD: ({ content, options, seo }) => {

                const current_seo = seo ? seo : String()

                const props = {
                    title: options.title ? options.title : "Title",
                    favicon: options.favicon ? options.favicon : "/favicon.png"
                }

                return (
                    `
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>${props.title}</title>
                        <link rel="shortcut icon" href="${props.favicon}">
                        ${current_seo}
                        <section name="css">
                            ${content}
                        </section>
                    </head>
                    `
                )
            },
            BODY: ({ content, script }) => {

                const current_script = script ? script : String()

                return (
                    `
                    <body>
                        ${content}
                        <section name="script">${current_script}</section>
                        <section name="image" hidden></section>
                        <section name="overal" hidden></section>
                    </body>
                    `
                )
            }
        }
    }
}

module.exports.LS_AJE4MJG2OTQ1MTM = LS_AJE4MJG2OTQ1MTM