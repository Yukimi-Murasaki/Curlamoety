# GoetyEvents.modifyRitual

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: ModifyRitualEventJS (third-party)

```
用于修改现有仪式类型的条件```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| modify | String, Consumer<RitualModifierImpl>[] |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `void modify(String ritualId, Consumer<RitualModifierImpl>[] modifiers)`

  Parameters:
  - ritualId: String- 要修改的仪式 ID（字符串）
  - modifiers: Consumer<RitualModifierImpl>[]- 修改器函数（可变参数），多个函数表示多个条件组（OR 逻辑）

```
修改现有仪式类型的条件
```

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
GoetyEvents.modifyRitual((event) => {
	// This space (un)intentionally left blank
});
```

