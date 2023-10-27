import { getLawComponentData, getLawData } from "./src/libs/law_api/api/get-law-data.ts";
import { getTypeByFind } from "./src/libs/law_api/law/law.ts";
import { ArticleTitleType, ArticleType, ChapterType, LawNumType, MainProvisionType, PartType } from "./src/libs/law_api/types/law.ts";


async function law() {
  const result = await getLawData({lawId: "325AC0000000131"});
  if (!result.isSuccess) {
      return
  }

  result.value.lawFullText.Law.forEach((val) => {
    if ('LawBody' in val) {
      const x = val.LawBody
      console.log("jo")
      x.forEach((val) => {
        if ("LawTitle" in val) {
          console.log(val.LawTitle)
        }
      })
      const n = getTypeByFind<MainProvisionType>(val.LawBody, "MainProvision")?.MainProvision
      const y = getTypeByFind<ChapterType>(n, "Chapter")?.Chapter
//      console.log(y)
      const k = getTypeByFind<ArticleTitleType>(y, "ArticleTitle")?.ArticleTitle
    }
  })
}

law()
