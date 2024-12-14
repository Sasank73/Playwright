import { expect } from "@playwright/test";
import apiData from "utilities/apiQueries";
import test from "utilities/baseTest";
import * as dataUtils from "../utilities/dataUtils";

test.describe("test script", () => {
  const location = dataUtils.locationDeatils();

  test("createApidata", async ({ request }) => {
    console.log(JSON.stringify(location));
    const postAPIResponse = await request.post(apiData.endPointUrl, {
      headers: {
        "Content-Type": apiData.format,
        Authorization: apiData.apiToken,
      },
      data: JSON.stringify({
        query: apiData.locationCreationqueryData,
        variables: {
          name: location.name,
          lat: String(location.latitude),
          long: String(location.longitude),
        },
      }),
    });

    const responseBody = await postAPIResponse.json();

    if (responseBody.errors) {
      responseBody.errors.forEach((error: any, index: any) => {
        console.log(`Error ${index + 1}: ${error.message}`);
      });
    } else {
      const createdLocation = responseBody.data.createLocation;
      const locId = createdLocation.id;
      expect(createdLocation.name).toEqual(location.name);
      expect(createdLocation.lat).toEqual(String(location.latitude));
      expect(createdLocation.long).toEqual(String(location.longitude));
      console.log(locId);
      return locId;
    }
  });
});
