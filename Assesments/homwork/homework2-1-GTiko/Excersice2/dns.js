var dns = require("dns");
dns.lookup("www.miu.edu", function (err, addresses) {
  console.log(addresses);
});
