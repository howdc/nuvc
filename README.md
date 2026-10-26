# 名古屋大学バレーボール部 公式サイト（NUVC）

GitHub Pages で公開している静的サイトです。HTML / CSS / JavaScript のみで、ビルドやインストールは不要です。
ファイルを編集して `main` ブランチに保存（コミット）すると、1〜2分でサイトに反映されます。

公開URL：https://howdc.github.io/nuvc/

---

## 担当者の引き継ぎについて

- **前任者のメールアドレス・パスワードは不要です。** 各自の GitHub アカウントで編集します。
- 新しい担当者は GitHub アカウントを作成し、現担当者（またはオーナー）にリポジトリの **Settings → Collaborators** から招待してもらってください。
- 卒業などで抜ける前に、必ず次の担当者を招待しておくこと。オーナーが1人だけの状態は避けてください。
- パスワードやアクセストークンを他人と共有しないでください。

---

## 毎月の活動計画（練習予定表）の更新方法

活動計画ページは `plan/index.html` です。パソコンに何もインストールせず、GitHub のウェブ画面だけで更新できます。

### 1. 画像をアップロードする

1. GitHub でリポジトリを開き、`images` フォルダに移動
2. **Add file → Upload files** で予定表の画像をアップロード
3. ファイル名は次のルールに合わせる（アップロード前にパソコン側で名前を変更しておく）

| 対象 | ファイル名の例 |
|---|---|
| 男子部 2026年12月 | `202612m.jpg` |
| 女子部 2026年12月 | `202612w.jpg` |

※ `年4桁 + 月2桁 + m（男子）/ w（女子）`。拡張子は `.jpg` を推奨。

4. 下の **Commit changes** を押して保存

### 2. `plan/index.html` を編集する

`plan/index.html` を開き、右上の鉛筆アイコン（Edit）を押します。変更は次の3か所です。
以下は「男子部 2026年12月」を追加する例です。

#### (a) 月の予定ブロックを追加

`<!-- ════════════════ 男子部 ════════════════ -->` の下、一番上の `month-block` の **直前** に以下を貼り付けます。

```html
      <div class="month-block" id="men-2612">
        <div class="month-header"><span class="month-tag month-tag-men">12月</span><div class="month-rule"></div></div>
        <div class="schedule-img-wrap"><img src="../images/202612m.jpg" alt="男子部 2026年12月 活動計画" /></div>
      </div>

```

#### (b) 古い月を折りたたむ

最新の **2か月分だけ** を表示し、それより古い月は「過去の予定を見る」に隠します。
3か月目になったブロックの `class="month-block"` を `class="month-block folded"` に変更します。

```html
<!-- 変更前 -->
<div class="month-block" id="men-2610">
<!-- 変更後 -->
<div class="month-block folded" id="men-2610">
```

#### (c) サイドバーのリンクを追加

ファイル上部の `<!-- Men sidebar -->` の中、`2026` の見出しの直下にリンクを追加します。

```html
      <button class="sidebar-link is-men" onclick="jumpTo('men-2612')">12月</button>
```

あわせて、(b) で折りたたんだ月のリンクに `folded-month` と `id` を付けます。

```html
<!-- 変更前 -->
<button class="sidebar-link is-men" onclick="jumpTo('men-2610')">10月</button>
<!-- 変更後 -->
<button class="sidebar-link is-men folded-month" id="sl-men-2610" onclick="jumpTo('men-2610')">10月</button>
```

#### 年が変わったとき

1月を追加するときは、サイドバーに新しい年の見出しを追加し、その下にリンクを置きます。

```html
      <div class="sidebar-year">2027</div>
      <button class="sidebar-link is-men" onclick="jumpTo('men-2701')">1月</button>
      <div class="sidebar-year">2026</div>
      ...
```

ページ上部の `MEN'S TEAM · 2026` の年も更新してください。

#### 女子部の場合

`<!-- ════════════════ 女子部 ════════════════ -->` と `<!-- Women sidebar -->` の中で同じ作業を行います。
`men` → `w`、`is-men` → `is-women`、`month-tag-men` → `month-tag-women` に置き換えてください。

### 3. 保存して確認

1. 右上の **Commit changes...** を押して保存
2. 1〜2分後に公開URLの活動計画ページを開き、表示を確認（反映されない場合はブラウザを再読み込み）

---

## ファイル構成

| パス | 内容 |
|---|---|
| `index.html` | トップページ |
| `plan/index.html` | 活動計画（男子部 / 女子部） |
| `result/index.html` | 試合結果 |
| `member/index.html` | 部員名簿 |
| `gallery/index.html` | 写真ギャラリー |
| `other/index.html` | その他（部の規則・リンクなど） |
| `shinkan/` | 新歓ページ（男子 / 女子） |
| `images/` | 予定表画像・写真・アイコン |

デザインや構造の詳細は `CLAUDE.md` に記載しています（Claude Code などの AI ツールを使う場合にも参照されます）。

## 注意事項

- メールアドレスに `mailto:` リンクは使わない（コピー用ボタンで表示する）
- `htpasswd.txt` などの機密情報を新たに追加しない
- 分からないときは、変更前に GitHub の **History** から過去の状態に戻せるので安心して編集してください
