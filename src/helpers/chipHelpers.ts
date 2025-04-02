interface ChipText {
  title: string;
  subtitle: string;
}

/**
 * Returns a ChipText object based on the given status.
 *
 * @param status - The current status of the process ("loading", "success", or "error").
 * @returns An object containing a title and subtitle for the given status.
 */
export const getChipTexts = (
  status: "loading" | "success" | "error"
): ChipText => {
  switch (status) {
    case "loading":
      return {
        title: "Creating Your Design...",
        subtitle: "Ready in 2 minutes",
      };
    case "success":
      return {
        title: "Your Design is Ready!",
        subtitle: "Tap to see it.",
      };
    case "error":
      return {
        title: "Oops, something went wrong!",
        subtitle: "Click to try again.",
      };
  }
};
