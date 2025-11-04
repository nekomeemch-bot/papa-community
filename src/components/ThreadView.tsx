import { ArrowLeft, User, Crown, UserCircle2, Sparkles, Star, Send, Heart, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import mouseIcon from "figma:asset/154a6e96d83927d593e5bfd6fe5990336d9f4ff7.png";
import catIcon from "figma:asset/3a37c9139698db159e10931b63178d0fa4ea4482.png";
import animeIcon from "figma:asset/b29ab7af29c99755e54addc7654ba64f16d484ad.png";
import purpleHairIcon from "figma:asset/d57bfe9a1ebd75b49ab747ad9d1fa3be7e3eb36e.png";
import whiteHairIcon from "figma:asset/b2ee50e7cf2f816ff81da5d5382652efbca6c903.png";
import catEarsIcon from "figma:asset/3e6f90ef6c38ad50f16be40291cb6057e1194a85.png";
import purpleSofaIcon from "figma:asset/c0cd5bf0d226027b8029e132d28dfc57fce4c08d.png";
import blondeCatEarsIcon from "figma:asset/818206d0192c4de92fb8ec9342131f70477bfb3d.png";
import blackHairPhoneIcon from "figma:asset/2e8e929caf0683fd40ec4e8e49007760684d3600.png";
import alfortImage1 from "figma:asset/cecef7b3bbc04b8913c9b99ba67f4116da3bc268.png";
import alfortImage2 from "figma:asset/fd52d770236cf8b5546af50da76ac53055cfe533.png";
import paypayImage from "figma:asset/3638fef10e1ae056350c89c3ca441f4f2044c9ed.png";
import paypay15000Image from "figma:asset/dec2579bfa2bcdc0cc84042e893acdbfe5979db3.png";
import paypay20000Image from "figma:asset/81837d7cc5468c4f427d35407472d835509e0fea.png";
import paypay30000Image from "figma:asset/60c27450c21d53a234626fbe3237d73f140b899f.png";
import paypay50000Image from "figma:asset/96171ecbb893143802ce910f6806046098c452ef.png";
import miumiuWalletImage from "figma:asset/ba6b7b19f9c3aeb770a2e96c1ae9a5de46618f37.png";
import cash10000Image from "figma:asset/4ac16b042860b977340f96699d28ca01799c2e19.png";
import diorBagImage from "figma:asset/e675717c39488d6e220c82453effd5f01d00f6cc.png";
import papaAppsImage from "figma:asset/924ebd8f5755f3f730e41b634a5920190f46706e.png";

interface Post {
  id: number;
  author: string;
  date: string;
  content: string;
  isAdmin?: boolean;
  isSponsored?: boolean;
  avatarUrl?: string;
  likes?: number;
  replies?: number;
  imageUrl?: string;
  timeOffset?: number;
}

// 投稿データ（timeOffsetで時刻を管理: 現在時刻からのオフセット（分））
const mockPostsData: Omit<Post, 'date'>[] = [
  {
    id: 1,
    author: "おすすめユーザー",
    timeOffset: -360, // -6時間（一番古い）
    content: "とりあえず初心者は両方入れておけってサイト紹介するね！！✨\n\n⓵ワクワクメール（🅟活の定番）\nhttps://stella-nova.click/8WZ1\n\n⓶ハッピーメール（併用必須）\nhttps://stella-nova.click/118we\n\n【両方使うメリット】\n✅ アポ数が2倍以上になる\n✅ 片方ダメでももう片方でカバー\n✅ 条件のいい🅟さんを選べる\n✅ リスク分散できて安心\n✅ 両方とも登録無料\n\n⚠️ 重要：片方だけだと機会損失！\nまずは両方登録が鉄則💪",
    isSponsored: true,
    avatarUrl: blackHairPhoneIcon,
    likes: 58,
    replies: 7,
    imageUrl: papaAppsImage
  },
  {
    id: 2,
    author: "管理人",
    timeOffset: -352,
    content: "PAPA COMMUNITY 掲示板へようこそ！✨\n\nこちらはコミュニティメンバーの情報交換・交流の場です。\n\n【ルール】\n・他者への敬意を忘れずに 💕\n・スパムや宣伝行為は禁止 🚫\n・個人情報の投稿は控えてください 🔒\n\n楽しく有意義な情報交換をしましょう！",
    isAdmin: true,
    avatarUrl: purpleSofaIcon,
    likes: 28,
    replies: 0
  },
  {
    id: 3,
    author: "名無しさん",
    timeOffset: -344,
    content: "またまた臨時収入ありがとうございます～💕\nワクワク🅟さんマジ神です😇",
    avatarUrl: blondeCatEarsIcon,
    likes: 38,
    replies: 5
  },
  {
    id: 4,
    author: "名無しさん",
    timeOffset: -336,
    content: ">>3\n私もめっちゃ興味ある！\nどんな感じか教えてもらえたら嬉しいです🙏✨",
    avatarUrl: whiteHairIcon,
    likes: 12,
    replies: 2
  },
  {
    id: 5,
    author: "初心者ちゃん",
    timeOffset: -328,
    content: "始めたばかりなんですけど、プロフィール写真ってどんなの載せるのがいいですか？🤔\n顔出しは抵抗あるんですけど、やっぱり顔出ししないとダメですか…？",
    avatarUrl: catIcon,
    likes: 23,
    replies: 8
  },
  {
    id: 6,
    author: "名無しさん",
    timeOffset: -320,
    content: ">>5\n顔出しは必須じゃないよ！\n私は最初マスクありの写真で、信頼できそうな人にだけ別で送ってた😊\n自然光で撮った明るい写真がおすすめ✨",
    avatarUrl: whiteHairIcon,
    likes: 19,
    replies: 0
  },
  {
    id: 7,
    author: "ベテラン",
    timeOffset: -312,
    content: ">>5\n横顔とか、鼻から下だけとかでもOK！\nあと清潔感が一番大事だから、髪型とか服装に気をつけるといいよ👗\n盛りすぎ加工はNGね🙅‍♀️",
    avatarUrl: purpleHairIcon,
    likes: 28,
    replies: 0
  },
  {
    id: 8,
    author: "名無しさん",
    timeOffset: -304,
    content: "1時間ちょいお茶しただけで2もらえるとか\nマジで激アツ🅟すぎるんだが💰✨",
    avatarUrl: purpleHairIcon,
    likes: 24,
    replies: 3
  },
  {
    id: 9,
    author: "名無しさん",
    timeOffset: -296,
    content: "この前久しぶりに会ったワクワク🅟と🍵したら\n半年ぶりだからって3くれた😳\n「リップ欲しい」って言ったら普通に買ってくれて神すぎた🎀\n🍵1.5の予定だったからまじびっくり",
    avatarUrl: mouseIcon,
    likes: 19,
    replies: 2
  },
  {
    id: 10,
    author: "名無しさん",
    timeOffset: -288,
    content: "今週の結果報告✨\n㊐ﾊﾋﾟﾒ新規🍵1.0\n㊐ﾊﾋﾟﾒ定期🍽🎁3+5\n㊊ﾜｸﾜｸ🍵1.5\n㊋ﾜｸﾜｸ定期🍽2.5\n\n順調に稼げてて満足💪✨",
    avatarUrl: catEarsIcon,
    likes: 31,
    replies: 4
  },
  {
    id: 11,
    author: "名無しさん",
    timeOffset: -280,
    content: ">>10\nえぐいwww\n私も本気出してみます💪🔥",
    avatarUrl: catIcon,
    likes: 9,
    replies: 0
  },
  {
    id: 12,
    author: "名無しさん",
    timeOffset: -272,
    content: "メッセージのやり取りで気をつけることってありますか？\n最初の挨拶とか何書けばいいかわからなくて💦",
    avatarUrl: animeIcon,
    likes: 17,
    replies: 6
  },
  {
    id: 13,
    author: "名無しさん",
    timeOffset: -264,
    content: ">>12\n最初は「プロフィール見て素敵だと思いました」的な感じでOK！\nあと相手のプロフィールちゃんと読んで、共通点とか触れると好印象💕\n絵文字使いすぎないように注意！",
    avatarUrl: blondeCatEarsIcon,
    likes: 22,
    replies: 0
  },
  {
    id: 14,
    author: "ベテラン",
    timeOffset: -256,
    content: ">>12\n返信は早すぎず遅すぎず！\n即レスしすぎると暇人っぽく見えちゃうし、遅すぎると興味ないと思われる😅\n1〜2時間後くらいがちょうどいいよ👌",
    avatarUrl: catEarsIcon,
    likes: 31,
    replies: 0
  },
  {
    id: 15,
    author: "名無しさん",
    timeOffset: -248,
    content: "アルフォート貯金貯まってきた〜🍫💰\n今月もワクワクで頑張った成果✨\nこの調子で来月も稼ぐぞ💪",
    avatarUrl: blondeCatEarsIcon,
    likes: 35,
    replies: 6,
    imageUrl: alfortImage1
  },
  {
    id: 16,
    author: "名無しさん",
    timeOffset: -240,
    content: "ワクワクでサクッとアポ決まった！\n土日の予定埋まって嬉しすぎる❣\nうまくいけば🍽🍵🛍で6はいけそう💮",
    avatarUrl: purpleHairIcon,
    likes: 22,
    replies: 1
  },
  {
    id: 17,
    author: "名無しさん",
    timeOffset: -232,
    content: "初めて会う時ってどんなこと気をつけたらいいですか？\n緊張しすぎて何話せばいいかわからない😭",
    avatarUrl: mouseIcon,
    likes: 26,
    replies: 9
  },
  {
    id: 18,
    author: "名無しさん",
    timeOffset: -224,
    content: ">>17\n最初は昼間のカフェとかで短時間がおすすめ！\n1〜2時間くらいで様子見するといいよ☕\nあと友達に場所と時間伝えておくのは必須🔒",
    avatarUrl: purpleSofaIcon,
    likes: 35,
    replies: 0
  },
  {
    id: 19,
    author: "ベテラン",
    timeOffset: -216,
    content: ">>17\n会話は相手の話を聞く姿勢が大事！\n自分の話ばっかりするんじゃなくて、相手に質問して話を広げる感じ💬\nあとニコニコしてれば大体うまくいくよ😊✨",
    avatarUrl: whiteHairIcon,
    likes: 42,
    replies: 0
  },
  {
    id: 20,
    author: "名無しさん",
    timeOffset: -208,
    content: "私はスキマバイト感覚でワクワクとイククルでお茶してる\n大体1～2で🍵回してるから適当にやってるわりに稼げてるｗ",
    avatarUrl: whiteHairIcon,
    likes: 17,
    replies: 0
  },
  {
    id: 21,
    author: "名無しさん",
    timeOffset: -200,
    content: "定期的に覗きに来ます。\nいつも有益な情報ありがとうございます！🙏",
    avatarUrl: catEarsIcon,
    likes: 5,
    replies: 0
  },
  {
    id: 22,
    author: "名無しさん",
    timeOffset: -192,
    content: ">>9\nすごっ！私も週末狙ってみようかな\n土日って需要多いんですか？🤔",
    avatarUrl: animeIcon,
    likes: 7,
    replies: 0
  },
  {
    id: 23,
    author: "名無しさん",
    timeOffset: -184,
    content: "お手当の相場ってどれくらいなんですか？\n最初いくらって言えばいいかわからなくて💦",
    avatarUrl: catIcon,
    likes: 38,
    replies: 11
  },
  {
    id: 24,
    author: "名無しさん",
    timeOffset: -176,
    content: ">>23\n🍵なら1〜2が相場かな\n地域とか相手によって違うけど、最初は1.5くらいで様子見るといいよ💰",
    avatarUrl: animeIcon,
    likes: 29,
    replies: 0
  },
  {
    id: 25,
    author: "ベテラン",
    timeOffset: -168,
    content: ">>23\n大事なのは最初に条件すり合わせること！\n曖昧にしたまま会うとトラブルの元💥\nメッセージで「🍵希望で1.5〜2くらいを考えてます」って伝えるといいよ📱",
    avatarUrl: purpleHairIcon,
    likes: 47,
    replies: 0
  },
  {
    id: 26,
    author: "名無しさん",
    timeOffset: -160,
    content: "ワクワクで固定の人が4人になった🎉\n毎月安定収入になってきて助かる\n始めるの遅すぎたって後悔してる😂",
    avatarUrl: blondeCatEarsIcon,
    likes: 26,
    replies: 2
  },
  {
    id: 27,
    author: "名無しさん",
    timeOffset: -152,
    content: "今月もよろしくお願いします。\n盛り上がっていきましょう！🎊",
    avatarUrl: mouseIcon,
    likes: 4,
    replies: 0
  },
  {
    id: 28,
    author: "名無しさん",
    timeOffset: -144,
    content: "長く続く関係を作るコツってありますか？\n定期さん欲しいんですけど、なかなか続かなくて😢",
    avatarUrl: blondeCatEarsIcon,
    likes: 33,
    replies: 7
  },
  {
    id: 29,
    author: "名無しさん",
    timeOffset: -136,
    content: ">>28\n会った後のお礼メッセージは絶対！\n「今日は楽しかったです💕また会いたいです」って素直に伝える✉\nあと相手の誕生日とか記念日覚えておくと好感度アップ🎂",
    avatarUrl: catEarsIcon,
    likes: 41,
    replies: 0
  },
  {
    id: 30,
    author: "ベテラン",
    timeOffset: -128,
    content: ">>28\n適度な距離感が大事！\nベタベタしすぎず、でも冷たくもせず。\n月2〜3回くらいのペースで会うのがちょうどいいかも📅\nあと相手の話をちゃんと覚えておくのも重要だよ💭",
    avatarUrl: whiteHairIcon,
    likes: 52,
    replies: 0
  },
  {
    id: 31,
    author: "名無しさん",
    timeOffset: -120,
    content: "今月分貯まったから記念に📸\nアルフォート貯金最高すぎる🍫✨\nハッピーメールありがとう🙏💕",
    avatarUrl: purpleHairIcon,
    likes: 28,
    replies: 3,
    imageUrl: alfortImage2
  },
  {
    id: 32,
    author: "名無しさん",
    timeOffset: -112,
    content: "ワクワク🅟さんと🍵してたら\n「次は🍽行こう」って誘われて嬉しい😊\n固定になってくれそうな予感💕",
    avatarUrl: catEarsIcon,
    likes: 21,
    replies: 1
  },
  {
    id: 33,
    author: "名無しさん",
    timeOffset: -104,
    content: "これやったら嫌われるってこと教えてください🙏\n失敗したくないので…",
    avatarUrl: mouseIcon,
    likes: 44,
    replies: 10
  },
  {
    id: 34,
    author: "名無しさん",
    timeOffset: -96,
    content: ">>33\nドタキャンは絶対ダメ🙅‍♀️\nどうしても無理な時は早めに連絡！\nあと遅刻も印象悪いから、10分前には着くようにしてる⏰",
    avatarUrl: purpleSofaIcon,
    likes: 38,
    replies: 0
  },
  {
    id: 35,
    author: "ベテラン",
    timeOffset: -88,
    content: ">>33\nスマホばっかり見るのもNG📱\n会ってる時は相手に集中すること！\nあとお金の話ばっかりするのも嫌がられるよ💸\n自然な流れで話すのが一番✨",
    avatarUrl: animeIcon,
    likes: 56,
    replies: 0
  },
  {
    id: 36,
    author: "おすすめユーザー",
    timeOffset: -84,
    content: "みんなの質問見てて思ったけど、やっぱり最初のアプリ選びが超重要だよ！🔥\n\n私が使ってるのはこの2つ👇\n\n🌟ワクワクメール（メイン）\nhttps://stella-nova.click/8WZ1\n\n💕ハッピーメール（サブ）\nhttps://stella-nova.click/118we\n\n【実体験レポ】\n✅ 両方登録でアポが途切れない\n✅ ワクワクで平均2万/🍵\n✅ ハピメで定期🅟さん3人\n✅ 変な人少なくて安心\n✅ PayPay送金が多くて楽\n\nとりあえず両方入れとけば間違いない💕",
    isSponsored: true,
    avatarUrl: purpleHairIcon,
    likes: 73,
    replies: 11,
    imageUrl: papaAppsImage
  },
  {
    id: 37,
    author: "名無しさん",
    timeOffset: -80,
    content: ">>33\n愚痴とか不満ばっかり言うのもアウト😅\n楽しい雰囲気作るのが大事だから、ポジティブな話題を心がけてる🌸\nあと清潔感は超重要！身だしなみちゃんとしないとね💅",
    avatarUrl: catIcon,
    likes: 49,
    replies: 0
  },
  {
    id: 38,
    author: "名無しさん",
    timeOffset: -72,
    content: "🍵終わったあとPayPay送ってくれた💰\n現金もいいけどペイペイもありがたい✨\nワクワク🅟さんありがとうございます🙏",
    avatarUrl: whiteHairIcon,
    likes: 31,
    replies: 4,
    imageUrl: paypayImage
  },
  {
    id: 39,
    author: "名無しさん",
    timeOffset: -64,
    content: ">>26\n固定4人とか神じゃん！\n私もそれくらい作りたい🥺",
    avatarUrl: animeIcon,
    likes: 8,
    replies: 0
  },
  {
    id: 40,
    author: "名無しさん",
    timeOffset: -56,
    content: "今日ワクワクで会った人\nめちゃくちゃタイプだった😳💓\nお金もらうの申し訳ないレベルw\nでもしっかり2もらった🤣",
    avatarUrl: blondeCatEarsIcon,
    likes: 25,
    replies: 2
  },
  {
    id: 41,
    author: "名無しさん",
    timeOffset: -48,
    content: "バイト辞めてワクワクとハッピーメール専業になった\n月15〜20は安定して稼げるから問題なし💰\n自由な時間も増えて最高の生活",
    avatarUrl: purpleHairIcon,
    likes: 42,
    replies: 7
  },
  {
    id: 42,
    author: "名無しさん",
    timeOffset: -40,
    content: ">>41\nマジで？！すごすぎる\n私もそれ目指そうかな…",
    avatarUrl: catIcon,
    likes: 11,
    replies: 0
  },
  {
    id: 43,
    author: "名無しさん",
    timeOffset: -32,
    content: "今週の稼ぎ\n㊊ワクワク🍵1\n㊋休み\n㊌ハッピメ🍵🍽3.5\n㊍ワクワク🍵1.5\n㊎休み\n㊏ワクワク🍽🎁5\n㊐ハッピメ🍵🍵2.5\n\n合計13.5！過去最高記録更新🎉",
    avatarUrl: mouseIcon,
    likes: 37,
    replies: 5
  },
  {
    id: 44,
    author: "名無しさん",
    timeOffset: -24,
    content: "今日のハッピーメール🅟さん\nペイペイで送ってくれるから楽でいい💕\nお財布出さなくていいし最高w",
    avatarUrl: catEarsIcon,
    likes: 23,
    replies: 2
  },
  {
    id: 45,
    author: "名無しさん",
    timeOffset: -16,
    content: "定期🅟さんから誕生日プレゼントもらった🎁\nDiorのバッグ欲しいって言ってたら本当に買ってくれた\nハッピーメールで出会えてよかった😭💕",
    avatarUrl: blondeCatEarsIcon,
    likes: 55,
    replies: 8,
    imageUrl: diorBagImage
  },
  {
    id: 46,
    author: "名無しさん",
    timeOffset: -14,
    content: ">>43\nえぐすぎｗｗｗ\n私も頑張ろ💪🔥",
    avatarUrl: purpleHairIcon,
    likes: 10,
    replies: 0
  },
  {
    id: 47,
    author: "名無しさん",
    timeOffset: -12,
    content: "今日のランチ🍽で3もらえた\nしかもめっちゃ美味しいお店連れてってくれて幸せ✨\nワクワク様々だわ🙏",
    avatarUrl: whiteHairIcon,
    likes: 20,
    replies: 2
  },
  {
    id: 48,
    author: "名無しさん",
    timeOffset: -10,
    content: "ハッピーメールで会った人\n2時間🍵するだけで2.5くれるから神\n週1で会う約束したから月10は確定✨",
    avatarUrl: animeIcon,
    likes: 27,
    replies: 3
  },
  {
    id: 49,
    author: "名無しさん",
    timeOffset: -8,
    content: "アルフォート貯金\n今月だけで25万貯まった🍫💰\nワクワクとハッピーメール様々です🙏✨",
    avatarUrl: catIcon,
    likes: 40,
    replies: 6
  },
  {
    id: 50,
    author: "名無しさん",
    timeOffset: -6,
    content: "PayPay1.5万きた〜💰\n別れ際にサクッと送ってくれるの神すぎる\nワクワクで出会えてよかった😊✨",
    avatarUrl: purpleSofaIcon,
    likes: 29,
    replies: 3,
    imageUrl: paypay15000Image
  },
  {
    id: 51,
    author: "名無しさん",
    timeOffset: -4,
    content: "最近の🅟さんみんなペイペイ派\n現金数える手間ないし私も助かるｗ\nハッピーメール使いやすすぎる💕",
    avatarUrl: mouseIcon,
    likes: 17,
    replies: 1
  },
  {
    id: 52,
    author: "名無しさん",
    timeOffset: -2,
    content: "今日🍵2件回したけど\n両方ともペイペイで送ってくれた📱💰\n合計3万ゲット！ワクワク最高🙌",
    avatarUrl: blondeCatEarsIcon,
    likes: 34,
    replies: 4,
    imageUrl: paypay30000Image
  },
  {
    id: 53,
    author: "名無しさん",
    timeOffset: 0,
    content: "今日のハッピーメール🍽で2万\nしかもペイペイで受け取り完了💕\n太っ腹な🅟さんで助かる🙏✨",
    avatarUrl: animeIcon,
    likes: 38,
    replies: 5,
    imageUrl: paypay20000Image
  },
  {
    id: 54,
    author: "名無しさん",
    timeOffset: 2,
    content: ">>53\n2万とかやばすぎｗｗｗ\n私も🍽狙ってみよ😳",
    avatarUrl: catEarsIcon,
    likes: 12,
    replies: 0
  },
  {
    id: 55,
    author: "名無しさん",
    timeOffset: 4,
    content: "ワクワクメールで出会った太🅟さん\n🍽🎁で5万PayPay送ってくれた😭💕\n人生で一番稼いだ日かも…\nマジで感謝しかない🙏✨",
    avatarUrl: whiteHairIcon,
    likes: 89,
    replies: 12,
    imageUrl: paypay50000Image
  },
  {
    id: 56,
    author: "名無しさん",
    timeOffset: 6,
    content: ">>55\n5万！？！？えぐすぎる\n羨ましすぎて泣いた🥺",
    avatarUrl: purpleHairIcon,
    likes: 18,
    replies: 0
  },
  {
    id: 57,
    author: "名無しさん",
    timeOffset: 8,
    content: ">>55\nそういう人と出会いたい…\nワクワク登録しよかな",
    avatarUrl: mouseIcon,
    likes: 15,
    replies: 0
  },
  {
    id: 58,
    author: "名無しさん",
    timeOffset: 10,
    content: "今日🍵してたら現金で1万くれた💴\nお札きれいに渡してくれる人好き🥰\nワクワクメールいい人多すぎ",
    avatarUrl: catEarsIcon,
    likes: 24,
    replies: 2,
    imageUrl: cash10000Image
  },
  {
    id: 59,
    author: "名無しさん",
    timeOffset: 12,
    content: "半年記念でmiumiuの財布プレゼントしてくれた🎁✨\n定期🅟さん神すぎて泣いた😭💕\nハッピーメールで出会えたの奇跡",
    avatarUrl: whiteHairIcon,
    likes: 62,
    replies: 9,
    imageUrl: miumiuWalletImage
  },
  {
    id: 60,
    author: "名無しさん",
    timeOffset: 14,
    content: ">>59\nmiumiu！！！羨ましすぎる😳💕\n私もブランド物欲しい〜",
    avatarUrl: animeIcon,
    likes: 14,
    replies: 0
  },
  {
    id: 61,
    author: "名無しさん",
    timeOffset: 16,
    content: ">>45\nDiorのバッグとかやばすぎ\n定期🅟さん作るのが目標になった🎯",
    avatarUrl: purpleHairIcon,
    likes: 11,
    replies: 0
  },
  {
    id: 62,
    author: "名無しさん",
    timeOffset: 18,
    content: "現金派の🅟さんも好き\nペイペイと違って実感湧くんだよねｗ\nワクワクで色んな人と会えて楽しい💰",
    avatarUrl: blondeCatEarsIcon,
    likes: 16,
    replies: 1
  },
  {
    id: 63,
    author: "名無しさん",
    timeOffset: 20,
    content: "みんなのアドバイスめっちゃ参考になる🙏✨\nこのスレ保存した！\nこれから頑張ります💪",
    avatarUrl: catIcon,
    likes: 27,
    replies: 0
  },
  {
    id: 64,
    author: "おすすめユーザー",
    timeOffset: 22,
    content: "━━━━━━━━━━━━━━━━\n📚 このスレの攻略まとめ 📚\n━━━━━━━━━━━━━━━━\n\nみんなの体験談見てわかったこと👇\n\n【稼げるアプリランキング】\n🥇 ワクワクメール\n   https://stella-nova.click/8WZ1\n🥈 ハッピーメール\n   https://stella-nova.click/118we\n\n⚠️ 重要：両方登録が基本！\n片方だけだとチャンス半減します\n   \n【みんなの平均収入】\n🍵：1.5〜2.5万\n🍽：2〜3.5万\n🍽🎁：5万以上も！\n\n【成功の秘訣】\n✅ プロフィールは盛りすぎない\n✅ 返信は1〜2時間後が理想\n✅ 初回は昼カフェで短時間\n✅ お礼メッセージは必須\n✅ 清潔感が何より大事\n\n【NG行動】\n❌ ドタキャン\n❌ スマホばかり見る\n❌ 愚痴や不満を言う\n❌ お金の話ばかり\n\n【初心者へのアドバイス】\nまずはワクワク＆ハピメ両方登録！\n🍵から始めて慣れたら🍽へ\n定期🅟さん作れば月15〜20安定💰\n\nこのスレで勉強して、\nみんなで稼いでいきましょ〜！🎉✨",
    isSponsored: true,
    avatarUrl: blackHairPhoneIcon,
    likes: 142,
    replies: 23,
    imageUrl: papaAppsImage
  },
];

// 日時を生成する関数
const generatePostDate = (offsetMinutes: number): string => {
  const now = new Date();
  const postTime = new Date(now.getTime() + offsetMinutes * 60 * 1000);
  return `${postTime.getFullYear()}/${String(postTime.getMonth() + 1).padStart(2, '0')}/${String(postTime.getDate()).padStart(2, '0')} ${String(postTime.getHours()).padStart(2, '0')}:${String(postTime.getMinutes()).padStart(2, '0')}:${String(postTime.getSeconds()).padStart(2, '0')}`;
};

// テキスト内のURLをリンクに変換する関数
const linkifyText = (text: string) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);
  
  return parts.map((part, index) => {
    if (part.match(urlPattern)) {
      return (
        <a 
          key={index} 
          href={part} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

interface ThreadViewProps {
  threadId: number;
  onBack: () => void;
}

export function ThreadView({ threadId, onBack }: ThreadViewProps) {
  // 初回レンダリング時に日時を生成
  const [posts, setPosts] = useState<Post[]>(() => {
    return mockPostsData.map(post => ({
      ...post,
      date: generatePostDate(post.timeOffset || 0)
    }));
  });
  const [commentText, setCommentText] = useState("");
  const [nameText, setNameText] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  // ランダムなアイコンを選択する関数
  const getRandomAvatar = () => {
    const avatars = [
      mouseIcon,
      animeIcon,
      purpleHairIcon,
      whiteHairIcon,
      catEarsIcon,
      blondeCatEarsIcon,
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const handleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    const isLiked = likedPosts.has(postId);
    
    if (isLiked) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: (post.likes || 0) + (isLiked ? -1 : 1)
        };
      }
      return post;
    }));
  };

  const handleReply = (postId: number) => {
    setCommentText(`>>${postId}\n`);
    // フォームまでスクロール
    const formElement = document.querySelector('#comment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = () => {
    if (!commentText.trim()) return;
    
    setIsPosting(true);
    
    // 投稿アニメーション用の遅延
    setTimeout(() => {
      const now = new Date();
      // リアルタイムから-90分～-150分のランダムな時間を引く
      const minutesAgo = Math.floor(Math.random() * 60) + 90; // 90-150分前
      const postTime = new Date(now.getTime() - minutesAgo * 60 * 1000);
      const dateStr = `${postTime.getFullYear()}/${String(postTime.getMonth() + 1).padStart(2, '0')}/${String(postTime.getDate()).padStart(2, '0')} ${String(postTime.getHours()).padStart(2, '0')}:${String(postTime.getMinutes()).padStart(2, '0')}:${String(postTime.getSeconds()).padStart(2, '0')}`;
      
      const newPost: Post = {
        id: posts.length + 1,
        author: nameText.trim() || "名無しさん",
        date: dateStr,
        content: commentText,
        avatarUrl: getRandomAvatar(),
        likes: 0,
        replies: 0
      };
      
      setPosts([...posts, newPost]);
      setCommentText("");
      setNameText("");
      setIsPosting(false);
      setShowSuccessMessage(true);
      
      // 成功メッセージを3秒後に非表示
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-purple-500 hover:text-purple-600 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all border border-purple-200/50"
      >
        <ArrowLeft className="w-4 h-4" />
        スレッド一覧に戻る
      </button>
      
      <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg border border-purple-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 px-6 py-4">
          <h2 className="text-white">【公式】PAPA COMMUNITY へようこそ！✨</h2>
        </div>
        
        <div className="divide-y divide-purple-100/50">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className={`p-6 transition-all ${
                post.isSponsored 
                  ? 'bg-gradient-to-br from-yellow-50/80 via-pink-50/80 to-purple-50/80 border-l-4 border-r-4 border-yellow-300/60 relative overflow-hidden' 
                  : 'hover:bg-purple-50/20'
              }`}
            >
              {post.isSponsored && (
                <>
                  <div className="absolute top-2 right-2">
                    <div className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      おすすめ投稿
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 via-pink-100/20 to-purple-100/20 pointer-events-none"></div>
                </>
              )}
              
              <div className="flex items-start gap-3 relative">
                <div className={`${
                  post.isSponsored 
                    ? 'bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 shadow-lg ring-2 ring-yellow-200' 
                    : post.isAdmin 
                    ? 'bg-gradient-to-br from-yellow-300 to-orange-300' 
                    : 'bg-gradient-to-br from-purple-300 to-pink-300'
                } p-1 rounded-xl shadow-sm flex-shrink-0 w-12 h-12 overflow-hidden`}>
                  <img 
                    src={post.avatarUrl} 
                    alt={post.author}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1 ${
                      post.isSponsored 
                        ? 'bg-gradient-to-r from-yellow-200 to-pink-200 text-purple-700' 
                        : 'bg-purple-100/70 text-purple-600'
                    } px-2 py-0.5 rounded-full text-sm`}>
                      #{post.id}
                    </span>
                    <span className={`${
                      post.isSponsored 
                        ? 'text-purple-700' 
                        : post.isAdmin 
                        ? 'text-orange-600' 
                        : 'text-purple-600'
                    }`}>
                      {post.author}
                    </span>
                    {post.isAdmin && (
                      <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-white px-2 py-0.5 rounded-full text-sm shadow-sm">
                        管理者
                      </span>
                    )}
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <div className={`${
                    post.isSponsored ? 'text-gray-800' : 'text-gray-700'
                  } whitespace-pre-line leading-relaxed`}>
                    {linkifyText(post.content)}
                  </div>
                  
                  {/* 画像表示 */}
                  {post.imageUrl && (
                    <div className="mt-4">
                      <img 
                        src={post.imageUrl} 
                        alt="投稿画像" 
                        className="rounded-2xl max-w-full h-auto shadow-md border border-purple-100/50"
                      />
                    </div>
                  )}
                  
                  {/* いいねとリプライボタン */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                        likedPosts.has(post.id)
                          ? 'bg-pink-100 text-pink-600'
                          : 'bg-gray-100/70 text-gray-500 hover:bg-pink-50 hover:text-pink-500'
                      }`}
                    >
                      <Heart 
                        className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-pink-600' : ''}`} 
                      />
                      <span className="text-sm">{post.likes || 0}</span>
                    </button>
                    
                    <button
                      onClick={() => handleReply(post.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100/70 text-gray-500 hover:bg-purple-50 hover:text-purple-500 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.replies || 0}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div id="comment-form" className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg border border-purple-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-200/60 via-purple-200/60 to-blue-200/60 px-6 py-3 border-b border-purple-200/50">
          <h3 className="text-gray-700">コメントを書く ✏️</h3>
        </div>
        
        <div className="p-6 space-y-4">
          {showSuccessMessage && (
            <div className="bg-gradient-to-r from-green-50/80 to-blue-50/80 border border-green-200/50 rounded-2xl p-3 text-center animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="text-green-700 text-sm">✅ 投稿ありがとうございました！スレッドに追加されました 🎉</p>
            </div>
          )}
          
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 p-1 rounded-xl shadow-sm flex-shrink-0 w-12 h-12 overflow-hidden">
              <img 
                src={mouseIcon} 
                alt="あなた"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-3">
              <input
                type="text"
                value={nameText}
                onChange={(e) => setNameText(e.target.value)}
                placeholder="名前（省略可）"
                className="w-full px-4 py-2 bg-white/70 border-2 border-purple-200/50 rounded-xl focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-200/30 transition-all text-gray-700 placeholder:text-gray-400"
              />
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="コメントを入力してください..."
                className="w-full h-32 px-4 py-3 bg-white/70 border-2 border-purple-200/50 rounded-2xl resize-none focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-200/30 transition-all text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-end">
            <button
              onClick={handleSubmit}
              disabled={!commentText.trim() || isPosting}
              className={`flex items-center gap-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white px-6 py-2.5 rounded-full shadow-md transition-all ${
                !commentText.trim() || isPosting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg hover:scale-105'
              }`}
            >
              {isPosting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  投稿中...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  投稿する
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
