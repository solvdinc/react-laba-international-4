class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

// decorator
function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };
  return server;
}

// decorator
function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s1 = aws(new Server('12.32.33.9', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server('2.1.1.10', 1000));
console.log(s2.isAzure);
console.log(s2.url);
