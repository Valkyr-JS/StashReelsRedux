/** Mouse event handler for Minimal Button components. */
type MinimalButtonMouseEventHandler = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  updatedState: boolean | number
) => void;

/* ---------------------------------------------------------------------------------------------- */
/*                                               GQL                                              */
/* ---------------------------------------------------------------------------------------------- */

interface AddScenePlayRecordResult {
  sceneAddPlay: HistoryMutationResult;
}
