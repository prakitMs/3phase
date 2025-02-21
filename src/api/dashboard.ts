import { API_ROUTE } from "@/constant/routes";
import { Dashboard } from "@/interface/dashboard";
import { api } from "@/utils/api";
import camelcaseKeys from "camelcase-keys";

export const useGetDashboardPhase = async () => {
  const resp: Record<string, any> = await api.get(API_ROUTE.dashboard);
  return camelcaseKeys(resp.data, { deep: true }) as Dashboard;
};
