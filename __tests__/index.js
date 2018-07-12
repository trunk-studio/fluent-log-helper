const FluentLogHelper = require('./../index')
const config = require('config');


let {host, port, tag_prefix} = config



let constructorParams = {
  host, port, tag_prefix
}

let fluentLogHelper = new FluentLogHelper(constructorParams);

test('set log string to fluentd server', () => {
  
  fluentLogHelper.log("test string log");

}, 50000);
  
test('set log object to fluentd server', () => {
  let action = "test";
  let user = 12345;
  fluentLogHelper.log({action, user});

}, 50000);
