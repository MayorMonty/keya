import * as keya from "../../src/browser/main";

(async function () {
  const store = await keya.store<Date>("dates");

  // Set the processing functions (for when using non-object datatypes)
  store.hydrate = (string) => new Date(Number.parseInt(string));
  store.stringify = (date) => date.getTime().toString();

  // Set data
  console.log("set");
  await store.set("time", new Date());

  // All
  console.log("all");
  const all = await store.all();
  console.log(all);

  // Get
  console.log("get");
  const value = await store.get("time");
  console.log(value);

  // Delete
  console.log("delete");
  store.delete("time").then(console.log);
})();
