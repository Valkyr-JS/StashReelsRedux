/** Mouse event handler for Minimal Button components. */
type MinimalButtonMouseEventHandler = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  updatedState: boolean | number
) => void;

/* ---------------------------------------------------------------------------------------------- */
/*                                               GQL                                              */
/* ---------------------------------------------------------------------------------------------- */

interface AddSceneORecordResult {
  sceneAddO: HistoryMutationResult;
}

interface AddScenePlayRecordResult {
  sceneAddPlay: HistoryMutationResult;
}

interface SetSceneRatingResult {
  sceneUpdate: Scene;
}

/* ---------------------------------------------------------------------------------------------- */
/*                                             Schema                                             */
/* ---------------------------------------------------------------------------------------------- */

interface ConfigUiResult {
  ratingSystemOptions?: {
    starPrecision?: "full" | "half" | "quarter" | "tenth";
    type?: "decimal" | "stars";
  };
}
