# CuriosJSEvents.attributeModifier

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: CurioAttributeModifier (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| stack | ItemStack | ✘ |
| slotContext | SlotContext | ✘ |
| uuid | UUID | ✘ |
| originalModifiers | Multimap<Attribute, AttributeModifier> | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getModifiers |  |  | Multimap<Attribute, AttributeModifier> | ✘ |
| getEntity |  |  | Entity | ✘ |
| removeAttribute | Attribute |  | Collection<AttributeModifier> | ✘ |
| clearModifiers |  |  | void | ✘ |
| removeModifier | Attribute, AttributeModifier |  | boolean | ✘ |
| addModifier | Attribute, AttributeModifier |  | boolean | ✘ |
| getLevel |  |  | Level | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


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

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
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
CuriosJSEvents.attributeModifier((event) => {
	// This space (un)intentionally left blank
});
```

