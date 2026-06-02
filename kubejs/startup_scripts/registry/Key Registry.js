const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");
const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");

global.armorSetKey = new $KeyMapping(
    "key.curlamoety.armorsetkey",
    $GLFWkey.GLFW_MOUSE_BUTTON_4,
    "key.group.curlamoety"
)

ClientEvents.init(()=>{
    $KeyMappingRegistry.register(global.armorSetKey)
})