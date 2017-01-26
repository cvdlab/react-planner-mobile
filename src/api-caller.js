import 'whatwg-fetch';

export function callAPI(uri, method, sessionToken, params) {

    let requestObject = {
        method,
    };

    if (method !== 'GET' && method !== 'HEAD') {
        if (params instanceof FormData) {
            requestObject.body = params;
        } else {
            requestObject.headers = {
                'Content-Type': 'application/json'
            };
            requestObject.body = JSON.stringify(params);
        }
    }

    if (sessionToken) {
        // Add the token to the request
        uri += `?access_token=${sessionToken}`;
    }

    return fetch(uri, requestObject).then(fetchResponse => {
        if ((fetchResponse.status === 204) && fetchResponse.ok) {
            return Promise.resolve({message: "Operazione eseguita correttamente", statusCode: 200});
        }
        if ((fetchResponse.status === 200) && fetchResponse.ok) {
            /*if (uri.indexOf('download-file') !== -1) {
                return fetchResponse.blob(;
            }*/
            return fetchResponse.json();
        }
        return new Promise((resolve, reject) => {
            fetchResponse.json().then(data => {
                console.error("Errore nell'elaborazione della richiesta");
                console.log(data.error);
                alert(`Errore nell'elaborazione della richiesta:\n${data.error.message}`);
                reject(data.error);
            });
        });
    }, error => {
        console.error(error);
        alert(`Impossibile contattare il server`);
        return Promise.reject({name: "Error", message: "Impossibile contattare il server", statusCode: 500});
    });
}

/***********************************/
/************ ACCOUNTS *************/
/***********************************/

export function userLoginAPI(email, password, coreUrl) {

    let params = {
        "email": email,
        "password": password
    };

    return new Promise((resolve, reject) => {
        return callAPI(`${coreUrl}/accounts/login?include=["user"]`, 'POST', undefined, params).then(sessionResponse => {
            console.log(sessionResponse);
            callAPI(`${coreUrl}/accounts/getRolesById/${sessionResponse.userId}/`, 'GET', sessionResponse.id).then(rolesResponse => {
                sessionResponse.user.roles = rolesResponse;
                resolve(sessionResponse);
            });
        });
    });
}


/***********************************/
/************ PROJECTS *************/
/***********************************/

//elenco progetti
export function getProjectsAPI(userID, sessionToken, coreUrl) {
    return callAPI(`${coreUrl}/accounts/${userID}/projects/`, 'GET', sessionToken, {});
}

//elenco planimetrie
export function getProjectAPI(projectID, userID, sessionToken, coreUrl) {
    return new Promise((resolve, reject) => {
        callAPI(`${coreUrl}/accounts/${userID}/projects/${projectID}`, 'GET', sessionToken).then(projectResponse => {
            callAPI(`${coreUrl}/accounts/${userID}/projects/${projectID}/files`, 'GET', sessionToken).then(projectFiles => {
                projectResponse.files = projectFiles;
                resolve(projectResponse);
            });
        })
    });
}

export function getFileDataAPI(projectID, fileID, userID, sessionToken, coreUrl) {

    return callAPI(`${coreUrl}/accounts/${userID}/download-file/projects/${projectID}/file/${fileID}`, 'GET', sessionToken, {});

}


/********************* DONE *********************/

/***********************************/
/************** FILES **************/
/***********************************/


/*export function updateFileDataAPI(projectID, fileID, data, session, coreUrl) {

    let params = [
        {
            project: projectID
        },
        {
            file: fileID
        },
        {
            data: data
        }
    ];

    return callAPI(`${coreUrl}/files/update`, 'PUT', session, params);
}*/



