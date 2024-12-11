/** Convert a Stash database rating100 value to the user's preferred rating
 * value. */
export const rating100ToUserRating = (
  rating100: number,
  ratingSystemOptions: ConfigUiResult["ratingSystemOptions"]
): number => {
  // If type is decimal, it is always a rating out of 10
  if (ratingSystemOptions?.type === "decimal") return rating100 / 10;
  // Else the type if stars and it is always a rating out of 5
  else return rating100 / 20;
};

/** Convert a user rating in the preferred value to a Stash database rating100
 * value. */
export const userRatingToRating100 = (
  userRating: number,
  ratingSystemOptions: ConfigUiResult["ratingSystemOptions"]
): number => {
  // If type is decimal, it is always a rating out of 10
  if (ratingSystemOptions?.type === "decimal") return userRating * 10;
  // Else the type if stars and it is always a rating out of 5
  else return userRating * 20;
};

/** Returns input component props based on the user's preferred rating system.
 * */
export const getRatingInputProps = (
  ratingSystemOptions: ConfigUiResult["ratingSystemOptions"]
): React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> => {
  let step: number, max: number;

  // Decimals ratings are out of 10.
  if (ratingSystemOptions?.type === "decimal") {
    max = 10;
    step = 0.1;
  } else {
    // Star ratings are out of 5.
    max = 5;

    // Get the step by dividing the 1 by the number of star
    // parts.
    switch (ratingSystemOptions?.starPrecision) {
      case "tenth":
        step = 1 / 10;
        break;
      case "quarter":
        step = 1 / 4;
        break;
      case "half":
        step = 1 / 2;
        break;
      case "full":
      default:
        // Fallback to the default (full stars) used by Stash if none of the
        // settings have been set by the user.
        step = 1;
        break;
    }
  }

  return {
    max,
    min: 0,
    step,
    type: "number",
  };
};
