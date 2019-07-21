module.exports = {
  "defaultSeverity": "error",
  "allowSyntheticDefaultImports": true,
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "jsRules": {},
  "rules": {
    "quotemark": [true, "single"],
    "object-literal-sort-keys": [false],
    "interface-name": [true, "never-prefix"],
    "trailing-comma": [true, { "esSpecCompliant": true }],
    "semicolon": [true, "always", "ignore-bound-class-methods"],
    "member-ordering": [false],
    "member-access": [false],
    "object-literal-key-quotes": [false],
    "max-line-length": [
      true,
      {
        "limit": 80,
        "ignore-pattern": "// |^import |^export |\"(.*?)\"|`(.*?)`"
      }
    ]
  },
  "rulesDirectory": []
}
