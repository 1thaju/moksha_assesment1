import { type ReactNode } from "react";

export interface StackedScrollSectionProps {
  children: ReactNode;
  /**
   * z-index priority for the stacking layer (e.g. 10 for first, 20 for second, 30 for third).
   */
  zIndex: number;
  /**
   * Additional wrapper class names.
   */
  className?: string;
  /**
   * Minimum height of the section container.
   * Default is "min-h-screen".
   */
  minHeight?: string;
  /**
   * Sticky pinning position:
   * - "top" (default): sticks to top of viewport (`md:sticky md:top-0`). Ideal for single-screen sections.
   * - "bottom": sticks when bottom of section reaches bottom of viewport (`md:sticky md:bottom-0`).
   *   Essential for tall sections (like Community with testimonials + videos) so all content is fully scrolled and visible before the next card covers it.
   * - false / "none": disables sticky pinning.
   */
  sticky?: "top" | "bottom" | boolean;
}

/**
 * StackedScrollSection
 * 
 * Reusable wrapper component for chained "stacked scroll" parallax relay effects.
 * 
 * Mechanics:
 * - Uses native CSS `position: sticky` (`top: 0` or `bottom: 0`) with escalating `z-index` levels.
 * - Each section pins during scroll until the subsequent section with a higher z-index
 *   scrolls up and slides over it.
 * - Fully respects `prefers-reduced-motion` by gracefully falling back to static in-flow rendering.
 */
export function StackedScrollSection({
  children,
  zIndex,
  className = "",
  minHeight = "min-h-screen",
  sticky = "top",
}: StackedScrollSectionProps) {
  const stickyClass =
    sticky === "bottom"
      ? "md:sticky md:bottom-0"
      : sticky === "top" || sticky === true
      ? "md:sticky md:top-0"
      : "";

  return (
    <div
      style={{ zIndex }}
      className={`relative w-full ${minHeight} ${stickyClass} motion-reduce:static motion-reduce:z-auto motion-reduce:min-h-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default StackedScrollSection;
