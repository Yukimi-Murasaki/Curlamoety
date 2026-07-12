# KineticTweaksEvents.itemSpawn

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
| getLevel |  |  | Level | ✘ |
| getY |  |  | double | ✘ |
| getAmount |  |  | float | ✘ |
| getEntity |  |  | ItemEntity | ✘ |
| getX |  |  | double | ✘ |
| getZ |  |  | double | ✘ |
| isCactus |  |  | boolean | ✘ |
| isExplosion |  |  | boolean | ✘ |
| isDirectEntity | String |  | boolean | ✘ |
| isDamageType | String |  | boolean | ✘ |
| getDirectEntity |  |  | Entity | ✘ |
| getDamageType |  |  | String | ✘ |
| getSourceEntity |  |  | Entity | ✘ |
| getDamageMsgId |  |  | String | ✘ |
| isSourceEntity | String |  | boolean | ✘ |
| getDamageSource |  |  | DamageSource | ✘ |
| isFire |  |  | boolean | ✘ |
| isDirectEntityFromMod | String |  | boolean | ✘ |
| getDirectEntityType |  |  | String | ✘ |
| getSourceEntityType |  |  | String | ✘ |
| isSourceEntityFromMod | String |  | boolean | ✘ |
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
KineticTweaksEvents.itemSpawn((event) => {
	// This space (un)intentionally left blank
});
```

