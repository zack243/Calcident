// Utility functions for Calcident

/**
 * Combines class names, filtering out falsy values
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}
