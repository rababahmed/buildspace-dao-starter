import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7dbAe6724D180942A69efEf7Edd98fB7545C325C"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Bagel Gold",
        description: "This NFT will give you access to BagelDAO!",
        image: readFileSync("scripts/assets/bagelgold.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
