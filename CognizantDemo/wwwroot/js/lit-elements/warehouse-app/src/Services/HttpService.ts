import { constants } from "../Store/Constants";

interface IresponseInfo {
    success: boolean,
    message: string,
}

interface IhttpResponse<R> {
    result: Promise<R>,
    responseInfo: IresponseInfo
}

type KeyValue = {
    [key: string]: any;
}


async function HttpPost<T, R>(requestModel: T, ApiEndpoint: string): Promise<IhttpResponse<R>> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    let responseInfo: IresponseInfo = {
        success: false,
        message: 'The Process Ended Successfully',
    }

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'post',
            data: JSON.stringify(requestModel),
            contentType: "application/json",
        });

        responseInfo.success = true;

    } catch (error: any) {
        console.log({ ApiEndpoint, error });
        responseInfo.message = error?.responseJSON?.internalMessage;
    }

    return { result, responseInfo };
}

async function HttpGet<R>(ApiEndpoint: string): Promise<IhttpResponse<R>> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    let responseInfo: IresponseInfo = {
        success: false,
        message: 'The Process Ended Successfully',
    }

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'get',
            contentType: "application/json",
        });

        responseInfo.success = true;
    } catch (error: any) {
        console.log({ ApiEndpoint, error });
        responseInfo.message = error?.responseJSON?.internalMessage;
    }

    return { result, responseInfo };
}

async function HttpGetWithQueryParams<R>(paramsObject: KeyValue, ApiEndpoint: string): Promise<IhttpResponse<R>> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    let responseInfo: IresponseInfo = {
        success: false,
        message: 'The Process Ended Successfully',
    };

    let queryparams = () => {
        let queryparamString = '';

        let keysofParams = Object.keys(paramsObject);

        for (let i = 0; i < keysofParams.length; i++) {
            let key = keysofParams[i];
            let value = paramsObject[key];
            if (i == 0) {
                queryparamString += '?' + key + '=' + value;
            } else {
                queryparamString += '&' + key + '=' + value;
            }
        }

        return queryparamString;
    };

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint + queryparams(),
            method: 'get',
            contentType: "application/json",
        });

        responseInfo.success = true;
    } catch (error: any) {
        console.log({ ApiEndpoint, error });
        responseInfo.message = error?.responseJSON?.internalMessage;
    }

    return { result, responseInfo };
}

export { HttpPost, HttpGet, HttpGetWithQueryParams };