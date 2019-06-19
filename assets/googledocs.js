/**
 * @file A simple script to parse Google Docs file
 * @copyright Darko Lukic 2019
 */

function _request(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

function _parseProjects(response, userOptions) {
    let options = Object.assign({
        htmlFields: [],
    }, userOptions);
    let parser = new DOMParser();
    let htmlDocument = parser.parseFromString(response, 'text/html');
    let projects = [];
    
    for (child of htmlDocument.body.childNodes) {
        switch (child.tagName) {
            case 'H1':
            case 'H2':
            projects.push({title: child.innerText, content: ''});
                break;
            case 'P':
                let parameter = [...child.innerText.matchAll(/^([A-Z|a-z]{1}[A-Z|a-z|0-9]{3,10}):\s(.*)$/g)];

                if (parameter.length === 1 && parameter[0].length === 3) {
                    // Add key/value pair
                    let paramKey = parameter[0][1].toLowerCase();
                    let paramValue = '';
                    if (options.htmlFields.indexOf(paramKey) >= 0) {
                        let htmlParamSplited = child.innerHTML.split(': ');
                        let htmlParamDocument = parser.parseFromString(htmlParamSplited[1], 'text/html');
                        paramValue = htmlParamDocument.body.innerHTML;
                    } else {
                        paramValue = parameter[0][2];
                    }
                    projects[projects.length - 1][paramKey] = paramValue;
                } else {
                    // Add content
                    if (options.htmlFields.indexOf('content') >= 0) {
                        // Alternate link
                        for (let a of child.getElementsByTagName('a')) {
                            let href = [ ...a.getAttribute('href').matchAll(/\?q=([^&]+)/g) ];
                            if (href.length > 0) {
                                a.setAttribute('href', href[0][1]);
                            }
                            a.setAttribute('target', '_blank');
                        }

                        // Alternate images
                        if (child.querySelector('img')) {
                            let span = child.getElementsByTagName('span')[0];
                            span.style = {};
                            span.style.float = 'left';
                            span.style.margin = '8px';
                        }

                        projects[projects.length - 1].content += `<p>${child.innerHTML}</p>`;
                    } else if (child.innerText.replace(/\s/g, '').length > 0) {
                        projects[projects.length - 1].content += `<p>${child.textContent}</p>`;
                    }
                }
                break;
            default:
                console.warn(`Not processed ${ child.tagName }`);
                break;
        }
    }
    return projects;
}

function getArticles(url, options) {
    return _request(url)
        .then((response) => _parseProjects(response, options))
        .catch((error) => { console.error(`Cannot make request to Google Docs, error code ${error}`) });
}
