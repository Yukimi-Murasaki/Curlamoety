# GoetyEvents.registerBrew

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: RegisterBrewEventJS (third-party)

```
用于注册药酿系统的配置（容量剂、催化剂、增强剂）```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| addCapacity | Object, int |  | void | ✘ |
| setCapacityLevels | Object |  | void | ✘ |
| removeCapacity | Object |  | void | ✘ |
| addAugmentation | Object, String, int |  | void | ✘ |
| removeCatalyst | Object |  | void | ✘ |
| removeAugmentation | Object |  | void | ✘ |
| addSpecialBrewEffect | Object, String |  | SpecialBrewEffectBuilder | ✘ |
| removeEntityCatalyst | Object |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `void addCapacity(Object item, int level)`

  Parameters:
  - item: Object- 物品ID（字符串）或物品对象
  - level: int- 等级（>=0）

```
注册容量剂
```

- `void setCapacityLevels(Object levels)`

  Parameters:
  - levels: Object- 等级增量数组，从1级开始，例如 [2,2,2,2,4]

```
设置容量等级增量表
```

- `void removeCapacity(Object item)`

  Parameters:
  - item: Object- 物品ID（字符串）或物品对象

```
移除容量剂
```

- `void addAugmentation(Object item, String modifier, int level)`

  Parameters:
  - item: Object- 物品ID（字符串）或物品对象
  - modifier: String- 增强类型（字符串）：'capacity', 'duration', 'amplifier', 'aoe', 'linger', 'quaff', 'velocity', 'aquatic', 'fire_proof'
  - level: int- 等级（整数）

```
注册增强剂
```

- `void removeCatalyst(Object item)`

  Parameters:
  - item: Object- 物品ID（字符串）或物品对象

```
移除物品催化剂
```

- `void removeAugmentation(Object item)`

  Parameters:
  - item: Object- 物品ID（字符串）或物品对象

```
移除增强剂
```

- `SpecialBrewEffectBuilder addSpecialBrewEffect(Object item, String effectType)`

  Parameters:
  - item: Object- 物品ID（字符串）或物品对象
  - effectType: String- 效果类型（字符串），如 'bats', 'bees', 'grow', 'explode' 等

```
注册特殊效果的 brewing 配方（支持链式调用）
```

- `void removeEntityCatalyst(Object entity)`

  Parameters:
  - entity: Object- 实体类型ID（字符串）

```
移除实体催化剂
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
GoetyEvents.registerBrew((event) => {
	// This space (un)intentionally left blank
});
```

