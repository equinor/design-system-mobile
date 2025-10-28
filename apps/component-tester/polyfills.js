// Polyfill for expo-modules-core registerWebModule
// This function doesn't exist in expo-modules-core ~1.11.14 but expo-font tries to use it

// We need to polyfill before expo-font is loaded
if (typeof window !== "undefined") {
  // Create a mock for the missing registerWebModule function
  const originalRequire = window.require;

  window.require = function (moduleName) {
    const module = originalRequire.apply(this, arguments);

    // If this is expo-modules-core and registerWebModule is missing, add it
    if (moduleName === "expo-modules-core" && !module.registerWebModule) {
      module.registerWebModule = function () {
        // No-op for web - fonts will use system fonts
        console.log(
          "[Polyfill] registerWebModule called - using system fonts for web"
        );
      };
    }

    return module;
  };
}
