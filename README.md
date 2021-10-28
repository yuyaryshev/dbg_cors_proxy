# dbg_cors_proxy

Personal proxy for debugging purposes: catches and dumps all requests going throuh it, also removes CORS.

# Usage

```bash
git clone https://github.com/yuyaryshev/dbg_cors_proxy.git
pnpm i
npm start -- -p 8081
```

This will start the proxy. Than substitute it as address into your app.

Add  `http://localhost:8081/` before each your address like this: `http://localhost:8081/https://google.com`.
