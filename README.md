# fluent-log-helper

sample

```
let fluentLogHelper = new FluentLogHelper({
    host: "localhost",
    port: "24224",
    tag_prefix: "fluent-log-helper"
});

// for string
// without define tag name, default is: "log"
fluentLogHelper.log("test string log");

// for object
// without define tag name, default is: "log"
let action = "test";
let user = 12345;
fluentLogHelper.log({action, user});

// specific tag name: "info"
fluentLogHelper.log({action, user}, "info");

```

npm install


```
npm install trunk-studio/fluent-log-helper
```

## License

MIT
