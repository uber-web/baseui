# Visual testing

We use `jest-image-snapshot` for a simple suite of visual regression tests (VRT). Note, that the current system is a work in progress and may change in the future.

## Set up

The suite will pick up and run any test file with the `*.vrt.js` extension. By default we turn every storybook scenario file into a single snapshot test. To add a new test, simply create a new `.scenario.js` file in the `__tests__` directory of a component.

> Note, a temporary requirement is that the export `name` and file name of the scenario are identical.

You can configure each scenario by adding a property matching the scenario name to the vrt config object in `vrt/config.js`.

```js
// vrt/config.js
module.exports = {
  'modal': {
    // configuration for `modal` scenario
  }
}
```

The possible properties are:

1. `skip`: Skip this scenario. Default is `false`.
2. `selector`: A selector to target for the snapshot image. Default is `null`. Takes precedence over `fullPage`
3. `fullPage`: If `true`, takes a picture of entire page. Useful for tests with absolutely positioned elements. Default is `false`.
4. `interactions`: An array of interaction configuration objects. Default is `[]`.

The first three properties are pretty simple, but let's look at the last one, `interactions`. What does an interaction configuration look like?

```js
// vrt/config.js
module.exports = {
  // ...
  'input-password': {
    interactions: [
      {
        name: 'togglesMask',
        behavior: async page => {
          const toggleSelector = `[data-e2e="mask-toggle"]`;
          await page.$(toggleSelector);
          await page.click(toggleSelector);
        },
      },
    ],
  },
}
```

In this example we are adding interactions via the `interactions` property to the  `input-password` scenario. In the specified behavior we click the password input's toggle mask button to verify that the text properly unmasks.

The interactions array can consist of multiple interaction configuration objects. Each object corresponds to a single new snapshot test (in addition to default snapshot). The snapshot in the above example is saved in our snapshot directory as `input-password__togglesMask.png`.

The interaction configuration object require two properties:

1. A `name`, which will be appended to the snapshot file name for identification.
2. A `behavior`, which is an async function that is passed `page`, a Puppeteer Page instance. Use `page` to arrange the scenario however you like. The actual snapshot will be generated after this `behavior` function resolves.

By default, the interaction will inherit `selector` and `fullPage` properties from the main scenario configuration object, but you can overrwrite them explicitly in each interaction configuration.

```js
// vrt/config.js
module.exports = {
  // ...
  'input-password': {
    fullPage: true,
    interactions: [
      {
        name: 'togglesMask',
        selector: 'input',
        behavior: async page => {
          const toggleSelector = `[data-e2e="mask-toggle"]`;
          await page.$(toggleSelector);
          await page.click(toggleSelector);
        },
      },
    ],
  },
}
```

In this contrived example we take a full page screenshot of the main scenario, but only take a screenshot of the element that resovles from the `input` selector.

## Docker

The visual regression tests are run within a Docker container so you will have inconsistent results with our saved snapshots if you do not run the tests in Docker.

To run the tests locally you can use `docker-compose`:

To prepare the visual tests:
```
$ docker-compose down    # ensure prior services are not running
$ docker-compose build   # required after any change to source
```

The first run of `docker-compose build` may take a little while. Subsequent runs should go faster.

To run the visual tests:
```
$ docker-compose run e2e-test bash -c "yarn add puppeteer && yarn vrt"
```

To update the visual test snapshots:
```
$ docker-compose run e2e-test bash -c "yarn add puppeteer && yarn vrt -u"
```

Note, you can still run the test suite locally for debugging purposes with `yarn vrt`, but the official snapshots must be generated and updated with Docker. CI will not pass otherwise.

## CI

If there are any visual regression diffs detected in the `vrt` job, they will be uploaded as artifacts to the build step in Buildkite. Simply follow the link to the failed job, then click the `Artifacts` tab on that job. There should be a list of images that display the offending diffs.

You can then either fix the regressions or update the snapshots locally (see Docker section above).
