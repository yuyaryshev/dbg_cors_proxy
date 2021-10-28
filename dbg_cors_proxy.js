// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8081;

var cors_proxy = require("yuyaryshev-cors-anywhere");
cors_proxy
    .createServer({
        originWhitelist: [], // Allow all origins
        //    requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: [
            "host",
            "sec-ch-ua",
            "sec-ch-ua-mobile",
            "User-Agent",
            "user-agent",
            "origin",
            "referer",
            "sec-Fetch-Site",
            "sec-Fetch-Mode",
            "sec-Fetch-Dest",
        ],
        //additionalHeaders: [{"X-Atlassian-Token": "nocheck"}, {"origin": "http://jira.moscow.alfaintra.net/"}],
        reqCallback: function reqCallback1(req) {
            //console.log(`req.headers=`,JSON.stringify(req.headers,undefined, "    "));
            const reqCopy = { ...req };
            const deletedProps = [];
            for (const k in reqCopy) {
                if (typeof reqCopy[k] === "symbol" || k.startsWith("_") || k.startsWith("corsAnywhere") || reqCopy[k]?.constructor?.name === "Socket" ) {
                    delete reqCopy[k];
                  deletedProps.push(k)
                }
            }

            console.log(`req=`, JSON.stringify(reqCopy, undefined, "    "));
        },
    })
    .listen(port, host, function () {
        console.log("Running CORS Anywhere on " + host + ":" + port);
    });

// POST /http://jira.moscow.alfaintra.net:80/rest/api/2/issue HTTP/1.1
// Host: localhost:8081
// Connection: keep-alive
// Content-Length: 166
// sec-ch-ua: "Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"
// accept: application/json
// authorization: Basic VV9NMTgzUjp6UWtETlU5Mg==
// sec-ch-ua-mobile: ?0
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
// content-type: application/json
// Origin: http://localhost:8080
// Sec-Fetch-Site: same-site
// Sec-Fetch-Mode: cors
// Sec-Fetch-Dest: empty
// Referer: http://localhost:8080/
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9,ru;q=0.8
