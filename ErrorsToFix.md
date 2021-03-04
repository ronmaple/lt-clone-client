# Errors to fix

```
path/linktree-mock/client/run.js:22
bundler.plugin('done', function (stats) {
        ^

TypeError: bundler.plugin is not a function
    at Object.<anonymous> (/Users/ronmapue/Desktop/gh-projects-2020/linktree-mock/client/run.js:22:9)
    at Module._compile (internal/modules/cjs/loader.js:959:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
    at Module.load (internal/modules/cjs/loader.js:815:32)
    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)
    at internal/main/run_main_module.js:17:11
```

- Likely stems from webpack 4 to 5 differences. Browser sync requires the specific execution, but it is likely from outdated webpack.
- This will likely work on webpack 4 (seen it before). TODO look for equivalent in webpack 5
- https://github.com/BrowserSync/recipes/blob/master/recipes/webpack.babel/package.json
