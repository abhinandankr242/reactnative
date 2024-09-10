import axios from 'axios';

let baseURLUi = "http://localhost:8081/";
let baseURLAPI = "http://49.50.112.150:83/";

const VerifySession = async () => {
    return true
}

const callAxios = async (data: any) => {

    try {
        const verify = await VerifySession()
        if (verify === true) {
            let res = {};

            if (data.method === 'post') {
                res = await axios({
                    method: data.method,
                    url: `${baseURLAPI}${data.url}`,
                    responseType: data.responseType,
                    data: data.reqBody
                });
            }
            else if (data.method === 'get') {
                res = await axios({
                    method: data.method,
                    url: `${baseURLAPI}${data.url}`,
                    responseType: data.responseType,
                    data: data.reqBody
                });
            }
            return res;
        }
    } catch (error) {

    }
}

export {callAxios}