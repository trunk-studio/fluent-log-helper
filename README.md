# fluent-log-helper

sample

```
let {host, port, tag_prefix} = config




let fluentLogHelper = new FluentLogHelper({
    host: "localhost",
    port: "24224",
    tag_prefix: "fluent-log-helper"
});

// for string
fluentLogHelper.log("test string log");

// for object
let action = "test";
let user = 12345;
fluentLogHelper.log({action, user});

```

npm install


```
npm install trunk-studio/fluent-log-helper
```

## License

MIT
