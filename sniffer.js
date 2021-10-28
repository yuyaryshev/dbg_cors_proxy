// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const cmdArgs = require("minimist")(process.argv.slice(2));
const port = cmdArgs["p"] || cmdArgs["port"] || process.env.PORT || 8081;
const to = cmdArgs["t"] || cmdArgs["to"];

const Sniffer = require("web-proxy-sniffer");

function startProxy() {
    const proxy = Sniffer.createServer({});

    proxy.intercept(
        {
            // Intercept before the request is sent
            phase: "request",
        },
        (request, response) => {
            console.log(JSON.stringify(request, undefined, "    "));
            if (to) {
                request.host = to;
            }
            setTimeout(startProxy, 300); // Its broken... so lets restart it!
            return request;
        },
    );

    proxy.listen(port);
}
startProxy() ;