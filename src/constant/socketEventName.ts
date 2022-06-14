const socketEventName = {
  ON_MATCHED: "userinfo",
  ON_CANCEL: "cancel",
  ON_SUCCESS: "success",
  ON_ERROR: "error",
  MATCHING_START: "matching.start",
  MATCHING_CANCEL: "matching.cancel",
  MATCHING_DECISION: "matching.accept",
  MATHING_FREIND: "matching.friend",
} as const;

export default socketEventName;
