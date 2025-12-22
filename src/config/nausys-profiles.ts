export interface NausysProfile {
  profile: string;       // data-nausys-widget-profile (empty = global search)
  settings: string;      // data-nausys-widget-settings
  token: string;         // data-nausys-widget-token
  regionName: string;    // Display name (e.g., "Kroatien")
}

export const NAUSYS_PROFILES = {
  default: {
    profile: "",
    settings: "9976ea89-1907-4cbc-aec0-e5c4c310d086",
    token: "5450ecdb-6a7d-49e1-aae5-c62e44d05a6a",
    regionName: "weltweit"
  },
  croatia: {
    profile: "ff1d9618-0655-4fd7-ba65-e08f5d5124a2u",
    settings: "9976ea89-1907-4cbc-aec0-e5c4c310d086",
    token: "5450ecdb-6a7d-49e1-aae5-c62e44d05a6a",
    regionName: "Kroatien"
  },
  // Add more profiles here as needed:
  // greece: {
  //   profile: "your-greece-profile-id",
  //   settings: "9976ea89-1907-4cbc-aec0-e5c4c310d086",
  //   token: "5450ecdb-6a7d-49e1-aae5-c62e44d05a6a",
  //   regionName: "Griechenland"
  // },
  // italy: {
  //   profile: "your-italy-profile-id",
  //   settings: "9976ea89-1907-4cbc-aec0-e5c4c310d086",
  //   token: "5450ecdb-6a7d-49e1-aae5-c62e44d05a6a",
  //   regionName: "Italien"
  // },
} as const;

export type NausysProfileKey = keyof typeof NAUSYS_PROFILES;
