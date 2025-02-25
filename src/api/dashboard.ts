import { Dashboard } from "@/adaptors/dashboard/Dashborad";
import { API_ROUTE } from "@/constant/routes";
import { api } from "@/utils/api";
import camelcaseKeys from "camelcase-keys";
import { plainToInstance } from "class-transformer";

export const useGetDashboardPhase = async () => {
  const resp: Record<string, any> = await api.get(API_ROUTE.dashboard);
  const formatResp = camelcaseKeys(resp.data, { deep: true });

  return plainToInstance(Dashboard, formatResp, {
    exposeDefaultValues: true,
  });
};
