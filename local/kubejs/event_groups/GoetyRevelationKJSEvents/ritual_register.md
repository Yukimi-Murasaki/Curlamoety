# GoetyRevelationKJSEvents.ritual_register

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: RitualRegisterKjsEvent (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getData | String |  | RitualData | ✘ |
| getExistData |  |  | Collection<RitualData> | ✘ |
| register | String, RitualData |  | void | ✘ |
| create | String, String, Collection<Requirement>, Collection<Requirement>, DimensionTypeRequirement, TimeRequirement, PositionRequirement |  | RitualData | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
GoetyRevelationKJSEvents.ritual_register((event) => {
	// This space (un)intentionally left blank
});
```

