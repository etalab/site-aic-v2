export default {
  id: "arrow-link",
  label: "Lien (flèche)",
  fields: [
    {
      name: "title",
      label: "Titre",
      widget: "string"
    },
    {
      name: "url",
      label: "URL",
      widget: "string"
    },
    {
      name: "target",
      label: "Afficher dans un nouvel onglet",
      widget: "boolean"
    }
  ],
  pattern: /{{< arrow-link url="([a-zA-Z0-9-_ ]+)" title="([a-zA-Z0-9-_ ]+)" target="([a-zA-Z0-9-_ ]+)" >}}/,
  fromBlock: function(match) {
    return {
      title: match[1],
      url: match[2],
      target: match[3],
    };
  },
  toBlock: function(obj) {
      return `{{< arrow-link url="${obj.url}" title="${obj.title}" target="${obj.target}" >}}`;
  },
  toPreview: function(obj) {
      return `<a href="${obj.url}" class="fr-link fr-fi-arrow-right-line fr-link--icon-right" target="${obj.target}">${obj.title}</a>`;
  },
}
