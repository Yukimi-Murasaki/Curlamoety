# KineticTweaksEvents.itemHurt

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: ItemEntityDamageEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getItem |  |  | ItemStack | ✘ |
| getEntity |  |  | ItemEntity | ✘ |
| getX |  |  | double | ✘ |
| getDamageSource |  |  | DamageSource | ✘ |
| getAmount |  |  | float | ✘ |
| getLevel |  |  | Level | ✘ |
| getY |  |  | double | ✘ |
| getZ |  |  | double | ✘ |
| isFire |  |  | boolean | ✘ |
| isCactus |  |  | boolean | ✘ |
| isExplosion |  |  | boolean | ✘ |
| getDamageType |  |  | String | ✘ |
| getDamageMsgId |  |  | String | ✘ |
| getDirectEntity |  |  | Entity | ✘ |
| isDamageType | String |  | boolean | ✘ |
| getSourceEntity |  |  | Entity | ✘ |
| isDirectEntity | String |  | boolean | ✘ |
| isSourceEntity | String |  | boolean | ✘ |
| getSourceEntityType |  |  | String | ✘ |
| isDirectEntityFromMod | String |  | boolean | ✘ |
| getDirectEntityType |  |  | String | ✘ |
| isSourceEntityFromMod | String |  | boolean | ✘ |
| cancel |  |  | Object | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
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

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
KineticTweaksEvents.itemHurt((event) => {
	// This space (un)intentionally left blank
});
```

