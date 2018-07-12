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

test('set log object to fluentd server with tag: "info"', () => {
  let action = "test";
  let user = 12345;
  fluentLogHelper.log({action, user}, "info");

}, 50000);


test('set log object to fluentd wrong port', () => {
  let constructorParams = {
    host, port: "12345", tag_prefix
  }

  let testFluentLogHelper = new FluentLogHelper(constructorParams);
  testFluentLogHelper.log("test error", "info");


}, 50000);