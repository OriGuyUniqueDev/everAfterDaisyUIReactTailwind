import LandingPageRoutesName from "@/router/endPointsNames";

export default interface NavigationDataType {
  name: string;
  route: LandingPageRoutesName | string;
  style?: string;
}
