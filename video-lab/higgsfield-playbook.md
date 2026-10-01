# Higgsfield 操作手冊（2026-10-01）

整理自 Higgsfield 工具內建的模型目錄與流程說明（當天實際查詢）、Higgsfield 官方部落格與更新紀錄、以及 YouTube 教學的標題與說明。
YouTube 影片本身和 higgsfield.ai 網頁在這個環境打不開，所以教學內容是從標題、章節和搜尋摘要整理的；標「未證實」的請以 App 內顯示為準。

## 一、先記住的六條

1. **字和 LOGO 不要叫影片模型去寫。** 先用 GPT Image 2.5 畫第一格（字標當參考圖），再拿第一格去動。Seedance 官方教學明講：品牌、LOGO、文字不要寫進提示詞，用參考圖帶進去。
2. **Seedance 2.5 要開 `omni_reference` 模式才吃得到起始畫面和參考圖**；`t2v` 模式不收任何圖。
3. **先出草稿再定稿。** Seedance 2.5 `draft: true` 出 480p 草稿（約 3 點/秒），挑中的用 `draft_job_id` 在 7 天內定稿成 1080p。
4. **運鏡照字面執行。** 每個運鏡配一個速度詞（slow push-in、fast snap zoom），寫出結尾狀態，時間點寫秒數。
5. **聲音要寫。** 寫時間點的音效（「3.5s 一聲金屬巨響」），台詞放引號、每句 8 個字以內；不寫就會像 AI。
6. **一支能用的片抓 3–5 次。** 點數預算照這個算。

## 二、實測點數（2026-09-30，Team 方案）

| 項目 | 設定 | 點數 |
|---|---|---|
| GPT Image 2.5 | high、1k、9:16 | 1.5／張 |
| Seedance 2.5 | 10 秒、720p、有聲 | 70 |
| Seedance 2.5 | 4 秒、720p | 28 |
| Veo 3.1 fast | 8 秒、9:16 | 32 |
| Kling 3.0 pro | 10 秒、有聲 | 20 |
| Soul 2.0 | 一張 | 0.12 |

便宜的試做選項：Kling 3.0（最省）、Seedance 2.0 Mini、Kling 3.0 Turbo、Veo 3.1 Lite。

## 三、功能地圖

- **Cinema Studio 4.0**（8/11 推出，跑在 Seedance 2.5 上）：單次最長 30 秒、50 張參考圖、相機／鏡頭／30 多種運鏡預設、年代選擇（顆粒與色調照年代）、角色情緒、打光與調色。適合有導演意圖的敘事鏡頭。
- **Soul 系列（靜態圖）**：Soul 2.0 寫實人像與 UGC；Soul ID 用 20 張以上同一人的照片訓練固定角色（約 3–5 分鐘）。
- **Marketing Studio**：貼商品網址自動抓圖與資訊，生成 12–15 秒 UGC 廣告；Hook（抓注意力的手法）和 Setting（場景）只適用 UGC、教學、開箱、商品評測、試穿五種格式；Ad Reference 可照一支既有廣告的結構重做，但不會自動帶入原本的人物和商品。
- **Viral 預設（87 個）**：一張照片直接變特效短片，不用寫提示詞。跟「寫實衝突」比較接近的是 Smash and grab、Street colossus、Superstar、2000's paparazzi、Race track。沒有監視器或新聞模板。
- **Genjutsu**（9/1 推出）：拿一段 3–30 秒的既有影片，(a) 動作轉移：保留動作和運鏡，換人換場景；(b) 物件替換：只換掉片中一個東西（招牌、商品、衣服）。用來修「字跑掉」最有效：模型 `hf_mult_replace_object`，參考圖放字標。
- **Ad Multiplier**：一支 4–30 秒的廣告做出很多版本，保留剪接、節奏和聲音。
- **剪輯（Higgsedit）**：Higgsfield 雲端沙盒內建的剪輯工具，加上 ffmpeg、ImageMagick，可以做剪接、疊字、轉場、調音量。成品要先拿上傳網址，在同一個指令裡上傳。
- 其他：Topaz 放大、補幀、去背、對嘴（Lip-Sync Studio）、配音與翻譯配音、聲音複製、Draw-to-Video（在第一格上畫箭頭指定動作方向）、Virality Predictor（15 秒內的片打爆紅分數，只能當參考）、影片拆解。

## 四、模型怎麼選

