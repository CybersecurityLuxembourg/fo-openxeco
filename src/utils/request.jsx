export async function getRequest(url, callback, catchBadResponse, catchError) {
	fetch(url, {
		method: "GET",
		headers: new Headers({
			Accept: "application/json, text/html",
			pragma: "no-cache",
			"cache-control": "no-cache",
		}),
		credentials: "include",
	}).then((response) => {
		if (response.status === 200) {
			return response.json();
		}
		if (response.status === 403) {
			window.location.replace("/?status=expiredSession");
		}
		if (catchBadResponse !== null) {
			catchBadResponse(response);
			throw new Error(null);
		}
		throw new Error("An error happened while requesting the server");
	}).then((jsonBody) => {
		if (typeof jsonBody !== "undefined") callback(jsonBody);
	}).catch((error) => {
		if (error.message !== "null") {
			catchError(error);
		}
	});
}

export async function getBlobRequest(url, callback, catchBadResponse, catchError) {
	fetch(url, {
		method: "GET",
		headers: new Headers({
			Accept: "application/json, text/html",
			pragma: "no-cache",
			"cache-control": "no-cache",
		}),
		credentials: "include",
	}).then((response) => {
		if (response.status === 200) {
			return response.blob();
		}
		if (response.status === 403) {
			window.location.replace("/?status=expiredSession");
		}
		if (catchBadResponse !== null) {
			catchBadResponse(response);
			throw new Error(null);
		}
		throw new Error("An error happened while requesting the server");
	}).then((blob) => {
		if (typeof blob !== "undefined") callback(blob);
	}).catch((error) => {
		if (error.message !== "null") {
			catchError(error);
		}
	});
}

export async function postRequest(url, params, callback, catchBadResponse, catchError) {
	fetch(url, {
		method: "POST",
		body: JSON.stringify(params),
		headers: new Headers({
			Accept: "application/json, text/html",
			"Content-Type": "application/json",
		}),
		credentials: "include",
	}).then((response) => {
		if (response.status === 200) {
			return response.json();
		}
		if (response.status === 403) {
			window.location.replace("/?status=expiredSession");
		}
		if (catchBadResponse !== null) {
			catchBadResponse(response);
			throw new Error(null);
		}
		throw new Error("An error happened while requesting the server");
	}).then((jsonBody) => {
		if (typeof jsonBody !== "undefined") callback(jsonBody);
	}).catch((error) => {
		if (error.message !== "null") {
			catchError(error);
		}
	});
}
