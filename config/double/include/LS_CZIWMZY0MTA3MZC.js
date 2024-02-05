
const LS_CZIWMZY0MTA3MZC = () => {
    return {
        STRING: {
            MAKEUP_NORMAL: ({ content }) => {
                if(content){
                    content = content.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                    content = content.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                    content = content.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                    content = content.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                    content = content.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                    content = content.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                    content = content.replace(/đ/g, "d");
                    content = content.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
                    content = content.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
                    content = content.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
                    content = content.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
                    content = content.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
                    content = content.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
                    content = content.replace(/Đ/g, "D");
                    content = content.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
                    content = content.replace(/\u02C6|\u0306|\u031B/g, "");
                    content = content.replace(/ + /g, " ");
                    content = content.trim();
                    content = content.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
                    content = content.replace(/ /g, "-")
                    return content;
                }
            }
        }
    }
}

module.exports.LS_CZIWMZY0MTA3MZC = LS_CZIWMZY0MTA3MZC