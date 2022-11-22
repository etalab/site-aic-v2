export default {
    id: "dailymotion",
    label: "Dailymotion",
    fields: [{
        name: "shortcode",
        label: "Dailymotion Video ID",
        widget: "string"
    }],
    pattern: /{{< dailymotion ([a-zA-Z0-9]+) >}}/,
    fromBlock: function (match) {
        return {
            shortcode: match[1]
        };
    },
    toBlock: function (obj) {
        return `{{< dailymotion ${obj.shortcode} >}}`;
    },
    toPreview: function (obj) {
        return `<div class="c-embed fr-mb-8v"><iframe frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${obj.shortcode}" width="100%" height="100%" allowfullscreen></iframe></div>`;
    },
}
