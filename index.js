var fetch = require('node-fetch');

class FluentLogHelper {
    constructor(config) {
        let {host, port, tag_prefix} = config
        this.config = {
            host, port, tag_prefix
        }



    }
    async log(content, label) {
        let params = {};
        try {
            if (!label) label = "log";
            
            let {host, port, tag_prefix} = this.config;
            if (typeof content === 'string' || content instanceof String) {
                params.content = content;
            } else params = content;
            let protocol = "http";
            if (port == 443) protocol = "https";
            let url = `${protocol}://${host}:${port}/${tag_prefix}.${label}`;

            await fetch(url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            });
            
        } catch (error) {
            console.error("error send log to Fluentd server", error.message);
            if (console[label] != null) console[label](params);
            else console.log(params);
        }

    }



}

module.exports = FluentLogHelper;