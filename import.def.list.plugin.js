async function definitionListPlugin() {
  return (await import("remark-definition-list")).default;
}
module.exports = definitionListPlugin;