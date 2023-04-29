const story = `あるとき、山に囲まれた小さな村に住んでいた女の子の名前はゆいでした。彼女の家族は野菜を育て、鶏を飼っている農家でした。ゆいは両親の手伝いをするのが大好きで、毎朝早起きして鶏に餌をやったり、植物に水をやったりしていました。

ある日、ゆいが庭で働いていると、羽が折れた小さな鳥を見つけました。彼女はその鳥が気の毒で、看病することに決めました。ゆいは鳥を家に連れて行き、小さなベッドを作ってあげました。彼女は餌や水を与え、鳥が早く回復することを願いました。

数日が経ち、鳥の翼は治り始めました。ゆいは鳥が毎日回復しているのを見て、とても嬉しかったです。彼女は鳥に「はな」と名付け、ペットとして飼うことにしました。ゆいの両親は、娘が鳥の世話をする姿を見て、喜んで許可しました。

それ以来、ゆいとはなは親友になりました。彼らは一緒にどこにでも行き、ゆいが農場で働いていると、はなは彼女の肩に乗っていました。ゆいは、彼女の人生に入ってきた小さな鳥に感謝しており、優しさと思いやりの価値を教えてくれたことに感謝していました。`;

const title = "ゆいとはなの友情物語";

export default function StoriesPage() {
  return (
    <div className="rounded-md border border-gray-6 bg-gray-1 flex">
      <div className="p-16 border-r border-gray-6">
        <article className="w-[60ch] space-y-6 text-lg">
          <h1 className="text-4xl mb-12">{title}</h1>
          {story.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </article>
      </div>
    </div>
  );
}
