# dbg_cors_proxy

Personal proxy for debugging purposes: catches and dumps all requests going throuh it, also removes CORS.

# Usage

```bash
git clone https://github.com/yuyaryshev/dbg_cors_proxy.git
pnpm i

# start cors proxy
npm start -- -p 8081

# Another way to start cors proxy
npm run cors_proxy -- -p 8081

# Starts sniffer proxy (sniffer returns more data, than cors_proxy)
npm run sniffer -- -p 8081 -to https://google.com
```

This will start the proxy. Than substitute it as address into your app.

Add  `http://localhost:8081/` before each your address like this: `http://localhost:8081/https://google.com`.
