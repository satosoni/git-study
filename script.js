function recommend(mood) {
    const placeholder = document.getElementById('placeholder');
    const resultCard = document.getElementById('result-card');
    const resultText = document.getElementById('result-text');
    const body = document.body;

    // 一旦、過去につけた背景色クラスをきれいに消す
    body.className = '';

    let message = '';

    // 選ばれた気分によって、背景色とおすすめメッセージを変える
    if (mood === 'relax') {
        body.classList.add('bg-relax');
        message = 'お気に入りの温かい飲み物を淹れて、好きな音楽を聴きながら読書やストレッチをするのがおすすめです。スマホを置いて、静かな時間を5分だけ楽しんでみてください。🍵✨';
    } else if (mood === 'active') {
        body.classList.add('bg-active');
        message = '素晴らしいエネルギーです！今こそ、ずっと後回しにしていたタスクを一気に片付けたり、筋トレや新しい勉強を始める大チャンスです。今なら何でもできる！🔥💪';
    } else if (mood === 'lazy') {
        body.classList.add('bg-lazy');
        message = '今日もお疲れ様でした。今は充電の時間です。布団やベッドにダイブして、お気に入りのアニメを見たり、ひたすらゴロゴロしましょう。何もしない贅沢を全力で楽しんで！🛌💤';
    } else if (mood === 'refresh') {
        body.classList.add('bg-refresh');
        message = '少しだけ窓を開けて深呼吸をしてみましょう。外の空気を吸いながら近所を5分だけ散歩したり、アップテンポな曲を聴きながら軽いストレッチをするのがおすすめです！🍃🚶';
    }

    // プレースホルダー（案内）を隠して、結果カードを表示する
    if (placeholder) {
        placeholder.classList.add('hidden');
    }
    resultText.innerHTML = message;
    resultCard.classList.remove('hidden');
}