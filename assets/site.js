/* ════════════════════════════════════════════
   NUVC — shared scripts for every page
   Load with: <script src="(../)assets/site.js" defer></script>
   - SVG icon sprite      <svg class="icon"><use href="#i-instagram"/></svg>
   - ToS modal           openTos() / closeTos()
   - Copy email          copyEmail(btn, email)
   - Scroll-reveal       .reveal → .visible
════════════════════════════════════════════ */

/* ── Icon sprite ── */
document.body.insertAdjacentHTML('afterbegin',
  '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
    '<symbol id="i-instagram" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></symbol>' +
    '<symbol id="i-copy" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></symbol>' +
    '<symbol id="i-users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>' +
    '<symbol id="i-pin" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></symbol>' +
  '</svg>');

/* ── ToS modal ── */
document.body.insertAdjacentHTML('beforeend',
  '<div id="tos-overlay" class="tos-overlay" onclick="closeTos()">' +
  '<div class="tos-modal" role="dialog" aria-modal="true" aria-labelledby="tos-title" onclick="event.stopPropagation()">' +
  '<button class="tos-close" onclick="closeTos()" aria-label="閉じる">&times;</button>' +
  '<h2 class="tos-title" id="tos-title">利用規約</h2>' +
  '<div class="tos-body">' +
  '<p class="tos-updated">最終更新日：2025年4月1日</p>' +
  '<h3>第1条（適用）</h3><p>本利用規約（以下「本規約」）は、名古屋大学体育会バレーボール部（以下「当部」）が運営するウェブサイト（以下「本サイト」）の利用条件を定めるものです。本サイトを閲覧・利用するすべての方（以下「利用者」）は、本規約に同意したものとみなします。</p>' +
  '<h3>第2条（知的財産権）</h3><p>本サイトに掲載されているテキスト・画像・映像・デザイン・ロゴ等のコンテンツの著作権は、当部または正当な権利を有する第三者に帰属します。利用者は、当部の事前の書面による許可なく、これらのコンテンツを複製・転載・改変・再配布することはできません。</p>' +
  '<h3>第3条（禁止事項）</h3><p>利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。</p><ul><li>法令または公序良俗に違反する行為</li><li>当部または第三者の権利・利益を侵害する行為</li><li>本サイトのサーバーまたはネットワークに過大な負荷をかける行為</li><li>本サイトの運営を妨害するおそれのある行為</li><li>その他、当部が不適切と判断する行為</li></ul>' +
  '<h3>第4条（外部リンク）</h3><p>本サイトには外部サイトへのリンクが含まれる場合があります。当部はリンク先の内容・運営について一切の責任を負いません。外部サイトの利用は利用者自身の判断と責任において行ってください。</p>' +
  '<h3>第5条（免責事項）</h3><p>当部は、本サイトに掲載する情報の正確性・完全性・有用性について、可能な限り正確な情報を提供するよう努めますが、その内容を保証するものではありません。本サイトの利用により生じた損害について、当部は一切の責任を負いかねます。また、予告なく情報を変更・削除することがあります。</p>' +
  '<h3>第6条（プライバシー）</h3><p>当部は、本サイトを通じて取得した個人情報を、お問い合わせへの回答・活動案内の送付など必要な範囲でのみ利用し、法令に基づく場合を除き第三者に提供しません。本サイトはアクセス解析のためCookieを使用することがあります。</p>' +
  '<h3>第7条（写真・動画の掲載）</h3><p>本サイトに掲載する部員・関係者の写真・動画は、本人の同意を得た上で使用しています。掲載内容に関するご要望は、当部の公式SNSまたは顧問教員を通じてお問い合わせください。</p>' +
  '<h3>第8条（規約の変更）</h3><p>当部は、必要に応じて本規約を変更することがあります。変更後の規約は本サイトへの掲載をもって効力を生じるものとし、利用者はこれに同意したものとみなします。</p>' +
  '<h3>第9条（準拠法・管轄）</h3><p>本規約の解釈および適用は日本法に準拠するものとし、本サイトに関する紛争については名古屋地方裁判所を第一審の専属的合意管轄裁判所とします。</p>' +
  '<h3>お問い合わせ</h3><p>本規約に関するお問い合わせは、当部の公式SNSアカウントまたは顧問教員を通じてご連絡ください。</p>' +
  '</div></div></div>');

function openTos()  { document.getElementById('tos-overlay').classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeTos() { document.getElementById('tos-overlay').classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.getElementById('tos-overlay').classList.contains('open')) closeTos();
});

/* ── Copy email ── */
function copyEmail(btn, email) {
  navigator.clipboard.writeText(email).then(function() {
    btn.classList.add('copied');
    btn.title = 'コピー済み！';
    setTimeout(function() { btn.classList.remove('copied'); btn.title = 'コピー'; }, 1800);
  });
}

/* ── Scroll-reveal ── */
(function() {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el) { observer.observe(el); });
})();
