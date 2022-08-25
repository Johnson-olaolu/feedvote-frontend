import http from "./http";
import { IFeedback, IPage, IResponse } from "./types";

const getSinglePage = async (pageId: string): Promise<{ page: IPage; feedbacks: IFeedback[] }> =>
  http.get({
    url: `/get-page/${pageId}`,
  });

const updateSinglePage = async () =>
  http.get({
    url: "",
  });

export const pageServices = {
  getSinglePage,
  updateSinglePage,
};
