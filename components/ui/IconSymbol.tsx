// IconSymbol component using Material Icons from Expo Vector Icons

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>["name"]>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  // Navigation icons
  "house.fill": "home",
  "paperplane.fill": "send",
  magnifyingglass: "search",
  "tag.fill": "local-offer",
  "cart.fill": "shopping-cart",
  "person.fill": "person",
  "explore.fill": "explore",

  // UI and utility icons
  "square.grid.2x2": "grid-view",
  "heart.fill": "favorite",
  heart: "favorite-border",
  plus: "add",
  minus: "remove",
  "star.fill": "star",
  star: "star-border",
  "chevron.right": "chevron-right",
  "chevron.left": "chevron-left",
  "chevron.left.forwardslash.chevron.right": "code",

  // Common app icons
  "location.fill": "location-on",
  location: "location-on",
  "clock.fill": "access-time",
  "bell.fill": "notifications",
  bell: "notifications-none",
  "gearshape.fill": "settings",
  "line.horizontal.3": "menu",
  xmark: "close",
  "arrow.left": "arrow-back",
  "arrow.right": "arrow-forward",
  "arrow.up": "arrow-upward",
  "arrow.down": "arrow-downward",

  // Action icons
  "eye.fill": "visibility",
  "eye.slash.fill": "visibility-off",
  checkmark: "check",
  "exclamationmark.circle.fill": "error",
  "info.circle.fill": "info",
  "trash.fill": "delete",
  pencil: "edit",
  "camera.fill": "camera-alt",
  "photo.fill": "photo",

  // Filter and sort
  "line.horizontal.3.decrease.circle": "filter-list",
  "arrow.up.arrow.down": "sort",

  // Transfer and sharing
  "square.and.arrow.up": "share",
  "bookmark.fill": "bookmark",
  bookmark: "bookmark-border",
  "arrow.clockwise": "refresh",

  // Communication icons
  "phone.fill": "phone",
  "envelope.fill": "email",
  "message.circle.fill": "chat",

  // Shopping specific
  "bag.fill": "shopping-bag",
  "creditcard.fill": "credit-card",
  percent: "percent",
  "dollarsign.circle.fill": "attach-money",

  // Categories
  "leaf.fill": "eco",
  "flame.fill": "whatshot",
  snowflake: "ac-unit",
  "drop.fill": "water-drop",

  // Additional utility
  "questionmark.circle.fill": "help",
  "plus.circle.fill": "add-circle",
  "minus.circle.fill": "remove-circle",
  "play.fill": "play-arrow",
  "pause.fill": "pause",
  "stop.fill": "stop",
} as IconMapping;

/**
 * An icon component that uses Material Icons from Expo Vector Icons.
 * This ensures a consistent look across platforms with great icon coverage.
 * Icon `name`s are based on SF Symbols and mapped to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const materialIconName = MAPPING[name];

  if (!materialIconName) {
    console.warn(`IconSymbol: Icon "${name}" not found in mapping`);
    // Return a fallback icon
    return (
      <MaterialIcons
        color={color}
        size={size}
        name="help-outline"
        style={style}
      />
    );
  }

  return (
    <MaterialIcons
      color={color}
      size={size}
      name={materialIconName}
      style={style}
    />
  );
}

// Export the available icon names for TypeScript support
export type IconName = IconSymbolName;
