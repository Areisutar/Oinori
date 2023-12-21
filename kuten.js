function henkou(){
    var emoji = new Array("😄","😴","💓","😓");
    var textMsg = document.getElementById("mild");
    var maru = "。";
    var ten  = "、";
    var newText = "";
    var sentences = textMsg.value.split(/([。、])/);

    // 各文の後ろにランダムな絵文字を挿入
    for (var i = 0; i < sentences.length; i++) {
        if (i % 2 === 0) {
            sentences[i] += emoji[Math.floor(Math.random() * 4)];
        }
    }
    newText = sentences.join("");
    console.log(newText);
}