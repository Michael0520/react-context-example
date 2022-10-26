import { useLocalstorageState } from "rooks";

export const useAuthTokenState = () =>
  useLocalstorageState("access_token", null);

export const useUserProfileState = () =>
  useLocalstorageState("user_profile", {});
