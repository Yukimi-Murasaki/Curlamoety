# KeyBindEvents.modify

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: KeyBindModifyEvent (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| remove | KeyMapping |  | void | ✘ |
| join | KeyMapping |  | void | ✘ |
| addListener | String, KeyMapping |  | void | ✘ |
| modifyCategory | KeyMapping, String |  | void | ✘ |
| modifyModifier | KeyMapping, KeyModifier |  | void | ✘ |
| addHideKey | KeyMapping |  | void | ✘ |
| modifyKey | KeyMapping, int |  | void | ✘ |
| registerEntityRenderer | EntityType<?>, EntityRendererProvider |  | void | ✘ |
| registerBlockEntityRenderer | BlockEntityType<?>, BlockEntityRendererProvider |  | void | ✘ |
| registerMenuScreen | MenuType<?>, ScreenFactory |  | void | ✘ |
| getEntity |  |  | Entity | ✘ |
| getPlayer |  |  | LocalPlayer | ✘ |
| removeGameStage | String |  | void | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `void remove(KeyMapping var0)`

  Parameters:
  - var0: KeyMapping

```
移除按键绑定
```

- `void join(KeyMapping var0)`

  Parameters:
  - var0: KeyMapping

```
将按键绑定加入配置屏幕
```

- `void addListener(String var0, KeyMapping var1)`

  Parameters:
  - var0: String
  - var1: KeyMapping

```
给已有按键添加customName用于监听
```

- `void modifyCategory(KeyMapping var0, String var1)`

  Parameters:
  - var0: KeyMapping
  - var1: String

```
修改按键的分组
```

- `void modifyModifier(KeyMapping var0, KeyModifier var1)`

  Parameters:
  - var0: KeyMapping
  - var1: KeyModifier

```
修改按键的默认修饰键
```

- `void addHideKey(KeyMapping var0)`

  Parameters:
  - var0: KeyMapping

```
隐藏按键，隐藏后将只使用默认按键而不读取options文件
```

- `void modifyKey(KeyMapping var0, int var1)`

  Parameters:
  - var0: KeyMapping
  - var1: int

```
修改按键的默认按键
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
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

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
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



### Example script:

```js
KeyBindEvents.modify((event) => {
	// This space (un)intentionally left blank
});
```

