import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "James Butler",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Failing runs", "Endless joy ... ehm .. waiting"],
    // Which CI/CD tools do you use in your project?
    tools: "Azure Pipelines",
    // What do you want to learn in this workshop?
    expectations: ["what you are talking about"],
  },
});
