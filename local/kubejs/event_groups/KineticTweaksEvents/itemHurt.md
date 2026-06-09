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
| cancel |  |  | Object | ✘ |
| getItem |  |  | ItemStack | ✘ |
| getEntity |  |  | ItemEntity | ✘ |
| getZ |  |  | double | ✘ |
| getX |  |  | double | ✘ |
| getY |  |  | double | ✘ |
| isFire |  |  | boolean | ✘ |
| getLevel |  |  | Level | ✘ |
| getAmount |  |  | float | ✘ |
| getSourceEntity |  |  | Entity | ✘ |
| getDamageMsgId |  |  | String | ✘ |
| getDirectEntity |  |  | Entity | ✘ |
| getDamageType |  |  | String | ✘ |
| isDirectEntity | String |  | boolean | ✘ |
| isDamageType | String |  | boolean | ✘ |
| isSourceEntity | String |  | boolean | ✘ |
| getDamageSource |  |  | DamageSource | ✘ |
| getSourceEntityType |  |  | String | ✘ |
| getDirectEntityType |  |  | String | ✘ |
| isDirectEntityFromMod | String |  | boolean | ✘ |
| isSourceEntityFromMod | String |  | boolean | ✘ |
| isExplosion |  |  | boolean | ✘ |
| isCactus |  |  | boolean | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

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



### Example script:

```js
KineticTweaksEvents.itemHurt((event) => {
	// This space (un)intentionally left blank
});
```

