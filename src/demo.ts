function handleRequest(url: string, method: "GET" | "POST") {
    // do...
}

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// Error : Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// 1
const req = { url: "https://example.com", method: "GET" as "GET" };

// 2 
handleRequest(req.url, req.method as "GET");

// 3 
const req = { url: "https://example.com", method: "GET" } as const