| 模型 | 長度／規格 | 用在哪 |
|---|---|---|
| Seedance 2.5 | 4–30 秒、480–1080p、有聲、草稿模式、最多 50 張參考 | 主力：長鏡頭、一致性、原生聲音、局部改片、延長 |
| Kling 3.0 | 3–15 秒、9:16、起訖畫面、最多 5 鏡多鏡頭 | 最省點數的高品質選項；備案 |
| Veo 3.1 | 4/6/8 秒、9:16、只吃起始畫面 | 最寫實、台詞對嘴最好 |
| Wan 3.0 | 2–30 秒、可開「思考」提高聽話程度 | 多角色一致 |
| Gemini Omni Flash 1.1 | 3–10 秒、可直接改真實影片 | 在實拍上加 CGI，字比較穩 |
| GPT Image 2.5 | 最高 4K | 第一格、任何有字的畫面 |
| Nano Banana Pro | 最高 4K、8 張參考 | 有字的畫面、局部重畫 |

## 五、寫實（像真的拍到）的寫法

- 手機：handheld、slight shake、autofocus micro-pulses、native wide lens (~26mm)、no stabilization、completely ungraded、no LUT、raw phone audio、no music。
- 監視器：fixed high corner、wide angle、grain、low contrast、fluorescent；時間戳在後製加，生成的字會糊。
- 人：每 2–3 秒眨眼、微表情、皮膚紋理、不對稱。
- 魏斯安德森式構圖但要像真的：起始畫面先畫成置中對稱、單點透視；影片提示詞寫 keep the dead-centre symmetrical framing，運鏡只用輕微手持晃動加一次急推，不要大幅移動。

## 六、會被擋的

- 真實品牌、知名角色、球隊、在世藝術家的名字當主體會觸發版權偵測。
- Seedance 會擋含有寫實真人臉的上傳照片；用生成的虛構人物。
- 寫實的假新聞台、假警察密錄器、假災難：平台會標 AI、可能下架；韓國有人因 AI 密錄器頻道被捕。題材保持荒謬、無人受傷、不冒充真實機構。
- TikTok、YouTube、Instagram 都要求標示寫實 AI 內容（多半會自動偵測）。

## 七、值得看的 YouTube 教學

1. Seedance 2.5 is an ABSOLUTE MONSTER – Master it in 20 minutes — https://www.youtube.com/watch?v=UxwV16jDglA
2. I Built a $35K Cinematic Ad With Seedance 2.5 On Higgsfield — https://www.youtube.com/watch?v=VaDPoaPOy-M
3. Seedance 2.5 Tutorial: Multi-Angle Videos with ChatGPT & Higgsfield — https://www.youtube.com/watch?v=CTWFd4Y7awE
4. How to Make Consistent AI Characters with Seedance 2.5 — https://www.youtube.com/watch?v=YgDJDdFQZFY
5. The Prompting Technique That Makes Seedance 2.5 Actually Work（時間軸寫法）— https://www.youtube.com/watch?v=AvB-dfxTMgE
6. Master 97% of Higgsfield in 12 Minutes — https://www.youtube.com/watch?v=BtqWM3wQLSo
7. Cinema Studio 3.0 Tutorial & Cost Breakdown — https://www.youtube.com/watch?v=cv6tHHv_87k
8. I Tested Higgsfield Cinema Studio 4.0 So You Don't Have to — https://www.youtube.com/watch?v=T4NxZguv2dg
9. Higgsfield Genjutsu Tutorial: Replace Characters And Swap Objects — https://www.youtube.com/watch?v=cE0GAkSGiUU
10. How to Create a Freeze-Time Effect with Higgsfield Genjutsu — https://www.youtube.com/watch?v=6XBG8T-cMFo
11. Kling 3.0 AI Filmmaking: The Multi-Shot Workflow — https://www.youtube.com/watch?v=NVwlMFoHOuU
12. How Real Filmmakers ACTUALLY Prompt Higgsfield — https://www.youtube.com/watch?v=o2OP-oXShDM
13. How to Use Lip Sync in Higgsfield AI — https://www.youtube.com/watch?v=o3fseZONhoo
14. Higgsfield AI Draw to Video — https://www.youtube.com/watch?v=_SaTF10Bkl8

## 八、主要來源

- https://higgsfield.ai/blog/seedance-2-5-prompting-guide
- https://higgsfield.ai/blog/seedance-2-5
- https://higgsfield.ai/blog/cinema-studio-4-0
- https://higgsfield.ai/blog/higgsfield-genjutsu
- https://higgsfield.ai/blog/new-marketing-studio-higgsfield
- https://higgsfield.ai/blog/gemini-omni-flash-vfx-video-editing
- https://higgsfield.ai/creator-hub/changelog
- https://higgsfield.ai/creator-hub/help-center/troubleshooting/my-generation-blocked-for-copyright-or-ip
- https://picsart.com/blog/seedance-2-5-draft-mode-explained/
- https://www.dexerto.com/youtube/youtuber-arrested-after-viral-ai-bodycam-videos-spark-real-police-complaints-3314570/
