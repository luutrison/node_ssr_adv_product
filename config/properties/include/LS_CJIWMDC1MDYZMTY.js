const LS_CJIWMDC1MDYZMTY = () => {
    return {
        NAME: {
            PROCESS_NAME: "MONGODB_LS_YTIWMDC1MZY1MTC",
            DB_BLOGER: "CONG-DONG"
        },
        COLLECTION: {
            AUTHOR: {
                NAME: "AUTHOR",
                PROPERTIES: {
                    ID: "_id",
                    IMAGE_URL: "imageUrl",
                    LABEL: "label",
                    NAME: "name",
                    DATE_CREATE: "dateCreate"
                }
            },
            CONTENT_DETAIL: {
                NAME: "CONTENT_DETAIL",
                PROPERTIES: {
                    ID: "_id",
                    CONTENT: "content",
                    DATE_CREATE: "dateCreate",
                    AUTHOR_ID: "authorId"
                }
            },
            CONTENT_INFO: {
                NAME: "CONTENT_INFO",
                PROPERTIES: {
                    ID: "_id",
                    AUTHOR_ID: "authorId",
                    BOOK_ID: "bookId",
                    CONTENT_ID: "contentId",
                    DATE_CREATE: "dateCreate",
                    HOT: "hot",
                    IMAGE_URL: "imageUrl",
                    SHORT: "short",
                    CATEGORY: "category",
                    TITLE: "title",
                    INTRO_IMAGE_URL: "introImageUrl"
                }
            },
            BOOK: {
                NAME: "BOOK",
                PROPERTIES: {
                    ID: "_id",
                    AUTHOR_ID: "authorId",
                    NAME: "name",
                    DATE_CREATE: "dateCreate",
                }
            },
            CATEGORY: {
                NAME: "CATEGORY",
                PROPERTIES: {
                    ID: "_id",
                    BACKGROUND_COLOR: "backgroundColor",
                    INSIDE_COLOR: "insideColor",
                    NAME: "name",
                    DATE_CREATE: "dateCreate"
                }
            },
            INTRODUCE: {
                NAME: "INTRODUCE",
                PROPERTIES: {
                    ID: "_id",
                    CONTENT: "content",
                    CSS_URL: "cssUrl",
                    SCRIPT_URL: "scriptUrl",
                    IS_SELECT: "isSelect",
                    CATEGORY_ID: "categoryId",
                    FONTS: "fonts"
                }
            },
            INTRODUCE_DETAIL: {
                NAME: "INTRODUCE_DETAIL",
                PROPERTIES: {
                    ID: "_id",
                    NAME: "name",
                    IS_DISPLAY: "isDisplay",
                    NUMBER: "number"
                }
            },
            DUMPART: {
                NAME: "DUMPART",
                PROPERTIES: {
                    ID: "_id",
                    NAME: "name",
                    SHOW_HEADER: "showHeader",
                    SHOW_FOOTER: "showFooter",
                    HIDE_NAME: "hideName"
                }
            },
            DUMPART_DETAIL: {
                NAME: "DUMPART_DETAIL",
                PROPERTIES: {
                    ID: "_id",
                    NAME: "name",
                    DISPLAY: "display",
                    URL: "url",
                    DUMPART_ID: "dumpartId"
                }
            },
            OTHER_INFO: {
                NAME: "OTHER_INFO",
                PROPERTIES: {
                    ID: "_id",
                    LABEL: "label",
                    CONTENT: "content"
                }
            }
        },
        OTHER: {
            NAME: {
                ADDRESS: "address",
                SOCIAL: "social",
                MAP: "map",
                HEADER_CATEGORY: "header_category"
            }
        }
    }
}

module.exports.LS_CJIWMDC1MDYZMTY = LS_CJIWMDC1MDYZMTY