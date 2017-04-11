const tsConfig = require('./tsconfig.json');

module.exports = function(wallaby) {
  return {
    files: [
      { pattern: "src/**/_module.ts", instrument: false},
      { pattern: "src/inversify.config.ts", instrument: false},
      { pattern: "src/worker.ts", instrument: false},
      { pattern: "src/hub.ts", instrument: false},
      { pattern: "test/spec/**/*Helper.ts", instrument: false},
      "src/**/*.ts",
    ],
    tests: [
      "test/spec/**/*Spec.ts",
    ],
    compilers: {
      "**/*.ts": wallaby.compilers.typeScript(tsConfig.compilerOptions),
    },
    env: {
      type: 'node',
    },
    testFramework: 'jest'
  }
};
